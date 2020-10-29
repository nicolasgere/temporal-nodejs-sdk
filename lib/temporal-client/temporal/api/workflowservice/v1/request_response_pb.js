/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var dependencies_gogoproto_gogo_pb = require('../../../../dependencies/gogoproto/gogo_pb.js');
var temporal_api_enums_v1_workflow_pb = require('../../../../temporal/api/enums/v1/workflow_pb.js');
var temporal_api_enums_v1_namespace_pb = require('../../../../temporal/api/enums/v1/namespace_pb.js');
var temporal_api_enums_v1_failed_cause_pb = require('../../../../temporal/api/enums/v1/failed_cause_pb.js');
var temporal_api_enums_v1_common_pb = require('../../../../temporal/api/enums/v1/common_pb.js');
var temporal_api_enums_v1_query_pb = require('../../../../temporal/api/enums/v1/query_pb.js');
var temporal_api_enums_v1_task_queue_pb = require('../../../../temporal/api/enums/v1/task_queue_pb.js');
var temporal_api_common_v1_message_pb = require('../../../../temporal/api/common/v1/message_pb.js');
var temporal_api_history_v1_message_pb = require('../../../../temporal/api/history/v1/message_pb.js');
var temporal_api_workflow_v1_message_pb = require('../../../../temporal/api/workflow/v1/message_pb.js');
var temporal_api_command_v1_message_pb = require('../../../../temporal/api/command/v1/message_pb.js');
var temporal_api_failure_v1_message_pb = require('../../../../temporal/api/failure/v1/message_pb.js');
var temporal_api_filter_v1_message_pb = require('../../../../temporal/api/filter/v1/message_pb.js');
var temporal_api_namespace_v1_message_pb = require('../../../../temporal/api/namespace/v1/message_pb.js');
var temporal_api_query_v1_message_pb = require('../../../../temporal/api/query/v1/message_pb.js');
var temporal_api_replication_v1_message_pb = require('../../../../temporal/api/replication/v1/message_pb.js');
var temporal_api_taskqueue_v1_message_pb = require('../../../../temporal/api/taskqueue/v1/message_pb.js');
var temporal_api_version_v1_message_pb = require('../../../../temporal/api/version/v1/message_pb.js');
goog.exportSymbol('proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetClusterInfoRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetClusterInfoResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListNamespacesRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListNamespacesResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.QueryWorkflowRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.QueryWorkflowResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest', null, global);
goog.exportSymbol('proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.displayName = 'proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownerEmail: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workflowExecutionRetentionPeriod: (f = msg.getWorkflowExecutionRetentionPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    temporal_api_replication_v1_message_pb.ClusterReplicationConfig.toObject, includeInstance),
    activeClusterName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, undefined) : [],
    securityToken: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isGlobalNamespace: jspb.Message.getFieldWithDefault(msg, 9, false),
    historyArchivalState: jspb.Message.getFieldWithDefault(msg, 10, 0),
    historyArchivalUri: jspb.Message.getFieldWithDefault(msg, 11, ""),
    visibilityArchivalState: jspb.Message.getFieldWithDefault(msg, 12, 0),
    visibilityArchivalUri: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest;
  return proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerEmail(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowExecutionRetentionPeriod(value);
      break;
    case 5:
      var value = new temporal_api_replication_v1_message_pb.ClusterReplicationConfig;
      reader.readMessage(value,temporal_api_replication_v1_message_pb.ClusterReplicationConfig.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActiveClusterName(value);
      break;
    case 7:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecurityToken(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGlobalNamespace(value);
      break;
    case 10:
      var value = /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (reader.readEnum());
      msg.setHistoryArchivalState(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setHistoryArchivalUri(value);
      break;
    case 12:
      var value = /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (reader.readEnum());
      msg.setVisibilityArchivalState(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisibilityArchivalUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkflowExecutionRetentionPeriod();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      temporal_api_replication_v1_message_pb.ClusterReplicationConfig.serializeBinaryToWriter
    );
  }
  f = message.getActiveClusterName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecurityToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsGlobalNamespace();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getHistoryArchivalState();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getHistoryArchivalUri();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getVisibilityArchivalState();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getVisibilityArchivalUri();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string owner_email = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getOwnerEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setOwnerEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Duration workflow_execution_retention_period = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getWorkflowExecutionRetentionPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setWorkflowExecutionRetentionPeriod = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.clearWorkflowExecutionRetentionPeriod = function() {
  this.setWorkflowExecutionRetentionPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.hasWorkflowExecutionRetentionPeriod = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated temporal.api.replication.v1.ClusterReplicationConfig clusters = 5;
 * @return {!Array<!proto.temporal.api.replication.v1.ClusterReplicationConfig>}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.temporal.api.replication.v1.ClusterReplicationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_replication_v1_message_pb.ClusterReplicationConfig, 5));
};


/** @param {!Array<!proto.temporal.api.replication.v1.ClusterReplicationConfig>} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setClustersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.temporal.api.replication.v1.ClusterReplicationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.replication.v1.ClusterReplicationConfig}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.temporal.api.replication.v1.ClusterReplicationConfig, opt_index);
};


proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.clearClustersList = function() {
  this.setClustersList([]);
};


/**
 * optional string active_cluster_name = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getActiveClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setActiveClusterName = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, string> data = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.clearDataMap = function() {
  this.getDataMap().clear();
};


/**
 * optional string security_token = 8;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getSecurityToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setSecurityToken = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_global_namespace = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getIsGlobalNamespace = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setIsGlobalNamespace = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional temporal.api.enums.v1.ArchivalState history_archival_state = 10;
 * @return {!proto.temporal.api.enums.v1.ArchivalState}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getHistoryArchivalState = function() {
  return /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.temporal.api.enums.v1.ArchivalState} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setHistoryArchivalState = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string history_archival_uri = 11;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getHistoryArchivalUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setHistoryArchivalUri = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional temporal.api.enums.v1.ArchivalState visibility_archival_state = 12;
 * @return {!proto.temporal.api.enums.v1.ArchivalState}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getVisibilityArchivalState = function() {
  return /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.temporal.api.enums.v1.ArchivalState} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setVisibilityArchivalState = function(value) {
  jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string visibility_archival_uri = 13;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.getVisibilityArchivalUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RegisterNamespaceRequest.prototype.setVisibilityArchivalUri = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.displayName = 'proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse;
  return proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RegisterNamespaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListNamespacesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListNamespacesRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListNamespacesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListNamespacesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListNamespacesRequest}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListNamespacesRequest;
  return proto.temporal.api.workflowservice.v1.ListNamespacesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListNamespacesRequest}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListNamespacesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListNamespacesRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListNamespacesResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListNamespacesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListNamespacesResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListNamespacesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListNamespacesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespacesList: jspb.Message.toObjectList(msg.getNamespacesList(),
    proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListNamespacesResponse}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListNamespacesResponse;
  return proto.temporal.api.workflowservice.v1.ListNamespacesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListNamespacesResponse}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse;
      reader.readMessage(value,proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.deserializeBinaryFromReader);
      msg.addNamespaces(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListNamespacesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListNamespacesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated DescribeNamespaceResponse namespaces = 1;
 * @return {!Array<!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse>}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.getNamespacesList = function() {
  return /** @type{!Array<!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse, 1));
};


/** @param {!Array<!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse>} value */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.setNamespacesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.addNamespaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse, opt_index);
};


proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.clearNamespacesList = function() {
  this.setNamespacesList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListNamespacesResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.displayName = 'proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest;
  return proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.displayName = 'proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespaceInfo: (f = msg.getNamespaceInfo()) && temporal_api_namespace_v1_message_pb.NamespaceInfo.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && temporal_api_namespace_v1_message_pb.NamespaceConfig.toObject(includeInstance, f),
    replicationConfig: (f = msg.getReplicationConfig()) && temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.toObject(includeInstance, f),
    failoverVersion: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isGlobalNamespace: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse;
  return proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_namespace_v1_message_pb.NamespaceInfo;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.NamespaceInfo.deserializeBinaryFromReader);
      msg.setNamespaceInfo(value);
      break;
    case 2:
      var value = new temporal_api_namespace_v1_message_pb.NamespaceConfig;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.NamespaceConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new temporal_api_replication_v1_message_pb.NamespaceReplicationConfig;
      reader.readMessage(value,temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.deserializeBinaryFromReader);
      msg.setReplicationConfig(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFailoverVersion(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGlobalNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespaceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_namespace_v1_message_pb.NamespaceInfo.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_namespace_v1_message_pb.NamespaceConfig.serializeBinaryToWriter
    );
  }
  f = message.getReplicationConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.serializeBinaryToWriter
    );
  }
  f = message.getFailoverVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsGlobalNamespace();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional temporal.api.namespace.v1.NamespaceInfo namespace_info = 1;
 * @return {?proto.temporal.api.namespace.v1.NamespaceInfo}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.getNamespaceInfo = function() {
  return /** @type{?proto.temporal.api.namespace.v1.NamespaceInfo} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.NamespaceInfo, 1));
};


/** @param {?proto.temporal.api.namespace.v1.NamespaceInfo|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.setNamespaceInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.clearNamespaceInfo = function() {
  this.setNamespaceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.hasNamespaceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional temporal.api.namespace.v1.NamespaceConfig config = 2;
 * @return {?proto.temporal.api.namespace.v1.NamespaceConfig}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.getConfig = function() {
  return /** @type{?proto.temporal.api.namespace.v1.NamespaceConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.NamespaceConfig, 2));
};


/** @param {?proto.temporal.api.namespace.v1.NamespaceConfig|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.replication.v1.NamespaceReplicationConfig replication_config = 3;
 * @return {?proto.temporal.api.replication.v1.NamespaceReplicationConfig}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.getReplicationConfig = function() {
  return /** @type{?proto.temporal.api.replication.v1.NamespaceReplicationConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_replication_v1_message_pb.NamespaceReplicationConfig, 3));
};


/** @param {?proto.temporal.api.replication.v1.NamespaceReplicationConfig|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.setReplicationConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.clearReplicationConfig = function() {
  this.setReplicationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.hasReplicationConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 failover_version = 4;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.getFailoverVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.setFailoverVersion = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_global_namespace = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.getIsGlobalNamespace = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.DescribeNamespaceResponse.prototype.setIsGlobalNamespace = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.displayName = 'proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateInfo: (f = msg.getUpdateInfo()) && temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && temporal_api_namespace_v1_message_pb.NamespaceConfig.toObject(includeInstance, f),
    replicationConfig: (f = msg.getReplicationConfig()) && temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.toObject(includeInstance, f),
    securityToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    deleteBadBinary: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest;
  return proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo.deserializeBinaryFromReader);
      msg.setUpdateInfo(value);
      break;
    case 3:
      var value = new temporal_api_namespace_v1_message_pb.NamespaceConfig;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.NamespaceConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 4:
      var value = new temporal_api_replication_v1_message_pb.NamespaceReplicationConfig;
      reader.readMessage(value,temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.deserializeBinaryFromReader);
      msg.setReplicationConfig(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecurityToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeleteBadBinary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_namespace_v1_message_pb.NamespaceConfig.serializeBinaryToWriter
    );
  }
  f = message.getReplicationConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.serializeBinaryToWriter
    );
  }
  f = message.getSecurityToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDeleteBadBinary();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.namespace.v1.UpdateNamespaceInfo update_info = 2;
 * @return {?proto.temporal.api.namespace.v1.UpdateNamespaceInfo}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getUpdateInfo = function() {
  return /** @type{?proto.temporal.api.namespace.v1.UpdateNamespaceInfo} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.UpdateNamespaceInfo, 2));
};


/** @param {?proto.temporal.api.namespace.v1.UpdateNamespaceInfo|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setUpdateInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.clearUpdateInfo = function() {
  this.setUpdateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.hasUpdateInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.namespace.v1.NamespaceConfig config = 3;
 * @return {?proto.temporal.api.namespace.v1.NamespaceConfig}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getConfig = function() {
  return /** @type{?proto.temporal.api.namespace.v1.NamespaceConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.NamespaceConfig, 3));
};


/** @param {?proto.temporal.api.namespace.v1.NamespaceConfig|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.replication.v1.NamespaceReplicationConfig replication_config = 4;
 * @return {?proto.temporal.api.replication.v1.NamespaceReplicationConfig}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getReplicationConfig = function() {
  return /** @type{?proto.temporal.api.replication.v1.NamespaceReplicationConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_replication_v1_message_pb.NamespaceReplicationConfig, 4));
};


/** @param {?proto.temporal.api.replication.v1.NamespaceReplicationConfig|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setReplicationConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.clearReplicationConfig = function() {
  this.setReplicationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.hasReplicationConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string security_token = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getSecurityToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setSecurityToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string delete_bad_binary = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.getDeleteBadBinary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceRequest.prototype.setDeleteBadBinary = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.displayName = 'proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespaceInfo: (f = msg.getNamespaceInfo()) && temporal_api_namespace_v1_message_pb.NamespaceInfo.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && temporal_api_namespace_v1_message_pb.NamespaceConfig.toObject(includeInstance, f),
    replicationConfig: (f = msg.getReplicationConfig()) && temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.toObject(includeInstance, f),
    failoverVersion: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isGlobalNamespace: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse;
  return proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_namespace_v1_message_pb.NamespaceInfo;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.NamespaceInfo.deserializeBinaryFromReader);
      msg.setNamespaceInfo(value);
      break;
    case 2:
      var value = new temporal_api_namespace_v1_message_pb.NamespaceConfig;
      reader.readMessage(value,temporal_api_namespace_v1_message_pb.NamespaceConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new temporal_api_replication_v1_message_pb.NamespaceReplicationConfig;
      reader.readMessage(value,temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.deserializeBinaryFromReader);
      msg.setReplicationConfig(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFailoverVersion(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGlobalNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespaceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_namespace_v1_message_pb.NamespaceInfo.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_namespace_v1_message_pb.NamespaceConfig.serializeBinaryToWriter
    );
  }
  f = message.getReplicationConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_replication_v1_message_pb.NamespaceReplicationConfig.serializeBinaryToWriter
    );
  }
  f = message.getFailoverVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsGlobalNamespace();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional temporal.api.namespace.v1.NamespaceInfo namespace_info = 1;
 * @return {?proto.temporal.api.namespace.v1.NamespaceInfo}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.getNamespaceInfo = function() {
  return /** @type{?proto.temporal.api.namespace.v1.NamespaceInfo} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.NamespaceInfo, 1));
};


/** @param {?proto.temporal.api.namespace.v1.NamespaceInfo|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.setNamespaceInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.clearNamespaceInfo = function() {
  this.setNamespaceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.hasNamespaceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional temporal.api.namespace.v1.NamespaceConfig config = 2;
 * @return {?proto.temporal.api.namespace.v1.NamespaceConfig}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.getConfig = function() {
  return /** @type{?proto.temporal.api.namespace.v1.NamespaceConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_namespace_v1_message_pb.NamespaceConfig, 2));
};


/** @param {?proto.temporal.api.namespace.v1.NamespaceConfig|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.replication.v1.NamespaceReplicationConfig replication_config = 3;
 * @return {?proto.temporal.api.replication.v1.NamespaceReplicationConfig}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.getReplicationConfig = function() {
  return /** @type{?proto.temporal.api.replication.v1.NamespaceReplicationConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_replication_v1_message_pb.NamespaceReplicationConfig, 3));
};


/** @param {?proto.temporal.api.replication.v1.NamespaceReplicationConfig|undefined} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.setReplicationConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.clearReplicationConfig = function() {
  this.setReplicationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.hasReplicationConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 failover_version = 4;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.getFailoverVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.setFailoverVersion = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_global_namespace = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.getIsGlobalNamespace = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.UpdateNamespaceResponse.prototype.setIsGlobalNamespace = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.displayName = 'proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    securityToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest;
  return proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecurityToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecurityToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string security_token = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.getSecurityToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceRequest.prototype.setSecurityToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.displayName = 'proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse;
  return proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DeprecateNamespaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowExecutionTimeout: (f = msg.getWorkflowExecutionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowRunTimeout: (f = msg.getWorkflowRunTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskTimeout: (f = msg.getWorkflowTaskTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    workflowIdReusePolicy: jspb.Message.getFieldWithDefault(msg, 11, 0),
    retryPolicy: (f = msg.getRetryPolicy()) && temporal_api_common_v1_message_pb.RetryPolicy.toObject(includeInstance, f),
    cronSchedule: jspb.Message.getFieldWithDefault(msg, 13, ""),
    memo: (f = msg.getMemo()) && temporal_api_common_v1_message_pb.Memo.toObject(includeInstance, f),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTimeout(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowRunTimeout(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowTaskTimeout(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 11:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (reader.readEnum());
      msg.setWorkflowIdReusePolicy(value);
      break;
    case 12:
      var value = new temporal_api_common_v1_message_pb.RetryPolicy;
      reader.readMessage(value,temporal_api_common_v1_message_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSchedule(value);
      break;
    case 14:
      var value = new temporal_api_common_v1_message_pb.Memo;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 15:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
      break;
    case 16:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowRunTimeout();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskTimeout();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getWorkflowIdReusePolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      temporal_api_common_v1_message_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getCronSchedule();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      temporal_api_common_v1_message_pb.Memo.serializeBinaryToWriter
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 4;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration workflow_execution_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowExecutionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowExecutionTimeout = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearWorkflowExecutionTimeout = function() {
  this.setWorkflowExecutionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasWorkflowExecutionTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration workflow_run_timeout = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowRunTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowRunTimeout = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearWorkflowRunTimeout = function() {
  this.setWorkflowRunTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasWorkflowRunTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration workflow_task_timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowTaskTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowTaskTimeout = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearWorkflowTaskTimeout = function() {
  this.setWorkflowTaskTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasWorkflowTaskTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string identity = 9;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string request_id = 10;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional temporal.api.enums.v1.WorkflowIdReusePolicy workflow_id_reuse_policy = 11;
 * @return {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getWorkflowIdReusePolicy = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setWorkflowIdReusePolicy = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 12;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 12));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string cron_schedule = 13;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getCronSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setCronSchedule = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional temporal.api.common.v1.Memo memo = 14;
 * @return {?proto.temporal.api.common.v1.Memo}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getMemo = function() {
  return /** @type{?proto.temporal.api.common.v1.Memo} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Memo, 14));
};


/** @param {?proto.temporal.api.common.v1.Memo|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setMemo = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearMemo = function() {
  this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 15;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 15));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasSearchAttributes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 16;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 16));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    runId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string run_id = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.StartWorkflowExecutionResponse.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.displayName = 'proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    execution: (f = msg.getExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    maximumPageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    waitNewEvent: jspb.Message.getFieldWithDefault(msg, 5, false),
    historyEventFilterType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    skipArchival: jspb.Message.getFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest;
  return proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumPageSize(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitNewEvent(value);
      break;
    case 6:
      var value = /** @type {!proto.temporal.api.enums.v1.HistoryEventFilterType} */ (reader.readEnum());
      msg.setHistoryEventFilterType(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipArchival(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getMaximumPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getWaitNewEvent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHistoryEventFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSkipArchival();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.clearExecution = function() {
  this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 maximum_page_size = 3;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getMaximumPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setMaximumPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes next_page_token = 4;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes next_page_token = 4;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bool wait_new_event = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getWaitNewEvent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setWaitNewEvent = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional temporal.api.enums.v1.HistoryEventFilterType history_event_filter_type = 6;
 * @return {!proto.temporal.api.enums.v1.HistoryEventFilterType}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getHistoryEventFilterType = function() {
  return /** @type {!proto.temporal.api.enums.v1.HistoryEventFilterType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.temporal.api.enums.v1.HistoryEventFilterType} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setHistoryEventFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional bool skip_archival = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.getSkipArchival = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest.prototype.setSkipArchival = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.displayName = 'proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    history: (f = msg.getHistory()) && temporal_api_history_v1_message_pb.History.toObject(includeInstance, f),
    rawHistoryList: jspb.Message.toObjectList(msg.getRawHistoryList(),
    temporal_api_common_v1_message_pb.DataBlob.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64(),
    archived: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse;
  return proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_history_v1_message_pb.History;
      reader.readMessage(value,temporal_api_history_v1_message_pb.History.deserializeBinaryFromReader);
      msg.setHistory(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.DataBlob;
      reader.readMessage(value,temporal_api_common_v1_message_pb.DataBlob.deserializeBinaryFromReader);
      msg.addRawHistory(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_history_v1_message_pb.History.serializeBinaryToWriter
    );
  }
  f = message.getRawHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.DataBlob.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getArchived();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional temporal.api.history.v1.History history = 1;
 * @return {?proto.temporal.api.history.v1.History}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getHistory = function() {
  return /** @type{?proto.temporal.api.history.v1.History} */ (
    jspb.Message.getWrapperField(this, temporal_api_history_v1_message_pb.History, 1));
};


/** @param {?proto.temporal.api.history.v1.History|undefined} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.setHistory = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.clearHistory = function() {
  this.setHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.hasHistory = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated temporal.api.common.v1.DataBlob raw_history = 2;
 * @return {!Array<!proto.temporal.api.common.v1.DataBlob>}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getRawHistoryList = function() {
  return /** @type{!Array<!proto.temporal.api.common.v1.DataBlob>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_common_v1_message_pb.DataBlob, 2));
};


/** @param {!Array<!proto.temporal.api.common.v1.DataBlob>} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.setRawHistoryList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.temporal.api.common.v1.DataBlob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.common.v1.DataBlob}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.addRawHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.temporal.api.common.v1.DataBlob, opt_index);
};


proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.clearRawHistoryList = function() {
  this.setRawHistoryList([]);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool archived = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.getArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse.prototype.setArchived = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.displayName = 'proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    binaryChecksum: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest;
  return proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinaryChecksum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBinaryChecksum();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 2;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 2));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string binary_checksum = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.getBinaryChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest.prototype.setBinaryChecksum = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.displayName = 'proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    previousStartedEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    attempt: jspb.Message.getFieldWithDefault(msg, 6, 0),
    backlogCountHint: jspb.Message.getFieldWithDefault(msg, 7, 0),
    history: (f = msg.getHistory()) && temporal_api_history_v1_message_pb.History.toObject(includeInstance, f),
    nextPageToken: msg.getNextPageToken_asB64(),
    query: (f = msg.getQuery()) && temporal_api_query_v1_message_pb.WorkflowQuery.toObject(includeInstance, f),
    workflowExecutionTaskQueue: (f = msg.getWorkflowExecutionTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    scheduledTime: (f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startedTime: (f = msg.getStartedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    queriesMap: (f = msg.getQueriesMap()) ? f.toObject(includeInstance, proto.temporal.api.query.v1.WorkflowQuery.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse;
  return proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreviousStartedEventId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBacklogCountHint(value);
      break;
    case 8:
      var value = new temporal_api_history_v1_message_pb.History;
      reader.readMessage(value,temporal_api_history_v1_message_pb.History.deserializeBinaryFromReader);
      msg.setHistory(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 10:
      var value = new temporal_api_query_v1_message_pb.WorkflowQuery;
      reader.readMessage(value,temporal_api_query_v1_message_pb.WorkflowQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 11:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTaskQueue(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledTime(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedTime(value);
      break;
    case 14:
      var value = msg.getQueriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.temporal.api.query.v1.WorkflowQuery.deserializeBinaryFromReader, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getPreviousStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAttempt();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getBacklogCountHint();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getHistory();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      temporal_api_history_v1_message_pb.History.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      temporal_api_query_v1_message_pb.WorkflowQuery.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTaskQueue();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getScheduledTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartedTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQueriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.temporal.api.query.v1.WorkflowQuery.serializeBinaryToWriter);
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 previous_started_event_id = 4;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getPreviousStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setPreviousStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 started_event_id = 5;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 attempt = 6;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setAttempt = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 backlog_count_hint = 7;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getBacklogCountHint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setBacklogCountHint = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional temporal.api.history.v1.History history = 8;
 * @return {?proto.temporal.api.history.v1.History}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getHistory = function() {
  return /** @type{?proto.temporal.api.history.v1.History} */ (
    jspb.Message.getWrapperField(this, temporal_api_history_v1_message_pb.History, 8));
};


/** @param {?proto.temporal.api.history.v1.History|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setHistory = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearHistory = function() {
  this.setHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasHistory = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes next_page_token = 9;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes next_page_token = 9;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional temporal.api.query.v1.WorkflowQuery query = 10;
 * @return {?proto.temporal.api.query.v1.WorkflowQuery}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getQuery = function() {
  return /** @type{?proto.temporal.api.query.v1.WorkflowQuery} */ (
    jspb.Message.getWrapperField(this, temporal_api_query_v1_message_pb.WorkflowQuery, 10));
};


/** @param {?proto.temporal.api.query.v1.WorkflowQuery|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setQuery = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearQuery = function() {
  this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue workflow_execution_task_queue = 11;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getWorkflowExecutionTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 11));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setWorkflowExecutionTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearWorkflowExecutionTaskQueue = function() {
  this.setWorkflowExecutionTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasWorkflowExecutionTaskQueue = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp scheduled_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setScheduledTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearScheduledTime = function() {
  this.setScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasScheduledTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp started_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getStartedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.setStartedTime = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearStartedTime = function() {
  this.setStartedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.hasStartedTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * map<string, temporal.api.query.v1.WorkflowQuery> queries = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.temporal.api.query.v1.WorkflowQuery>}
 */
proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.getQueriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.temporal.api.query.v1.WorkflowQuery>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      proto.temporal.api.query.v1.WorkflowQuery));
};


proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.prototype.clearQueriesMap = function() {
  this.getQueriesMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    commandsList: jspb.Message.toObjectList(msg.getCommandsList(),
    temporal_api_command_v1_message_pb.Command.toObject, includeInstance),
    identity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stickyAttributes: (f = msg.getStickyAttributes()) && temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes.toObject(includeInstance, f),
    returnNewWorkflowTask: jspb.Message.getFieldWithDefault(msg, 5, false),
    forceCreateNewWorkflowTask: jspb.Message.getFieldWithDefault(msg, 6, false),
    binaryChecksum: jspb.Message.getFieldWithDefault(msg, 7, ""),
    queryResultsMap: (f = msg.getQueryResultsMap()) ? f.toObject(includeInstance, proto.temporal.api.query.v1.WorkflowQueryResult.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest;
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_command_v1_message_pb.Command;
      reader.readMessage(value,temporal_api_command_v1_message_pb.Command.deserializeBinaryFromReader);
      msg.addCommands(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 4:
      var value = new temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes.deserializeBinaryFromReader);
      msg.setStickyAttributes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReturnNewWorkflowTask(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceCreateNewWorkflowTask(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinaryChecksum(value);
      break;
    case 8:
      var value = msg.getQueryResultsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.temporal.api.query.v1.WorkflowQueryResult.deserializeBinaryFromReader, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      temporal_api_command_v1_message_pb.Command.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStickyAttributes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes.serializeBinaryToWriter
    );
  }
  f = message.getReturnNewWorkflowTask();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getForceCreateNewWorkflowTask();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getBinaryChecksum();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getQueryResultsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.temporal.api.query.v1.WorkflowQueryResult.serializeBinaryToWriter);
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated temporal.api.command.v1.Command commands = 2;
 * @return {!Array<!proto.temporal.api.command.v1.Command>}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getCommandsList = function() {
  return /** @type{!Array<!proto.temporal.api.command.v1.Command>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_command_v1_message_pb.Command, 2));
};


/** @param {!Array<!proto.temporal.api.command.v1.Command>} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setCommandsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.temporal.api.command.v1.Command=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.command.v1.Command}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.addCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.temporal.api.command.v1.Command, opt_index);
};


proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.clearCommandsList = function() {
  this.setCommandsList([]);
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.taskqueue.v1.StickyExecutionAttributes sticky_attributes = 4;
 * @return {?proto.temporal.api.taskqueue.v1.StickyExecutionAttributes}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getStickyAttributes = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.StickyExecutionAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.StickyExecutionAttributes, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.StickyExecutionAttributes|undefined} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setStickyAttributes = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.clearStickyAttributes = function() {
  this.setStickyAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.hasStickyAttributes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool return_new_workflow_task = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getReturnNewWorkflowTask = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setReturnNewWorkflowTask = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool force_create_new_workflow_task = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getForceCreateNewWorkflowTask = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setForceCreateNewWorkflowTask = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string binary_checksum = 7;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getBinaryChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.setBinaryChecksum = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * map<string, temporal.api.query.v1.WorkflowQueryResult> query_results = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.temporal.api.query.v1.WorkflowQueryResult>}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.getQueryResultsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.temporal.api.query.v1.WorkflowQueryResult>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.temporal.api.query.v1.WorkflowQueryResult));
};


proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest.prototype.clearQueryResultsMap = function() {
  this.getQueryResultsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowTask: (f = msg.getWorkflowTask()) && proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse;
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse;
      reader.readMessage(value,proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.deserializeBinaryFromReader);
      msg.setWorkflowTask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PollWorkflowTaskQueueResponse workflow_task = 1;
 * @return {?proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.getWorkflowTask = function() {
  return /** @type{?proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse, 1));
};


/** @param {?proto.temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse|undefined} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.setWorkflowTask = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.clearWorkflowTask = function() {
  this.setWorkflowTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse.prototype.hasWorkflowTask = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    cause: jspb.Message.getFieldWithDefault(msg, 2, 0),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 4, ""),
    binaryChecksum: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest;
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 3:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinaryChecksum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBinaryChecksum();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.enums.v1.WorkflowTaskFailedCause cause = 2;
 * @return {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getCause = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.setCause = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional temporal.api.failure.v1.Failure failure = 3;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 3));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string identity = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string binary_checksum = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.getBinaryChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest.prototype.setBinaryChecksum = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse;
  return proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.displayName = 'proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    taskQueueMetadata: (f = msg.getTaskQueueMetadata()) && temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest;
  return proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 4:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata.deserializeBinaryFromReader);
      msg.setTaskQueueMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTaskQueueMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 2;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 2));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueueMetadata task_queue_metadata = 4;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueueMetadata}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.getTaskQueueMetadata = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueueMetadata} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueueMetadata, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueueMetadata|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.setTaskQueueMetadata = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.clearTaskQueueMetadata = function() {
  this.setTaskQueueMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueRequest.prototype.hasTaskQueueMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.displayName = 'proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    workflowNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    activityType: (f = msg.getActivityType()) && temporal_api_common_v1_message_pb.ActivityType.toObject(includeInstance, f),
    activityId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    heartbeatDetails: (f = msg.getHeartbeatDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    scheduledTime: (f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    currentAttemptScheduledTime: (f = msg.getCurrentAttemptScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startedTime: (f = msg.getStartedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    attempt: jspb.Message.getFieldWithDefault(msg, 13, 0),
    scheduleToCloseTimeout: (f = msg.getScheduleToCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    startToCloseTimeout: (f = msg.getStartToCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    heartbeatTimeout: (f = msg.getHeartbeatTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    retryPolicy: (f = msg.getRetryPolicy()) && temporal_api_common_v1_message_pb.RetryPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse;
  return proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.ActivityType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.ActivityType.deserializeBinaryFromReader);
      msg.setActivityType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 7:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 8:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 9:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setHeartbeatDetails(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCurrentAttemptScheduledTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedTime(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempt(value);
      break;
    case 14:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setScheduleToCloseTimeout(value);
      break;
    case 15:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartToCloseTimeout(value);
      break;
    case 16:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setHeartbeatTimeout(value);
      break;
    case 17:
      var value = new temporal_api_common_v1_message_pb.RetryPolicy;
      reader.readMessage(value,temporal_api_common_v1_message_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getWorkflowNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getActivityType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.ActivityType.serializeBinaryToWriter
    );
  }
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getHeartbeatDetails();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getScheduledTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCurrentAttemptScheduledTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartedTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAttempt();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getScheduleToCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStartToCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHeartbeatTimeout();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      temporal_api_common_v1_message_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string workflow_namespace = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getWorkflowNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setWorkflowNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.ActivityType activity_type = 5;
 * @return {?proto.temporal.api.common.v1.ActivityType}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getActivityType = function() {
  return /** @type{?proto.temporal.api.common.v1.ActivityType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.ActivityType, 5));
};


/** @param {?proto.temporal.api.common.v1.ActivityType|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setActivityType = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearActivityType = function() {
  this.setActivityType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasActivityType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string activity_id = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional temporal.api.common.v1.Header header = 7;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 7));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 8;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 8));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional temporal.api.common.v1.Payloads heartbeat_details = 9;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getHeartbeatDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 9));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setHeartbeatDetails = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearHeartbeatDetails = function() {
  this.setHeartbeatDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasHeartbeatDetails = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp scheduled_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setScheduledTime = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearScheduledTime = function() {
  this.setScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasScheduledTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp current_attempt_scheduled_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getCurrentAttemptScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setCurrentAttemptScheduledTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearCurrentAttemptScheduledTime = function() {
  this.setCurrentAttemptScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasCurrentAttemptScheduledTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp started_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getStartedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setStartedTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearStartedTime = function() {
  this.setStartedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasStartedTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 attempt = 13;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setAttempt = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional google.protobuf.Duration schedule_to_close_timeout = 14;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getScheduleToCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 14));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setScheduleToCloseTimeout = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearScheduleToCloseTimeout = function() {
  this.setScheduleToCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasScheduleToCloseTimeout = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Duration start_to_close_timeout = 15;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getStartToCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 15));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setStartToCloseTimeout = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearStartToCloseTimeout = function() {
  this.setStartToCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasStartToCloseTimeout = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Duration heartbeat_timeout = 16;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getHeartbeatTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 16));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setHeartbeatTimeout = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearHeartbeatTimeout = function() {
  this.setHeartbeatTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasHeartbeatTimeout = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 17;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 17));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.PollActivityTaskQueueResponse.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.displayName = 'proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest;
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.displayName = 'proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancelRequested: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse;
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelRequested(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancelRequested();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool cancel_requested = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.prototype.getCancelRequested = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse.prototype.setCancelRequested = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.displayName = 'proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activityId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest;
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string run_id = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string activity_id = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string identity = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.displayName = 'proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancelRequested: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse;
  return proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelRequested(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancelRequested();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool cancel_requested = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.prototype.getCancelRequested = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse.prototype.setCancelRequested = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    result: (f = msg.getResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads result = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.getResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activityId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    result: (f = msg.getResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string run_id = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string activity_id = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.common.v1.Payloads result = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.hasResult = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string identity = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.failure.v1.Failure failure = 2;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 2));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activityId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 5:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string run_id = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string activity_id = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.failure.v1.Failure failure = 5;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 5));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string identity = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activityId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string run_id = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string activity_id = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string identity = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse;
  return proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstExecutionRunId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstExecutionRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string request_id = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_execution_run_id = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.getFirstExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.prototype.setFirstExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    signalName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    control: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignalName(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getSignalName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string signal_name = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getSignalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setSignalName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.common.v1.Payloads input = 4;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 4));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string identity = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string request_id = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string control = 7;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowExecutionTimeout: (f = msg.getWorkflowExecutionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowRunTimeout: (f = msg.getWorkflowRunTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskTimeout: (f = msg.getWorkflowTaskTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    workflowIdReusePolicy: jspb.Message.getFieldWithDefault(msg, 11, 0),
    signalName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    signalInput: (f = msg.getSignalInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    control: jspb.Message.getFieldWithDefault(msg, 14, ""),
    retryPolicy: (f = msg.getRetryPolicy()) && temporal_api_common_v1_message_pb.RetryPolicy.toObject(includeInstance, f),
    cronSchedule: jspb.Message.getFieldWithDefault(msg, 16, ""),
    memo: (f = msg.getMemo()) && temporal_api_common_v1_message_pb.Memo.toObject(includeInstance, f),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTimeout(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowRunTimeout(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowTaskTimeout(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 11:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (reader.readEnum());
      msg.setWorkflowIdReusePolicy(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignalName(value);
      break;
    case 13:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setSignalInput(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    case 15:
      var value = new temporal_api_common_v1_message_pb.RetryPolicy;
      reader.readMessage(value,temporal_api_common_v1_message_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSchedule(value);
      break;
    case 17:
      var value = new temporal_api_common_v1_message_pb.Memo;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 18:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
      break;
    case 19:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowRunTimeout();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskTimeout();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getWorkflowIdReusePolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getSignalName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSignalInput();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      temporal_api_common_v1_message_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getCronSchedule();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      temporal_api_common_v1_message_pb.Memo.serializeBinaryToWriter
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 4;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration workflow_execution_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowExecutionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowExecutionTimeout = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearWorkflowExecutionTimeout = function() {
  this.setWorkflowExecutionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasWorkflowExecutionTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration workflow_run_timeout = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowRunTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowRunTimeout = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearWorkflowRunTimeout = function() {
  this.setWorkflowRunTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasWorkflowRunTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration workflow_task_timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowTaskTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowTaskTimeout = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearWorkflowTaskTimeout = function() {
  this.setWorkflowTaskTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasWorkflowTaskTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string identity = 9;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string request_id = 10;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional temporal.api.enums.v1.WorkflowIdReusePolicy workflow_id_reuse_policy = 11;
 * @return {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getWorkflowIdReusePolicy = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setWorkflowIdReusePolicy = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string signal_name = 12;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getSignalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setSignalName = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional temporal.api.common.v1.Payloads signal_input = 13;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getSignalInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 13));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setSignalInput = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearSignalInput = function() {
  this.setSignalInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasSignalInput = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string control = 14;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 15;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 15));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string cron_schedule = 16;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getCronSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setCronSchedule = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional temporal.api.common.v1.Memo memo = 17;
 * @return {?proto.temporal.api.common.v1.Memo}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getMemo = function() {
  return /** @type{?proto.temporal.api.common.v1.Memo} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Memo, 17));
};


/** @param {?proto.temporal.api.common.v1.Memo|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setMemo = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearMemo = function() {
  this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 18;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 18));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasSearchAttributes = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 19;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 19));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 19) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    runId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string run_id = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workflowTaskFinishEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    requestId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskFinishEventId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkflowTaskFinishEventId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 workflow_task_finish_event_id = 4;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.getWorkflowTaskFinishEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.setWorkflowTaskFinishEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string request_id = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    runId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string run_id = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 5, ""),
    firstExecutionRunId: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstExecutionRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFirstExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 4;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 4));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string identity = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string first_execution_run_id = 6;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.getFirstExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.prototype.setFirstExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.oneofGroups_);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.FiltersCase = {
  FILTERS_NOT_SET: 0,
  EXECUTION_FILTER: 5,
  TYPE_FILTER: 6
};

/**
 * @return {proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.FiltersCase}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getFiltersCase = function() {
  return /** @type {proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.FiltersCase} */(jspb.Message.computeOneofCase(this, proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maximumPageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    startTimeFilter: (f = msg.getStartTimeFilter()) && temporal_api_filter_v1_message_pb.StartTimeFilter.toObject(includeInstance, f),
    executionFilter: (f = msg.getExecutionFilter()) && temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.toObject(includeInstance, f),
    typeFilter: (f = msg.getTypeFilter()) && temporal_api_filter_v1_message_pb.WorkflowTypeFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumPageSize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = new temporal_api_filter_v1_message_pb.StartTimeFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.StartTimeFilter.deserializeBinaryFromReader);
      msg.setStartTimeFilter(value);
      break;
    case 5:
      var value = new temporal_api_filter_v1_message_pb.WorkflowExecutionFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.deserializeBinaryFromReader);
      msg.setExecutionFilter(value);
      break;
    case 6:
      var value = new temporal_api_filter_v1_message_pb.WorkflowTypeFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.WorkflowTypeFilter.deserializeBinaryFromReader);
      msg.setTypeFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaximumPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStartTimeFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_filter_v1_message_pb.StartTimeFilter.serializeBinaryToWriter
    );
  }
  f = message.getExecutionFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.serializeBinaryToWriter
    );
  }
  f = message.getTypeFilter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      temporal_api_filter_v1_message_pb.WorkflowTypeFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 maximum_page_size = 2;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getMaximumPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setMaximumPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional temporal.api.filter.v1.StartTimeFilter start_time_filter = 4;
 * @return {?proto.temporal.api.filter.v1.StartTimeFilter}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getStartTimeFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.StartTimeFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.StartTimeFilter, 4));
};


