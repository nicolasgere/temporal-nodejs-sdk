// package: temporal.api.history.v1
// file: temporal/api/history/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_event_type_pb from "../../../../temporal/api/enums/v1/event_type_pb";
import * as temporal_api_enums_v1_failed_cause_pb from "../../../../temporal/api/enums/v1/failed_cause_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";
import * as temporal_api_failure_v1_message_pb from "../../../../temporal/api/failure/v1/message_pb";
import * as temporal_api_workflow_v1_message_pb from "../../../../temporal/api/workflow/v1/message_pb";
import * as temporal_api_taskqueue_v1_message_pb from "../../../../temporal/api/taskqueue/v1/message_pb";

export class WorkflowExecutionStartedEventAttributes extends jspb.Message {
  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getParentWorkflowNamespace(): string;
  setParentWorkflowNamespace(value: string): void;

  hasParentWorkflowExecution(): boolean;
  clearParentWorkflowExecution(): void;
  getParentWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setParentWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getParentInitiatedEventId(): number;
  setParentInitiatedEventId(value: number): void;

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
  getWorkflowExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowExecutionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowTaskTimeout(): boolean;
  clearWorkflowTaskTimeout(): void;
  getWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getContinuedExecutionRunId(): string;
  setContinuedExecutionRunId(value: string): void;

  getInitiator(): temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap];
  setInitiator(value: temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap]): void;

  hasContinuedFailure(): boolean;
  clearContinuedFailure(): void;
  getContinuedFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setContinuedFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  hasLastCompletionResult(): boolean;
  clearLastCompletionResult(): void;
  getLastCompletionResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setLastCompletionResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getOriginalExecutionRunId(): string;
  setOriginalExecutionRunId(value: string): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getFirstExecutionRunId(): string;
  setFirstExecutionRunId(value: string): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  hasWorkflowExecutionExpirationTime(): boolean;
  clearWorkflowExecutionExpirationTime(): void;
  getWorkflowExecutionExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWorkflowExecutionExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCronSchedule(): string;
  setCronSchedule(value: string): void;

  hasFirstWorkflowTaskBackoff(): boolean;
  clearFirstWorkflowTaskBackoff(): void;
  getFirstWorkflowTaskBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setFirstWorkflowTaskBackoff(value?: google_protobuf_duration_pb.Duration): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  hasPrevAutoResetPoints(): boolean;
  clearPrevAutoResetPoints(): void;
  getPrevAutoResetPoints(): temporal_api_workflow_v1_message_pb.ResetPoints | undefined;
  setPrevAutoResetPoints(value?: temporal_api_workflow_v1_message_pb.ResetPoints): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionStartedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionStartedEventAttributes): WorkflowExecutionStartedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionStartedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionStartedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionStartedEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionStartedEventAttributes;
}

export namespace WorkflowExecutionStartedEventAttributes {
  export type AsObject = {
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    parentWorkflowNamespace: string,
    parentWorkflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    parentInitiatedEventId: number,
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    workflowExecutionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    continuedExecutionRunId: string,
    initiator: temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap],
    continuedFailure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    lastCompletionResult?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    originalExecutionRunId: string,
    identity: string,
    firstExecutionRunId: string,
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
    attempt: number,
    workflowExecutionExpirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cronSchedule: string,
    firstWorkflowTaskBackoff?: google_protobuf_duration_pb.Duration.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
    prevAutoResetPoints?: temporal_api_workflow_v1_message_pb.ResetPoints.AsObject,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
  }
}

export class WorkflowExecutionCompletedEventAttributes extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionCompletedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionCompletedEventAttributes): WorkflowExecutionCompletedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionCompletedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionCompletedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionCompletedEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionCompletedEventAttributes;
}

export namespace WorkflowExecutionCompletedEventAttributes {
  export type AsObject = {
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    workflowTaskCompletedEventId: number,
  }
}

export class WorkflowExecutionFailedEventAttributes extends jspb.Message {
  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionFailedEventAttributes): WorkflowExecutionFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionFailedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionFailedEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionFailedEventAttributes;
}

export namespace WorkflowExecutionFailedEventAttributes {
  export type AsObject = {
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
    workflowTaskCompletedEventId: number,
  }
}

export class WorkflowExecutionTimedOutEventAttributes extends jspb.Message {
  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionTimedOutEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionTimedOutEventAttributes): WorkflowExecutionTimedOutEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionTimedOutEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionTimedOutEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionTimedOutEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionTimedOutEventAttributes;
}

export namespace WorkflowExecutionTimedOutEventAttributes {
  export type AsObject = {
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class WorkflowExecutionContinuedAsNewEventAttributes extends jspb.Message {
  getNewExecutionRunId(): string;
  setNewExecutionRunId(value: string): void;

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

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowTaskTimeout(): boolean;
  clearWorkflowTaskTimeout(): void;
  getWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  hasBackoffStartInterval(): boolean;
  clearBackoffStartInterval(): void;
  getBackoffStartInterval(): google_protobuf_duration_pb.Duration | undefined;
  setBackoffStartInterval(value?: google_protobuf_duration_pb.Duration): void;

  getInitiator(): temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap];
  setInitiator(value: temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap]): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  hasLastCompletionResult(): boolean;
  clearLastCompletionResult(): void;
  getLastCompletionResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setLastCompletionResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionContinuedAsNewEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionContinuedAsNewEventAttributes): WorkflowExecutionContinuedAsNewEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionContinuedAsNewEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionContinuedAsNewEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionContinuedAsNewEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionContinuedAsNewEventAttributes;
}

export namespace WorkflowExecutionContinuedAsNewEventAttributes {
  export type AsObject = {
    newExecutionRunId: string,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskCompletedEventId: number,
    backoffStartInterval?: google_protobuf_duration_pb.Duration.AsObject,
    initiator: temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap],
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    lastCompletionResult?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class WorkflowTaskScheduledEventAttributes extends jspb.Message {
  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  hasStartToCloseTimeout(): boolean;
  clearStartToCloseTimeout(): void;
  getStartToCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStartToCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTaskScheduledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTaskScheduledEventAttributes): WorkflowTaskScheduledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTaskScheduledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTaskScheduledEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowTaskScheduledEventAttributes, reader: jspb.BinaryReader): WorkflowTaskScheduledEventAttributes;
}

