// package: temporal.api.namespace.v1
// file: temporal/api/namespace/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_namespace_pb from "../../../../temporal/api/enums/v1/namespace_pb";

export class NamespaceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): temporal_api_enums_v1_namespace_pb.NamespaceStateMap[keyof temporal_api_enums_v1_namespace_pb.NamespaceStateMap];
  setState(value: temporal_api_enums_v1_namespace_pb.NamespaceStateMap[keyof temporal_api_enums_v1_namespace_pb.NamespaceStateMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOwnerEmail(): string;
  setOwnerEmail(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceInfo): NamespaceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceInfo;
  static deserializeBinaryFromReader(message: NamespaceInfo, reader: jspb.BinaryReader): NamespaceInfo;
}

export namespace NamespaceInfo {
  export type AsObject = {
    name: string,
    state: temporal_api_enums_v1_namespace_pb.NamespaceStateMap[keyof temporal_api_enums_v1_namespace_pb.NamespaceStateMap],
    description: string,
    ownerEmail: string,
    dataMap: Array<[string, string]>,
    id: string,
  }
}

export class NamespaceConfig extends jspb.Message {
  hasWorkflowExecutionRetentionTtl(): boolean;
  clearWorkflowExecutionRetentionTtl(): void;
  getWorkflowExecutionRetentionTtl(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowExecutionRetentionTtl(value?: google_protobuf_duration_pb.Duration): void;

  hasBadBinaries(): boolean;
  clearBadBinaries(): void;
  getBadBinaries(): BadBinaries | undefined;
  setBadBinaries(value?: BadBinaries): void;

  getHistoryArchivalState(): temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
  setHistoryArchivalState(value: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap]): void;

  getHistoryArchivalUri(): string;
  setHistoryArchivalUri(value: string): void;

  getVisibilityArchivalState(): temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
  setVisibilityArchivalState(value: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap]): void;

  getVisibilityArchivalUri(): string;
  setVisibilityArchivalUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceConfig): NamespaceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceConfig;
  static deserializeBinaryFromReader(message: NamespaceConfig, reader: jspb.BinaryReader): NamespaceConfig;
}

export namespace NamespaceConfig {
  export type AsObject = {
    workflowExecutionRetentionTtl?: google_protobuf_duration_pb.Duration.AsObject,
    badBinaries?: BadBinaries.AsObject,
    historyArchivalState: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap],
    historyArchivalUri: string,
    visibilityArchivalState: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap],
    visibilityArchivalUri: string,
  }
}

export class BadBinaries extends jspb.Message {
  getBinariesMap(): jspb.Map<string, BadBinaryInfo>;
  clearBinariesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadBinaries.AsObject;
  static toObject(includeInstance: boolean, msg: BadBinaries): BadBinaries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BadBinaries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadBinaries;
  static deserializeBinaryFromReader(message: BadBinaries, reader: jspb.BinaryReader): BadBinaries;
}

export namespace BadBinaries {
  export type AsObject = {
    binariesMap: Array<[string, BadBinaryInfo.AsObject]>,
  }
}

export class BadBinaryInfo extends jspb.Message {
  getReason(): string;
  setReason(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadBinaryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BadBinaryInfo): BadBinaryInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BadBinaryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadBinaryInfo;
  static deserializeBinaryFromReader(message: BadBinaryInfo, reader: jspb.BinaryReader): BadBinaryInfo;
}

export namespace BadBinaryInfo {
  export type AsObject = {
    reason: string,
    operator: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateNamespaceInfo extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getOwnerEmail(): string;
  setOwnerEmail(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamespaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNamespaceInfo): UpdateNamespaceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNamespaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamespaceInfo;
  static deserializeBinaryFromReader(message: UpdateNamespaceInfo, reader: jspb.BinaryReader): UpdateNamespaceInfo;
}

export namespace UpdateNamespaceInfo {
  export type AsObject = {
    description: string,
    ownerEmail: string,
    dataMap: Array<[string, string]>,
  }
}