/** @param {?proto.temporal.api.filter.v1.StartTimeFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setStartTimeFilter = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.clearStartTimeFilter = function() {
  this.setStartTimeFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.hasStartTimeFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.filter.v1.WorkflowExecutionFilter execution_filter = 5;
 * @return {?proto.temporal.api.filter.v1.WorkflowExecutionFilter}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getExecutionFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.WorkflowExecutionFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.WorkflowExecutionFilter, 5));
};


/** @param {?proto.temporal.api.filter.v1.WorkflowExecutionFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setExecutionFilter = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.oneofGroups_[0], value);
};


proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.clearExecutionFilter = function() {
  this.setExecutionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.hasExecutionFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional temporal.api.filter.v1.WorkflowTypeFilter type_filter = 6;
 * @return {?proto.temporal.api.filter.v1.WorkflowTypeFilter}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.getTypeFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.WorkflowTypeFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.WorkflowTypeFilter, 6));
};


/** @param {?proto.temporal.api.filter.v1.WorkflowTypeFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.setTypeFilter = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.oneofGroups_[0], value);
};


proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.clearTypeFilter = function() {
  this.setTypeFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest.prototype.hasTypeFilter = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated temporal.api.workflow.v1.WorkflowExecutionInfo executions = 1;
 * @return {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 1));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.setExecutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflow.v1.WorkflowExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.clearExecutionsList = function() {
  this.setExecutionsList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_ = [[5,6,7]];

/**
 * @enum {number}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.FiltersCase = {
  FILTERS_NOT_SET: 0,
  EXECUTION_FILTER: 5,
  TYPE_FILTER: 6,
  STATUS_FILTER: 7
};

/**
 * @return {proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.FiltersCase}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getFiltersCase = function() {
  return /** @type {proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.FiltersCase} */(jspb.Message.computeOneofCase(this, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maximumPageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    startTimeFilter: (f = msg.getStartTimeFilter()) && temporal_api_filter_v1_message_pb.StartTimeFilter.toObject(includeInstance, f),
    executionFilter: (f = msg.getExecutionFilter()) && temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.toObject(includeInstance, f),
    typeFilter: (f = msg.getTypeFilter()) && temporal_api_filter_v1_message_pb.WorkflowTypeFilter.toObject(includeInstance, f),
    statusFilter: (f = msg.getStatusFilter()) && temporal_api_filter_v1_message_pb.StatusFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumPageSize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = new temporal_api_filter_v1_message_pb.StartTimeFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.StartTimeFilter.deserializeBinaryFromReader);
      msg.setStartTimeFilter(value);
      break;
    case 5:
      var value = new temporal_api_filter_v1_message_pb.WorkflowExecutionFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.deserializeBinaryFromReader);
      msg.setExecutionFilter(value);
      break;
    case 6:
      var value = new temporal_api_filter_v1_message_pb.WorkflowTypeFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.WorkflowTypeFilter.deserializeBinaryFromReader);
      msg.setTypeFilter(value);
      break;
    case 7:
      var value = new temporal_api_filter_v1_message_pb.StatusFilter;
      reader.readMessage(value,temporal_api_filter_v1_message_pb.StatusFilter.deserializeBinaryFromReader);
      msg.setStatusFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaximumPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStartTimeFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_filter_v1_message_pb.StartTimeFilter.serializeBinaryToWriter
    );
  }
  f = message.getExecutionFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_filter_v1_message_pb.WorkflowExecutionFilter.serializeBinaryToWriter
    );
  }
  f = message.getTypeFilter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      temporal_api_filter_v1_message_pb.WorkflowTypeFilter.serializeBinaryToWriter
    );
  }
  f = message.getStatusFilter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      temporal_api_filter_v1_message_pb.StatusFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 maximum_page_size = 2;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getMaximumPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setMaximumPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional temporal.api.filter.v1.StartTimeFilter start_time_filter = 4;
 * @return {?proto.temporal.api.filter.v1.StartTimeFilter}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getStartTimeFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.StartTimeFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.StartTimeFilter, 4));
};


