import { WorkflowServiceClient } from "./temporal-client/temporal/api/workflowservice/v1/service_grpc_pb";
import * as grpc from "grpc";
import * as pc from "./promisify-client";
import {
  activityOptions,
  ActivityTask,
  buildPayloads,
  Context,
} from "./activity";
import {
  PollActivityTaskQueueRequest,
  RespondActivityTaskFailedByIdRequest,
  RespondActivityTaskFailedRequest,
} from "./temporal-client/temporal/api/workflowservice/v1/request_response_pb";
import {
  TaskQueue,
  TaskQueueMetadata,
} from "./temporal-client/temporal/api/taskqueue/v1/message_pb";
import { TaskQueueKind } from "./temporal-client/temporal/api/enums/v1/task_queue_pb";

export interface ActivitiesOptions {
  namespace?: string;
  taskQueue: string;
}
interface store {
  handler: (ctx: Context, ...args: any) => Promise<any>;
  activityName: string;
}

export class Activities {
  private _client: WorkflowServiceClient;
  private taskQueue: string;
  private namespace: string;
  private stores: Map<string, store> = new Map();
  constructor(
    { namespace = "default", taskQueue }: ActivitiesOptions,
    credentials = grpc.credentials.createInsecure()
  ) {
    this.taskQueue = taskQueue;
    this.namespace = namespace;
    this._client = new WorkflowServiceClient(
      "localhost:7233",
      credentials,
      null
    );
  }
  register(f: (ctx: Context, ...args: any) => any) {
    this.stores.set(f.name.toLowerCase(), { activityName: f.name, handler: f });
  }
  registeWithOptions(
    f: (ctx: Context, ...args: any) => any,
    options: activityOptions
  ) {
    this.stores.set(options.name.toLowerCase(), {
      activityName: options.name,
      handler: f,
    });
  }
  start() {
    const request = new PollActivityTaskQueueRequest();
    const queue = new TaskQueue();
    const taskMetadata = new TaskQueueMetadata();
    queue.setName(this.taskQueue);
    queue.setKind(TaskQueueKind.TASK_QUEUE_KIND_NORMAL);
    request.setNamespace(this.namespace);

    request.setIdentity("node-js-sdk");
    request.setTaskQueue(queue);
    request.setTaskQueueMetadata(taskMetadata);
    console.log(`listening:${this.namespace}:${this.taskQueue}`);
    new Promise(async (resolve, reject) => {
      while (true) {
        const pollActivityResponse = await pc.pollActivityTaskQueue({
          client: this._client,
          param: request,
          options: { deadline: Date.now() + 2000000 },
        });
        console.log(pollActivityResponse.getActivityType().getName());
        const store = this.stores.get(
          pollActivityResponse.getActivityType().getName().toLowerCase()
        );
        if (!store) {
          console.log(`not implemented: Activity do not exist`);
          continue;
        }

        const activityTask = new ActivityTask();
        activityTask.InitFromPollTaskResponse(pollActivityResponse);
        if (activityTask.isValid() == false) {
          resolve();
          return;
        }
        var inputs = activityTask.inputs;
        console.log(`inputs:${JSON.stringify(inputs)}`);
        const ctx: Context = activityTask.buildContext();
        try {
          console.log(`executing_start:${store.activityName}`);
          const result = await store.handler(ctx, ...inputs);
          console.log(
            `executing_end:${store.activityName}:${JSON.stringify(result)}`
          );

          const payloads = buildPayloads(result);
          const response = activityTask.buildResponceComplete();
          response.setResult(payloads);
          this._client.respondActivityTaskCompletedById(
            response,
            (err, value) => {
              if (err) {
                reject(err);
              } else {
                resolve(value);
              }
            }
          );
        } catch (e) {
          console.log(e);
          console.log("Not implemented");
        }
      }
    });
  }
}
