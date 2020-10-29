// package: temporal.api.workflowservice.v1
// file: temporal/api/workflowservice/v1/request_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";
import * as temporal_api_enums_v1_namespace_pb from "../../../../temporal/api/enums/v1/namespace_pb";
import * as temporal_api_enums_v1_failed_cause_pb from "../../../../temporal/api/enums/v1/failed_cause_pb";
import * as temporal_api_enums_v1_common_pb from "../../../../temporal/api/enums/v1/common_pb";
import * as temporal_api_enums_v1_query_pb from "../../../../temporal/api/enums/v1/query_pb";
import * as temporal_api_enums_v1_task_queue_pb from "../../../../temporal/api/enums/v1/task_queue_pb";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";
import * as temporal_api_history_v1_message_pb from "../../../../temporal/api/history/v1/message_pb";
import * as temporal_api_workflow_v1_message_pb from "../../../../temporal/api/workflow/v1/message_pb";
import * as temporal_api_command_v1_message_pb from "../../../../temporal/api/command/v1/message_pb";
import * as temporal_api_failure_v1_message_pb from "../../../../temporal/api/failure/v1/message_pb";
import * as temporal_api_filter_v1_message_pb from "../../../../temporal/api/filter/v1/message_pb";
import * as temporal_api_namespace_v1_message_pb from "../../../../temporal/api/namespace/v1/message_pb";
import * as temporal_api_query_v1_message_pb from "../../../../temporal/api/query/v1/message_pb";
import * as temporal_api_replication_v1_message_pb from "../../../../temporal/api/replication/v1/message_pb";
import * as temporal_api_taskqueue_v1_message_pb from "../../../../temporal/api/taskqueue/v1/message_pb";
import * as temporal_api_version_v1_message_pb from "../../../../temporal/api/version/v1/message_pb";

export class RegisterNamespaceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOwnerEmail(): string;
  setOwnerEmail(value: string): void;

  hasWorkflowExecutionRetentionPeriod(): boolean;
  clearWorkflowExecutionRetentionPeriod(): void;
  getWorkflowExecutionRetentionPeriod():
    | google_protobuf_duration_pb.Duration
    | undefined;
  setWorkflowExecutionRetentionPeriod(
    value?: google_protobuf_duration_pb.Duration
  ): void;

  clearClustersList(): void;
  getClustersList(): Array<
    temporal_api_replication_v1_message_pb.ClusterReplicationConfig
  >;
  setClustersList(
    value: Array<
      temporal_api_replication_v1_message_pb.ClusterReplicationConfig
    >
  ): void;
  addClusters(
    value?: temporal_api_replication_v1_message_pb.ClusterReplicationConfig,
    index?: number
  ): temporal_api_replication_v1_message_pb.ClusterReplicationConfig;

  getActiveClusterName(): string;
  setActiveClusterName(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  getSecurityToken(): string;
  setSecurityToken(value: string): void;

  getIsGlobalNamespace(): boolean;
  setIsGlobalNamespace(value: boolean): void;

  getHistoryArchivalState(): temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
  setHistoryArchivalState(
    value: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap]
  ): void;

  getHistoryArchivalUri(): string;
  setHistoryArchivalUri(value: string): void;

  getVisibilityArchivalState(): temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
  setVisibilityArchivalState(
    value: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap]
  ): void;

  getVisibilityArchivalUri(): string;
  setVisibilityArchivalUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterNamespaceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RegisterNamespaceRequest
  ): RegisterNamespaceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RegisterNamespaceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RegisterNamespaceRequest;
  static deserializeBinaryFromReader(
    message: RegisterNamespaceRequest,
    reader: jspb.BinaryReader
  ): RegisterNamespaceRequest;
}

export namespace RegisterNamespaceRequest {
  export type AsObject = {
    name: string;
    description: string;
    ownerEmail: string;
    workflowExecutionRetentionPeriod?: google_protobuf_duration_pb.Duration.AsObject;
    clustersList: Array<
      temporal_api_replication_v1_message_pb.ClusterReplicationConfig.AsObject
    >;
    activeClusterName: string;
    dataMap: Array<[string, string]>;
    securityToken: string;
    isGlobalNamespace: boolean;
    historyArchivalState: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
    historyArchivalUri: string;
    visibilityArchivalState: temporal_api_enums_v1_namespace_pb.ArchivalStateMap[keyof temporal_api_enums_v1_namespace_pb.ArchivalStateMap];
    visibilityArchivalUri: string;
  };
}

export class RegisterNamespaceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterNamespaceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RegisterNamespaceResponse
  ): RegisterNamespaceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RegisterNamespaceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RegisterNamespaceResponse;
  static deserializeBinaryFromReader(
    message: RegisterNamespaceResponse,
    reader: jspb.BinaryReader
  ): RegisterNamespaceResponse;
}

export namespace RegisterNamespaceResponse {
  export type AsObject = {};
}

export class ListNamespacesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNamespacesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListNamespacesRequest
  ): ListNamespacesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListNamespacesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListNamespacesRequest;
  static deserializeBinaryFromReader(
    message: ListNamespacesRequest,
    reader: jspb.BinaryReader
  ): ListNamespacesRequest;
}

export namespace ListNamespacesRequest {
  export type AsObject = {
    pageSize: number;
    nextPageToken: Uint8Array | string;
  };
}

export class ListNamespacesResponse extends jspb.Message {
  clearNamespacesList(): void;
  getNamespacesList(): Array<DescribeNamespaceResponse>;
  setNamespacesList(value: Array<DescribeNamespaceResponse>): void;
  addNamespaces(
    value?: DescribeNamespaceResponse,
    index?: number
  ): DescribeNamespaceResponse;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNamespacesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListNamespacesResponse
  ): ListNamespacesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListNamespacesResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListNamespacesResponse;
  static deserializeBinaryFromReader(
    message: ListNamespacesResponse,
    reader: jspb.BinaryReader
  ): ListNamespacesResponse;
}

export namespace ListNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<DescribeNamespaceResponse.AsObject>;
    nextPageToken: Uint8Array | string;
  };
}

export class DescribeNamespaceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeNamespaceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeNamespaceRequest
  ): DescribeNamespaceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeNamespaceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DescribeNamespaceRequest;
  static deserializeBinaryFromReader(
    message: DescribeNamespaceRequest,
    reader: jspb.BinaryReader
  ): DescribeNamespaceRequest;
}

export namespace DescribeNamespaceRequest {
  export type AsObject = {
    name: string;
    id: string;
  };
}

export class DescribeNamespaceResponse extends jspb.Message {
  hasNamespaceInfo(): boolean;
  clearNamespaceInfo(): void;
  getNamespaceInfo():
    | temporal_api_namespace_v1_message_pb.NamespaceInfo
    | undefined;
  setNamespaceInfo(
    value?: temporal_api_namespace_v1_message_pb.NamespaceInfo
  ): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): temporal_api_namespace_v1_message_pb.NamespaceConfig | undefined;
  setConfig(value?: temporal_api_namespace_v1_message_pb.NamespaceConfig): void;

  hasReplicationConfig(): boolean;
  clearReplicationConfig(): void;
  getReplicationConfig():
    | temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
    | undefined;
  setReplicationConfig(
    value?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
  ): void;

  getFailoverVersion(): number;
  setFailoverVersion(value: number): void;

  getIsGlobalNamespace(): boolean;
  setIsGlobalNamespace(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeNamespaceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeNamespaceResponse
  ): DescribeNamespaceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeNamespaceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DescribeNamespaceResponse;
  static deserializeBinaryFromReader(
    message: DescribeNamespaceResponse,
    reader: jspb.BinaryReader
  ): DescribeNamespaceResponse;
}