/** @param {?proto.temporal.api.filter.v1.StartTimeFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setStartTimeFilter = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.clearStartTimeFilter = function() {
  this.setStartTimeFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.hasStartTimeFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.filter.v1.WorkflowExecutionFilter execution_filter = 5;
 * @return {?proto.temporal.api.filter.v1.WorkflowExecutionFilter}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getExecutionFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.WorkflowExecutionFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.WorkflowExecutionFilter, 5));
};


/** @param {?proto.temporal.api.filter.v1.WorkflowExecutionFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setExecutionFilter = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_[0], value);
};


proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.clearExecutionFilter = function() {
  this.setExecutionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.hasExecutionFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional temporal.api.filter.v1.WorkflowTypeFilter type_filter = 6;
 * @return {?proto.temporal.api.filter.v1.WorkflowTypeFilter}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getTypeFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.WorkflowTypeFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.WorkflowTypeFilter, 6));
};


/** @param {?proto.temporal.api.filter.v1.WorkflowTypeFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setTypeFilter = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_[0], value);
};


proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.clearTypeFilter = function() {
  this.setTypeFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.hasTypeFilter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional temporal.api.filter.v1.StatusFilter status_filter = 7;
 * @return {?proto.temporal.api.filter.v1.StatusFilter}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.getStatusFilter = function() {
  return /** @type{?proto.temporal.api.filter.v1.StatusFilter} */ (
    jspb.Message.getWrapperField(this, temporal_api_filter_v1_message_pb.StatusFilter, 7));
};


