// package: temporal.api.failure.v1
// file: temporal/api/failure/v1/message.proto

import * as jspb from "google-protobuf";
import * as temporal_api_common_v1_message_pb from "../../../../temporal/api/common/v1/message_pb";
import * as temporal_api_enums_v1_workflow_pb from "../../../../temporal/api/enums/v1/workflow_pb";

export class ApplicationFailureInfo extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getNonRetryable(): boolean;
  setNonRetryable(value: boolean): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationFailureInfo): ApplicationFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationFailureInfo;
  static deserializeBinaryFromReader(message: ApplicationFailureInfo, reader: jspb.BinaryReader): ApplicationFailureInfo;
}

export namespace ApplicationFailureInfo {
  export type AsObject = {
    type: string,
    nonRetryable: boolean,
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class TimeoutFailureInfo extends jspb.Message {
  getTimeoutType(): temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap];
  setTimeoutType(value: temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap]): void;

  hasLastHeartbeatDetails(): boolean;
  clearLastHeartbeatDetails(): void;
  getLastHeartbeatDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setLastHeartbeatDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeoutFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TimeoutFailureInfo): TimeoutFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeoutFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeoutFailureInfo;
  static deserializeBinaryFromReader(message: TimeoutFailureInfo, reader: jspb.BinaryReader): TimeoutFailureInfo;
}

export namespace TimeoutFailureInfo {
  export type AsObject = {
    timeoutType: temporal_api_enums_v1_workflow_pb.TimeoutTypeMap[keyof temporal_api_enums_v1_workflow_pb.TimeoutTypeMap],
    lastHeartbeatDetails?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class CanceledFailureInfo extends jspb.Message {
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanceledFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CanceledFailureInfo): CanceledFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanceledFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanceledFailureInfo;
  static deserializeBinaryFromReader(message: CanceledFailureInfo, reader: jspb.BinaryReader): CanceledFailureInfo;
}

export namespace CanceledFailureInfo {
  export type AsObject = {
    details?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class TerminatedFailureInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminatedFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TerminatedFailureInfo): TerminatedFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerminatedFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminatedFailureInfo;
  static deserializeBinaryFromReader(message: TerminatedFailureInfo, reader: jspb.BinaryReader): TerminatedFailureInfo;
}

export namespace TerminatedFailureInfo {
  export type AsObject = {
  }
}

export class ServerFailureInfo extends jspb.Message {
  getNonRetryable(): boolean;
  setNonRetryable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerFailureInfo): ServerFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerFailureInfo;
  static deserializeBinaryFromReader(message: ServerFailureInfo, reader: jspb.BinaryReader): ServerFailureInfo;
}

export namespace ServerFailureInfo {
  export type AsObject = {
    nonRetryable: boolean,
  }
}

export class ResetWorkflowFailureInfo extends jspb.Message {
  hasLastHeartbeatDetails(): boolean;
  clearLastHeartbeatDetails(): void;
  getLastHeartbeatDetails(): temporal_api_common_v1_message_pb.Payloads | undefined;
  setLastHeartbeatDetails(value?: temporal_api_common_v1_message_pb.Payloads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetWorkflowFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResetWorkflowFailureInfo): ResetWorkflowFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetWorkflowFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetWorkflowFailureInfo;
  static deserializeBinaryFromReader(message: ResetWorkflowFailureInfo, reader: jspb.BinaryReader): ResetWorkflowFailureInfo;
}

export namespace ResetWorkflowFailureInfo {
  export type AsObject = {
    lastHeartbeatDetails?: temporal_api_common_v1_message_pb.Payloads.AsObject,
  }
}

export class ActivityFailureInfo extends jspb.Message {
  getScheduledEventId(): number;
  setScheduledEventId(value: number): void;

  getStartedEventId(): number;
  setStartedEventId(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  hasActivityType(): boolean;
  clearActivityType(): void;
  getActivityType(): temporal_api_common_v1_message_pb.ActivityType | undefined;
  setActivityType(value?: temporal_api_common_v1_message_pb.ActivityType): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getRetryState(): temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap];
  setRetryState(value: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityFailureInfo): ActivityFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityFailureInfo;
  static deserializeBinaryFromReader(message: ActivityFailureInfo, reader: jspb.BinaryReader): ActivityFailureInfo;
}

