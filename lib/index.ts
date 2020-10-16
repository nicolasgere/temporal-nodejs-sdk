import * as service from "./temporal-client/temporal/api/workflowservice/v1/service_grpc_pb";
import * as grpc from "grpc";

// console.log(new service.WorkflowServiceClient());

const client = new service.WorkflowServiceClient(
  "localhost:12323",
  grpc.credentials.createInsecure(),
  null
);
console.log(client);
