// package: temporal.api.command.v1
// file: temporal/api/command/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";
import * as temporal_api_enums_v1_command_type_pb from "../../../../temporal/api/enums/v1/command_type_pb";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";
import * as temporal_api_failure_v1_message_pb from "../../../../temporal/api/failure/v1/message_pb";
import * as temporal_api_taskqueue_v1_message_pb from "../../../../temporal/api/taskqueue/v1/message_pb";

export class ScheduleActivityTaskCommandAttributes extends jspb.Message {
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

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleActivityTaskCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleActivityTaskCommandAttributes): ScheduleActivityTaskCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleActivityTaskCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleActivityTaskCommandAttributes;
  static deserializeBinaryFromReader(message: ScheduleActivityTaskCommandAttributes, reader: jspb.BinaryReader): ScheduleActivityTaskCommandAttributes;
}

export namespace ScheduleActivityTaskCommandAttributes {
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
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
  }
}

export class RequestCancelActivityTaskCommandAttributes extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCancelActivityTaskCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCancelActivityTaskCommandAttributes): RequestCancelActivityTaskCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCancelActivityTaskCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCancelActivityTaskCommandAttributes;
  static deserializeBinaryFromReader(message: RequestCancelActivityTaskCommandAttributes, reader: jspb.BinaryReader): RequestCancelActivityTaskCommandAttributes;
}

export namespace RequestCancelActivityTaskCommandAttributes {
  export type AsObject = {
    scheduledEventId: number,
  }
}

export class StartTimerCommandAttributes extends jspb.Message {
  getTimerId(): string;
  setTimerId(value: string): void;

  hasStartToFireTimeout(): boolean;
  clearStartToFireTimeout(): void;
  getStartToFireTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStartToFireTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTimerCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: StartTimerCommandAttributes): StartTimerCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTimerCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTimerCommandAttributes;
  static deserializeBinaryFromReader(message: StartTimerCommandAttributes, reader: jspb.BinaryReader): StartTimerCommandAttributes;
}

export namespace StartTimerCommandAttributes {
  export type AsObject = {
    timerId: string,
    startToFireTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CompleteWorkflowExecutionCommandAttributes extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setResult(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteWorkflowExecutionCommandAttributes): CompleteWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: CompleteWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): CompleteWorkflowExecutionCommandAttributes;
}

export namespace CompleteWorkflowExecutionCommandAttributes {
  export type AsObject = {
    result?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class FailWorkflowExecutionCommandAttributes extends jspb.Message {
  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: FailWorkflowExecutionCommandAttributes): FailWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: FailWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): FailWorkflowExecutionCommandAttributes;
}

export namespace FailWorkflowExecutionCommandAttributes {
  export type AsObject = {
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
  }
}

export class CancelTimerCommandAttributes extends jspb.Message {
  getTimerId(): string;
  setTimerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTimerCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTimerCommandAttributes): CancelTimerCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTimerCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTimerCommandAttributes;
  static deserializeBinaryFromReader(message: CancelTimerCommandAttributes, reader: jspb.BinaryReader): CancelTimerCommandAttributes;
}

export namespace CancelTimerCommandAttributes {
  export type AsObject = {
    timerId: string,
  }
}

export class CancelWorkflowExecutionCommandAttributes extends jspb.Message {
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: CancelWorkflowExecutionCommandAttributes): CancelWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: CancelWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): CancelWorkflowExecutionCommandAttributes;
}

export namespace CancelWorkflowExecutionCommandAttributes {
  export type AsObject = {
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class RequestCancelExternalWorkflowExecutionCommandAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  getControl(): string;
  setControl(value: string): void;

  getChildWorkflowOnly(): boolean;
  setChildWorkflowOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCancelExternalWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCancelExternalWorkflowExecutionCommandAttributes): RequestCancelExternalWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCancelExternalWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCancelExternalWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: RequestCancelExternalWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): RequestCancelExternalWorkflowExecutionCommandAttributes;
}

export namespace RequestCancelExternalWorkflowExecutionCommandAttributes {
  export type AsObject = {
    namespace: string,
    workflowId: string,
    runId: string,
    control: string,
    childWorkflowOnly: boolean,
  }
}