export namespace ActivityFailureInfo {
  export type AsObject = {
    scheduledEventId: number,
    startedEventId: number,
    identity: string,
    activityType?: temporal_api_common_v1_message_pb.ActivityType.AsObject,
    activityId: string,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class ChildWorkflowExecutionFailureInfo extends jspb.Message {
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
  toObject(includeInstance?: boolean): ChildWorkflowExecutionFailureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChildWorkflowExecutionFailureInfo): ChildWorkflowExecutionFailureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildWorkflowExecutionFailureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildWorkflowExecutionFailureInfo;
  static deserializeBinaryFromReader(message: ChildWorkflowExecutionFailureInfo, reader: jspb.BinaryReader): ChildWorkflowExecutionFailureInfo;
}

export namespace ChildWorkflowExecutionFailureInfo {
  export type AsObject = {
    namespace: string,
    workflowExecution?: temporal_api_common_v1_message_pb.WorkflowExecution.AsObject,
    workflowType?: temporal_api_common_v1_message_pb.WorkflowType.AsObject,
    initiatedEventId: number,
    startedEventId: number,
    retryState: temporal_api_enums_v1_workflow_pb.RetryStateMap[keyof temporal_api_enums_v1_workflow_pb.RetryStateMap],
  }
}

export class Failure extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  hasCause(): boolean;
  clearCause(): void;
  getCause(): Failure | undefined;
  setCause(value?: Failure): void;

  hasApplicationFailureInfo(): boolean;
  clearApplicationFailureInfo(): void;
  getApplicationFailureInfo(): ApplicationFailureInfo | undefined;
  setApplicationFailureInfo(value?: ApplicationFailureInfo): void;

  hasTimeoutFailureInfo(): boolean;
  clearTimeoutFailureInfo(): void;
  getTimeoutFailureInfo(): TimeoutFailureInfo | undefined;
  setTimeoutFailureInfo(value?: TimeoutFailureInfo): void;

  hasCanceledFailureInfo(): boolean;
  clearCanceledFailureInfo(): void;
  getCanceledFailureInfo(): CanceledFailureInfo | undefined;
  setCanceledFailureInfo(value?: CanceledFailureInfo): void;

  hasTerminatedFailureInfo(): boolean;
  clearTerminatedFailureInfo(): void;
  getTerminatedFailureInfo(): TerminatedFailureInfo | undefined;
  setTerminatedFailureInfo(value?: TerminatedFailureInfo): void;

  hasServerFailureInfo(): boolean;
  clearServerFailureInfo(): void;
  getServerFailureInfo(): ServerFailureInfo | undefined;
  setServerFailureInfo(value?: ServerFailureInfo): void;

  hasResetWorkflowFailureInfo(): boolean;
  clearResetWorkflowFailureInfo(): void;
  getResetWorkflowFailureInfo(): ResetWorkflowFailureInfo | undefined;
  setResetWorkflowFailureInfo(value?: ResetWorkflowFailureInfo): void;

  hasActivityFailureInfo(): boolean;
  clearActivityFailureInfo(): void;
  getActivityFailureInfo(): ActivityFailureInfo | undefined;
  setActivityFailureInfo(value?: ActivityFailureInfo): void;

  hasChildWorkflowExecutionFailureInfo(): boolean;
  clearChildWorkflowExecutionFailureInfo(): void;
  getChildWorkflowExecutionFailureInfo(): ChildWorkflowExecutionFailureInfo | undefined;
  setChildWorkflowExecutionFailureInfo(value?: ChildWorkflowExecutionFailureInfo): void;

  getFailureInfoCase(): Failure.FailureInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Failure.AsObject;
  static toObject(includeInstance: boolean, msg: Failure): Failure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Failure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Failure;
  static deserializeBinaryFromReader(message: Failure, reader: jspb.BinaryReader): Failure;
}

export namespace Failure {
  export type AsObject = {
    message: string,
    source: string,
    stackTrace: string,
    cause?: Failure.AsObject,
    applicationFailureInfo?: ApplicationFailureInfo.AsObject,
    timeoutFailureInfo?: TimeoutFailureInfo.AsObject,
    canceledFailureInfo?: CanceledFailureInfo.AsObject,
    terminatedFailureInfo?: TerminatedFailureInfo.AsObject,
    serverFailureInfo?: ServerFailureInfo.AsObject,
    resetWorkflowFailureInfo?: ResetWorkflowFailureInfo.AsObject,
    activityFailureInfo?: ActivityFailureInfo.AsObject,
    childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo.AsObject,
  }

  export enum FailureInfoCase {
    FAILURE_INFO_NOT_SET = 0,
    APPLICATION_FAILURE_INFO = 5,
    TIMEOUT_FAILURE_INFO = 6,
    CANCELED_FAILURE_INFO = 7,
    TERMINATED_FAILURE_INFO = 8,
    SERVER_FAILURE_INFO = 9,
    RESET_WORKFLOW_FAILURE_INFO = 10,
    ACTIVITY_FAILURE_INFO = 11,
    CHILD_WORKFLOW_EXECUTION_FAILURE_INFO = 12,
  }
}