/** @param {?proto.temporal.api.filter.v1.StatusFilter|undefined} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.setStatusFilter = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.oneofGroups_[0], value);
};


proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.clearStatusFilter = function() {
  this.setStatusFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest.prototype.hasStatusFilter = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated temporal.api.workflow.v1.WorkflowExecutionInfo executions = 1;
 * @return {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 1));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.setExecutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflow.v1.WorkflowExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.clearExecutionsList = function() {
  this.setExecutionsList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    query: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated temporal.api.workflow.v1.WorkflowExecutionInfo executions = 1;
 * @return {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 1));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.setExecutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflow.v1.WorkflowExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.clearExecutionsList = function() {
  this.setExecutionsList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    query: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated temporal.api.workflow.v1.WorkflowExecutionInfo executions = 1;
 * @return {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 1));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.setExecutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflow.v1.WorkflowExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.clearExecutionsList = function() {
  this.setExecutionsList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nextPageToken: msg.getNextPageToken_asB64(),
    query: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes next_page_token = 3;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes next_page_token = 3;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject, includeInstance),
    nextPageToken: msg.getNextPageToken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated temporal.api.workflow.v1.WorkflowExecutionInfo executions = 1;
 * @return {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 1));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.WorkflowExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.setExecutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.workflow.v1.WorkflowExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.clearExecutionsList = function() {
  this.setExecutionsList([]);
};


/**
 * optional bytes next_page_token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.getNextPageToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes next_page_token = 2;
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.getNextPageToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextPageToken()));
};


/**
 * optional bytes next_page_token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextPageToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.getNextPageToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextPageToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest;
  return proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse;
  return proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.displayName = 'proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest;
  return proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.displayName = 'proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysMap: (f = msg.getKeysMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse;
  return proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getKeysMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
};


/**
 * map<string, temporal.api.enums.v1.IndexedValueType> keys = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.temporal.api.enums.v1.IndexedValueType>}
 */
proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.prototype.getKeysMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.temporal.api.enums.v1.IndexedValueType>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.temporal.api.workflowservice.v1.GetSearchAttributesResponse.prototype.clearKeysMap = function() {
  this.getKeysMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.displayName = 'proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskToken: msg.getTaskToken_asB64(),
    completedType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    queryResult: (f = msg.getQueryResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest;
  return proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaskToken(value);
      break;
    case 2:
      var value = /** @type {!proto.temporal.api.enums.v1.QueryResultType} */ (reader.readEnum());
      msg.setCompletedType(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setQueryResult(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCompletedType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getQueryResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes task_token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getTaskToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes task_token = 1;
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getTaskToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaskToken()));
};


/**
 * optional bytes task_token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaskToken()`
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getTaskToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaskToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.setTaskToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional temporal.api.enums.v1.QueryResultType completed_type = 2;
 * @return {!proto.temporal.api.enums.v1.QueryResultType}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getCompletedType = function() {
  return /** @type {!proto.temporal.api.enums.v1.QueryResultType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.temporal.api.enums.v1.QueryResultType} value */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.setCompletedType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.Payloads query_result = 3;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getQueryResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 3));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.setQueryResult = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.clearQueryResult = function() {
  this.setQueryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.hasQueryResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string error_message = 4;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest.prototype.setErrorMessage = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.displayName = 'proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse;
  return proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.displayName = 'proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    execution: (f = msg.getExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest;
  return proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.getExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.setExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.clearExecution = function() {
  this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.displayName = 'proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse;
  return proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.QueryWorkflowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.displayName = 'proto.temporal.api.workflowservice.v1.QueryWorkflowRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    execution: (f = msg.getExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && temporal_api_query_v1_message_pb.WorkflowQuery.toObject(includeInstance, f),
    queryRejectCondition: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.QueryWorkflowRequest}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.QueryWorkflowRequest;
  return proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.QueryWorkflowRequest}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    case 3:
      var value = new temporal_api_query_v1_message_pb.WorkflowQuery;
      reader.readMessage(value,temporal_api_query_v1_message_pb.WorkflowQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 4:
      var value = /** @type {!proto.temporal.api.enums.v1.QueryRejectCondition} */ (reader.readEnum());
      msg.setQueryRejectCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_query_v1_message_pb.WorkflowQuery.serializeBinaryToWriter
    );
  }
  f = message.getQueryRejectCondition();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.getExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.setExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.clearExecution = function() {
  this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.query.v1.WorkflowQuery query = 3;
 * @return {?proto.temporal.api.query.v1.WorkflowQuery}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.getQuery = function() {
  return /** @type{?proto.temporal.api.query.v1.WorkflowQuery} */ (
    jspb.Message.getWrapperField(this, temporal_api_query_v1_message_pb.WorkflowQuery, 3));
};


/** @param {?proto.temporal.api.query.v1.WorkflowQuery|undefined} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.setQuery = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.clearQuery = function() {
  this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.enums.v1.QueryRejectCondition query_reject_condition = 4;
 * @return {!proto.temporal.api.enums.v1.QueryRejectCondition}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.getQueryRejectCondition = function() {
  return /** @type {!proto.temporal.api.enums.v1.QueryRejectCondition} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.temporal.api.enums.v1.QueryRejectCondition} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowRequest.prototype.setQueryRejectCondition = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.QueryWorkflowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.displayName = 'proto.temporal.api.workflowservice.v1.QueryWorkflowResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    queryResult: (f = msg.getQueryResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    queryRejected: (f = msg.getQueryRejected()) && temporal_api_query_v1_message_pb.QueryRejected.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.QueryWorkflowResponse}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.QueryWorkflowResponse;
  return proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.QueryWorkflowResponse}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setQueryResult(value);
      break;
    case 2:
      var value = new temporal_api_query_v1_message_pb.QueryRejected;
      reader.readMessage(value,temporal_api_query_v1_message_pb.QueryRejected.deserializeBinaryFromReader);
      msg.setQueryRejected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.QueryWorkflowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getQueryRejected();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_query_v1_message_pb.QueryRejected.serializeBinaryToWriter
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads query_result = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.getQueryResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.setQueryResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.clearQueryResult = function() {
  this.setQueryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.hasQueryResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional temporal.api.query.v1.QueryRejected query_rejected = 2;
 * @return {?proto.temporal.api.query.v1.QueryRejected}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.getQueryRejected = function() {
  return /** @type{?proto.temporal.api.query.v1.QueryRejected} */ (
    jspb.Message.getWrapperField(this, temporal_api_query_v1_message_pb.QueryRejected, 2));
};


/** @param {?proto.temporal.api.query.v1.QueryRejected|undefined} value */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.setQueryRejected = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.clearQueryRejected = function() {
  this.setQueryRejected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.QueryWorkflowResponse.prototype.hasQueryRejected = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.displayName = 'proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    execution: (f = msg.getExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest;
  return proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.getExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.setExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.clearExecution = function() {
  this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.displayName = 'proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionConfig: (f = msg.getExecutionConfig()) && temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig.toObject(includeInstance, f),
    workflowExecutionInfo: (f = msg.getWorkflowExecutionInfo()) && temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.toObject(includeInstance, f),
    pendingActivitiesList: jspb.Message.toObjectList(msg.getPendingActivitiesList(),
    temporal_api_workflow_v1_message_pb.PendingActivityInfo.toObject, includeInstance),
    pendingChildrenList: jspb.Message.toObjectList(msg.getPendingChildrenList(),
    temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse;
  return proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig.deserializeBinaryFromReader);
      msg.setExecutionConfig(value);
      break;
    case 2:
      var value = new temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.deserializeBinaryFromReader);
      msg.setWorkflowExecutionInfo(value);
      break;
    case 3:
      var value = new temporal_api_workflow_v1_message_pb.PendingActivityInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.PendingActivityInfo.deserializeBinaryFromReader);
      msg.addPendingActivities(value);
      break;
    case 4:
      var value = new temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo.deserializeBinaryFromReader);
      msg.addPendingChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getPendingActivitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      temporal_api_workflow_v1_message_pb.PendingActivityInfo.serializeBinaryToWriter
    );
  }
  f = message.getPendingChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional temporal.api.workflow.v1.WorkflowExecutionConfig execution_config = 1;
 * @return {?proto.temporal.api.workflow.v1.WorkflowExecutionConfig}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.getExecutionConfig = function() {
  return /** @type{?proto.temporal.api.workflow.v1.WorkflowExecutionConfig} */ (
    jspb.Message.getWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionConfig, 1));
};


/** @param {?proto.temporal.api.workflow.v1.WorkflowExecutionConfig|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.setExecutionConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.clearExecutionConfig = function() {
  this.setExecutionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.hasExecutionConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional temporal.api.workflow.v1.WorkflowExecutionInfo workflow_execution_info = 2;
 * @return {?proto.temporal.api.workflow.v1.WorkflowExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.getWorkflowExecutionInfo = function() {
  return /** @type{?proto.temporal.api.workflow.v1.WorkflowExecutionInfo} */ (
    jspb.Message.getWrapperField(this, temporal_api_workflow_v1_message_pb.WorkflowExecutionInfo, 2));
};