export namespace DescribeNamespaceResponse {
  export type AsObject = {
    namespaceInfo?: temporal_api_namespace_v1_message_pb.NamespaceInfo.AsObject;
    config?: temporal_api_namespace_v1_message_pb.NamespaceConfig.AsObject;
    replicationConfig?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.AsObject;
    failoverVersion: number;
    isGlobalNamespace: boolean;
  };
}

export class UpdateNamespaceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasUpdateInfo(): boolean;
  clearUpdateInfo(): void;
  getUpdateInfo():
    | temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo
    | undefined;
  setUpdateInfo(
    value?: temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo
  ): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): temporal_api_namespace_v1_message_pb.NamespaceConfig | undefined;
  setConfig(value?: temporal_api_namespace_v1_message_pb.NamespaceConfig): void;

  hasReplicationConfig(): boolean;
  clearReplicationConfig(): void;
  getReplicationConfig():
    | temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
    | undefined;
  setReplicationConfig(
    value?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
  ): void;

  getSecurityToken(): string;
  setSecurityToken(value: string): void;

  getDeleteBadBinary(): string;
  setDeleteBadBinary(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamespaceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateNamespaceRequest
  ): UpdateNamespaceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UpdateNamespaceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamespaceRequest;
  static deserializeBinaryFromReader(
    message: UpdateNamespaceRequest,
    reader: jspb.BinaryReader
  ): UpdateNamespaceRequest;
}

export namespace UpdateNamespaceRequest {
  export type AsObject = {
    name: string;
    updateInfo?: temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo.AsObject;
    config?: temporal_api_namespace_v1_message_pb.NamespaceConfig.AsObject;
    replicationConfig?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.AsObject;
    securityToken: string;
    deleteBadBinary: string;
  };
}

export class UpdateNamespaceResponse extends jspb.Message {
  hasNamespaceInfo(): boolean;
  clearNamespaceInfo(): void;
  getNamespaceInfo():
    | temporal_api_namespace_v1_message_pb.NamespaceInfo
    | undefined;
  setNamespaceInfo(
    value?: temporal_api_namespace_v1_message_pb.NamespaceInfo
  ): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): temporal_api_namespace_v1_message_pb.NamespaceConfig | undefined;
  setConfig(value?: temporal_api_namespace_v1_message_pb.NamespaceConfig): void;

  hasReplicationConfig(): boolean;
  clearReplicationConfig(): void;
  getReplicationConfig():
    | temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
    | undefined;
  setReplicationConfig(
    value?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig
  ): void;

  getFailoverVersion(): number;
  setFailoverVersion(value: number): void;

  getIsGlobalNamespace(): boolean;
  setIsGlobalNamespace(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamespaceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateNamespaceResponse
  ): UpdateNamespaceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UpdateNamespaceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamespaceResponse;
  static deserializeBinaryFromReader(
    message: UpdateNamespaceResponse,
    reader: jspb.BinaryReader
  ): UpdateNamespaceResponse;
}

export namespace UpdateNamespaceResponse {
  export type AsObject = {
    namespaceInfo?: temporal_api_namespace_v1_message_pb.NamespaceInfo.AsObject;
    config?: temporal_api_namespace_v1_message_pb.NamespaceConfig.AsObject;
    replicationConfig?: temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.AsObject;
    failoverVersion: number;
    isGlobalNamespace: boolean;
  };
}

export class DeprecateNamespaceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSecurityToken(): string;
  setSecurityToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeprecateNamespaceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeprecateNamespaceRequest
  ): DeprecateNamespaceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DeprecateNamespaceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeprecateNamespaceRequest;
  static deserializeBinaryFromReader(
    message: DeprecateNamespaceRequest,
    reader: jspb.BinaryReader
  ): DeprecateNamespaceRequest;
}

export namespace DeprecateNamespaceRequest {
  export type AsObject = {
    name: string;
    securityToken: string;
  };
}

export class DeprecateNamespaceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeprecateNamespaceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeprecateNamespaceResponse
  ): DeprecateNamespaceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DeprecateNamespaceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeprecateNamespaceResponse;
  static deserializeBinaryFromReader(
    message: DeprecateNamespaceResponse,
    reader: jspb.BinaryReader
  ): DeprecateNamespaceResponse;
}

export namespace DeprecateNamespaceResponse {
  export type AsObject = {};
}

export class StartWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasWorkflowExecutionTimeout(): boolean;
  clearWorkflowExecutionTimeout(): void;
  getWorkflowExecutionTimeout():
    | google_protobuf_duration_pb.Duration
    | undefined;
  setWorkflowExecutionTimeout(
    value?: google_protobuf_duration_pb.Duration
  ): void;

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowTaskTimeout(): boolean;
  clearWorkflowTaskTimeout(): void;
  getWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getWorkflowIdReusePolicy(): temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap];
  setWorkflowIdReusePolicy(
    value: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap]
  ): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  getCronSchedule(): string;
  setCronSchedule(value: string): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes():
    | temporal_api_common_v1_message_pb.SearchAttributes
    | undefined;
  setSearchAttributes(
    value?: temporal_api_common_v1_message_pb.SearchAttributes
  ): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StartWorkflowExecutionRequest
  ): StartWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StartWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StartWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: StartWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): StartWorkflowExecutionRequest;
}

export namespace StartWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    workflowExecutionTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    identity: string;
    requestId: string;
    workflowIdReusePolicy: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap];
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject;
    cronSchedule: string;
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject;
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject;
    header?: temporal_api_common_v1_message_pb.Header.AsObject;
  };
}

export class StartWorkflowExecutionResponse extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StartWorkflowExecutionResponse
  ): StartWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StartWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StartWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: StartWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): StartWorkflowExecutionResponse;
}

export namespace StartWorkflowExecutionResponse {
  export type AsObject = {
    runId: string;
  };
}

export class GetWorkflowExecutionHistoryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  getMaximumPageSize(): number;
  setMaximumPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  getWaitNewEvent(): boolean;
  setWaitNewEvent(value: boolean): void;

  getHistoryEventFilterType(): temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap[keyof temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap];
  setHistoryEventFilterType(
    value: temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap[keyof temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap]
  ): void;

  getSkipArchival(): boolean;
  setSkipArchival(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): GetWorkflowExecutionHistoryRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetWorkflowExecutionHistoryRequest
  ): GetWorkflowExecutionHistoryRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetWorkflowExecutionHistoryRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): GetWorkflowExecutionHistoryRequest;
  static deserializeBinaryFromReader(
    message: GetWorkflowExecutionHistoryRequest,
    reader: jspb.BinaryReader
  ): GetWorkflowExecutionHistoryRequest;
}

export namespace GetWorkflowExecutionHistoryRequest {
  export type AsObject = {
    namespace: string;
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    maximumPageSize: number;
    nextPageToken: Uint8Array | string;
    waitNewEvent: boolean;
    historyEventFilterType: temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap[keyof temporal_api_enums_v1_workflow_pb.HistoryEventFilterTypeMap];
    skipArchival: boolean;
  };
}

