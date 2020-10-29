// package: temporal.api.filter.v1
// file: temporal/api/filter/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";

export class WorkflowExecutionFilter extends jspb.Message {
  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionFilter): WorkflowExecutionFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionFilter;
  static deserializeBinaryFromReader(message: WorkflowExecutionFilter, reader: jspb.BinaryReader): WorkflowExecutionFilter;
}

export namespace WorkflowExecutionFilter {
  export type AsObject = {
    workflowId: string,
    runId: string,
  }
}

export class WorkflowTypeFilter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTypeFilter): WorkflowTypeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTypeFilter;
  static deserializeBinaryFromReader(message: WorkflowTypeFilter, reader: jspb.BinaryReader): WorkflowTypeFilter;
}

export namespace WorkflowTypeFilter {
  export type AsObject = {
    name: string,
  }
}

export class StartTimeFilter extends jspb.Message {
  hasEarliestTime(): boolean;
  clearEarliestTime(): void;
  getEarliestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEarliestTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLatestTime(): boolean;
  clearLatestTime(): void;
  getLatestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLatestTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTimeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StartTimeFilter): StartTimeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTimeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTimeFilter;
  static deserializeBinaryFromReader(message: StartTimeFilter, reader: jspb.BinaryReader): StartTimeFilter;
}

export namespace StartTimeFilter {
  export type AsObject = {
    earliestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    latestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StatusFilter extends jspb.Message {
  getStatus(): temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap];
  setStatus(value: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StatusFilter): StatusFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusFilter;
  static deserializeBinaryFromReader(message: StatusFilter, reader: jspb.BinaryReader): StatusFilter;
}

export namespace StatusFilter {
  export type AsObject = {
    status: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap],
  }
}