/** @param {?proto.temporal.api.workflow.v1.WorkflowExecutionInfo|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.setWorkflowExecutionInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.clearWorkflowExecutionInfo = function() {
  this.setWorkflowExecutionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.hasWorkflowExecutionInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated temporal.api.workflow.v1.PendingActivityInfo pending_activities = 3;
 * @return {!Array<!proto.temporal.api.workflow.v1.PendingActivityInfo>}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.getPendingActivitiesList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.PendingActivityInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.PendingActivityInfo, 3));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.PendingActivityInfo>} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.setPendingActivitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.PendingActivityInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.PendingActivityInfo}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.addPendingActivities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.temporal.api.workflow.v1.PendingActivityInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.clearPendingActivitiesList = function() {
  this.setPendingActivitiesList([]);
};


/**
 * repeated temporal.api.workflow.v1.PendingChildExecutionInfo pending_children = 4;
 * @return {!Array<!proto.temporal.api.workflow.v1.PendingChildExecutionInfo>}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.getPendingChildrenList = function() {
  return /** @type{!Array<!proto.temporal.api.workflow.v1.PendingChildExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_workflow_v1_message_pb.PendingChildExecutionInfo, 4));
};


/** @param {!Array<!proto.temporal.api.workflow.v1.PendingChildExecutionInfo>} value */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.setPendingChildrenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.temporal.api.workflow.v1.PendingChildExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.workflow.v1.PendingChildExecutionInfo}
 */
proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.addPendingChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.temporal.api.workflow.v1.PendingChildExecutionInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse.prototype.clearPendingChildrenList = function() {
  this.setPendingChildrenList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.displayName = 'proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    taskQueueType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeTaskQueueStatus: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest;
  return proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 3:
      var value = /** @type {!proto.temporal.api.enums.v1.TaskQueueType} */ (reader.readEnum());
      msg.setTaskQueueType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeTaskQueueStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getTaskQueueType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getIncludeTaskQueueStatus();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 2;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 2));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.enums.v1.TaskQueueType task_queue_type = 3;
 * @return {!proto.temporal.api.enums.v1.TaskQueueType}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.getTaskQueueType = function() {
  return /** @type {!proto.temporal.api.enums.v1.TaskQueueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.temporal.api.enums.v1.TaskQueueType} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.setTaskQueueType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool include_task_queue_status = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.getIncludeTaskQueueStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueRequest.prototype.setIncludeTaskQueueStatus = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.displayName = 'proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pollersList: jspb.Message.toObjectList(msg.getPollersList(),
    temporal_api_taskqueue_v1_message_pb.PollerInfo.toObject, includeInstance),
    taskQueueStatus: (f = msg.getTaskQueueStatus()) && temporal_api_taskqueue_v1_message_pb.TaskQueueStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse;
  return proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_taskqueue_v1_message_pb.PollerInfo;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.PollerInfo.deserializeBinaryFromReader);
      msg.addPollers(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueueStatus;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueueStatus.deserializeBinaryFromReader);
      msg.setTaskQueueStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPollersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_taskqueue_v1_message_pb.PollerInfo.serializeBinaryToWriter
    );
  }
  f = message.getTaskQueueStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueueStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated temporal.api.taskqueue.v1.PollerInfo pollers = 1;
 * @return {!Array<!proto.temporal.api.taskqueue.v1.PollerInfo>}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.getPollersList = function() {
  return /** @type{!Array<!proto.temporal.api.taskqueue.v1.PollerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_taskqueue_v1_message_pb.PollerInfo, 1));
};


/** @param {!Array<!proto.temporal.api.taskqueue.v1.PollerInfo>} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.setPollersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.taskqueue.v1.PollerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.taskqueue.v1.PollerInfo}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.addPollers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.taskqueue.v1.PollerInfo, opt_index);
};


proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.clearPollersList = function() {
  this.setPollersList([]);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueueStatus task_queue_status = 2;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueueStatus}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.getTaskQueueStatus = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueueStatus} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueueStatus, 2));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueueStatus|undefined} value */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.setTaskQueueStatus = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.clearTaskQueueStatus = function() {
  this.setTaskQueueStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.DescribeTaskQueueResponse.prototype.hasTaskQueueStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetClusterInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.displayName = 'proto.temporal.api.workflowservice.v1.GetClusterInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetClusterInfoRequest}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetClusterInfoRequest;
  return proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetClusterInfoRequest}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.GetClusterInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.displayName = 'proto.temporal.api.workflowservice.v1.GetClusterInfoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    supportedClientsMap: (f = msg.getSupportedClientsMap()) ? f.toObject(includeInstance, undefined) : [],
    serverVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    versionInfo: (f = msg.getVersionInfo()) && temporal_api_version_v1_message_pb.VersionInfo.toObject(includeInstance, f),
    clusterName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    historyShardCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.GetClusterInfoResponse}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.GetClusterInfoResponse;
  return proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.GetClusterInfoResponse}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSupportedClientsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new temporal_api_version_v1_message_pb.VersionInfo;
      reader.readMessage(value,temporal_api_version_v1_message_pb.VersionInfo.deserializeBinaryFromReader);
      msg.setVersionInfo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryShardCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.GetClusterInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupportedClientsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getServerVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersionInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_version_v1_message_pb.VersionInfo.serializeBinaryToWriter
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHistoryShardCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * map<string, string> supported_clients = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getSupportedClientsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.clearSupportedClientsMap = function() {
  this.getSupportedClientsMap().clear();
};


/**
 * optional string server_version = 2;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getServerVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.setServerVersion = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.setClusterId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.version.v1.VersionInfo version_info = 4;
 * @return {?proto.temporal.api.version.v1.VersionInfo}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getVersionInfo = function() {
  return /** @type{?proto.temporal.api.version.v1.VersionInfo} */ (
    jspb.Message.getWrapperField(this, temporal_api_version_v1_message_pb.VersionInfo, 4));
};


/** @param {?proto.temporal.api.version.v1.VersionInfo|undefined} value */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.setVersionInfo = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.clearVersionInfo = function() {
  this.setVersionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.hasVersionInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string cluster_name = 5;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.setClusterName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 history_shard_count = 6;
 * @return {number}
 */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.getHistoryShardCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.workflowservice.v1.GetClusterInfoResponse.prototype.setHistoryShardCount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.displayName = 'proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest;
  return proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 2;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 2));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.displayName = 'proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityTaskQueuePartitionsList: jspb.Message.toObjectList(msg.getActivityTaskQueuePartitionsList(),
    temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.toObject, includeInstance),
    workflowTaskQueuePartitionsList: jspb.Message.toObjectList(msg.getWorkflowTaskQueuePartitionsList(),
    temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse;
  return proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.deserializeBinaryFromReader);
      msg.addActivityTaskQueuePartitions(value);
      break;
    case 2:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.deserializeBinaryFromReader);
      msg.addWorkflowTaskQueuePartitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityTaskQueuePartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskQueuePartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated temporal.api.taskqueue.v1.TaskQueuePartitionMetadata activity_task_queue_partitions = 1;
 * @return {!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.getActivityTaskQueuePartitionsList = function() {
  return /** @type{!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata, 1));
};


/** @param {!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>} value */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.setActivityTaskQueuePartitionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.addActivityTaskQueuePartitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata, opt_index);
};


proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.clearActivityTaskQueuePartitionsList = function() {
  this.setActivityTaskQueuePartitionsList([]);
};


/**
 * repeated temporal.api.taskqueue.v1.TaskQueuePartitionMetadata workflow_task_queue_partitions = 2;
 * @return {!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.getWorkflowTaskQueuePartitionsList = function() {
  return /** @type{!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueuePartitionMetadata, 2));
};


/** @param {!Array<!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata>} value */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.setWorkflowTaskQueuePartitionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata}
 */
proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.addWorkflowTaskQueuePartitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.temporal.api.taskqueue.v1.TaskQueuePartitionMetadata, opt_index);
};


proto.temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse.prototype.clearWorkflowTaskQueuePartitionsList = function() {
  this.setWorkflowTaskQueuePartitionsList([]);
};


goog.object.extend(exports, proto.temporal.api.workflowservice.v1);
