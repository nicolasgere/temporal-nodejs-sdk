// package: temporal.api.taskqueue.v1
// file: temporal/api/taskqueue/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_task_queue_pb from "../../../../temporal/api/enums/v1/task_queue_pb";

export class TaskQueue extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKind(): temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap];
  setKind(value: temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskQueue.AsObject;
  static toObject(includeInstance: boolean, msg: TaskQueue): TaskQueue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskQueue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskQueue;
  static deserializeBinaryFromReader(message: TaskQueue, reader: jspb.BinaryReader): TaskQueue;
}

export namespace TaskQueue {
  export type AsObject = {
    name: string,
    kind: temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap[keyof temporal_api_enums_v1_task_queue_pb.TaskQueueKindMap],
  }
}

export class TaskQueueMetadata extends jspb.Message {
  hasMaxTasksPerSecond(): boolean;
  clearMaxTasksPerSecond(): void;
  getMaxTasksPerSecond(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMaxTasksPerSecond(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskQueueMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TaskQueueMetadata): TaskQueueMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskQueueMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskQueueMetadata;
  static deserializeBinaryFromReader(message: TaskQueueMetadata, reader: jspb.BinaryReader): TaskQueueMetadata;
}

export namespace TaskQueueMetadata {
  export type AsObject = {
    maxTasksPerSecond?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class TaskQueueStatus extends jspb.Message {
  getBacklogCountHint(): number;
  setBacklogCountHint(value: number): void;

  getReadLevel(): number;
  setReadLevel(value: number): void;

  getAckLevel(): number;
  setAckLevel(value: number): void;

  getRatePerSecond(): number;
  setRatePerSecond(value: number): void;

  hasTaskIdBlock(): boolean;
  clearTaskIdBlock(): void;
  getTaskIdBlock(): TaskIdBlock | undefined;
  setTaskIdBlock(value?: TaskIdBlock): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskQueueStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TaskQueueStatus): TaskQueueStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskQueueStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskQueueStatus;
  static deserializeBinaryFromReader(message: TaskQueueStatus, reader: jspb.BinaryReader): TaskQueueStatus;
}

export namespace TaskQueueStatus {
  export type AsObject = {
    backlogCountHint: number,
    readLevel: number,
    ackLevel: number,
    ratePerSecond: number,
    taskIdBlock?: TaskIdBlock.AsObject,
  }
}

export class TaskIdBlock extends jspb.Message {
  getStartId(): number;
  setStartId(value: number): void;

  getEndId(): number;
  setEndId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskIdBlock.AsObject;
  static toObject(includeInstance: boolean, msg: TaskIdBlock): TaskIdBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskIdBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskIdBlock;
  static deserializeBinaryFromReader(message: TaskIdBlock, reader: jspb.BinaryReader): TaskIdBlock;
}

export namespace TaskIdBlock {
  export type AsObject = {
    startId: number,
    endId: number,
  }
}

export class TaskQueuePartitionMetadata extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getOwnerHostName(): string;
  setOwnerHostName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskQueuePartitionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TaskQueuePartitionMetadata): TaskQueuePartitionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskQueuePartitionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskQueuePartitionMetadata;
  static deserializeBinaryFromReader(message: TaskQueuePartitionMetadata, reader: jspb.BinaryReader): TaskQueuePartitionMetadata;
}

export namespace TaskQueuePartitionMetadata {
  export type AsObject = {
    key: string,
    ownerHostName: string,
  }
}

export class PollerInfo extends jspb.Message {
  hasLastAccessTime(): boolean;
  clearLastAccessTime(): void;
  getLastAccessTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccessTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getRatePerSecond(): number;
  setRatePerSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PollerInfo): PollerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PollerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PollerInfo;
  static deserializeBinaryFromReader(message: PollerInfo, reader: jspb.BinaryReader): PollerInfo;
}

export namespace PollerInfo {
  export type AsObject = {
    lastAccessTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    identity: string,
    ratePerSecond: number,
  }
}

export class StickyExecutionAttributes extends jspb.Message {
  hasWorkerTaskQueue(): boolean;
  clearWorkerTaskQueue(): void;
  getWorkerTaskQueue(): TaskQueue | undefined;
  setWorkerTaskQueue(value?: TaskQueue): void;

  hasScheduleToStartTimeout(): boolean;
  clearScheduleToStartTimeout(): void;
  getScheduleToStartTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setScheduleToStartTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StickyExecutionAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: StickyExecutionAttributes): StickyExecutionAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StickyExecutionAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StickyExecutionAttributes;
  static deserializeBinaryFromReader(message: StickyExecutionAttributes, reader: jspb.BinaryReader): StickyExecutionAttributes;
}

export namespace StickyExecutionAttributes {
  export type AsObject = {
    workerTaskQueue?: TaskQueue.AsObject,
    scheduleToStartTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

