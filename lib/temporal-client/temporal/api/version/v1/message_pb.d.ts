// package: temporal.api.version.v1
// file: temporal/api/version/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dependencies_gogoproto_gogo_pb from "../../../../dependencies/gogoproto/gogo_pb";
import * as temporal_api_enums_v1_common_pb from "../../../../temporal/api/enums/v1/common_pb";

export class ReleaseInfo extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  hasReleaseTime(): boolean;
  clearReleaseTime(): void;
  getReleaseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleaseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseInfo): ReleaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReleaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseInfo;
  static deserializeBinaryFromReader(message: ReleaseInfo, reader: jspb.BinaryReader): ReleaseInfo;
}

export namespace ReleaseInfo {
  export type AsObject = {
    version: string,
    releaseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
  }
}

export class Alert extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getSeverity(): temporal_api_enums_v1_common_pb.SeverityMap[keyof temporal_api_enums_v1_common_pb.SeverityMap];
  setSeverity(value: temporal_api_enums_v1_common_pb.SeverityMap[keyof temporal_api_enums_v1_common_pb.SeverityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Alert.AsObject;
  static toObject(includeInstance: boolean, msg: Alert): Alert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Alert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Alert;
  static deserializeBinaryFromReader(message: Alert, reader: jspb.BinaryReader): Alert;
}

export namespace Alert {
  export type AsObject = {
    message: string,
    severity: temporal_api_enums_v1_common_pb.SeverityMap[keyof temporal_api_enums_v1_common_pb.SeverityMap],
  }
}

export class VersionInfo extends jspb.Message {
  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): ReleaseInfo | undefined;
  setCurrent(value?: ReleaseInfo): void;

  hasRecommended(): boolean;
  clearRecommended(): void;
  getRecommended(): ReleaseInfo | undefined;
  setRecommended(value?: ReleaseInfo): void;

  getInstructions(): string;
  setInstructions(value: string): void;

  clearAlertsList(): void;
  getAlertsList(): Array<Alert>;
  setAlertsList(value: Array<Alert>): void;
  addAlerts(value?: Alert, index?: number): Alert;

  hasLastUpdateTime(): boolean;
  clearLastUpdateTime(): void;
  getLastUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionInfo;
  static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
  export type AsObject = {
    current?: ReleaseInfo.AsObject,
    recommended?: ReleaseInfo.AsObject,
    instructions: string,
    alertsList: Array<Alert.AsObject>,
    lastUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