export class SignalExternalWorkflowExecutionCommandAttributes extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution(): temporal_api_common_v1_message_pb.WorkflowExecution | undefined;
  setExecution(value?: temporal_api_common_v1_message_pb.WorkflowExecution): void;

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
  toObject(includeInstance?: boolean): SignalExternalWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SignalExternalWorkflowExecutionCommandAttributes): SignalExternalWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalExternalWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalExternalWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: SignalExternalWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): SignalExternalWorkflowExecutionCommandAttributes;
}

export namespace SignalExternalWorkflowExecutionCommandAttributes {
  export type AsObject = {
    namespace: string,
    execution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    signalName: string,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    control: string,
    childWorkflowOnly: boolean,
  }
}

export class UpsertWorkflowSearchAttributesCommandAttributes extends jspb.Message {
  hasSearchAttributes(): boolean;
  clearSearchAttributes(): void;
  getSearchAttributes(): temporal_api_common_v1_message_pb.SearchAttributes | undefined;
  setSearchAttributes(value?: temporal_api_common_v1_message_pb.SearchAttributes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertWorkflowSearchAttributesCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertWorkflowSearchAttributesCommandAttributes): UpsertWorkflowSearchAttributesCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertWorkflowSearchAttributesCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertWorkflowSearchAttributesCommandAttributes;
  static deserializeBinaryFromReader(message: UpsertWorkflowSearchAttributesCommandAttributes, reader: jspb.BinaryReader): UpsertWorkflowSearchAttributesCommandAttributes;
}

export namespace UpsertWorkflowSearchAttributesCommandAttributes {
  export type AsObject = {
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class RecordMarkerCommandAttributes extends jspb.Message {
  getMarkerName(): string;
  setMarkerName(value: string): void;

  getDetailsMap(): jspb.Map<string, temporal_api_common_v1_message_pb.Payloads>;
  clearDetailsMap(): void;
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): temporal_api_common_v1_message_pb.Header | undefined;
  setHeader(value?: temporal_api_common_v1_message_pb.Header): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): temporal_api_failure_v1_message_pb.Failure | undefined;
  setFailure(value?: temporal_api_failure_v1_message_pb.Failure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordMarkerCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RecordMarkerCommandAttributes): RecordMarkerCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordMarkerCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordMarkerCommandAttributes;
  static deserializeBinaryFromReader(message: RecordMarkerCommandAttributes, reader: jspb.BinaryReader): RecordMarkerCommandAttributes;
}

export namespace RecordMarkerCommandAttributes {
  export type AsObject = {
    markerName: string,
    detailsMap: Array<[string, temporal_api_common_v1_message_pb.Payloads.AsObject]>,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
  }
}

export class ContinueAsNewWorkflowExecutionCommandAttributes extends jspb.Message {
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

  hasBackoffStartInterval(): boolean;
  clearBackoffStartInterval(): void;
  getBackoffStartInterval(): google_protobuf_duration_pb.Duration | undefined;
  setBackoffStartInterval(value?: google_protobuf_duration_pb.Duration): void;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): temporal_api_common_v1_message_pb.RetryPolicy | undefined;
  setRetryPolicy(value?: temporal_api_common_v1_message_pb.RetryPolicy): void;

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
  toObject(includeInstance?: boolean): ContinueAsNewWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ContinueAsNewWorkflowExecutionCommandAttributes): ContinueAsNewWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContinueAsNewWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinueAsNewWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: ContinueAsNewWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): ContinueAsNewWorkflowExecutionCommandAttributes;
}

export namespace ContinueAsNewWorkflowExecutionCommandAttributes {
  export type AsObject = {
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    taskQueue?: temporal_api_taskqueue_v1_message_pb.TaskQueue.AsObject,
    input?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    workflowRunTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    workflowTaskTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    backoffStartInterval?: google_protobuf_duration_pb.Duration.AsObject,
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
    initiator: temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap[keyof temporal_api_enums_v1_workflow_pb.ContinueAsNewInitiatorMap],
    failure?: temporal_api_failure_v1_message_pb.Failure.AsObject,
    lastCompletionResult?: temporal_api_common_v1_message_pb.Payloads.AsObject,
    cronSchedule: string,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class StartChildWorkflowExecutionCommandAttributes extends jspb.Message {
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
  toObject(includeInstance?: boolean): StartChildWorkflowExecutionCommandAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: StartChildWorkflowExecutionCommandAttributes): StartChildWorkflowExecutionCommandAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartChildWorkflowExecutionCommandAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartChildWorkflowExecutionCommandAttributes;
  static deserializeBinaryFromReader(message: StartChildWorkflowExecutionCommandAttributes, reader: jspb.BinaryReader): StartChildWorkflowExecutionCommandAttributes;
}

export namespace StartChildWorkflowExecutionCommandAttributes {
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
    workflowIdReusePolicy: temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap[keyof temporal_api_enums_v1_workflow_pb.WorkflowIdReusePolicyMap],
    retryPolicy?: temporal_api_common_v1_message_pb.RetryPolicy.AsObject,
    cronSchedule: string,
    header?: temporal_api_common_v1_message_pb.Header.AsObject,
    memo?: temporal_api_common_v1_message_pb.Memo.AsObject,
    searchAttributes?: temporal_api_common_v1_message_pb.SearchAttributes.AsObject,
  }
}

