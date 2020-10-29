// package: temporal.api.workflow.v1
// file: temporal/api/workflow/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";
import * as temporal_api_failure_v1_message_pb from "../../../../temporal/api/failure/v1/message_pb";
import * as temporal_api_taskqueue_v1_message_pb from "../../../../temporal/api/taskqueue/v1/message_pb";

export class WorkflowExecutionInfo extends jspb.Message {
  hasExecution(): boolean;
  clearExecution(): void;
  getExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasType(): boolean;
  clearType(): void;
  getType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCloseTime(): boolean;
  clearCloseTime(): void;
  getCloseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap];
  setStatus(value: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap]): void;

  getHistoryLength(): number;
  setHistoryLength(value: number): void;

  getParentNamespaceId(): string;
  setParentNamespaceId(value: string): void;

  hasParentExecution(): boolean;
  clearParentExecution(): void;
  getParentExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setParentExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasExecutionTime(): boolean;
  clearExecutionTime(): void;
  getExecutionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  hasAutoResetPoints(): boolean;
  clearAutoResetPoints(): void;
  getAutoResetPoints(): ResetPoints | undefined;
  setAutoResetPoints(value?: ResetPoints): void;

  getTaskQueue(): string;
  setTaskQueue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionInfo): WorkflowExecutionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionInfo;
  static deserializeBinaryFromReader(message: WorkflowExecutionInfo, reader: jspb.BinaryReader): WorkflowExecutionInfo;
}

export namespace WorkflowExecutionInfo {
  export type AsObject = {
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    type?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowExecutionStatusMap],
    historyLength: number,
    parentNamespaceId: string,
    parentExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    executionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
    autoResetPoints?: ResetPoints.AsObject,
    taskQueue: string,
  }
}

export class WorkflowExecutionConfig extends jspb.Message {
  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  hasWorkflowExecutionTimeout(): boolean;
  clearWorkflowExecutionTimeout(): void;
  getWorkflowExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowExecutionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasDefaultWorkflowTaskTimeout(): boolean;
  clearDefaultWorkflowTaskTimeout(): void;
  getDefaultWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionConfig): WorkflowExecutionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionConfig;
  static deserializeBinaryFromReader(message: WorkflowExecutionConfig, reader: jspb.BinaryReader): WorkflowExecutionConfig;
}

export namespace WorkflowExecutionConfig {
  export type AsObject = {
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    workflowExecutionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    defaultWorkflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class PendingActivityInfo extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  hasActivityType(): boolean;
  clearActivityType(): void;
  getActivityType(): temporal_api_common_v1_message_pb.ActivityType | undefined;
  setActivityType(value?: temporal_api_common_v1_message_pb.ActivityType): void;

  getState(): temporal_api_enums_v1_workflow_pb.PendingActivityStateMap[keyof temporal_api_enums_v1_workflow_pb.PendingActivityStateMap];
  setState(value: temporal_api_enums_v1_workflow_pb.PendingActivityStateMap[keyof temporal_api_enums_v1_workflow_pb.PendingActivityStateMap]): void;

  hasHeartbeatDetails(): boolean;
  clearHeartbeatDetails(): void;
  getHeartbeatDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setHeartbeatDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasLastHeartbeatTime(): boolean;
  clearLastHeartbeatTime(): void;
  getLastHeartbeatTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastHeartbeatTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastStartedTime(): boolean;
  clearLastStartedTime(): void;
  getLastStartedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastStartedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  getMaximumAttempts(): number;
  setMaximumAttempts(value: number): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirationTime(): boolean;
  clearExpirationTime(): void;
  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastFailure(): boolean;
  clearLastFailure(): void;
  getLastFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setLastFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getLastWorkerIdentity(): string;
  setLastWorkerIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingActivityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PendingActivityInfo): PendingActivityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingActivityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingActivityInfo;
  static deserializeBinaryFromReader(message: PendingActivityInfo, reader: jspb.BinaryReader): PendingActivityInfo;
}

export namespace PendingActivityInfo {
  export type AsObject = {
    activityId: string,
    activityType?: temporal_api_common_v1_message_pb.ActivityType.AsObject,
    state: temporal_api_enums_v1_workflow_pb.PendingActivityStateMap[keyof temporal_api_enums_v1_workflow_pb.PendingActivityStateMap],
    heartbeatDetails?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    lastHeartbeatTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastStartedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attempt: number,
    maximumAttempts: number,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastFailure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    lastWorkerIdentity: string,
  }
}

export class PendingChildExecutionInfo extends jspb.Message {
  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getWorkflowTypeName(): string;
  setWorkflowTypeName(value: string): void;

  getInitiatedId(): number;
  setInitiatedId(value: number): void;

  getParentClosePolicy(): temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap];
  setParentClosePolicy(value: temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingChildExecutionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PendingChildExecutionInfo): PendingChildExecutionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingChildExecutionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingChildExecutionInfo;
  static deserializeBinaryFromReader(message: PendingChildExecutionInfo, reader: jspb.BinaryReader): PendingChildExecutionInfo;
}

export namespace PendingChildExecutionInfo {
  export type AsObject = {
    workflowId: string,
    runId: string,
    workflowTypeName: string,
    initiatedId: number,
    parentClosePolicy: temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap],
  }
}

export class ResetPoints extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<ResetPointInfo>;
  setPointsList(value: Array<ResetPointInfo>): void;
  addPoints(value?: ResetPointInfo, index?: number): ResetPointInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPoints.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPoints): ResetPoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPoints;
  static deserializeBinaryFromReader(message: ResetPoints, reader: jspb.BinaryReader): ResetPoints;
}

export namespace ResetPoints {
  export type AsObject = {
    pointsList: Array<ResetPointInfo.AsObject>,
  }
}

export class ResetPointInfo extends jspb.Message {
  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getFirstWorkflowTaskCompletedId(): number;
  setFirstWorkflowTaskCompletedId(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getResettable(): boolean;
  setResettable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPointInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPointInfo): ResetPointInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPointInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPointInfo;
  static deserializeBinaryFromReader(message: ResetPointInfo, reader: jspb.BinaryReader): ResetPointInfo;
}

export namespace ResetPointInfo {
  export type AsObject = {
    binaryChecksum: string,
    runId: string,
    firstWorkflowTaskCompletedId: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resettable: boolean,
  }
}