export namespace WorkflowTaskScheduledEventAttributes {
  export type AsObject = {
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    startToCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    attempt: number,
  }
}

export class WorkflowTaskStartedEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTaskStartedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTaskStartedEventAttributes): WorkflowTaskStartedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTaskStartedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTaskStartedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowTaskStartedEventAttributes, reader: jspb.BinaryReader): WorkflowTaskStartedEventAttributes;
}

export namespace WorkflowTaskStartedEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    identity: string,
    requestId: string,
  }
}

export class WorkflowTaskCompletedEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTaskCompletedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTaskCompletedEventAttributes): WorkflowTaskCompletedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTaskCompletedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTaskCompletedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowTaskCompletedEventAttributes, reader: jspb.BinaryReader): WorkflowTaskCompletedEventAttributes;
}

export namespace WorkflowTaskCompletedEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    startedEventId: number,
    identity: string,
    binaryChecksum: string,
  }
}

export class WorkflowTaskTimedOutEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getTimeoutType(): temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap];
  setTimeoutType(value: temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTaskTimedOutEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTaskTimedOutEventAttributes): WorkflowTaskTimedOutEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTaskTimedOutEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTaskTimedOutEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowTaskTimedOutEventAttributes, reader: jspb.BinaryReader): WorkflowTaskTimedOutEventAttributes;
}

export namespace WorkflowTaskTimedOutEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    startedEventId: number,
    timeoutType: temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap],
  }
}

export class WorkflowTaskFailedEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getCause(): temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap];
  setCause(value: temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap]): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getBaseRunId(): string;
  setBaseRunId(value: string): void;

  getNewRunId(): string;
  setNewRunId(value: string): void;

  getForkEventVersion(): number;
  setForkEventVersion(value: number): void;

  getBinaryChecksum(): string;
  setBinaryChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTaskFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTaskFailedEventAttributes): WorkflowTaskFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTaskFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTaskFailedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowTaskFailedEventAttributes, reader: jspb.BinaryReader): WorkflowTaskFailedEventAttributes;
}

export namespace WorkflowTaskFailedEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    startedEventId: number,
    cause: temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.WorkflowTaskFailedCauseMap],
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    identity: string,
    baseRunId: string,
    newRunId: string,
    forkEventVersion: number,
    binaryChecksum: string,
  }
}

export class ActivityTaskScheduledEventAttributes extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  hasActivityType(): boolean;
  clearActivityType(): void;
  getActivityType(): temporal_api_common_v1_message_pb.ActivityType | undefined;
  setActivityType(value?: temporal_api_common_v1_message_pb.ActivityType): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasTaskQueue(): boolean;
  clearTaskQueue(): void;
  getTaskQueue(): temporal_api_taskqueue_v1_message_pb.TaskQueue | undefined;
  setTaskQueue(value?: temporal_api_taskqueue_v1_message_pb.TaskQueue): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  hasScheduleToCloseTimeout(): boolean;
  clearScheduleToCloseTimeout(): void;
  getScheduleToCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setScheduleToCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasScheduleToStartTimeout(): boolean;
  clearScheduleToStartTimeout(): void;
  getScheduleToStartTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setScheduleToStartTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasStartToCloseTimeout(): boolean;
  clearStartToCloseTimeout(): void;
  getStartToCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStartToCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasHeartbeatTimeout(): boolean;
  clearHeartbeatTimeout(): void;
  getHeartbeatTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setHeartbeatTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskScheduledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskScheduledEventAttributes): ActivityTaskScheduledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskScheduledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskScheduledEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskScheduledEventAttributes, reader: jspb.BinaryReader): ActivityTaskScheduledEventAttributes;
}

export namespace ActivityTaskScheduledEventAttributes {
  export type AsObject = {
    activityId: string,
    activityType?: temporal_api_common_v1_message_pb.ActivityType.AsObject,
    namespace: string,
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    scheduleToCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    scheduleToStartTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    startToCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    heartbeatTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskCompletedEventId: number,
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
  }
}

export class ActivityTaskStartedEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  hasLastFailure(): boolean;
  clearLastFailure(): void;
  getLastFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setLastFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskStartedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskStartedEventAttributes): ActivityTaskStartedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskStartedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskStartedEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskStartedEventAttributes, reader: jspb.BinaryReader): ActivityTaskStartedEventAttributes;
}

export namespace ActivityTaskStartedEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    identity: string,
    requestId: string,
    attempt: number,
    lastFailure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
  }
}

export class ActivityTaskCompletedEventAttributes extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskCompletedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskCompletedEventAttributes): ActivityTaskCompletedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskCompletedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskCompletedEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskCompletedEventAttributes, reader: jspb.BinaryReader): ActivityTaskCompletedEventAttributes;
}

export namespace ActivityTaskCompletedEventAttributes {
  export type AsObject = {
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    scheduledEventId: number,
    startedEventId: number,
    identity: string,
  }
}

export class ActivityTaskFailedEventAttributes extends jspb.Message {
  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskFailedEventAttributes): ActivityTaskFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskFailedEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskFailedEventAttributes, reader: jspb.BinaryReader): ActivityTaskFailedEventAttributes;
}

export namespace ActivityTaskFailedEventAttributes {
  export type AsObject = {
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    scheduledEventId: number,
    startedEventId: number,
    identity: string,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class ActivityTaskTimedOutEventAttributes extends jspb.Message {
  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskTimedOutEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskTimedOutEventAttributes): ActivityTaskTimedOutEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskTimedOutEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskTimedOutEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskTimedOutEventAttributes, reader: jspb.BinaryReader): ActivityTaskTimedOutEventAttributes;
}

export namespace ActivityTaskTimedOutEventAttributes {
  export type AsObject = {
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    scheduledEventId: number,
    startedEventId: number,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class ActivityTaskCancelRequestedEventAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskCancelRequestedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskCancelRequestedEventAttributes): ActivityTaskCancelRequestedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskCancelRequestedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskCancelRequestedEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskCancelRequestedEventAttributes, reader: jspb.BinaryReader): ActivityTaskCancelRequestedEventAttributes;
}

export namespace ActivityTaskCancelRequestedEventAttributes {
  export type AsObject = {
    scheduledEventId: number,
    workflowTaskCompletedEventId: number,
  }
}

