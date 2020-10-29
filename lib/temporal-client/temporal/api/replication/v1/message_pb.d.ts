// package: temporal.api.replication.v1
// file: temporal/api/replication/v1/message.proto

import * as jspb from "google-protobuf";

export class ClusterReplicationConfig extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterReplicationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterReplicationConfig): ClusterReplicationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterReplicationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterReplicationConfig;
  static deserializeBinaryFromReader(message: ClusterReplicationConfig, reader: jspb.BinaryReader): ClusterReplicationConfig;
}

export namespace ClusterReplicationConfig {
  export type AsObject = {
    clusterName: string,
  }
}

export class NamespaceReplicationConfig extends jspb.Message {
  getActiveClusterName(): string;
  setActiveClusterName(value: string): void;

  clearClustersList(): void;
  getClustersList(): Array<ClusterReplicationConfig>;
  setClustersList(value: Array<ClusterReplicationConfig>): void;
  addClusters(value?: ClusterReplicationConfig, index?: number): ClusterReplicationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceReplicationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceReplicationConfig): NamespaceReplicationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceReplicationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceReplicationConfig;
  static deserializeBinaryFromReader(message: NamespaceReplicationConfig, reader: jspb.BinaryReader): NamespaceReplicationConfig;
}

export namespace NamespaceReplicationConfig {
  export type AsObject = {
    activeClusterName: string,
    clustersList: Array<ClusterReplicationConfig.AsObject>,
  }
}

