// package: temporal.api.common.v1
// file: temporal/api/common/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_common_pb from "../../../../temporal/api/enums/v1/common_pb";

export class DataBlob extends jspb.Message {
  getEncodingType(): temporal_api_enums_v1_common_pb.EncodingTypeMap[keyof temporal_api_enums_v1_common_pb.EncodingTypeMap];
  setEncodingType(value: temporal_api_enums_v1_common_pb.EncodingTypeMap[keyof temporal_api_enums_v1_common_pb.EncodingTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataBlob.AsObject;
  static toObject(includeInstance: boolean, msg: DataBlob): DataBlob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataBlob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataBlob;
  static deserializeBinaryFromReader(message: DataBlob, reader: jspb.BinaryReader): DataBlob;
}

export namespace DataBlob {
  export type AsObject = {
    encodingType: temporal_api_enums_v1_common_pb.EncodingTypeMap[keyof temporal_api_enums_v1_common_pb.EncodingTypeMap],
    data: Uint8Array | string,
  }
}

export class Payloads extends jspb.Message {
  clearPayloadsList(): void;
  getPayloadsList(): Array<Payload>;
  setPayloadsList(value: Array<Payload>): void;
  addPayloads(value?: Payload, index?: number): Payload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payloads.AsObject;
  static toObject(includeInstance: boolean, msg: Payloads): Payloads.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payloads, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payloads;
  static deserializeBinaryFromReader(message: Payloads, reader: jspb.BinaryReader): Payloads;
}

export namespace Payloads {
  export type AsObject = {
    payloadsList: Array<Payload.AsObject>,
  }
}

export class Payload extends jspb.Message {
  getMetadataMap(): jspb.Map<string, Uint8Array | string>;
  clearMetadataMap(): void;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payload;
  static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
  export type AsObject = {
    metadataMap: Array<[string, Uint8Array | string]>,
    data: Uint8Array | string,
  }
}

export class SearchAttributes extends jspb.Message {
  getIndexedFieldsMap(): jspb.Map<string, Payload>;
  clearIndexedFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAttributes): SearchAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAttributes;
  static deserializeBinaryFromReader(message: SearchAttributes, reader: jspb.BinaryReader): SearchAttributes;
}

export namespace SearchAttributes {
  export type AsObject = {
    indexedFieldsMap: Array<[string, Payload.AsObject]>,
  }
}

export class Memo extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Payload>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Memo.AsObject;
  static toObject(includeInstance: boolean, msg: Memo): Memo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Memo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Memo;
  static deserializeBinaryFromReader(message: Memo, reader: jspb.BinaryReader): Memo;
}

export namespace Memo {
  export type AsObject = {
    fieldsMap: Array<[string, Payload.AsObject]>,
  }
}

export class Header extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Payload>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    fieldsMap: Array<[string, Payload.AsObject]>,
  }
}

export class WorkflowExecution extends jspb.Message {
  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecution.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecution): WorkflowExecution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecution;
  static deserializeBinaryFromReader(message: WorkflowExecution, reader: jspb.BinaryReader): WorkflowExecution;
}

export namespace WorkflowExecution {
  export type AsObject = {
    workflowId: string,
    runId: string,
  }
}

export class WorkflowType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowType.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowType): WorkflowType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowType;
  static deserializeBinaryFromReader(message: WorkflowType, reader: jspb.BinaryReader): WorkflowType;
}

export namespace WorkflowType {
  export type AsObject = {
    name: string,
  }
}

export class ActivityType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityType.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityType): ActivityType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityType;
  static deserializeBinaryFromReader(message: ActivityType, reader: jspb.BinaryReader): ActivityType;
}

export namespace ActivityType {
  export type AsObject = {
    name: string,
  }
}

export class RetryPolicy extends jspb.Message {
  hasInitialInterval(): boolean;
  clearInitialInterval(): void;
  getInitialInterval(): google_protobuf_duration_pb.Duration | undefined;
  setInitialInterval(value?: google_protobuf_duration_pb.Duration): void;

  getBackoffCoefficient(): number;
  setBackoffCoefficient(value: number): void;

  hasMaximumInterval(): boolean;
  clearMaximumInterval(): void;
  getMaximumInterval(): google_protobuf_duration_pb.Duration | undefined;
  setMaximumInterval(value?: google_protobuf_duration_pb.Duration): void;

  getMaximumAttempts(): number;
  setMaximumAttempts(value: number): void;

  clearNonRetryableErrorTypesList(): void;
  getNonRetryableErrorTypesList(): Array<string>;
  setNonRetryableErrorTypesList(value: Array<string>): void;
  addNonRetryableErrorTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: RetryPolicy): RetryPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryPolicy;
  static deserializeBinaryFromReader(message: RetryPolicy, reader: jspb.BinaryReader): RetryPolicy;
}

export namespace RetryPolicy {
  export type AsObject = {
    initialInterval?: google_protobuf_duration_pb.Duration.AsObject,
    backoffCoefficient: number,
    maximumInterval?: google_protobuf_duration_pb.Duration.AsObject,
    maximumAttempts: number,
    nonRetryableErrorTypesList: Array<string>,
  }
}