export class ActivityTaskCanceledEventAttributes extends jspb.Message {
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getLatestCancelRequestedEventId(): number;
  setLatestCancelRequestedEventId(value: number): void;

  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTaskCanceledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTaskCanceledEventAttributes): ActivityTaskCanceledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityTaskCanceledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTaskCanceledEventAttributes;
  static deserializeBinaryFromReader(message: ActivityTaskCanceledEventAttributes, reader: jspb.BinaryReader): ActivityTaskCanceledEventAttributes;
}

export namespace ActivityTaskCanceledEventAttributes {
  export type AsObject = {
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    latestCancelRequestedEventId: number,
    scheduledEventId: number,
    startedEventId: number,
    identity: string,
  }
}

export class TimerStartedEventAttributes extends jspb.Message {
  getTimerId(): string;
  setTimerId(value: string): void;

  hasStartToFireTimeout(): boolean;
  clearStartToFireTimeout(): void;
  getStartToFireTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStartToFireTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimerStartedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TimerStartedEventAttributes): TimerStartedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimerStartedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimerStartedEventAttributes;
  static deserializeBinaryFromReader(message: TimerStartedEventAttributes, reader: jspb.BinaryReader): TimerStartedEventAttributes;
}

export namespace TimerStartedEventAttributes {
  export type AsObject = {
    timerId: string,
    startToFireTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskCompletedEventId: number,
  }
}

export class TimerFiredEventAttributes extends jspb.Message {
  getTimerId(): string;
  setTimerId(value: string): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimerFiredEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TimerFiredEventAttributes): TimerFiredEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimerFiredEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimerFiredEventAttributes;
  static deserializeBinaryFromReader(message: TimerFiredEventAttributes, reader: jspb.BinaryReader): TimerFiredEventAttributes;
}

export namespace TimerFiredEventAttributes {
  export type AsObject = {
    timerId: string,
    startedEventId: number,
  }
}

export class TimerCanceledEventAttributes extends jspb.Message {
  getTimerId(): string;
  setTimerId(value: string): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimerCanceledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TimerCanceledEventAttributes): TimerCanceledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimerCanceledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimerCanceledEventAttributes;
  static deserializeBinaryFromReader(message: TimerCanceledEventAttributes, reader: jspb.BinaryReader): TimerCanceledEventAttributes;
}

export namespace TimerCanceledEventAttributes {
  export type AsObject = {
    timerId: string,
    startedEventId: number,
    workflowTaskCompletedEventId: number,
    identity: string,
  }
}

export class WorkflowExecutionCancelRequestedEventAttributes extends jspb.Message {
  getCause(): string;
  setCause(value: string): void;

  getExternalInitiatedEventId(): number;
  setExternalInitiatedEventId(value: number): void;

  hasExternalWorkflowExecution(): boolean;
  clearExternalWorkflowExecution(): void;
  getExternalWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setExternalWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionCancelRequestedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionCancelRequestedEventAttributes): WorkflowExecutionCancelRequestedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionCancelRequestedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionCancelRequestedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionCancelRequestedEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionCancelRequestedEventAttributes;
}

export namespace WorkflowExecutionCancelRequestedEventAttributes {
  export type AsObject = {
    cause: string,
    externalInitiatedEventId: number,
    externalWorkflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    identity: string,
  }
}

export class WorkflowExecutionCanceledEventAttributes extends jspb.Message {
  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionCanceledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionCanceledEventAttributes): WorkflowExecutionCanceledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionCanceledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionCanceledEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionCanceledEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionCanceledEventAttributes;
}

export namespace WorkflowExecutionCanceledEventAttributes {
  export type AsObject = {
    workflowTaskCompletedEventId: number,
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class MarkerRecordedEventAttributes extends jspb.Message {
  getMarkerName(): string;
  setMarkerName(value: string): void;

  getDetailsMap(): jspb.Map<string, temporal_api_common_v1_message_pb.Payloads>;
  clearDetailsMap(): void;
  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkerRecordedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: MarkerRecordedEventAttributes): MarkerRecordedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkerRecordedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkerRecordedEventAttributes;
  static deserializeBinaryFromReader(message: MarkerRecordedEventAttributes, reader: jspb.BinaryReader): MarkerRecordedEventAttributes;
}

export namespace MarkerRecordedEventAttributes {
  export type AsObject = {
    markerName: string,
    detailsMap: Array<[string, temporal_api_common_v1_message_pb.Payloads.AsObject]>,
    workflowTaskCompletedEventId: number,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
  }
}

export class WorkflowExecutionSignaledEventAttributes extends jspb.Message {
  getSignalName(): string;
  setSignalName(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionSignaledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionSignaledEventAttributes): WorkflowExecutionSignaledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionSignaledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionSignaledEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionSignaledEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionSignaledEventAttributes;
}

export namespace WorkflowExecutionSignaledEventAttributes {
  export type AsObject = {
    signalName: string,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    identity: string,
  }
}

export class WorkflowExecutionTerminatedEventAttributes extends jspb.Message {
  getReason(): string;
  setReason(value: string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionTerminatedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionTerminatedEventAttributes): WorkflowExecutionTerminatedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionTerminatedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionTerminatedEventAttributes;
  static deserializeBinaryFromReader(message: WorkflowExecutionTerminatedEventAttributes, reader: jspb.BinaryReader): WorkflowExecutionTerminatedEventAttributes;
}

export namespace WorkflowExecutionTerminatedEventAttributes {
  export type AsObject = {
    reason: string,
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    identity: string,
  }
}

export class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes extends jspb.Message {
  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getControl(): string;
  setControl(value: string): void;

  getChildWorkflowOnly(): boolean;
  setChildWorkflowOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
  static deserializeBinaryFromReader(message: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes, reader: jspb.BinaryReader): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
}

export namespace RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  export type AsObject = {
    workflowTaskCompletedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    control: string,
    childWorkflowOnly: boolean,
  }
}

export class RequestCancelExternalWorkflowExecutionFailedEventAttributes extends jspb.Message {
  getCause(): temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap];
  setCause(value: temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap]): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getControl(): string;
  setControl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCancelExternalWorkflowExecutionFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCancelExternalWorkflowExecutionFailedEventAttributes): RequestCancelExternalWorkflowExecutionFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCancelExternalWorkflowExecutionFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCancelExternalWorkflowExecutionFailedEventAttributes;
  static deserializeBinaryFromReader(message: RequestCancelExternalWorkflowExecutionFailedEventAttributes, reader: jspb.BinaryReader): RequestCancelExternalWorkflowExecutionFailedEventAttributes;
}

