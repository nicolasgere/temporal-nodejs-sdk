import {
  PollActivityTaskQueueRequest,
  PollActivityTaskQueueResponse,
} from "./temporal-client/temporal/api/workflowservice/v1/request_response_pb";
import { WorkflowServiceClient } from "./temporal-client/temporal/api/workflowservice/v1/service_grpc_pb";

export function pollActivityTaskQueue({
  client,
  param,
  options,
}: {
  client: WorkflowServiceClient;
  param: PollActivityTaskQueueRequest;
  options: any;
}): Promise<PollActivityTaskQueueResponse> {
  return new Promise((resolve, reject) => {
    client.pollActivityTaskQueue(param, options, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
}
