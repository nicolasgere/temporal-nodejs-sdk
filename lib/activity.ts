import {
  Payload,
  Payloads,
} from "./temporal-client/temporal/api/common/v1/message_pb";
import {
  PollActivityTaskQueueResponse,
  RespondActivityTaskCompletedByIdRequest,
} from "./temporal-client/temporal/api/workflowservice/v1/request_response_pb";
import { TextDecoder, TextEncoder } from "util";

export class ActivityTask {
  private _task: PollActivityTaskQueueResponse.AsObject;
  public inputs: Array<any> = [];
  constructor() {}
  public buildResponceComplete(): RespondActivityTaskCompletedByIdRequest {
    const response = new RespondActivityTaskCompletedByIdRequest();
    response.setActivityId(this._task.activityId);
    response.setNamespace(this._task.workflowNamespace);
    response.setIdentity(this._task.activityType.name);
    response.setRunId(this._task.workflowExecution.runId);
    response.setWorkflowId(this._task.workflowExecution.workflowId);
    return response;
  }

  public buildContext(): Context {
    const ctx = new Context();
    ctx.activityId = this._task.activityId;
    return ctx;
  }
  private _extractInputs() {
    this._task.input.payloadsList.forEach((payload) => {
      var encoder = new TextDecoder("utf-8").decode(
        payload.metadataMap[0][1] as Uint8Array
      );
      switch (encoder) {
        case "json/plain":
          const dataString = Buffer.from(
            payload.data as string,
            "base64"
          ).toString("utf-8");
          const input = JSON.parse(dataString);
          this.inputs.push(input);
          break;
        default:
          throw `error: unknow encoder ${encoder}`;
      }
    });
  }
  InitFromPollTaskResponse(task: PollActivityTaskQueueResponse) {
    this._task = task.toObject();
    this._extractInputs();
  }
  public isValid(): boolean {
    return !!this._task.activityId;
  }
}

export function buildPayloads(result: any): Payloads {
  const payloads = new Payloads();
  const encoded = new TextEncoder().encode("json/plain");
  const resultBase64 = Buffer.from(JSON.stringify(result)).toString("base64");
  const payload = new Payload();
  payload.setData(resultBase64);
  const map = payload.getMetadataMap();
  map.set("encoding", encoded);

  payloads.setPayloadsList([payload]);
  return payloads;
}

export interface activityOptions {
  name?: string;
}
export class Context {
  public activityId? = "test";
}