export namespace RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  export type AsObject = {
    cause: temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.CancelExternalWorkflowExecutionFailedCauseMap],
    workflowTaskCompletedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    initiatedEventId: number,
    control: string,
  }
}

export class ExternalWorkflowExecutionCancelRequestedEventAttributes extends jspb.Message {
  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalWorkflowExecutionCancelRequestedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalWorkflowExecutionCancelRequestedEventAttributes): ExternalWorkflowExecutionCancelRequestedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalWorkflowExecutionCancelRequestedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalWorkflowExecutionCancelRequestedEventAttributes;
  static deserializeBinaryFromReader(message: ExternalWorkflowExecutionCancelRequestedEventAttributes, reader: jspb.BinaryReader): ExternalWorkflowExecutionCancelRequestedEventAttributes;
}

export namespace ExternalWorkflowExecutionCancelRequestedEventAttributes {
  export type AsObject = {
    initiatedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
  }
}

export class SignalExternalWorkflowExecutionInitiatedEventAttributes extends jspb.Message {
  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getSignalName(): string;
  setSignalName(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setInput(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getControl(): string;
  setControl(value: string): void;

  getChildWorkflowOnly(): boolean;
  setChildWorkflowOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalExternalWorkflowExecutionInitiatedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SignalExternalWorkflowExecutionInitiatedEventAttributes): SignalExternalWorkflowExecutionInitiatedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalExternalWorkflowExecutionInitiatedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalExternalWorkflowExecutionInitiatedEventAttributes;
  static deserializeBinaryFromReader(message: SignalExternalWorkflowExecutionInitiatedEventAttributes, reader: jspb.BinaryReader): SignalExternalWorkflowExecutionInitiatedEventAttributes;
}

export namespace SignalExternalWorkflowExecutionInitiatedEventAttributes {
  export type AsObject = {
    workflowTaskCompletedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    signalName: string,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    control: string,
    childWorkflowOnly: boolean,
  }
}

export class SignalExternalWorkflowExecutionFailedEventAttributes extends jspb.Message {
  getCause(): temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap];
  setCause(value: temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap]): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getControl(): string;
  setControl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalExternalWorkflowExecutionFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SignalExternalWorkflowExecutionFailedEventAttributes): SignalExternalWorkflowExecutionFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalExternalWorkflowExecutionFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalExternalWorkflowExecutionFailedEventAttributes;
  static deserializeBinaryFromReader(message: SignalExternalWorkflowExecutionFailedEventAttributes, reader: jspb.BinaryReader): SignalExternalWorkflowExecutionFailedEventAttributes;
}

export namespace SignalExternalWorkflowExecutionFailedEventAttributes {
  export type AsObject = {
    cause: temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.SignalExternalWorkflowExecutionFailedCauseMap],
    workflowTaskCompletedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    initiatedEventId: number,
    control: string,
  }
}

export class ExternalWorkflowExecutionSignaledEventAttributes extends jspb.Message {
  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  getControl(): string;
  setControl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalWorkflowExecutionSignaledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalWorkflowExecutionSignaledEventAttributes): ExternalWorkflowExecutionSignaledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalWorkflowExecutionSignaledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalWorkflowExecutionSignaledEventAttributes;
  static deserializeBinaryFromReader(message: ExternalWorkflowExecutionSignaledEventAttributes, reader: jspb.BinaryReader): ExternalWorkflowExecutionSignaledEventAttributes;
}

export namespace ExternalWorkflowExecutionSignaledEventAttributes {
  export type AsObject = {
    initiatedEventId: number,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    control: string,
  }
}

export class UpsertWorkflowSearchAttributesEventAttributes extends jspb.Message {
  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertWorkflowSearchAttributesEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertWorkflowSearchAttributesEventAttributes): UpsertWorkflowSearchAttributesEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertWorkflowSearchAttributesEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertWorkflowSearchAttributesEventAttributes;
  static deserializeBinaryFromReader(message: UpsertWorkflowSearchAttributesEventAttributes, reader: jspb.BinaryReader): UpsertWorkflowSearchAttributesEventAttributes;
}

export namespace UpsertWorkflowSearchAttributesEventAttributes {
  export type AsObject = {
    workflowTaskCompletedEventId: number,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class StartChildWorkflowExecutionInitiatedEventAttributes extends jspb.Message {
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
  getWorkflowExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowExecutionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowRunTimeout(): boolean;
  clearWorkflowRunTimeout(): void;
  getWorkflowRunTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowRunTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWorkflowTaskTimeout(): boolean;
  clearWorkflowTaskTimeout(): void;
  getWorkflowTaskTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWorkflowTaskTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getParentClosePolicy(): temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap];
  setParentClosePolicy(value: temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap]): void;

  getControl(): string;
  setControl(value: string): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  getWorkflowIdReusePolicy(): temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap];
  setWorkflowIdReusePolicy(value: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap]): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  getCronSchedule(): string;
  setCronSchedule(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): temporal_api_common_v1_message_pb.Memo | undefined;
  setMemo(value?: temporal_api_common_v1_message_pb.Memo): void;

  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartChildWorkflowExecutionInitiatedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: StartChildWorkflowExecutionInitiatedEventAttributes): StartChildWorkflowExecutionInitiatedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartChildWorkflowExecutionInitiatedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartChildWorkflowExecutionInitiatedEventAttributes;
  static deserializeBinaryFromReader(message: StartChildWorkflowExecutionInitiatedEventAttributes, reader: jspb.BinaryReader): StartChildWorkflowExecutionInitiatedEventAttributes;
}

export namespace StartChildWorkflowExecutionInitiatedEventAttributes {
  export type AsObject = {
    namespace: string,
    workflowId: string,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    workflowExecutionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    parentClosePolicy: temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap[keyof temporal_api_enums_v1_workflow_pb.ParentClosePolicyMap],
    control: string,
    workflowTaskCompletedEventId: number,
    workflowIdReusePolicy: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap],
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
    cronSchedule: string,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class StartChildWorkflowExecutionFailedEventAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getCause(): temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap];
  setCause(value: temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap]): void;

  getControl(): string;
  setControl(value: string): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getWorkflowTaskCompletedEventId(): number;
  setWorkflowTaskCompletedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartChildWorkflowExecutionFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: StartChildWorkflowExecutionFailedEventAttributes): StartChildWorkflowExecutionFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartChildWorkflowExecutionFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartChildWorkflowExecutionFailedEventAttributes;
  static deserializeBinaryFromReader(message: StartChildWorkflowExecutionFailedEventAttributes, reader: jspb.BinaryReader): StartChildWorkflowExecutionFailedEventAttributes;
}