export class GetWorkflowExecutionHistoryResponse extends jspb.Message {
  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): temporal_api_history_v1_message_pb.History | undefined;
  setHistory(value?: temporal_api_history_v1_message_pb.History): void;

  clearRawHistoryList(): void;
  getRawHistoryList(): Array<temporal_api_common_v1_message_pb.DataBlob>;
  setRawHistoryList(
    value: Array<temporal_api_common_v1_message_pb.DataBlob>
  ): void;
  addRawHistory(
    value?: temporal_api_common_v1_message_pb.DataBlob,
    index?: number
  ): temporal_api_common_v1_message_pb.DataBlob;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): GetWorkflowExecutionHistoryResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetWorkflowExecutionHistoryResponse
  ): GetWorkflowExecutionHistoryResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetWorkflowExecutionHistoryResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): GetWorkflowExecutionHistoryResponse;
  static deserializeBinaryFromReader(
    message: GetWorkflowExecutionHistoryResponse,
    reader: jspb.BinaryReader
  ): GetWorkflowExecutionHistoryResponse;
}

export namespace GetWorkflowExecutionHistoryResponse {
  export type AsObject = {
    history?: temporal_api_history_v1_message_pb.History.AsObject;
    rawHistoryList: Array<temporal_api_common_v1_message_pb.DataBlob.AsObject>;
    nextPageToken: Uint8Array | string;
    archived: boolean;
  };
}

export class PollWorkflowTaskQueueRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollWorkflowTaskQueueRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PollWorkflowTaskQueueRequest
  ): PollWorkflowTaskQueueRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PollWorkflowTaskQueueRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PollWorkflowTaskQueueRequest;
  static deserializeBinaryFromReader(
    message: PollWorkflowTaskQueueRequest,
    reader: jspb.BinaryReader
  ): PollWorkflowTaskQueueRequest;
}

export namespace PollWorkflowTaskQueueRequest {
  export type AsObject = {
    namespace: string;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    identity: string;
    binaryChecksum: string;
  };
}

export class PollWorkflowTaskQueueResponse extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getPreviousStartedEventId(): number;
  setPreviousStartedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  getBacklogCountHint(): number;
  setBacklogCountHint(value: number): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): temporal_api_history_v1_message_pb.History | undefined;
  setHistory(value?: temporal_api_history_v1_message_pb.History): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): temporal_api_query_v1_message_pb.WorkflowQuery | undefined;
  setQuery(value?: temporal_api_query_v1_message_pb.WorkflowQuery): void;

  hasWorkflowExecutionTaskQueue(): boolean;
  clearWorkflowExecutionTaskQueue(): void;
  getWorkflowExecutionTaskQueue():
    | temporal_api_taskqueue_v1_message_pb.TaskQueue
    | undefined;
  setWorkflowExecutionTaskQueue(
    value?: temporal_api_taskqueue_v1_message_pb.TaskQueue
  ): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartedTime(): boolean;
  clearStartedTime(): void;
  getStartedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getQueriesMap(): jspb.Map<
    string,
    temporal_api_query_v1_message_pb.WorkflowQuery
  >;
  clearQueriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollWorkflowTaskQueueResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PollWorkflowTaskQueueResponse
  ): PollWorkflowTaskQueueResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PollWorkflowTaskQueueResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PollWorkflowTaskQueueResponse;
  static deserializeBinaryFromReader(
    message: PollWorkflowTaskQueueResponse,
    reader: jspb.BinaryReader
  ): PollWorkflowTaskQueueResponse;
}

export namespace PollWorkflowTaskQueueResponse {
  export type AsObject = {
    taskToken: Uint8Array | string;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject;
    previousStartedEventId: number;
    startedEventId: number;
    attempt: number;
    backlogCountHint: number;
    history?: temporal_api_history_v1_message_pb.History.AsObject;
    nextPageToken: Uint8Array | string;
    query?: temporal_api_query_v1_message_pb.WorkflowQuery.AsObject;
    workflowExecutionTaskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    startedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    queriesMap: Array<
      [string, temporal_api_query_v1_message_pb.WorkflowQuery.AsObject]
    >;
  };
}

export class RespondWorkflowTaskCompletedRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  clearCommandsList(): void;
  getCommandsList(): Array<temporal_api_command_v1_message_pb.Command>;
  setCommandsList(
    value: Array<temporal_api_command_v1_message_pb.Command>
  ): void;
  addCommands(
    value?: temporal_api_command_v1_message_pb.Command,
    index?: number
  ): temporal_api_command_v1_message_pb.Command;

  getIdentity(): string;
  setIdentity(value: string): void;

  hasStickyAttributes(): boolean;
  clearStickyAttributes(): void;
  getStickyAttributes():
    | temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes
    | undefined;
  setStickyAttributes(
    value?: temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes
  ): void;

  getReturnNewWorkflowTask(): boolean;
  setReturnNewWorkflowTask(value: boolean): void;

  getForceCreateNewWorkflowTask(): boolean;
  setForceCreateNewWorkflowTask(value: boolean): void;

  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  getQueryResultsMap(): jspb.Map<
    string,
    temporal_api_query_v1_message_pb.WorkflowQueryResult
  >;
  clearQueryResultsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondWorkflowTaskCompletedRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondWorkflowTaskCompletedRequest
  ): RespondWorkflowTaskCompletedRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondWorkflowTaskCompletedRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondWorkflowTaskCompletedRequest;
  static deserializeBinaryFromReader(
    message: RespondWorkflowTaskCompletedRequest,
    reader: jspb.BinaryReader
  ): RespondWorkflowTaskCompletedRequest;
}

export namespace RespondWorkflowTaskCompletedRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    commandsList: Array<temporal_api_command_v1_message_pb.Command.AsObject>;
    identity: string;
    stickyAttributes?: temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes.AsObject;
    returnNewWorkflowTask: boolean;
    forceCreateNewWorkflowTask: boolean;
    binaryChecksum: string;
    queryResultsMap: Array<
      [string, temporal_api_query_v1_message_pb.WorkflowQueryResult.AsObject]
    >;
  };
}

export class RespondWorkflowTaskCompletedResponse extends jspb.Message {
  hasWorkflowTask(): boolean;
  clearWorkflowTask(): void;
  getWorkflowTask(): PollWorkflowTaskQueueResponse | undefined;
  setWorkflowTask(value?: PollWorkflowTaskQueueResponse): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondWorkflowTaskCompletedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondWorkflowTaskCompletedResponse
  ): RespondWorkflowTaskCompletedResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondWorkflowTaskCompletedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondWorkflowTaskCompletedResponse;
  static deserializeBinaryFromReader(
    message: RespondWorkflowTaskCompletedResponse,
    reader: jspb.BinaryReader
  ): RespondWorkflowTaskCompletedResponse;
}

export namespace RespondWorkflowTaskCompletedResponse {
  export type AsObject = {
    workflowTask?: PollWorkflowTaskQueueResponse.AsObject;
  };
}

export class RespondWorkflowTaskFailedRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  getCause(): temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap];
  setCause(
    value: temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap]
  ): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondWorkflowTaskFailedRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondWorkflowTaskFailedRequest
  ): RespondWorkflowTaskFailedRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondWorkflowTaskFailedRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RespondWorkflowTaskFailedRequest;
  static deserializeBinaryFromReader(
    message: RespondWorkflowTaskFailedRequest,
    reader: jspb.BinaryReader
  ): RespondWorkflowTaskFailedRequest;
}

export namespace RespondWorkflowTaskFailedRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    cause: temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap];
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject;
    identity: string;
    binaryChecksum: string;
  };
}

export class RespondWorkflowTaskFailedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondWorkflowTaskFailedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondWorkflowTaskFailedResponse
  ): RespondWorkflowTaskFailedResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondWorkflowTaskFailedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondWorkflowTaskFailedResponse;
  static deserializeBinaryFromReader(
    message: RespondWorkflowTaskFailedResponse,
    reader: jspb.BinaryReader
  ): RespondWorkflowTaskFailedResponse;
}

