// package: temporal.api.query.v1
// file: temporal/api/query/v1/message.proto

import * as jspb from "google-protobuf";
import * as temporal_api_enums_v1_query_pb from "../../../../temporal/api/enums/v1/query_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";

export class WorkflowQuery extends jspb.Message {
  getQueryType(): string;
  setQueryType(value: string): void;

  hasQueryArgs(): boolean;
  clearQueryArgs(): void;
  getQueryArgs(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setQueryArgs(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowQuery.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowQuery): WorkflowQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowQuery;
  static deserializeBinaryFromReader(message: WorkflowQuery, reader: jspb.BinaryReader): WorkflowQuery;
}

export namespace WorkflowQuery {
  export type AsObject = {
    queryType: string,
    queryArgs?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class WorkflowQueryResult extends jspb.Message {
  getResultType(): temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap];
  setResultType(value: temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap]): void;

  hasAnswer(): boolean;
  clearAnswer(): void;
  getAnswer(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setAnswer(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowQueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowQueryResult): WorkflowQueryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowQueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowQueryResult;
  static deserializeBinaryFromReader(message: WorkflowQueryResult, reader: jspb.BinaryReader): WorkflowQueryResult;
}

export namespace WorkflowQueryResult {
  export type AsObject = {
    resultType: temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap],
    answer?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    errorMessage: string,
  }
}

export class QueryRejected extends jspb.Message {
  getStatus(): temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap];
  setStatus(value: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRejected.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRejected): QueryRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRejected;
  static deserializeBinaryFromReader(message: QueryRejected, reader: jspb.BinaryReader): QueryRejected;
}

export namespace QueryRejected {
  export type AsObject = {
    status: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap],
  }
}