export namespace StartChildWorkflowExecutionFailedEventAttributes {
  export type AsObject = {
    namespace: string,
    workflowId: string,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    cause: temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap[keyof temporal_api_enums_v1_failed_cause_pb.StartChildWorkflowExecutionFailedCauseMap],
    control: string,
    initiatedEventId: number,
    workflowTaskCompletedEventId: number,
  }
}

export class ChildWorkflowExecutionStartedEventAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionStartedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionStartedEventAttributes): ChildWorkflowExecutionStartedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionStartedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionStartedEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionStartedEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionStartedEventAttributes;
}

export namespace ChildWorkflowExecutionStartedEventAttributes {
  export type AsObject = {
    namespace: string,
    initiatedEventId: number,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
  }
}

export class ChildWorkflowExecutionCompletedEventAttributes extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionCompletedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionCompletedEventAttributes): ChildWorkflowExecutionCompletedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionCompletedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionCompletedEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionCompletedEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionCompletedEventAttributes;
}

export namespace ChildWorkflowExecutionCompletedEventAttributes {
  export type AsObject = {
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
  }
}

export class ChildWorkflowExecutionFailedEventAttributes extends jspb.Message {
  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionFailedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionFailedEventAttributes): ChildWorkflowExecutionFailedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionFailedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionFailedEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionFailedEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionFailedEventAttributes;
}

export namespace ChildWorkflowExecutionFailedEventAttributes {
  export type AsObject = {
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class ChildWorkflowExecutionCanceledEventAttributes extends jspb.Message {
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionCanceledEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionCanceledEventAttributes): ChildWorkflowExecutionCanceledEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionCanceledEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionCanceledEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionCanceledEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionCanceledEventAttributes;
}

export namespace ChildWorkflowExecutionCanceledEventAttributes {
  export type AsObject = {
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
  }
}

export class ChildWorkflowExecutionTimedOutEventAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionTimedOutEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionTimedOutEventAttributes): ChildWorkflowExecutionTimedOutEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionTimedOutEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionTimedOutEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionTimedOutEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionTimedOutEventAttributes;
}

export namespace ChildWorkflowExecutionTimedOutEventAttributes {
  export type AsObject = {
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class ChildWorkflowExecutionTerminatedEventAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasWorkflowExecution(): boolean;
  clearWorkflowExecution(): void;
  getWorkflowExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setWorkflowExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

  hasWorkflowType(): boolean;
  clearWorkflowType(): void;
  getWorkflowType(): temporal_api_common_v1_message_pb.WorkflowType | undefined;
  setWorkflowType(value?: temporal_api_common_v1_message_pb.WorkflowType): void;

  getInitiatedEventId(): number;
  setInitiatedEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildWorkflowExecutionTerminatedEventAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionTerminatedEventAttributes): ChildWorkflowExecutionTerminatedEventAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionTerminatedEventAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionTerminatedEventAttributes;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionTerminatedEventAttributes, reader: jspb.BinaryReader): ChildWorkflowExecutionTerminatedEventAttributes;
}

export namespace ChildWorkflowExecutionTerminatedEventAttributes {
  export type AsObject = {
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
  }
}

