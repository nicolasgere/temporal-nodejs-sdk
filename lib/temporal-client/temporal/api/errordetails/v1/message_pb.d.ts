// package: temporal.api.errordetails.v1
// file: temporal/api/errordetails/v1/message.proto

import * as jspb from "google-protobuf";

export class NotFoundFailure extends jspb.Message {
  getCurrentCluster(): string;
  setCurrentCluster(value: string): void;

  getActiveCluster(): string;
  setActiveCluster(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotFoundFailure.AsObject;
  static toObject(includeInstance: boolean, msg: NotFoundFailure): NotFoundFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotFoundFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotFoundFailure;
  static deserializeBinaryFromReader(message: NotFoundFailure, reader: jspb.BinaryReader): NotFoundFailure;
}

export namespace NotFoundFailure {
  export type AsObject = {
    currentCluster: string,
    activeCluster: string,
  }
}

export class WorkflowExecutionAlreadyStartedFailure extends jspb.Message {
  getStartRequestId(): string;
  setStartRequestId(value: string): void;

  getRunId(): string;
  setRunId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowExecutionAlreadyStartedFailure.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowExecutionAlreadyStartedFailure): WorkflowExecutionAlreadyStartedFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowExecutionAlreadyStartedFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowExecutionAlreadyStartedFailure;
  static deserializeBinaryFromReader(message: WorkflowExecutionAlreadyStartedFailure, reader: jspb.BinaryReader): WorkflowExecutionAlreadyStartedFailure;
}

export namespace WorkflowExecutionAlreadyStartedFailure {
  export type AsObject = {
    startRequestId: string,
    runId: string,
  }
}

export class NamespaceNotActiveFailure extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getCurrentCluster(): string;
  setCurrentCluster(value: string): void;

  getActiveCluster(): string;
  setActiveCluster(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceNotActiveFailure.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceNotActiveFailure): NamespaceNotActiveFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceNotActiveFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceNotActiveFailure;
  static deserializeBinaryFromReader(message: NamespaceNotActiveFailure, reader: jspb.BinaryReader): NamespaceNotActiveFailure;
}

export namespace NamespaceNotActiveFailure {
  export type AsObject = {
    namespace: string,
    currentCluster: string,
    activeCluster: string,
  }
}

export class ClientVersionNotSupportedFailure extends jspb.Message {
  getClientVersion(): string;
  setClientVersion(value: string): void;

  getClientName(): string;
  setClientName(value: string): void;

  getSupportedVersions(): string;
  setSupportedVersions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientVersionNotSupportedFailure.AsObject;
  static toObject(includeInstance: boolean, msg: ClientVersionNotSupportedFailure): ClientVersionNotSupportedFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientVersionNotSupportedFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientVersionNotSupportedFailure;
  static deserializeBinaryFromReader(message: ClientVersionNotSupportedFailure, reader: jspb.BinaryReader): ClientVersionNotSupportedFailure;
}

export namespace ClientVersionNotSupportedFailure {
  export type AsObject = {
    clientVersion: string,
    clientName: string,
    supportedVersions: string,
  }
}

export class ServerVersionNotSupportedFailure extends jspb.Message {
  getServerVersion(): string;
  setServerVersion(value: string): void;

  getClientSupportedServerVersions(): string;
  setClientSupportedServerVersions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerVersionNotSupportedFailure.AsObject;
  static toObject(includeInstance: boolean, msg: ServerVersionNotSupportedFailure): ServerVersionNotSupportedFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerVersionNotSupportedFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerVersionNotSupportedFailure;
  static deserializeBinaryFromReader(message: ServerVersionNotSupportedFailure, reader: jspb.BinaryReader): ServerVersionNotSupportedFailure;
}

export namespace ServerVersionNotSupportedFailure {
  export type AsObject = {
    serverVersion: string,
    clientSupportedServerVersions: string,
  }
}

export class NamespaceAlreadyExistsFailure extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceAlreadyExistsFailure.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceAlreadyExistsFailure): NamespaceAlreadyExistsFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceAlreadyExistsFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceAlreadyExistsFailure;
  static deserializeBinaryFromReader(message: NamespaceAlreadyExistsFailure, reader: jspb.BinaryReader): NamespaceAlreadyExistsFailure;
}

export namespace NamespaceAlreadyExistsFailure {
  export type AsObject = {
  }
}

export class CancellationAlreadyRequestedFailure extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancellationAlreadyRequestedFailure.AsObject;
  static toObject(includeInstance: boolean, msg: CancellationAlreadyRequestedFailure): CancellationAlreadyRequestedFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancellationAlreadyRequestedFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancellationAlreadyRequestedFailure;
  static deserializeBinaryFromReader(message: CancellationAlreadyRequestedFailure, reader: jspb.BinaryReader): CancellationAlreadyRequestedFailure;
}

export namespace CancellationAlreadyRequestedFailure {
  export type AsObject = {
  }
}

export class QueryFailedFailure extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFailedFailure.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFailedFailure): QueryFailedFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFailedFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFailedFailure;
  static deserializeBinaryFromReader(message: QueryFailedFailure, reader: jspb.BinaryReader): QueryFailedFailure;
}

export namespace QueryFailedFailure {
  export type AsObject = {
  }
}