export namespace RespondWorkflowTaskFailedResponse {
  export type AsObject = {};
}

export class PollActivityTaskQueueRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  hasTaskQueueMetadata(): boolean;
  clearTaskQueueMetadata(): void;
  getTaskQueueMetadata():
    | temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata
    | undefined;
  setTaskQueueMetadata(
    value?: temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollActivityTaskQueueRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PollActivityTaskQueueRequest
  ): PollActivityTaskQueueRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PollActivityTaskQueueRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PollActivityTaskQueueRequest;
  static deserializeBinaryFromReader(
    message: PollActivityTaskQueueRequest,
    reader: jspb.BinaryReader
  ): PollActivityTaskQueueRequest;
}

export namespace PollActivityTaskQueueRequest {
  export type AsObject = {
    namespace: string;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    identity: string;
    taskQueueMetadata?: temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata.AsObject;
  };
}

export class PollActivityTaskQueueResponse extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  getWorkflowNamespace(): string;
  setWorkflowNamespace(value: string): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  hasActivityType(): boolean;
  clearActivityType(): void;
  getActivityType(): temporal_api_common_v1_message_pb.ActivityType | undefined;
  setActivityType(value?: temporal_api_common_v1_message_pb.ActivityType): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasHeartbeatDetails(): boolean;
  clearHeartbeatDetails(): void;
  getHeartbeatDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setHeartbeatDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCurrentAttemptScheduledTime(): boolean;
  clearCurrentAttemptScheduledTime(): void;
  getCurrentAttemptScheduledTime():
    | google_protobuf_timestamp_pb.Timestamp
    | undefined;
  setCurrentAttemptScheduledTime(
    value?: google_protobuf_timestamp_pb.Timestamp
  ): void;

  hasStartedTime(): boolean;
  clearStartedTime(): void;
  getStartedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  hasScheduleToCloseTimeout(): boolean;
  clearScheduleToCloseTimeout(): void;
  getScheduleToCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setScheduleToCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasStartToCloseTimeout(): boolean;
  clearStartToCloseTimeout(): void;
  getStartToCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStartToCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasHeartbeatTimeout(): boolean;
  clearHeartbeatTimeout(): void;
  getHeartbeatTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setHeartbeatTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollActivityTaskQueueResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PollActivityTaskQueueResponse
  ): PollActivityTaskQueueResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PollActivityTaskQueueResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PollActivityTaskQueueResponse;
  static deserializeBinaryFromReader(
    message: PollActivityTaskQueueResponse,
    reader: jspb.BinaryReader
  ): PollActivityTaskQueueResponse;
}

export namespace PollActivityTaskQueueResponse {
  export type AsObject = {
    taskToken: Uint8Array | string;
    workflowNamespace: string;
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    activityType?: temporal_api_common_v1_message_pb.ActivityType.AsObject;
    activityId: string;
    header?: temporal_api_common_v1_message_pb.Header.AsObject;
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    heartbeatDetails?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    currentAttemptScheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    startedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    attempt: number;
    scheduleToCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    startToCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    heartbeatTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject;
  };
}

export class RecordActivityTaskHeartbeatRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RecordActivityTaskHeartbeatRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecordActivityTaskHeartbeatRequest
  ): RecordActivityTaskHeartbeatRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RecordActivityTaskHeartbeatRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RecordActivityTaskHeartbeatRequest;
  static deserializeBinaryFromReader(
    message: RecordActivityTaskHeartbeatRequest,
    reader: jspb.BinaryReader
  ): RecordActivityTaskHeartbeatRequest;
}

export namespace RecordActivityTaskHeartbeatRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RecordActivityTaskHeartbeatResponse extends jspb.Message {
  getCancelRequested(): boolean;
  setCancelRequested(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RecordActivityTaskHeartbeatResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecordActivityTaskHeartbeatResponse
  ): RecordActivityTaskHeartbeatResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RecordActivityTaskHeartbeatResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RecordActivityTaskHeartbeatResponse;
  static deserializeBinaryFromReader(
    message: RecordActivityTaskHeartbeatResponse,
    reader: jspb.BinaryReader
  ): RecordActivityTaskHeartbeatResponse;
}

export namespace RecordActivityTaskHeartbeatResponse {
  export type AsObject = {
    cancelRequested: boolean;
  };
}

export class RecordActivityTaskHeartbeatByIdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RecordActivityTaskHeartbeatByIdRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecordActivityTaskHeartbeatByIdRequest
  ): RecordActivityTaskHeartbeatByIdRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RecordActivityTaskHeartbeatByIdRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RecordActivityTaskHeartbeatByIdRequest;
  static deserializeBinaryFromReader(
    message: RecordActivityTaskHeartbeatByIdRequest,
    reader: jspb.BinaryReader
  ): RecordActivityTaskHeartbeatByIdRequest;
}

export namespace RecordActivityTaskHeartbeatByIdRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    runId: string;
    activityId: string;
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RecordActivityTaskHeartbeatByIdResponse extends jspb.Message {
  getCancelRequested(): boolean;
  setCancelRequested(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RecordActivityTaskHeartbeatByIdResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecordActivityTaskHeartbeatByIdResponse
  ): RecordActivityTaskHeartbeatByIdResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RecordActivityTaskHeartbeatByIdResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RecordActivityTaskHeartbeatByIdResponse;
  static deserializeBinaryFromReader(
    message: RecordActivityTaskHeartbeatByIdResponse,
    reader: jspb.BinaryReader
  ): RecordActivityTaskHeartbeatByIdResponse;
}

export namespace RecordActivityTaskHeartbeatByIdResponse {
  export type AsObject = {
    cancelRequested: boolean;
  };
}

export class RespondActivityTaskCompletedRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCompletedRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCompletedRequest
  ): RespondActivityTaskCompletedRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCompletedRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCompletedRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCompletedRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCompletedRequest;
}

export namespace RespondActivityTaskCompletedRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskCompletedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCompletedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCompletedResponse
  ): RespondActivityTaskCompletedResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCompletedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCompletedResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCompletedResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCompletedResponse;
}

export namespace RespondActivityTaskCompletedResponse {
  export type AsObject = {};
}

export class RespondActivityTaskCompletedByIdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCompletedByIdRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCompletedByIdRequest
  ): RespondActivityTaskCompletedByIdRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCompletedByIdRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCompletedByIdRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCompletedByIdRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCompletedByIdRequest;
}

export namespace RespondActivityTaskCompletedByIdRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    runId: string;
    activityId: string;
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskCompletedByIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCompletedByIdResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCompletedByIdResponse
  ): RespondActivityTaskCompletedByIdResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCompletedByIdResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCompletedByIdResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCompletedByIdResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCompletedByIdResponse;
}

export namespace RespondActivityTaskCompletedByIdResponse {
  export type AsObject = {};
}

export class RespondActivityTaskFailedRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskFailedRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskFailedRequest
  ): RespondActivityTaskFailedRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskFailedRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RespondActivityTaskFailedRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskFailedRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskFailedRequest;
}

export namespace RespondActivityTaskFailedRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskFailedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskFailedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskFailedResponse
  ): RespondActivityTaskFailedResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskFailedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskFailedResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskFailedResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskFailedResponse;
}

export namespace RespondActivityTaskFailedResponse {
  export type AsObject = {};
}

export class RespondActivityTaskFailedByIdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskFailedByIdRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskFailedByIdRequest
  ): RespondActivityTaskFailedByIdRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskFailedByIdRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskFailedByIdRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskFailedByIdRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskFailedByIdRequest;
}

export namespace RespondActivityTaskFailedByIdRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    runId: string;
    activityId: string;
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskFailedByIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskFailedByIdResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskFailedByIdResponse
  ): RespondActivityTaskFailedByIdResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskFailedByIdResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskFailedByIdResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskFailedByIdResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskFailedByIdResponse;
}

export namespace RespondActivityTaskFailedByIdResponse {
  export type AsObject = {};
}

export class RespondActivityTaskCanceledRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCanceledRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCanceledRequest
  ): RespondActivityTaskCanceledRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCanceledRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCanceledRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCanceledRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCanceledRequest;
}

export namespace RespondActivityTaskCanceledRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskCanceledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCanceledResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCanceledResponse
  ): RespondActivityTaskCanceledResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCanceledResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCanceledResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCanceledResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCanceledResponse;
}

export namespace RespondActivityTaskCanceledResponse {
  export type AsObject = {};
}

export class RespondActivityTaskCanceledByIdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCanceledByIdRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCanceledByIdRequest
  ): RespondActivityTaskCanceledByIdRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCanceledByIdRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCanceledByIdRequest;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCanceledByIdRequest,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCanceledByIdRequest;
}

export namespace RespondActivityTaskCanceledByIdRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    runId: string;
    activityId: string;
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
  };
}

export class RespondActivityTaskCanceledByIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondActivityTaskCanceledByIdResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondActivityTaskCanceledByIdResponse
  ): RespondActivityTaskCanceledByIdResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondActivityTaskCanceledByIdResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondActivityTaskCanceledByIdResponse;
  static deserializeBinaryFromReader(
    message: RespondActivityTaskCanceledByIdResponse,
    reader: jspb.BinaryReader
  ): RespondActivityTaskCanceledByIdResponse;
}

export namespace RespondActivityTaskCanceledByIdResponse {
  export type AsObject = {};
}

export class RequestCancelWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getFirstExecutionRunId(): string;
  setFirstExecutionRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RequestCancelWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestCancelWorkflowExecutionRequest
  ): RequestCancelWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestCancelWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RequestCancelWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: RequestCancelWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): RequestCancelWorkflowExecutionRequest;
}

export namespace RequestCancelWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    identity: string;
    requestId: string;
    firstExecutionRunId: string;
  };
}

export class RequestCancelWorkflowExecutionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RequestCancelWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestCancelWorkflowExecutionResponse
  ): RequestCancelWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestCancelWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RequestCancelWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: RequestCancelWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): RequestCancelWorkflowExecutionResponse;
}

export namespace RequestCancelWorkflowExecutionResponse {
  export type AsObject = {};
}

export class SignalWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  getSignalName(): string;
  setSignalName(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getControl(): string;
  setControl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignalWorkflowExecutionRequest
  ): SignalWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignalWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SignalWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: SignalWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): SignalWorkflowExecutionRequest;
}

export namespace SignalWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    signalName: string;
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
    requestId: string;
    control: string;
  };
}

export class SignalWorkflowExecutionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignalWorkflowExecutionResponse
  ): SignalWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignalWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SignalWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: SignalWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): SignalWorkflowExecutionResponse;
}

export namespace SignalWorkflowExecutionResponse {
  export type AsObject = {};
}

export class SignalWithStartWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasWorkflowExecutionTimeout(): boolean;
  clearWorkflowExecutionTimeout(): void;
  getWorkflowExecutionTimeout():
    | google_protobuf_duration_pb.Duration
    | undefined;
  setWorkflowExecutionTimeout(
    value?: google_protobuf_duration_pb.Duration
  ): void;

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowTaskTimeout(): boolean;
  clearWorkflowTaskTimeout(): void;
  getWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getWorkflowIdReusePolicy(): temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap];
  setWorkflowIdReusePolicy(
    value: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap]
  ): void;

  getSignalName(): string;
  setSignalName(value: string): void;

  hasSignalInput(): boolean;
  clearSignalInput(): void;
  getSignalInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setSignalInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getControl(): string;
  setControl(value: string): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  getCronSchedule(): string;
  setCronSchedule(value: string): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes():
    | temporal_api_common_v1_message_pb.SearchAttributes
    | undefined;
  setSearchAttributes(
    value?: temporal_api_common_v1_message_pb.SearchAttributes
  ): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): SignalWithStartWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignalWithStartWorkflowExecutionRequest
  ): SignalWithStartWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignalWithStartWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): SignalWithStartWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: SignalWithStartWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): SignalWithStartWorkflowExecutionRequest;
}

export namespace SignalWithStartWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowId: string;
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    workflowExecutionTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject;
    identity: string;
    requestId: string;
    workflowIdReusePolicy: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap];
    signalName: string;
    signalInput?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    control: string;
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject;
    cronSchedule: string;
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject;
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject;
    header?: temporal_api_common_v1_message_pb.Header.AsObject;
  };
}

export class SignalWithStartWorkflowExecutionResponse extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): SignalWithStartWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignalWithStartWorkflowExecutionResponse
  ): SignalWithStartWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignalWithStartWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): SignalWithStartWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: SignalWithStartWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): SignalWithStartWorkflowExecutionResponse;
}

export namespace SignalWithStartWorkflowExecutionResponse {
  export type AsObject = {
    runId: string;
  };
}

export class ResetWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  getReason(): string;
  setReason(value: string): void;

  getWorkflowTaskFinishEventId(): number;
  setWorkflowTaskFinishEventId(value: number): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ResetWorkflowExecutionRequest
  ): ResetWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ResetWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ResetWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: ResetWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): ResetWorkflowExecutionRequest;
}

export namespace ResetWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    reason: string;
    workflowTaskFinishEventId: number;
    requestId: string;
  };
}

export class ResetWorkflowExecutionResponse extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ResetWorkflowExecutionResponse
  ): ResetWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ResetWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ResetWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: ResetWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): ResetWorkflowExecutionResponse;
}

export namespace ResetWorkflowExecutionResponse {
  export type AsObject = {
    runId: string;
  };
}

export class TerminateWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setWorkflowExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  getReason(): string;
  setReason(value: string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getFirstExecutionRunId(): string;
  setFirstExecutionRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): TerminateWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TerminateWorkflowExecutionRequest
  ): TerminateWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TerminateWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): TerminateWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: TerminateWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): TerminateWorkflowExecutionRequest;
}

export namespace TerminateWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    reason: string;
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    identity: string;
    firstExecutionRunId: string;
  };
}

export class TerminateWorkflowExecutionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): TerminateWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TerminateWorkflowExecutionResponse
  ): TerminateWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TerminateWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): TerminateWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: TerminateWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): TerminateWorkflowExecutionResponse;
}

export namespace TerminateWorkflowExecutionResponse {
  export type AsObject = {};
}

export class ListOpenWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getMaximumPageSize(): number;
  setMaximumPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  hasStartTimeFilter(): boolean;
  clearStartTimeFilter(): void;
  getStartTimeFilter():
    | temporal_api_filter_v1_message_pb.StartTimeFilter
    | undefined;
  setStartTimeFilter(
    value?: temporal_api_filter_v1_message_pb.StartTimeFilter
  ): void;

  hasExecutionFilter(): boolean;
  clearExecutionFilter(): void;
  getExecutionFilter():
    | temporal_api_filter_v1_message_pb.WorkflowExecutionFilter
    | undefined;
  setExecutionFilter(
    value?: temporal_api_filter_v1_message_pb.WorkflowExecutionFilter
  ): void;

  hasTypeFilter(): boolean;
  clearTypeFilter(): void;
  getTypeFilter():
    | temporal_api_filter_v1_message_pb.WorkflowTypeFilter
    | undefined;
  setTypeFilter(
    value?: temporal_api_filter_v1_message_pb.WorkflowTypeFilter
  ): void;

  getFiltersCase(): ListOpenWorkflowExecutionsRequest.FiltersCase;
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListOpenWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListOpenWorkflowExecutionsRequest
  ): ListOpenWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListOpenWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListOpenWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: ListOpenWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): ListOpenWorkflowExecutionsRequest;
}