export class HistoryEvent extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEventType(): temporal_api_enums_v1_event_type_pb.EventTypeMap[keyof temporal_api_enums_v1_event_type_pb.EventTypeMap];
  setEventType(value: temporal_api_enums_v1_event_type_pb.EventTypeMap[keyof temporal_api_enums_v1_event_type_pb.EventTypeMap]): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTaskId(): number;
  setTaskId(value: number): void;

  hasWorkflowExecutionStartedEventAttributes(): boolean;
  clearWorkflowExecutionStartedEventAttributes(): void;
  getWorkflowExecutionStartedEventAttributes(): WorkflowExecutionStartedEventAttributes | undefined;
  setWorkflowExecutionStartedEventAttributes(value?: WorkflowExecutionStartedEventAttributes): void;

  hasWorkflowExecutionCompletedEventAttributes(): boolean;
  clearWorkflowExecutionCompletedEventAttributes(): void;
  getWorkflowExecutionCompletedEventAttributes(): WorkflowExecutionCompletedEventAttributes | undefined;
  setWorkflowExecutionCompletedEventAttributes(value?: WorkflowExecutionCompletedEventAttributes): void;

  hasWorkflowExecutionFailedEventAttributes(): boolean;
  clearWorkflowExecutionFailedEventAttributes(): void;
  getWorkflowExecutionFailedEventAttributes(): WorkflowExecutionFailedEventAttributes | undefined;
  setWorkflowExecutionFailedEventAttributes(value?: WorkflowExecutionFailedEventAttributes): void;

  hasWorkflowExecutionTimedOutEventAttributes(): boolean;
  clearWorkflowExecutionTimedOutEventAttributes(): void;
  getWorkflowExecutionTimedOutEventAttributes(): WorkflowExecutionTimedOutEventAttributes | undefined;
  setWorkflowExecutionTimedOutEventAttributes(value?: WorkflowExecutionTimedOutEventAttributes): void;

  hasWorkflowTaskScheduledEventAttributes(): boolean;
  clearWorkflowTaskScheduledEventAttributes(): void;
  getWorkflowTaskScheduledEventAttributes(): WorkflowTaskScheduledEventAttributes | undefined;
  setWorkflowTaskScheduledEventAttributes(value?: WorkflowTaskScheduledEventAttributes): void;

  hasWorkflowTaskStartedEventAttributes(): boolean;
  clearWorkflowTaskStartedEventAttributes(): void;
  getWorkflowTaskStartedEventAttributes(): WorkflowTaskStartedEventAttributes | undefined;
  setWorkflowTaskStartedEventAttributes(value?: WorkflowTaskStartedEventAttributes): void;

  hasWorkflowTaskCompletedEventAttributes(): boolean;
  clearWorkflowTaskCompletedEventAttributes(): void;
  getWorkflowTaskCompletedEventAttributes(): WorkflowTaskCompletedEventAttributes | undefined;
  setWorkflowTaskCompletedEventAttributes(value?: WorkflowTaskCompletedEventAttributes): void;

  hasWorkflowTaskTimedOutEventAttributes(): boolean;
  clearWorkflowTaskTimedOutEventAttributes(): void;
  getWorkflowTaskTimedOutEventAttributes(): WorkflowTaskTimedOutEventAttributes | undefined;
  setWorkflowTaskTimedOutEventAttributes(value?: WorkflowTaskTimedOutEventAttributes): void;

  hasWorkflowTaskFailedEventAttributes(): boolean;
  clearWorkflowTaskFailedEventAttributes(): void;
  getWorkflowTaskFailedEventAttributes(): WorkflowTaskFailedEventAttributes | undefined;
  setWorkflowTaskFailedEventAttributes(value?: WorkflowTaskFailedEventAttributes): void;

  hasActivityTaskScheduledEventAttributes(): boolean;
  clearActivityTaskScheduledEventAttributes(): void;
  getActivityTaskScheduledEventAttributes(): ActivityTaskScheduledEventAttributes | undefined;
  setActivityTaskScheduledEventAttributes(value?: ActivityTaskScheduledEventAttributes): void;

  hasActivityTaskStartedEventAttributes(): boolean;
  clearActivityTaskStartedEventAttributes(): void;
  getActivityTaskStartedEventAttributes(): ActivityTaskStartedEventAttributes | undefined;
  setActivityTaskStartedEventAttributes(value?: ActivityTaskStartedEventAttributes): void;

  hasActivityTaskCompletedEventAttributes(): boolean;
  clearActivityTaskCompletedEventAttributes(): void;
  getActivityTaskCompletedEventAttributes(): ActivityTaskCompletedEventAttributes | undefined;
  setActivityTaskCompletedEventAttributes(value?: ActivityTaskCompletedEventAttributes): void;

  hasActivityTaskFailedEventAttributes(): boolean;
  clearActivityTaskFailedEventAttributes(): void;
  getActivityTaskFailedEventAttributes(): ActivityTaskFailedEventAttributes | undefined;
  setActivityTaskFailedEventAttributes(value?: ActivityTaskFailedEventAttributes): void;

  hasActivityTaskTimedOutEventAttributes(): boolean;
  clearActivityTaskTimedOutEventAttributes(): void;
  getActivityTaskTimedOutEventAttributes(): ActivityTaskTimedOutEventAttributes | undefined;
  setActivityTaskTimedOutEventAttributes(value?: ActivityTaskTimedOutEventAttributes): void;

  hasTimerStartedEventAttributes(): boolean;
  clearTimerStartedEventAttributes(): void;
  getTimerStartedEventAttributes(): TimerStartedEventAttributes | undefined;
  setTimerStartedEventAttributes(value?: TimerStartedEventAttributes): void;

  hasTimerFiredEventAttributes(): boolean;
  clearTimerFiredEventAttributes(): void;
  getTimerFiredEventAttributes(): TimerFiredEventAttributes | undefined;
  setTimerFiredEventAttributes(value?: TimerFiredEventAttributes): void;

  hasActivityTaskCancelRequestedEventAttributes(): boolean;
  clearActivityTaskCancelRequestedEventAttributes(): void;
  getActivityTaskCancelRequestedEventAttributes(): ActivityTaskCancelRequestedEventAttributes | undefined;
  setActivityTaskCancelRequestedEventAttributes(value?: ActivityTaskCancelRequestedEventAttributes): void;

  hasActivityTaskCanceledEventAttributes(): boolean;
  clearActivityTaskCanceledEventAttributes(): void;
  getActivityTaskCanceledEventAttributes(): ActivityTaskCanceledEventAttributes | undefined;
  setActivityTaskCanceledEventAttributes(value?: ActivityTaskCanceledEventAttributes): void;

  hasTimerCanceledEventAttributes(): boolean;
  clearTimerCanceledEventAttributes(): void;
  getTimerCanceledEventAttributes(): TimerCanceledEventAttributes | undefined;
  setTimerCanceledEventAttributes(value?: TimerCanceledEventAttributes): void;

  hasMarkerRecordedEventAttributes(): boolean;
  clearMarkerRecordedEventAttributes(): void;
  getMarkerRecordedEventAttributes(): MarkerRecordedEventAttributes | undefined;
  setMarkerRecordedEventAttributes(value?: MarkerRecordedEventAttributes): void;

  hasWorkflowExecutionSignaledEventAttributes(): boolean;
  clearWorkflowExecutionSignaledEventAttributes(): void;
  getWorkflowExecutionSignaledEventAttributes(): WorkflowExecutionSignaledEventAttributes | undefined;
  setWorkflowExecutionSignaledEventAttributes(value?: WorkflowExecutionSignaledEventAttributes): void;

  hasWorkflowExecutionTerminatedEventAttributes(): boolean;
  clearWorkflowExecutionTerminatedEventAttributes(): void;
  getWorkflowExecutionTerminatedEventAttributes(): WorkflowExecutionTerminatedEventAttributes | undefined;
  setWorkflowExecutionTerminatedEventAttributes(value?: WorkflowExecutionTerminatedEventAttributes): void;

  hasWorkflowExecutionCancelRequestedEventAttributes(): boolean;
  clearWorkflowExecutionCancelRequestedEventAttributes(): void;
  getWorkflowExecutionCancelRequestedEventAttributes(): WorkflowExecutionCancelRequestedEventAttributes | undefined;
  setWorkflowExecutionCancelRequestedEventAttributes(value?: WorkflowExecutionCancelRequestedEventAttributes): void;

  hasWorkflowExecutionCanceledEventAttributes(): boolean;
  clearWorkflowExecutionCanceledEventAttributes(): void;
  getWorkflowExecutionCanceledEventAttributes(): WorkflowExecutionCanceledEventAttributes | undefined;
  setWorkflowExecutionCanceledEventAttributes(value?: WorkflowExecutionCanceledEventAttributes): void;

  hasRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(): boolean;
  clearRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(): void;
  getRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | undefined;
  setRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(value?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes): void;

  hasRequestCancelExternalWorkflowExecutionFailedEventAttributes(): boolean;
  clearRequestCancelExternalWorkflowExecutionFailedEventAttributes(): void;
  getRequestCancelExternalWorkflowExecutionFailedEventAttributes(): RequestCancelExternalWorkflowExecutionFailedEventAttributes | undefined;
  setRequestCancelExternalWorkflowExecutionFailedEventAttributes(value?: RequestCancelExternalWorkflowExecutionFailedEventAttributes): void;

  hasExternalWorkflowExecutionCancelRequestedEventAttributes(): boolean;
  clearExternalWorkflowExecutionCancelRequestedEventAttributes(): void;
  getExternalWorkflowExecutionCancelRequestedEventAttributes(): ExternalWorkflowExecutionCancelRequestedEventAttributes | undefined;
  setExternalWorkflowExecutionCancelRequestedEventAttributes(value?: ExternalWorkflowExecutionCancelRequestedEventAttributes): void;

  hasWorkflowExecutionContinuedAsNewEventAttributes(): boolean;
  clearWorkflowExecutionContinuedAsNewEventAttributes(): void;
  getWorkflowExecutionContinuedAsNewEventAttributes(): WorkflowExecutionContinuedAsNewEventAttributes | undefined;
  setWorkflowExecutionContinuedAsNewEventAttributes(value?: WorkflowExecutionContinuedAsNewEventAttributes): void;

  hasStartChildWorkflowExecutionInitiatedEventAttributes(): boolean;
  clearStartChildWorkflowExecutionInitiatedEventAttributes(): void;
  getStartChildWorkflowExecutionInitiatedEventAttributes(): StartChildWorkflowExecutionInitiatedEventAttributes | undefined;
  setStartChildWorkflowExecutionInitiatedEventAttributes(value?: StartChildWorkflowExecutionInitiatedEventAttributes): void;

  hasStartChildWorkflowExecutionFailedEventAttributes(): boolean;
  clearStartChildWorkflowExecutionFailedEventAttributes(): void;
  getStartChildWorkflowExecutionFailedEventAttributes(): StartChildWorkflowExecutionFailedEventAttributes | undefined;
  setStartChildWorkflowExecutionFailedEventAttributes(value?: StartChildWorkflowExecutionFailedEventAttributes): void;

  hasChildWorkflowExecutionStartedEventAttributes(): boolean;
  clearChildWorkflowExecutionStartedEventAttributes(): void;
  getChildWorkflowExecutionStartedEventAttributes(): ChildWorkflowExecutionStartedEventAttributes | undefined;
  setChildWorkflowExecutionStartedEventAttributes(value?: ChildWorkflowExecutionStartedEventAttributes): void;

  hasChildWorkflowExecutionCompletedEventAttributes(): boolean;
  clearChildWorkflowExecutionCompletedEventAttributes(): void;
  getChildWorkflowExecutionCompletedEventAttributes(): ChildWorkflowExecutionCompletedEventAttributes | undefined;
  setChildWorkflowExecutionCompletedEventAttributes(value?: ChildWorkflowExecutionCompletedEventAttributes): void;

  hasChildWorkflowExecutionFailedEventAttributes(): boolean;
  clearChildWorkflowExecutionFailedEventAttributes(): void;
  getChildWorkflowExecutionFailedEventAttributes(): ChildWorkflowExecutionFailedEventAttributes | undefined;
  setChildWorkflowExecutionFailedEventAttributes(value?: ChildWorkflowExecutionFailedEventAttributes): void;

  hasChildWorkflowExecutionCanceledEventAttributes(): boolean;
  clearChildWorkflowExecutionCanceledEventAttributes(): void;
  getChildWorkflowExecutionCanceledEventAttributes(): ChildWorkflowExecutionCanceledEventAttributes | undefined;
  setChildWorkflowExecutionCanceledEventAttributes(value?: ChildWorkflowExecutionCanceledEventAttributes): void;

  hasChildWorkflowExecutionTimedOutEventAttributes(): boolean;
  clearChildWorkflowExecutionTimedOutEventAttributes(): void;
  getChildWorkflowExecutionTimedOutEventAttributes(): ChildWorkflowExecutionTimedOutEventAttributes | undefined;
  setChildWorkflowExecutionTimedOutEventAttributes(value?: ChildWorkflowExecutionTimedOutEventAttributes): void;

  hasChildWorkflowExecutionTerminatedEventAttributes(): boolean;
  clearChildWorkflowExecutionTerminatedEventAttributes(): void;
  getChildWorkflowExecutionTerminatedEventAttributes(): ChildWorkflowExecutionTerminatedEventAttributes | undefined;
  setChildWorkflowExecutionTerminatedEventAttributes(value?: ChildWorkflowExecutionTerminatedEventAttributes): void;

  hasSignalExternalWorkflowExecutionInitiatedEventAttributes(): boolean;
  clearSignalExternalWorkflowExecutionInitiatedEventAttributes(): void;
  getSignalExternalWorkflowExecutionInitiatedEventAttributes(): SignalExternalWorkflowExecutionInitiatedEventAttributes | undefined;
  setSignalExternalWorkflowExecutionInitiatedEventAttributes(value?: SignalExternalWorkflowExecutionInitiatedEventAttributes): void;

  hasSignalExternalWorkflowExecutionFailedEventAttributes(): boolean;
  clearSignalExternalWorkflowExecutionFailedEventAttributes(): void;
  getSignalExternalWorkflowExecutionFailedEventAttributes(): SignalExternalWorkflowExecutionFailedEventAttributes | undefined;
  setSignalExternalWorkflowExecutionFailedEventAttributes(value?: SignalExternalWorkflowExecutionFailedEventAttributes): void;

  hasExternalWorkflowExecutionSignaledEventAttributes(): boolean;
  clearExternalWorkflowExecutionSignaledEventAttributes(): void;
  getExternalWorkflowExecutionSignaledEventAttributes(): ExternalWorkflowExecutionSignaledEventAttributes | undefined;
  setExternalWorkflowExecutionSignaledEventAttributes(value?: ExternalWorkflowExecutionSignaledEventAttributes): void;

  hasUpsertWorkflowSearchAttributesEventAttributes(): boolean;
  clearUpsertWorkflowSearchAttributesEventAttributes(): void;
  getUpsertWorkflowSearchAttributesEventAttributes(): UpsertWorkflowSearchAttributesEventAttributes | undefined;
  setUpsertWorkflowSearchAttributesEventAttributes(value?: UpsertWorkflowSearchAttributesEventAttributes): void;

  getAttributesCase(): HistoryEvent.AttributesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryEvent): HistoryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryEvent;
  static deserializeBinaryFromReader(message: HistoryEvent, reader: jspb.BinaryReader): HistoryEvent;
}