export class Command extends jspb.Message {
  getCommandType(): temporal_api_enums_v1_command_type_pb.CommandTypeMap[keyof temporal_api_enums_v1_command_type_pb.CommandTypeMap];
  setCommandType(value: temporal_api_enums_v1_command_type_pb.CommandTypeMap[keyof temporal_api_enums_v1_command_type_pb.CommandTypeMap]): void;

  hasScheduleActivityTaskCommandAttributes(): boolean;
  clearScheduleActivityTaskCommandAttributes(): void;
  getScheduleActivityTaskCommandAttributes(): ScheduleActivityTaskCommandAttributes | undefined;
  setScheduleActivityTaskCommandAttributes(value?: ScheduleActivityTaskCommandAttributes): void;

  hasStartTimerCommandAttributes(): boolean;
  clearStartTimerCommandAttributes(): void;
  getStartTimerCommandAttributes(): StartTimerCommandAttributes | undefined;
  setStartTimerCommandAttributes(value?: StartTimerCommandAttributes): void;

  hasCompleteWorkflowExecutionCommandAttributes(): boolean;
  clearCompleteWorkflowExecutionCommandAttributes(): void;
  getCompleteWorkflowExecutionCommandAttributes(): CompleteWorkflowExecutionCommandAttributes | undefined;
  setCompleteWorkflowExecutionCommandAttributes(value?: CompleteWorkflowExecutionCommandAttributes): void;

  hasFailWorkflowExecutionCommandAttributes(): boolean;
  clearFailWorkflowExecutionCommandAttributes(): void;
  getFailWorkflowExecutionCommandAttributes(): FailWorkflowExecutionCommandAttributes | undefined;
  setFailWorkflowExecutionCommandAttributes(value?: FailWorkflowExecutionCommandAttributes): void;

  hasRequestCancelActivityTaskCommandAttributes(): boolean;
  clearRequestCancelActivityTaskCommandAttributes(): void;
  getRequestCancelActivityTaskCommandAttributes(): RequestCancelActivityTaskCommandAttributes | undefined;
  setRequestCancelActivityTaskCommandAttributes(value?: RequestCancelActivityTaskCommandAttributes): void;

  hasCancelTimerCommandAttributes(): boolean;
  clearCancelTimerCommandAttributes(): void;
  getCancelTimerCommandAttributes(): CancelTimerCommandAttributes | undefined;
  setCancelTimerCommandAttributes(value?: CancelTimerCommandAttributes): void;

  hasCancelWorkflowExecutionCommandAttributes(): boolean;
  clearCancelWorkflowExecutionCommandAttributes(): void;
  getCancelWorkflowExecutionCommandAttributes(): CancelWorkflowExecutionCommandAttributes | undefined;
  setCancelWorkflowExecutionCommandAttributes(value?: CancelWorkflowExecutionCommandAttributes): void;

  hasRequestCancelExternalWorkflowExecutionCommandAttributes(): boolean;
  clearRequestCancelExternalWorkflowExecutionCommandAttributes(): void;
  getRequestCancelExternalWorkflowExecutionCommandAttributes(): RequestCancelExternalWorkflowExecutionCommandAttributes | undefined;
  setRequestCancelExternalWorkflowExecutionCommandAttributes(value?: RequestCancelExternalWorkflowExecutionCommandAttributes): void;

  hasRecordMarkerCommandAttributes(): boolean;
  clearRecordMarkerCommandAttributes(): void;
  getRecordMarkerCommandAttributes(): RecordMarkerCommandAttributes | undefined;
  setRecordMarkerCommandAttributes(value?: RecordMarkerCommandAttributes): void;