export namespace ListOpenWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    maximumPageSize: number;
    nextPageToken: Uint8Array | string;
    startTimeFilter?: temporal_api_filter_v1_message_pb.StartTimeFilter.AsObject;
    executionFilter?: temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.AsObject;
    typeFilter?: temporal_api_filter_v1_message_pb.WorkflowTypeFilter.AsObject;
  };

  export enum FiltersCase {
    FILTERS_NOT_SET = 0,
    EXECUTION_FILTER = 5,
    TYPE_FILTER = 6,
  }
}

export class ListOpenWorkflowExecutionsResponse extends jspb.Message {
  clearExecutionsList(): void;
  getExecutionsList(): Array<
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  >;
  setExecutionsList(
    value: Array<temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo>
  ): void;
  addExecutions(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListOpenWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListOpenWorkflowExecutionsResponse
  ): ListOpenWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListOpenWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListOpenWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: ListOpenWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): ListOpenWorkflowExecutionsResponse;
}

export namespace ListOpenWorkflowExecutionsResponse {
  export type AsObject = {
    executionsList: Array<
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject
    >;
    nextPageToken: Uint8Array | string;
  };
}

export class ListClosedWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getMaximumPageSize(): number;
  setMaximumPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  hasStartTimeFilter(): boolean;
  clearStartTimeFilter(): void;
  getStartTimeFilter():
    | temporal_api_filter_v1_message_pb.StartTimeFilter
    | undefined;
  setStartTimeFilter(
    value?: temporal_api_filter_v1_message_pb.StartTimeFilter
  ): void;

  hasExecutionFilter(): boolean;
  clearExecutionFilter(): void;
  getExecutionFilter():
    | temporal_api_filter_v1_message_pb.WorkflowExecutionFilter
    | undefined;
  setExecutionFilter(
    value?: temporal_api_filter_v1_message_pb.WorkflowExecutionFilter
  ): void;

  hasTypeFilter(): boolean;
  clearTypeFilter(): void;
  getTypeFilter():
    | temporal_api_filter_v1_message_pb.WorkflowTypeFilter
    | undefined;
  setTypeFilter(
    value?: temporal_api_filter_v1_message_pb.WorkflowTypeFilter
  ): void;

  hasStatusFilter(): boolean;
  clearStatusFilter(): void;
  getStatusFilter(): temporal_api_filter_v1_message_pb.StatusFilter | undefined;
  setStatusFilter(value?: temporal_api_filter_v1_message_pb.StatusFilter): void;

  getFiltersCase(): ListClosedWorkflowExecutionsRequest.FiltersCase;
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListClosedWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListClosedWorkflowExecutionsRequest
  ): ListClosedWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListClosedWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListClosedWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: ListClosedWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): ListClosedWorkflowExecutionsRequest;
}

export namespace ListClosedWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    maximumPageSize: number;
    nextPageToken: Uint8Array | string;
    startTimeFilter?: temporal_api_filter_v1_message_pb.StartTimeFilter.AsObject;
    executionFilter?: temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.AsObject;
    typeFilter?: temporal_api_filter_v1_message_pb.WorkflowTypeFilter.AsObject;
    statusFilter?: temporal_api_filter_v1_message_pb.StatusFilter.AsObject;
  };

  export enum FiltersCase {
    FILTERS_NOT_SET = 0,
    EXECUTION_FILTER = 5,
    TYPE_FILTER = 6,
    STATUS_FILTER = 7,
  }
}

export class ListClosedWorkflowExecutionsResponse extends jspb.Message {
  clearExecutionsList(): void;
  getExecutionsList(): Array<
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  >;
  setExecutionsList(
    value: Array<temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo>
  ): void;
  addExecutions(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListClosedWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListClosedWorkflowExecutionsResponse
  ): ListClosedWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListClosedWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListClosedWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: ListClosedWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): ListClosedWorkflowExecutionsResponse;
}

export namespace ListClosedWorkflowExecutionsResponse {
  export type AsObject = {
    executionsList: Array<
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject
    >;
    nextPageToken: Uint8Array | string;
  };
}

export class ListWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListWorkflowExecutionsRequest
  ): ListWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: ListWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): ListWorkflowExecutionsRequest;
}

export namespace ListWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    pageSize: number;
    nextPageToken: Uint8Array | string;
    query: string;
  };
}

export class ListWorkflowExecutionsResponse extends jspb.Message {
  clearExecutionsList(): void;
  getExecutionsList(): Array<
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  >;
  setExecutionsList(
    value: Array<temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo>
  ): void;
  addExecutions(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListWorkflowExecutionsResponse
  ): ListWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: ListWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): ListWorkflowExecutionsResponse;
}

export namespace ListWorkflowExecutionsResponse {
  export type AsObject = {
    executionsList: Array<
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject
    >;
    nextPageToken: Uint8Array | string;
  };
}

export class ListArchivedWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListArchivedWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListArchivedWorkflowExecutionsRequest
  ): ListArchivedWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListArchivedWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListArchivedWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: ListArchivedWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): ListArchivedWorkflowExecutionsRequest;
}

export namespace ListArchivedWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    pageSize: number;
    nextPageToken: Uint8Array | string;
    query: string;
  };
}

export class ListArchivedWorkflowExecutionsResponse extends jspb.Message {
  clearExecutionsList(): void;
  getExecutionsList(): Array<
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  >;
  setExecutionsList(
    value: Array<temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo>
  ): void;
  addExecutions(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): ListArchivedWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListArchivedWorkflowExecutionsResponse
  ): ListArchivedWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListArchivedWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): ListArchivedWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: ListArchivedWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): ListArchivedWorkflowExecutionsResponse;
}

export namespace ListArchivedWorkflowExecutionsResponse {
  export type AsObject = {
    executionsList: Array<
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject
    >;
    nextPageToken: Uint8Array | string;
  };
}

export class ScanWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ScanWorkflowExecutionsRequest
  ): ScanWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ScanWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ScanWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: ScanWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): ScanWorkflowExecutionsRequest;
}

export namespace ScanWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    pageSize: number;
    nextPageToken: Uint8Array | string;
    query: string;
  };
}

export class ScanWorkflowExecutionsResponse extends jspb.Message {
  clearExecutionsList(): void;
  getExecutionsList(): Array<
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  >;
  setExecutionsList(
    value: Array<temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo>
  ): void;
  addExecutions(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;

  getNextPageToken(): Uint8Array | string;
  getNextPageToken_asU8(): Uint8Array;
  getNextPageToken_asB64(): string;
  setNextPageToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ScanWorkflowExecutionsResponse
  ): ScanWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ScanWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ScanWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: ScanWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): ScanWorkflowExecutionsResponse;
}

export namespace ScanWorkflowExecutionsResponse {
  export type AsObject = {
    executionsList: Array<
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject
    >;
    nextPageToken: Uint8Array | string;
  };
}