export namespace HistoryEvent {
  export type AsObject = {
    eventId: number,
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventType: temporal_api_enums_v1_event_type_pb.EventTypeMap[keyof temporal_api_enums_v1_event_type_pb.EventTypeMap],
    version: number,
    taskId: number,
    workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes.AsObject,
    workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes.AsObject,
    workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes.AsObject,
    workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes.AsObject,
    workflowTaskScheduledEventAttributes?: WorkflowTaskScheduledEventAttributes.AsObject,
    workflowTaskStartedEventAttributes?: WorkflowTaskStartedEventAttributes.AsObject,
    workflowTaskCompletedEventAttributes?: WorkflowTaskCompletedEventAttributes.AsObject,
    workflowTaskTimedOutEventAttributes?: WorkflowTaskTimedOutEventAttributes.AsObject,
    workflowTaskFailedEventAttributes?: WorkflowTaskFailedEventAttributes.AsObject,
    activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes.AsObject,
    activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes.AsObject,
    activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes.AsObject,
    activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes.AsObject,
    activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes.AsObject,
    timerStartedEventAttributes?: TimerStartedEventAttributes.AsObject,
    timerFiredEventAttributes?: TimerFiredEventAttributes.AsObject,
    activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes.AsObject,
    activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes.AsObject,
    timerCanceledEventAttributes?: TimerCanceledEventAttributes.AsObject,
    markerRecordedEventAttributes?: MarkerRecordedEventAttributes.AsObject,
    workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes.AsObject,
    workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes.AsObject,
    workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes.AsObject,
    workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes.AsObject,
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.AsObject,
    requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes.AsObject,
    externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes.AsObject,
    workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes.AsObject,
    startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes.AsObject,
    startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes.AsObject,
    childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes.AsObject,
    childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes.AsObject,
    childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes.AsObject,
    childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes.AsObject,
    childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes.AsObject,
    childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes.AsObject,
    signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes.AsObject,
    signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes.AsObject,
    externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes.AsObject,
    upsertWorkflowSearchAttributesEventAttributes?: UpsertWorkflowSearchAttributesEventAttributes.AsObject,
  }