  hasContinueAsNewWorkflowExecutionCommandAttributes(): boolean;
  clearContinueAsNewWorkflowExecutionCommandAttributes(): void;
  getContinueAsNewWorkflowExecutionCommandAttributes(): ContinueAsNewWorkflowExecutionCommandAttributes | undefined;
  setContinueAsNewWorkflowExecutionCommandAttributes(value?: ContinueAsNewWorkflowExecutionCommandAttributes): void;

  hasStartChildWorkflowExecutionCommandAttributes(): boolean;
  clearStartChildWorkflowExecutionCommandAttributes(): void;
  getStartChildWorkflowExecutionCommandAttributes(): StartChildWorkflowExecutionCommandAttributes | undefined;
  setStartChildWorkflowExecutionCommandAttributes(value?: StartChildWorkflowExecutionCommandAttributes): void;

  hasSignalExternalWorkflowExecutionCommandAttributes(): boolean;
  clearSignalExternalWorkflowExecutionCommandAttributes(): void;
  getSignalExternalWorkflowExecutionCommandAttributes(): SignalExternalWorkflowExecutionCommandAttributes | undefined;
  setSignalExternalWorkflowExecutionCommandAttributes(value?: SignalExternalWorkflowExecutionCommandAttributes): void;

  hasUpsertWorkflowSearchAttributesCommandAttributes(): boolean;
  clearUpsertWorkflowSearchAttributesCommandAttributes(): void;
  getUpsertWorkflowSearchAttributesCommandAttributes(): UpsertWorkflowSearchAttributesCommandAttributes | undefined;
  setUpsertWorkflowSearchAttributesCommandAttributes(value?: UpsertWorkflowSearchAttributesCommandAttributes): void;

  getAttributesCase(): Command.AttributesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    commandType: temporal_api_enums_v1_command_type_pb.CommandTypeMap[keyof temporal_api_enums_v1_command_type_pb.CommandTypeMap],
    scheduleActivityTaskCommandAttributes?: ScheduleActivityTaskCommandAttributes.AsObject,
    startTimerCommandAttributes?: StartTimerCommandAttributes.AsObject,
    completeWorkflowExecutionCommandAttributes?: CompleteWorkflowExecutionCommandAttributes.AsObject,
    failWorkflowExecutionCommandAttributes?: FailWorkflowExecutionCommandAttributes.AsObject,
    requestCancelActivityTaskCommandAttributes?: RequestCancelActivityTaskCommandAttributes.AsObject,
    cancelTimerCommandAttributes?: CancelTimerCommandAttributes.AsObject,
    cancelWorkflowExecutionCommandAttributes?: CancelWorkflowExecutionCommandAttributes.AsObject,
    requestCancelExternalWorkflowExecutionCommandAttributes?: RequestCancelExternalWorkflowExecutionCommandAttributes.AsObject,
    recordMarkerCommandAttributes?: RecordMarkerCommandAttributes.AsObject,
    continueAsNewWorkflowExecutionCommandAttributes?: ContinueAsNewWorkflowExecutionCommandAttributes.AsObject,
    startChildWorkflowExecutionCommandAttributes?: StartChildWorkflowExecutionCommandAttributes.AsObject,
    signalExternalWorkflowExecutionCommandAttributes?: SignalExternalWorkflowExecutionCommandAttributes.AsObject,
    upsertWorkflowSearchAttributesCommandAttributes?: UpsertWorkflowSearchAttributesCommandAttributes.AsObject,
  }

  export enum AttributesCase {
    ATTRIBUTES_NOT_SET = 0,
    SCHEDULE_ACTIVITY_TASK_COMMAND_ATTRIBUTES = 2,
    START_TIMER_COMMAND_ATTRIBUTES = 3,
    COMPLETE_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 4,
    FAIL_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 5,
    REQUEST_CANCEL_ACTIVITY_TASK_COMMAND_ATTRIBUTES = 6,
    CANCEL_TIMER_COMMAND_ATTRIBUTES = 7,
    CANCEL_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 8,
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 9,
    RECORD_MARKER_COMMAND_ATTRIBUTES = 10,
    CONTINUE_AS_NEW_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 11,
    START_CHILD_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 12,
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_COMMAND_ATTRIBUTES = 13,
    UPSERT_WORKFLOW_SEARCH_ATTRIBUTES_COMMAND_ATTRIBUTES = 14,
  }
}