export class CountWorkflowExecutionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWorkflowExecutionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CountWorkflowExecutionsRequest
  ): CountWorkflowExecutionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CountWorkflowExecutionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CountWorkflowExecutionsRequest;
  static deserializeBinaryFromReader(
    message: CountWorkflowExecutionsRequest,
    reader: jspb.BinaryReader
  ): CountWorkflowExecutionsRequest;
}

export namespace CountWorkflowExecutionsRequest {
  export type AsObject = {
    namespace: string;
    query: string;
  };
}

export class CountWorkflowExecutionsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWorkflowExecutionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CountWorkflowExecutionsResponse
  ): CountWorkflowExecutionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CountWorkflowExecutionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CountWorkflowExecutionsResponse;
  static deserializeBinaryFromReader(
    message: CountWorkflowExecutionsResponse,
    reader: jspb.BinaryReader
  ): CountWorkflowExecutionsResponse;
}

export namespace CountWorkflowExecutionsResponse {
  export type AsObject = {
    count: number;
  };
}

export class GetSearchAttributesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSearchAttributesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetSearchAttributesRequest
  ): GetSearchAttributesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetSearchAttributesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetSearchAttributesRequest;
  static deserializeBinaryFromReader(
    message: GetSearchAttributesRequest,
    reader: jspb.BinaryReader
  ): GetSearchAttributesRequest;
}

export namespace GetSearchAttributesRequest {
  export type AsObject = {};
}

export class GetSearchAttributesResponse extends jspb.Message {
  getKeysMap(): jspb.Map<string, string[keyof string]>;
  clearKeysMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSearchAttributesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetSearchAttributesResponse
  ): GetSearchAttributesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetSearchAttributesResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetSearchAttributesResponse;
  static deserializeBinaryFromReader(
    message: GetSearchAttributesResponse,
    reader: jspb.BinaryReader
  ): GetSearchAttributesResponse;
}

export namespace GetSearchAttributesResponse {
  export type AsObject = {
    keysMap: Array<[string, string[keyof string]]>;
  };
}

export class RespondQueryTaskCompletedRequest extends jspb.Message {
  getTaskToken(): Uint8Array | string;
  getTaskToken_asU8(): Uint8Array;
  getTaskToken_asB64(): string;
  setTaskToken(value: Uint8Array | string): void;

  getCompletedType(): temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap];
  setCompletedType(
    value: temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap]
  ): void;

  hasQueryResult(): boolean;
  clearQueryResult(): void;
  getQueryResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setQueryResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondQueryTaskCompletedRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondQueryTaskCompletedRequest
  ): RespondQueryTaskCompletedRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondQueryTaskCompletedRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RespondQueryTaskCompletedRequest;
  static deserializeBinaryFromReader(
    message: RespondQueryTaskCompletedRequest,
    reader: jspb.BinaryReader
  ): RespondQueryTaskCompletedRequest;
}

export namespace RespondQueryTaskCompletedRequest {
  export type AsObject = {
    taskToken: Uint8Array | string;
    completedType: temporal_api_enums_v1_query_pb.QueryResultTypeMap[keyof temporal_api_enums_v1_query_pb.QueryResultTypeMap];
    queryResult?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    errorMessage: string;
  };
}

export class RespondQueryTaskCompletedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RespondQueryTaskCompletedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RespondQueryTaskCompletedResponse
  ): RespondQueryTaskCompletedResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RespondQueryTaskCompletedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): RespondQueryTaskCompletedResponse;
  static deserializeBinaryFromReader(
    message: RespondQueryTaskCompletedResponse,
    reader: jspb.BinaryReader
  ): RespondQueryTaskCompletedResponse;
}

export namespace RespondQueryTaskCompletedResponse {
  export type AsObject = {};
}

export class ResetStickyTaskQueueRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStickyTaskQueueRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ResetStickyTaskQueueRequest
  ): ResetStickyTaskQueueRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ResetStickyTaskQueueRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ResetStickyTaskQueueRequest;
  static deserializeBinaryFromReader(
    message: ResetStickyTaskQueueRequest,
    reader: jspb.BinaryReader
  ): ResetStickyTaskQueueRequest;
}

export namespace ResetStickyTaskQueueRequest {
  export type AsObject = {
    namespace: string;
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
  };
}

export class ResetStickyTaskQueueResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStickyTaskQueueResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ResetStickyTaskQueueResponse
  ): ResetStickyTaskQueueResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ResetStickyTaskQueueResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ResetStickyTaskQueueResponse;
  static deserializeBinaryFromReader(
    message: ResetStickyTaskQueueResponse,
    reader: jspb.BinaryReader
  ): ResetStickyTaskQueueResponse;
}

export namespace ResetStickyTaskQueueResponse {
  export type AsObject = {};
}

export class QueryWorkflowRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): temporal_api_query_v1_message_pb.WorkflowQuery | undefined;
  setQuery(value?: temporal_api_query_v1_message_pb.WorkflowQuery): void;

  getQueryRejectCondition(): temporal_api_enums_v1_query_pb.QueryRejectConditionMap[keyof temporal_api_enums_v1_query_pb.QueryRejectConditionMap];
  setQueryRejectCondition(
    value: temporal_api_enums_v1_query_pb.QueryRejectConditionMap[keyof temporal_api_enums_v1_query_pb.QueryRejectConditionMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWorkflowRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryWorkflowRequest
  ): QueryWorkflowRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryWorkflowRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryWorkflowRequest;
  static deserializeBinaryFromReader(
    message: QueryWorkflowRequest,
    reader: jspb.BinaryReader
  ): QueryWorkflowRequest;
}

export namespace QueryWorkflowRequest {
  export type AsObject = {
    namespace: string;
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
    query?: temporal_api_query_v1_message_pb.WorkflowQuery.AsObject;
    queryRejectCondition: temporal_api_enums_v1_query_pb.QueryRejectConditionMap[keyof temporal_api_enums_v1_query_pb.QueryRejectConditionMap];
  };
}

export class QueryWorkflowResponse extends jspb.Message {
  hasQueryResult(): boolean;
  clearQueryResult(): void;
  getQueryResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setQueryResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasQueryRejected(): boolean;
  clearQueryRejected(): void;
  getQueryRejected():
    | temporal_api_query_v1_message_pb.QueryRejected
    | undefined;
  setQueryRejected(
    value?: temporal_api_query_v1_message_pb.QueryRejected
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWorkflowResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryWorkflowResponse
  ): QueryWorkflowResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryWorkflowResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryWorkflowResponse;
  static deserializeBinaryFromReader(
    message: QueryWorkflowResponse,
    reader: jspb.BinaryReader
  ): QueryWorkflowResponse;
}

export namespace QueryWorkflowResponse {
  export type AsObject = {
    queryResult?: temporal_api_common_v1_message_pb.Payloads.AsObject;
    queryRejected?: temporal_api_query_v1_message_pb.QueryRejected.AsObject;
  };
}

export class DescribeWorkflowExecutionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution():
    | temporal_api_common_v1_message_pb.WorkflowExecution
    | undefined;
  setExecution(
    value?: temporal_api_common_v1_message_pb.WorkflowExecution
  ): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): DescribeWorkflowExecutionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeWorkflowExecutionRequest
  ): DescribeWorkflowExecutionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeWorkflowExecutionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DescribeWorkflowExecutionRequest;
  static deserializeBinaryFromReader(
    message: DescribeWorkflowExecutionRequest,
    reader: jspb.BinaryReader
  ): DescribeWorkflowExecutionRequest;
}

export namespace DescribeWorkflowExecutionRequest {
  export type AsObject = {
    namespace: string;
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject;
  };
}