  export enum AttributesCase {
    ATTRIBUTES_NOT_SET = 0,
    WORKFLOW_EXECUTION_STARTED_EVENT_ATTRIBUTES = 6,
    WORKFLOW_EXECUTION_COMPLETED_EVENT_ATTRIBUTES = 7,
    WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES = 8,
    WORKFLOW_EXECUTION_TIMED_OUT_EVENT_ATTRIBUTES = 9,
    WORKFLOW_TASK_SCHEDULED_EVENT_ATTRIBUTES = 10,
    WORKFLOW_TASK_STARTED_EVENT_ATTRIBUTES = 11,
    WORKFLOW_TASK_COMPLETED_EVENT_ATTRIBUTES = 12,
    WORKFLOW_TASK_TIMED_OUT_EVENT_ATTRIBUTES = 13,
    WORKFLOW_TASK_FAILED_EVENT_ATTRIBUTES = 14,
    ACTIVITY_TASK_SCHEDULED_EVENT_ATTRIBUTES = 15,
    ACTIVITY_TASK_STARTED_EVENT_ATTRIBUTES = 16,
    ACTIVITY_TASK_COMPLETED_EVENT_ATTRIBUTES = 17,
    ACTIVITY_TASK_FAILED_EVENT_ATTRIBUTES = 18,
    ACTIVITY_TASK_TIMED_OUT_EVENT_ATTRIBUTES = 19,
    TIMER_STARTED_EVENT_ATTRIBUTES = 20,
    TIMER_FIRED_EVENT_ATTRIBUTES = 21,
    ACTIVITY_TASK_CANCEL_REQUESTED_EVENT_ATTRIBUTES = 22,
    ACTIVITY_TASK_CANCELED_EVENT_ATTRIBUTES = 23,
    TIMER_CANCELED_EVENT_ATTRIBUTES = 24,
    MARKER_RECORDED_EVENT_ATTRIBUTES = 25,
    WORKFLOW_EXECUTION_SIGNALED_EVENT_ATTRIBUTES = 26,
    WORKFLOW_EXECUTION_TERMINATED_EVENT_ATTRIBUTES = 27,
    WORKFLOW_EXECUTION_CANCEL_REQUESTED_EVENT_ATTRIBUTES = 28,
    WORKFLOW_EXECUTION_CANCELED_EVENT_ATTRIBUTES = 29,
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES = 30,
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES = 31,
    EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED_EVENT_ATTRIBUTES = 32,
    WORKFLOW_EXECUTION_CONTINUED_AS_NEW_EVENT_ATTRIBUTES = 33,
    START_CHILD_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES = 34,
    START_CHILD_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES = 35,
    CHILD_WORKFLOW_EXECUTION_STARTED_EVENT_ATTRIBUTES = 36,
    CHILD_WORKFLOW_EXECUTION_COMPLETED_EVENT_ATTRIBUTES = 37,
    CHILD_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES = 38,
    CHILD_WORKFLOW_EXECUTION_CANCELED_EVENT_ATTRIBUTES = 39,
    CHILD_WORKFLOW_EXECUTION_TIMED_OUT_EVENT_ATTRIBUTES = 40,
    CHILD_WORKFLOW_EXECUTION_TERMINATED_EVENT_ATTRIBUTES = 41,
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES = 42,
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES = 43,
    EXTERNAL_WORKFLOW_EXECUTION_SIGNALED_EVENT_ATTRIBUTES = 44,
    UPSERT_WORKFLOW_SEARCH_ATTRIBUTES_EVENT_ATTRIBUTES = 45,
  }
}

export class History extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<HistoryEvent>;
  setEventsList(value: Array<HistoryEvent>): void;
  addEvents(value?: HistoryEvent, index?: number): HistoryEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    eventsList: Array<HistoryEvent.AsObject>,
  }
}