export class DescribeWorkflowExecutionResponse extends jspb.Message {
  hasExecutionConfig(): boolean;
  clearExecutionConfig(): void;
  getExecutionConfig():
    | temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig
    | undefined;
  setExecutionConfig(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig
  ): void;

  hasWorkflowExecutionInfo(): boolean;
  clearWorkflowExecutionInfo(): void;
  getWorkflowExecutionInfo():
    | temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
    | undefined;
  setWorkflowExecutionInfo(
    value?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo
  ): void;

  clearPendingActivitiesList(): void;
  getPendingActivitiesList(): Array<
    temporal_api_workflow_v1_message_pb.PendingActivityInfo
  >;
  setPendingActivitiesList(
    value: Array<temporal_api_workflow_v1_message_pb.PendingActivityInfo>
  ): void;
  addPendingActivities(
    value?: temporal_api_workflow_v1_message_pb.PendingActivityInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.PendingActivityInfo;

  clearPendingChildrenList(): void;
  getPendingChildrenList(): Array<
    temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo
  >;
  setPendingChildrenList(
    value: Array<temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo>
  ): void;
  addPendingChildren(
    value?: temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo,
    index?: number
  ): temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): DescribeWorkflowExecutionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeWorkflowExecutionResponse
  ): DescribeWorkflowExecutionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeWorkflowExecutionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): DescribeWorkflowExecutionResponse;
  static deserializeBinaryFromReader(
    message: DescribeWorkflowExecutionResponse,
    reader: jspb.BinaryReader
  ): DescribeWorkflowExecutionResponse;
}

export namespace DescribeWorkflowExecutionResponse {
  export type AsObject = {
    executionConfig?: temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig.AsObject;
    workflowExecutionInfo?: temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.AsObject;
    pendingActivitiesList: Array<
      temporal_api_workflow_v1_message_pb.PendingActivityInfo.AsObject
    >;
    pendingChildrenList: Array<
      temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo.AsObject
    >;
  };
}

export class DescribeTaskQueueRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  getTaskQueueType(): temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap];
  setTaskQueueType(
    value: temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap]
  ): void;

  getIncludeTaskQueueStatus(): boolean;
  setIncludeTaskQueueStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTaskQueueRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeTaskQueueRequest
  ): DescribeTaskQueueRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeTaskQueueRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTaskQueueRequest;
  static deserializeBinaryFromReader(
    message: DescribeTaskQueueRequest,
    reader: jspb.BinaryReader
  ): DescribeTaskQueueRequest;
}

export namespace DescribeTaskQueueRequest {
  export type AsObject = {
    namespace: string;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
    taskQueueType: temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueTypeMap];
    includeTaskQueueStatus: boolean;
  };
}

export class DescribeTaskQueueResponse extends jspb.Message {
  clearPollersList(): void;
  getPollersList(): Array<temporal_api_taskqueue_v1_message_pb.PollerInfo>;
  setPollersList(
    value: Array<temporal_api_taskqueue_v1_message_pb.PollerInfo>
  ): void;
  addPollers(
    value?: temporal_api_taskqueue_v1_message_pb.PollerInfo,
    index?: number
  ): temporal_api_taskqueue_v1_message_pb.PollerInfo;

  hasTaskQueueStatus(): boolean;
  clearTaskQueueStatus(): void;
  getTaskQueueStatus():
    | temporal_api_taskqueue_v1_message_pb.TaskQueueStatus
    | undefined;
  setTaskQueueStatus(
    value?: temporal_api_taskqueue_v1_message_pb.TaskQueueStatus
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTaskQueueResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DescribeTaskQueueResponse
  ): DescribeTaskQueueResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DescribeTaskQueueResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTaskQueueResponse;
  static deserializeBinaryFromReader(
    message: DescribeTaskQueueResponse,
    reader: jspb.BinaryReader
  ): DescribeTaskQueueResponse;
}

export namespace DescribeTaskQueueResponse {
  export type AsObject = {
    pollersList: Array<
      temporal_api_taskqueue_v1_message_pb.PollerInfo.AsObject
    >;
    taskQueueStatus?: temporal_api_taskqueue_v1_message_pb.TaskQueueStatus.AsObject;
  };
}

export class GetClusterInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterInfoRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetClusterInfoRequest
  ): GetClusterInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetClusterInfoRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterInfoRequest;
  static deserializeBinaryFromReader(
    message: GetClusterInfoRequest,
    reader: jspb.BinaryReader
  ): GetClusterInfoRequest;
}

export namespace GetClusterInfoRequest {
  export type AsObject = {};
}

export class GetClusterInfoResponse extends jspb.Message {
  getSupportedClientsMap(): jspb.Map<string, string>;
  clearSupportedClientsMap(): void;
  getServerVersion(): string;
  setServerVersion(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasVersionInfo(): boolean;
  clearVersionInfo(): void;
  getVersionInfo(): temporal_api_version_v1_message_pb.VersionInfo | undefined;
  setVersionInfo(value?: temporal_api_version_v1_message_pb.VersionInfo): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  getHistoryShardCount(): number;
  setHistoryShardCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetClusterInfoResponse
  ): GetClusterInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetClusterInfoResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterInfoResponse;
  static deserializeBinaryFromReader(
    message: GetClusterInfoResponse,
    reader: jspb.BinaryReader
  ): GetClusterInfoResponse;
}

export namespace GetClusterInfoResponse {
  export type AsObject = {
    supportedClientsMap: Array<[string, string]>;
    serverVersion: string;
    clusterId: string;
    versionInfo?: temporal_api_version_v1_message_pb.VersionInfo.AsObject;
    clusterName: string;
    historyShardCount: number;
  };
}

export class ListTaskQueuePartitionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskQueuePartitionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListTaskQueuePartitionsRequest
  ): ListTaskQueuePartitionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListTaskQueuePartitionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskQueuePartitionsRequest;
  static deserializeBinaryFromReader(
    message: ListTaskQueuePartitionsRequest,
    reader: jspb.BinaryReader
  ): ListTaskQueuePartitionsRequest;
}

export namespace ListTaskQueuePartitionsRequest {
  export type AsObject = {
    namespace: string;
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject;
  };
}

export class ListTaskQueuePartitionsResponse extends jspb.Message {
  clearActivityTaskQueuePartitionsList(): void;
  getActivityTaskQueuePartitionsList(): Array<
    temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata
  >;
  setActivityTaskQueuePartitionsList(
    value: Array<
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata
    >
  ): void;
  addActivityTaskQueuePartitions(
    value?: temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata,
    index?: number
  ): temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata;

  clearWorkflowTaskQueuePartitionsList(): void;
  getWorkflowTaskQueuePartitionsList(): Array<
    temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata
  >;
  setWorkflowTaskQueuePartitionsList(
    value: Array<
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata
    >
  ): void;
  addWorkflowTaskQueuePartitions(
    value?: temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata,
    index?: number
  ): temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskQueuePartitionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListTaskQueuePartitionsResponse
  ): ListTaskQueuePartitionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListTaskQueuePartitionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskQueuePartitionsResponse;
  static deserializeBinaryFromReader(
    message: ListTaskQueuePartitionsResponse,
    reader: jspb.BinaryReader
  ): ListTaskQueuePartitionsResponse;
}

export namespace ListTaskQueuePartitionsResponse {
  export type AsObject = {
    activityTaskQueuePartitionsList: Array<
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.AsObject
    >;
    workflowTaskQueuePartitionsList: Array<
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.AsObject
    >;
  };
}
