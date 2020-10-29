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
var temporal_api_enums_v1_event_type_pb = require('../../../../temporal/api/enums/v1/event_type_pb.js');
var temporal_api_enums_v1_failed_cause_pb = require('../../../../temporal/api/enums/v1/failed_cause_pb.js');
var temporal_api_enums_v1_workflow_pb = require('../../../../temporal/api/enums/v1/workflow_pb.js');
var temporal_api_common_v1_message_pb = require('../../../../temporal/api/common/v1/message_pb.js');
var temporal_api_failure_v1_message_pb = require('../../../../temporal/api/failure/v1/message_pb.js');
var temporal_api_workflow_v1_message_pb = require('../../../../temporal/api/workflow/v1/message_pb.js');
var temporal_api_taskqueue_v1_message_pb = require('../../../../temporal/api/taskqueue/v1/message_pb.js');
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.History', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.HistoryEvent', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.MarkerRecordedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.TimerCanceledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.TimerFiredEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.TimerStartedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes', null, global);
goog.exportSymbol('proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes', null, global);

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
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    parentWorkflowNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentWorkflowExecution: (f = msg.getParentWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    parentInitiatedEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowExecutionTimeout: (f = msg.getWorkflowExecutionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowRunTimeout: (f = msg.getWorkflowRunTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskTimeout: (f = msg.getWorkflowTaskTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    continuedExecutionRunId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    initiator: jspb.Message.getFieldWithDefault(msg, 11, 0),
    continuedFailure: (f = msg.getContinuedFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    lastCompletionResult: (f = msg.getLastCompletionResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    originalExecutionRunId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    identity: jspb.Message.getFieldWithDefault(msg, 15, ""),
    firstExecutionRunId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    retryPolicy: (f = msg.getRetryPolicy()) && temporal_api_common_v1_message_pb.RetryPolicy.toObject(includeInstance, f),
    attempt: jspb.Message.getFieldWithDefault(msg, 18, 0),
    workflowExecutionExpirationTime: (f = msg.getWorkflowExecutionExpirationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    cronSchedule: jspb.Message.getFieldWithDefault(msg, 20, ""),
    firstWorkflowTaskBackoff: (f = msg.getFirstWorkflowTaskBackoff()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && temporal_api_common_v1_message_pb.Memo.toObject(includeInstance, f),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f),
    prevAutoResetPoints: (f = msg.getPrevAutoResetPoints()) && temporal_api_workflow_v1_message_pb.ResetPoints.toObject(includeInstance, f),
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentWorkflowNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setParentWorkflowExecution(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentInitiatedEventId(value);
      break;
    case 5:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 6:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTimeout(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowRunTimeout(value);
      break;
    case 9:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowTaskTimeout(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuedExecutionRunId(value);
      break;
    case 11:
      var value = /** @type {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} */ (reader.readEnum());
      msg.setInitiator(value);
      break;
    case 12:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setContinuedFailure(value);
      break;
    case 13:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setLastCompletionResult(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalExecutionRunId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstExecutionRunId(value);
      break;
    case 17:
      var value = new temporal_api_common_v1_message_pb.RetryPolicy;
      reader.readMessage(value,temporal_api_common_v1_message_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempt(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setWorkflowExecutionExpirationTime(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSchedule(value);
      break;
    case 21:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setFirstWorkflowTaskBackoff(value);
      break;
    case 22:
      var value = new temporal_api_common_v1_message_pb.Memo;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 23:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
      break;
    case 24:
      var value = new temporal_api_workflow_v1_message_pb.ResetPoints;
      reader.readMessage(value,temporal_api_workflow_v1_message_pb.ResetPoints.deserializeBinaryFromReader);
      msg.setPrevAutoResetPoints(value);
      break;
    case 25:
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
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getParentWorkflowNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getParentInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTimeout();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowRunTimeout();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskTimeout();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getContinuedExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getInitiator();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getContinuedFailure();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getLastCompletionResult();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getOriginalExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getFirstExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
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
  f = message.getAttempt();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getWorkflowExecutionExpirationTime();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCronSchedule();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getFirstWorkflowTaskBackoff();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      temporal_api_common_v1_message_pb.Memo.serializeBinaryToWriter
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
  f = message.getPrevAutoResetPoints();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      temporal_api_workflow_v1_message_pb.ResetPoints.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 1;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 1));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string parent_workflow_namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getParentWorkflowNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setParentWorkflowNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution parent_workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getParentWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setParentWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearParentWorkflowExecution = function() {
  this.setParentWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasParentWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 parent_initiated_event_id = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getParentInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setParentInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 5;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 5));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 6;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 6));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration workflow_execution_timeout = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getWorkflowExecutionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setWorkflowExecutionTimeout = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearWorkflowExecutionTimeout = function() {
  this.setWorkflowExecutionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasWorkflowExecutionTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration workflow_run_timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getWorkflowRunTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setWorkflowRunTimeout = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearWorkflowRunTimeout = function() {
  this.setWorkflowRunTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasWorkflowRunTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration workflow_task_timeout = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getWorkflowTaskTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setWorkflowTaskTimeout = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearWorkflowTaskTimeout = function() {
  this.setWorkflowTaskTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasWorkflowTaskTimeout = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string continued_execution_run_id = 10;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getContinuedExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setContinuedExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional temporal.api.enums.v1.ContinueAsNewInitiator initiator = 11;
 * @return {!proto.temporal.api.enums.v1.ContinueAsNewInitiator}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getInitiator = function() {
  return /** @type {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setInitiator = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional temporal.api.failure.v1.Failure continued_failure = 12;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getContinuedFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 12));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setContinuedFailure = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearContinuedFailure = function() {
  this.setContinuedFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasContinuedFailure = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional temporal.api.common.v1.Payloads last_completion_result = 13;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getLastCompletionResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 13));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setLastCompletionResult = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearLastCompletionResult = function() {
  this.setLastCompletionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasLastCompletionResult = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string original_execution_run_id = 14;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getOriginalExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setOriginalExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string identity = 15;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string first_execution_run_id = 16;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getFirstExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setFirstExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 17;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 17));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 attempt = 18;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setAttempt = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional google.protobuf.Timestamp workflow_execution_expiration_time = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getWorkflowExecutionExpirationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setWorkflowExecutionExpirationTime = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearWorkflowExecutionExpirationTime = function() {
  this.setWorkflowExecutionExpirationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasWorkflowExecutionExpirationTime = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string cron_schedule = 20;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getCronSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setCronSchedule = function(value) {
  jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.Duration first_workflow_task_backoff = 21;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getFirstWorkflowTaskBackoff = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 21));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setFirstWorkflowTaskBackoff = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearFirstWorkflowTaskBackoff = function() {
  this.setFirstWorkflowTaskBackoff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasFirstWorkflowTaskBackoff = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional temporal.api.common.v1.Memo memo = 22;
 * @return {?proto.temporal.api.common.v1.Memo}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getMemo = function() {
  return /** @type{?proto.temporal.api.common.v1.Memo} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Memo, 22));
};


/** @param {?proto.temporal.api.common.v1.Memo|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setMemo = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearMemo = function() {
  this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 23;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 23));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 23, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasSearchAttributes = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional temporal.api.workflow.v1.ResetPoints prev_auto_reset_points = 24;
 * @return {?proto.temporal.api.workflow.v1.ResetPoints}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getPrevAutoResetPoints = function() {
  return /** @type{?proto.temporal.api.workflow.v1.ResetPoints} */ (
    jspb.Message.getWrapperField(this, temporal_api_workflow_v1_message_pb.ResetPoints, 24));
};


/** @param {?proto.temporal.api.workflow.v1.ResetPoints|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setPrevAutoResetPoints = function(value) {
  jspb.Message.setWrapperField(this, 24, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearPrevAutoResetPoints = function() {
  this.setPrevAutoResetPoints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasPrevAutoResetPoints = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 25;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 25));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 25, value);
};


proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 25) != null;
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
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
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
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads result = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.getResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 workflow_task_completed_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    retryState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 2:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
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
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional temporal.api.failure.v1.Failure failure = 1;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 1));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 2;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.setRetryState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    retryState: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
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
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 1;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.prototype.setRetryState = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
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
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    newExecutionRunId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowRunTimeout: (f = msg.getWorkflowRunTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskTimeout: (f = msg.getWorkflowTaskTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    backoffStartInterval: (f = msg.getBackoffStartInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    initiator: jspb.Message.getFieldWithDefault(msg, 9, 0),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    lastCompletionResult: (f = msg.getLastCompletionResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && temporal_api_common_v1_message_pb.Memo.toObject(includeInstance, f),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewExecutionRunId(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 3:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowRunTimeout(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowTaskTimeout(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBackoffStartInterval(value);
      break;
    case 9:
      var value = /** @type {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} */ (reader.readEnum());
      msg.setInitiator(value);
      break;
    case 10:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 11:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setLastCompletionResult(value);
      break;
    case 12:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 13:
      var value = new temporal_api_common_v1_message_pb.Memo;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 14:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
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
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewExecutionRunId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
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
  f = message.getWorkflowRunTimeout();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getBackoffStartInterval();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getInitiator();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getLastCompletionResult();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      temporal_api_common_v1_message_pb.Memo.serializeBinaryToWriter
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional string new_execution_run_id = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getNewExecutionRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setNewExecutionRunId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 3;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 3));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 4;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 4));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration workflow_run_timeout = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getWorkflowRunTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setWorkflowRunTimeout = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearWorkflowRunTimeout = function() {
  this.setWorkflowRunTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasWorkflowRunTimeout = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration workflow_task_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getWorkflowTaskTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setWorkflowTaskTimeout = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearWorkflowTaskTimeout = function() {
  this.setWorkflowTaskTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasWorkflowTaskTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 workflow_task_completed_event_id = 7;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Duration backoff_start_interval = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getBackoffStartInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setBackoffStartInterval = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearBackoffStartInterval = function() {
  this.setBackoffStartInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasBackoffStartInterval = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional temporal.api.enums.v1.ContinueAsNewInitiator initiator = 9;
 * @return {!proto.temporal.api.enums.v1.ContinueAsNewInitiator}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getInitiator = function() {
  return /** @type {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.temporal.api.enums.v1.ContinueAsNewInitiator} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setInitiator = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional temporal.api.failure.v1.Failure failure = 10;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 10));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional temporal.api.common.v1.Payloads last_completion_result = 11;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getLastCompletionResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 11));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setLastCompletionResult = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearLastCompletionResult = function() {
  this.setLastCompletionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasLastCompletionResult = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 12;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 12));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional temporal.api.common.v1.Memo memo = 13;
 * @return {?proto.temporal.api.common.v1.Memo}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getMemo = function() {
  return /** @type{?proto.temporal.api.common.v1.Memo} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Memo, 13));
};


/** @param {?proto.temporal.api.common.v1.Memo|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setMemo = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearMemo = function() {
  this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 14;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 14));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.prototype.hasSearchAttributes = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes';
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
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    startToCloseTimeout: (f = msg.getStartToCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    attempt: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes;
  return proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartToCloseTimeout(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempt(value);
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
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskQueue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_taskqueue_v1_message_pb.TaskQueue.serializeBinaryToWriter
    );
  }
  f = message.getStartToCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAttempt();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 1;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 1));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration start_to_close_timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.getStartToCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.setStartToCloseTimeout = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.clearStartToCloseTimeout = function() {
  this.setStartToCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.hasStartToCloseTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 attempt = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.getAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.prototype.setAttempt = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 3:
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
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string identity = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string request_id = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.prototype.setRequestId = function(value) {
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
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
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
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
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
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 started_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string binary_checksum = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.getBinaryChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.prototype.setBinaryChecksum = function(value) {
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
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes';
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
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeoutType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes;
  return proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 3:
      var value = /** @type {!proto.temporal.api.enums.v1.TimeoutType} */ (reader.readEnum());
      msg.setTimeoutType(value);
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
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimeoutType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 started_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional temporal.api.enums.v1.TimeoutType timeout_type = 3;
 * @return {!proto.temporal.api.enums.v1.TimeoutType}
 */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.getTimeoutType = function() {
  return /** @type {!proto.temporal.api.enums.v1.TimeoutType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.temporal.api.enums.v1.TimeoutType} value */
proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.prototype.setTimeoutType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
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
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cause: jspb.Message.getFieldWithDefault(msg, 3, 0),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 5, ""),
    baseRunId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    newRunId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    forkEventVersion: jspb.Message.getFieldWithDefault(msg, 8, 0),
    binaryChecksum: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 3:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 4:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseRunId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewRunId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setForkEventVersion(value);
      break;
    case 9:
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
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBaseRunId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNewRunId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getForkEventVersion();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getBinaryChecksum();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 started_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional temporal.api.enums.v1.WorkflowTaskFailedCause cause = 3;
 * @return {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getCause = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.temporal.api.enums.v1.WorkflowTaskFailedCause} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setCause = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional temporal.api.failure.v1.Failure failure = 4;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 4));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string identity = 5;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string base_run_id = 6;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getBaseRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setBaseRunId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string new_run_id = 7;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getNewRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setNewRunId = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 fork_event_version = 8;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getForkEventVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setForkEventVersion = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string binary_checksum = 9;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.getBinaryChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.prototype.setBinaryChecksum = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
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
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    activityType: (f = msg.getActivityType()) && temporal_api_common_v1_message_pb.ActivityType.toObject(includeInstance, f),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    scheduleToCloseTimeout: (f = msg.getScheduleToCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    scheduleToStartTimeout: (f = msg.getScheduleToStartTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    startToCloseTimeout: (f = msg.getStartToCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    heartbeatTimeout: (f = msg.getHeartbeatTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 11, 0),
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.ActivityType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.ActivityType.deserializeBinaryFromReader);
      msg.setActivityType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = new temporal_api_taskqueue_v1_message_pb.TaskQueue;
      reader.readMessage(value,temporal_api_taskqueue_v1_message_pb.TaskQueue.deserializeBinaryFromReader);
      msg.setTaskQueue(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 6:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setScheduleToCloseTimeout(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setScheduleToStartTimeout(value);
      break;
    case 9:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartToCloseTimeout(value);
      break;
    case 10:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setHeartbeatTimeout(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 12:
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
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActivityType();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.ActivityType.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
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
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getScheduleToCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getScheduleToStartTimeout();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStartToCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHeartbeatTimeout();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional string activity_id = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setActivityId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.ActivityType activity_type = 2;
 * @return {?proto.temporal.api.common.v1.ActivityType}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getActivityType = function() {
  return /** @type{?proto.temporal.api.common.v1.ActivityType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.ActivityType, 2));
};


/** @param {?proto.temporal.api.common.v1.ActivityType|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setActivityType = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearActivityType = function() {
  this.setActivityType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasActivityType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 4;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 5;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 5));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 6;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 6));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration schedule_to_close_timeout = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getScheduleToCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setScheduleToCloseTimeout = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearScheduleToCloseTimeout = function() {
  this.setScheduleToCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasScheduleToCloseTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration schedule_to_start_timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getScheduleToStartTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setScheduleToStartTimeout = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearScheduleToStartTimeout = function() {
  this.setScheduleToStartTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasScheduleToStartTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration start_to_close_timeout = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getStartToCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setStartToCloseTimeout = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearStartToCloseTimeout = function() {
  this.setStartToCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasStartToCloseTimeout = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Duration heartbeat_timeout = 10;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getHeartbeatTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 10));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setHeartbeatTimeout = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearHeartbeatTimeout = function() {
  this.setHeartbeatTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasHeartbeatTimeout = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 workflow_task_completed_event_id = 11;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 12;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 12));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    attempt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastFailure: (f = msg.getLastFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempt(value);
      break;
    case 5:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setLastFailure(value);
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
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAttempt();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLastFailure();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string identity = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string request_id = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 attempt = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.getAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.setAttempt = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional temporal.api.failure.v1.Failure last_failure = 5;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.getLastFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 5));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.setLastFailure = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.clearLastFailure = function() {
  this.setLastFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.prototype.hasLastFailure = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 4:
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
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads result = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.getResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 scheduled_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 started_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string identity = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 4, ""),
    retryState: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 5:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
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
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional temporal.api.failure.v1.Failure failure = 1;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 1));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 scheduled_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 started_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string identity = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.setIdentity = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 5;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.prototype.setRetryState = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
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
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    retryState: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 4:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
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
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional temporal.api.failure.v1.Failure failure = 1;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 1));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 scheduled_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 started_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 4;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.prototype.setRetryState = function(value) {
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
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
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
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 scheduled_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.displayName = 'proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes';
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
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    latestCancelRequestedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scheduledEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes;
  return proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestCancelRequestedEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledEventId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 5:
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
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getLatestCancelRequestedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getScheduledEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads details = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 latest_cancel_requested_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.getLatestCancelRequestedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.setLatestCancelRequestedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 scheduled_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.getScheduledEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.setScheduledEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 started_event_id = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string identity = 5;
 * @return {string}
 */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.TimerStartedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.TimerStartedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.TimerStartedEventAttributes.displayName = 'proto.temporal.api.history.v1.TimerStartedEventAttributes';
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
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.TimerStartedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.TimerStartedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    timerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startToFireTimeout: (f = msg.getStartToFireTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.temporal.api.history.v1.TimerStartedEventAttributes}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.TimerStartedEventAttributes;
  return proto.temporal.api.history.v1.TimerStartedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.TimerStartedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.TimerStartedEventAttributes}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerId(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartToFireTimeout(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
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
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.TimerStartedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.TimerStartedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartToFireTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string timer_id = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.getTimerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.setTimerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration start_to_fire_timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.getStartToFireTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.setStartToFireTimeout = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.clearStartToFireTimeout = function() {
  this.setStartToFireTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.hasStartToFireTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 workflow_task_completed_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.TimerStartedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.temporal.api.history.v1.TimerFiredEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.TimerFiredEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.TimerFiredEventAttributes.displayName = 'proto.temporal.api.history.v1.TimerFiredEventAttributes';
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
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.TimerFiredEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.TimerFiredEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    timerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.temporal.api.history.v1.TimerFiredEventAttributes}
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.TimerFiredEventAttributes;
  return proto.temporal.api.history.v1.TimerFiredEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.TimerFiredEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.TimerFiredEventAttributes}
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
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
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.TimerFiredEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.TimerFiredEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string timer_id = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.getTimerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.setTimerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 started_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.TimerFiredEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.temporal.api.history.v1.TimerCanceledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.TimerCanceledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.TimerCanceledEventAttributes.displayName = 'proto.temporal.api.history.v1.TimerCanceledEventAttributes';
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
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.TimerCanceledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.TimerCanceledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    timerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    identity: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.temporal.api.history.v1.TimerCanceledEventAttributes}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.TimerCanceledEventAttributes;
  return proto.temporal.api.history.v1.TimerCanceledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.TimerCanceledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.TimerCanceledEventAttributes}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 4:
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
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.TimerCanceledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.TimerCanceledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string timer_id = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.getTimerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.setTimerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 started_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string identity = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.TimerCanceledEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    cause: jspb.Message.getFieldWithDefault(msg, 1, ""),
    externalInitiatedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    externalWorkflowExecution: (f = msg.getExternalWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    identity: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCause(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExternalInitiatedEventId(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setExternalWorkflowExecution(value);
      break;
    case 4:
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
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCause();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExternalInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExternalWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string cause = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.getCause = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.setCause = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 external_initiated_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.getExternalInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.setExternalInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution external_workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.getExternalWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.setExternalWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.clearExternalWorkflowExecution = function() {
  this.setExternalWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.hasExternalWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string identity = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional int64 workflow_task_completed_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.prototype.hasDetails = function() {
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
proto.temporal.api.history.v1.MarkerRecordedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.MarkerRecordedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.MarkerRecordedEventAttributes.displayName = 'proto.temporal.api.history.v1.MarkerRecordedEventAttributes';
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
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.MarkerRecordedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.MarkerRecordedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    markerName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    detailsMap: (f = msg.getDetailsMap()) ? f.toObject(includeInstance, proto.temporal.api.common.v1.Payloads.toObject) : [],
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f),
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.MarkerRecordedEventAttributes}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.MarkerRecordedEventAttributes;
  return proto.temporal.api.history.v1.MarkerRecordedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.MarkerRecordedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.MarkerRecordedEventAttributes}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkerName(value);
      break;
    case 2:
      var value = msg.getDetailsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.temporal.api.common.v1.Payloads.deserializeBinaryFromReader, "");
         });
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 5:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
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
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.MarkerRecordedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.MarkerRecordedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarkerName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetailsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.temporal.api.common.v1.Payloads.serializeBinaryToWriter);
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
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
};


/**
 * optional string marker_name = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.getMarkerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.setMarkerName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, temporal.api.common.v1.Payloads> details = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.temporal.api.common.v1.Payloads>}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.getDetailsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.temporal.api.common.v1.Payloads>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.temporal.api.common.v1.Payloads));
};


proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.clearDetailsMap = function() {
  this.getDetailsMap().clear();
};


/**
 * optional int64 workflow_task_completed_event_id = 3;
 * @return {number}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional temporal.api.common.v1.Header header = 4;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 4));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.failure.v1.Failure failure = 5;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 5));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.MarkerRecordedEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    signalName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignalName(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
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
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignalName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInput();
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
 * optional string signal_name = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.getSignalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.setSignalName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads input = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.displayName = 'proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes';
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
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes;
  return proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string reason = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads details = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string identity = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.prototype.setIdentity = function(value) {
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.displayName = 'proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes';
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    control: jspb.Message.getFieldWithDefault(msg, 4, ""),
    childWorkflowOnly: jspb.Message.getFieldWithDefault(msg, 5, false)
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
 * @return {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
  return proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChildWorkflowOnly(value);
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChildWorkflowOnly();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 workflow_task_completed_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string control = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool child_workflow_only = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.getChildWorkflowOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.setChildWorkflowOnly = function(value) {
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes';
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    cause: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    control: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes;
  return proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 6:
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
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
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
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause cause = 1;
 * @return {!proto.temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getCause = function() {
  return /** @type {!proto.temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setCause = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 initiated_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string control = 6;
 * @return {string}
 */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.setControl = function(value) {
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.displayName = 'proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes';
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes;
  return proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 initiated_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.displayName = 'proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes';
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    signalName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    control: jspb.Message.getFieldWithDefault(msg, 6, ""),
    childWorkflowOnly: jspb.Message.getFieldWithDefault(msg, 7, false)
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
 * @return {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes;
  return proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignalName(value);
      break;
    case 5:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChildWorkflowOnly(value);
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getSignalName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
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
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChildWorkflowOnly();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int64 workflow_task_completed_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string signal_name = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getSignalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setSignalName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.common.v1.Payloads input = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string control = 6;
 * @return {string}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool child_workflow_only = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.getChildWorkflowOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.setChildWorkflowOnly = function(value) {
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes';
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    cause: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    control: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes;
  return proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 6:
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
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
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
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause cause = 1;
 * @return {!proto.temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getCause = function() {
  return /** @type {!proto.temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setCause = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 initiated_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string control = 6;
 * @return {string}
 */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.setControl = function(value) {
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.displayName = 'proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes';
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    control: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes;
  return proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
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
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 initiated_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string control = 4;
 * @return {string}
 */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.prototype.setControl = function(value) {
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
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.displayName = 'proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes';
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
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes}
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes;
  return proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes}
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
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
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 workflow_task_completed_event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 2;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 2));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.prototype.hasSearchAttributes = function() {
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.displayName = 'proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes';
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    taskQueue: (f = msg.getTaskQueue()) && temporal_api_taskqueue_v1_message_pb.TaskQueue.toObject(includeInstance, f),
    input: (f = msg.getInput()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    workflowExecutionTimeout: (f = msg.getWorkflowExecutionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowRunTimeout: (f = msg.getWorkflowRunTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    workflowTaskTimeout: (f = msg.getWorkflowTaskTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    parentClosePolicy: jspb.Message.getFieldWithDefault(msg, 9, 0),
    control: jspb.Message.getFieldWithDefault(msg, 10, ""),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 11, 0),
    workflowIdReusePolicy: jspb.Message.getFieldWithDefault(msg, 12, 0),
    retryPolicy: (f = msg.getRetryPolicy()) && temporal_api_common_v1_message_pb.RetryPolicy.toObject(includeInstance, f),
    cronSchedule: jspb.Message.getFieldWithDefault(msg, 14, ""),
    header: (f = msg.getHeader()) && temporal_api_common_v1_message_pb.Header.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && temporal_api_common_v1_message_pb.Memo.toObject(includeInstance, f),
    searchAttributes: (f = msg.getSearchAttributes()) && temporal_api_common_v1_message_pb.SearchAttributes.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes;
  return proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.temporal.api.enums.v1.ParentClosePolicy} */ (reader.readEnum());
      msg.setParentClosePolicy(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
      break;
    case 12:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (reader.readEnum());
      msg.setWorkflowIdReusePolicy(value);
      break;
    case 13:
      var value = new temporal_api_common_v1_message_pb.RetryPolicy;
      reader.readMessage(value,temporal_api_common_v1_message_pb.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSchedule(value);
      break;
    case 15:
      var value = new temporal_api_common_v1_message_pb.Header;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 16:
      var value = new temporal_api_common_v1_message_pb.Memo;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 17:
      var value = new temporal_api_common_v1_message_pb.SearchAttributes;
      reader.readMessage(value,temporal_api_common_v1_message_pb.SearchAttributes.deserializeBinaryFromReader);
      msg.setSearchAttributes(value);
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getParentClosePolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getWorkflowIdReusePolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      temporal_api_common_v1_message_pb.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getCronSchedule();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      temporal_api_common_v1_message_pb.Memo.serializeBinaryToWriter
    );
  }
  f = message.getSearchAttributes();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      temporal_api_common_v1_message_pb.SearchAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.taskqueue.v1.TaskQueue task_queue = 4;
 * @return {?proto.temporal.api.taskqueue.v1.TaskQueue}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getTaskQueue = function() {
  return /** @type{?proto.temporal.api.taskqueue.v1.TaskQueue} */ (
    jspb.Message.getWrapperField(this, temporal_api_taskqueue_v1_message_pb.TaskQueue, 4));
};


/** @param {?proto.temporal.api.taskqueue.v1.TaskQueue|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setTaskQueue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearTaskQueue = function() {
  this.setTaskQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasTaskQueue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.Payloads input = 5;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getInput = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 5));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration workflow_execution_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowExecutionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowExecutionTimeout = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowExecutionTimeout = function() {
  this.setWorkflowExecutionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowExecutionTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration workflow_run_timeout = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowRunTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowRunTimeout = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowRunTimeout = function() {
  this.setWorkflowRunTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowRunTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration workflow_task_timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowTaskTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowTaskTimeout = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearWorkflowTaskTimeout = function() {
  this.setWorkflowTaskTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasWorkflowTaskTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional temporal.api.enums.v1.ParentClosePolicy parent_close_policy = 9;
 * @return {!proto.temporal.api.enums.v1.ParentClosePolicy}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getParentClosePolicy = function() {
  return /** @type {!proto.temporal.api.enums.v1.ParentClosePolicy} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.temporal.api.enums.v1.ParentClosePolicy} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setParentClosePolicy = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string control = 10;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 11;
 * @return {number}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional temporal.api.enums.v1.WorkflowIdReusePolicy workflow_id_reuse_policy = 12;
 * @return {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getWorkflowIdReusePolicy = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.temporal.api.enums.v1.WorkflowIdReusePolicy} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setWorkflowIdReusePolicy = function(value) {
  jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional temporal.api.common.v1.RetryPolicy retry_policy = 13;
 * @return {?proto.temporal.api.common.v1.RetryPolicy}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getRetryPolicy = function() {
  return /** @type{?proto.temporal.api.common.v1.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.RetryPolicy, 13));
};


/** @param {?proto.temporal.api.common.v1.RetryPolicy|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setRetryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearRetryPolicy = function() {
  this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string cron_schedule = 14;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getCronSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setCronSchedule = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional temporal.api.common.v1.Header header = 15;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 15));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional temporal.api.common.v1.Memo memo = 16;
 * @return {?proto.temporal.api.common.v1.Memo}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getMemo = function() {
  return /** @type{?proto.temporal.api.common.v1.Memo} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Memo, 16));
};


/** @param {?proto.temporal.api.common.v1.Memo|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setMemo = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearMemo = function() {
  this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional temporal.api.common.v1.SearchAttributes search_attributes = 17;
 * @return {?proto.temporal.api.common.v1.SearchAttributes}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.getSearchAttributes = function() {
  return /** @type{?proto.temporal.api.common.v1.SearchAttributes} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.SearchAttributes, 17));
};


/** @param {?proto.temporal.api.common.v1.SearchAttributes|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.setSearchAttributes = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.clearSearchAttributes = function() {
  this.setSearchAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.hasSearchAttributes = function() {
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes';
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    cause: jspb.Message.getFieldWithDefault(msg, 4, 0),
    control: jspb.Message.getFieldWithDefault(msg, 5, ""),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    workflowTaskCompletedEventId: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes;
  return proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setControl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkflowTaskCompletedEventId(value);
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
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getControl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getWorkflowTaskCompletedEventId();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_id = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause cause = 4;
 * @return {!proto.temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getCause = function() {
  return /** @type {!proto.temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setCause = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string control = 5;
 * @return {string}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getControl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setControl = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 initiated_event_id = 6;
 * @return {number}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 workflow_task_completed_event_id = 7;
 * @return {number}
 */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.getWorkflowTaskCompletedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.prototype.setWorkflowTaskCompletedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 5:
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
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      temporal_api_common_v1_message_pb.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 initiated_event_id = 2;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional temporal.api.common.v1.Header header = 5;
 * @return {?proto.temporal.api.common.v1.Header}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.getHeader = function() {
  return /** @type{?proto.temporal.api.common.v1.Header} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Header, 5));
};


/** @param {?proto.temporal.api.common.v1.Header|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads result = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getResult = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 initiated_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 started_event_id = 6;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.prototype.setStartedEventId = function(value) {
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
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    failure: (f = msg.getFailure()) && temporal_api_failure_v1_message_pb.Failure.toObject(includeInstance, f),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    retryState: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_failure_v1_message_pb.Failure;
      reader.readMessage(value,temporal_api_failure_v1_message_pb.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 7:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_failure_v1_message_pb.Failure.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional temporal.api.failure.v1.Failure failure = 1;
 * @return {?proto.temporal.api.failure.v1.Failure}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getFailure = function() {
  return /** @type{?proto.temporal.api.failure.v1.Failure} */ (
    jspb.Message.getWrapperField(this, temporal_api_failure_v1_message_pb.Failure, 1));
};


/** @param {?proto.temporal.api.failure.v1.Failure|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setFailure = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.clearFailure = function() {
  this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 initiated_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 started_event_id = 6;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 7;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.prototype.setRetryState = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = new temporal_api_common_v1_message_pb.WorkflowExecution;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowExecution.deserializeBinaryFromReader);
      msg.setWorkflowExecution(value);
      break;
    case 4:
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowExecution.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getInitiatedEventId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getStartedEventId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional temporal.api.common.v1.Payloads details = 1;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getDetails = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 1));
};


/** @param {?proto.temporal.api.common.v1.Payloads|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setDetails = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.clearDetails = function() {
  this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 4;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 4));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 initiated_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 started_event_id = 6;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.prototype.setStartedEventId = function(value) {
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    retryState: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
      break;
    case 6:
      var value = /** @type {!proto.temporal.api.enums.v1.RetryState} */ (reader.readEnum());
      msg.setRetryState(value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getInitiatedEventId();
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
  f = message.getRetryState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 initiated_event_id = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 started_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional temporal.api.enums.v1.RetryState retry_state = 6;
 * @return {!proto.temporal.api.enums.v1.RetryState}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.getRetryState = function() {
  return /** @type {!proto.temporal.api.enums.v1.RetryState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.temporal.api.enums.v1.RetryState} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.prototype.setRetryState = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.displayName = 'proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes';
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowExecution: (f = msg.getWorkflowExecution()) && temporal_api_common_v1_message_pb.WorkflowExecution.toObject(includeInstance, f),
    workflowType: (f = msg.getWorkflowType()) && temporal_api_common_v1_message_pb.WorkflowType.toObject(includeInstance, f),
    initiatedEventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startedEventId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes;
  return proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new temporal_api_common_v1_message_pb.WorkflowType;
      reader.readMessage(value,temporal_api_common_v1_message_pb.WorkflowType.deserializeBinaryFromReader);
      msg.setWorkflowType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitiatedEventId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedEventId(value);
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
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWorkflowType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      temporal_api_common_v1_message_pb.WorkflowType.serializeBinaryToWriter
    );
  }
  f = message.getInitiatedEventId();
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
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.WorkflowExecution workflow_execution = 2;
 * @return {?proto.temporal.api.common.v1.WorkflowExecution}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.getWorkflowExecution = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowExecution} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowExecution, 2));
};


/** @param {?proto.temporal.api.common.v1.WorkflowExecution|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.setWorkflowExecution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.clearWorkflowExecution = function() {
  this.setWorkflowExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.hasWorkflowExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.common.v1.WorkflowType workflow_type = 3;
 * @return {?proto.temporal.api.common.v1.WorkflowType}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.getWorkflowType = function() {
  return /** @type{?proto.temporal.api.common.v1.WorkflowType} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.WorkflowType, 3));
};


/** @param {?proto.temporal.api.common.v1.WorkflowType|undefined} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.setWorkflowType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.clearWorkflowType = function() {
  this.setWorkflowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.hasWorkflowType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 initiated_event_id = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.getInitiatedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.setInitiatedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 started_event_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.getStartedEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.prototype.setStartedEventId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
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
proto.temporal.api.history.v1.HistoryEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_);
};
goog.inherits(proto.temporal.api.history.v1.HistoryEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.HistoryEvent.displayName = 'proto.temporal.api.history.v1.HistoryEvent';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.temporal.api.history.v1.HistoryEvent.oneofGroups_ = [[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]];

/**
 * @enum {number}
 */
proto.temporal.api.history.v1.HistoryEvent.AttributesCase = {
  ATTRIBUTES_NOT_SET: 0,
  WORKFLOW_EXECUTION_STARTED_EVENT_ATTRIBUTES: 6,
  WORKFLOW_EXECUTION_COMPLETED_EVENT_ATTRIBUTES: 7,
  WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES: 8,
  WORKFLOW_EXECUTION_TIMED_OUT_EVENT_ATTRIBUTES: 9,
  WORKFLOW_TASK_SCHEDULED_EVENT_ATTRIBUTES: 10,
  WORKFLOW_TASK_STARTED_EVENT_ATTRIBUTES: 11,
  WORKFLOW_TASK_COMPLETED_EVENT_ATTRIBUTES: 12,
  WORKFLOW_TASK_TIMED_OUT_EVENT_ATTRIBUTES: 13,
  WORKFLOW_TASK_FAILED_EVENT_ATTRIBUTES: 14,
  ACTIVITY_TASK_SCHEDULED_EVENT_ATTRIBUTES: 15,
  ACTIVITY_TASK_STARTED_EVENT_ATTRIBUTES: 16,
  ACTIVITY_TASK_COMPLETED_EVENT_ATTRIBUTES: 17,
  ACTIVITY_TASK_FAILED_EVENT_ATTRIBUTES: 18,
  ACTIVITY_TASK_TIMED_OUT_EVENT_ATTRIBUTES: 19,
  TIMER_STARTED_EVENT_ATTRIBUTES: 20,
  TIMER_FIRED_EVENT_ATTRIBUTES: 21,
  ACTIVITY_TASK_CANCEL_REQUESTED_EVENT_ATTRIBUTES: 22,
  ACTIVITY_TASK_CANCELED_EVENT_ATTRIBUTES: 23,
  TIMER_CANCELED_EVENT_ATTRIBUTES: 24,
  MARKER_RECORDED_EVENT_ATTRIBUTES: 25,
  WORKFLOW_EXECUTION_SIGNALED_EVENT_ATTRIBUTES: 26,
  WORKFLOW_EXECUTION_TERMINATED_EVENT_ATTRIBUTES: 27,
  WORKFLOW_EXECUTION_CANCEL_REQUESTED_EVENT_ATTRIBUTES: 28,
  WORKFLOW_EXECUTION_CANCELED_EVENT_ATTRIBUTES: 29,
  REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES: 30,
  REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES: 31,
  EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED_EVENT_ATTRIBUTES: 32,
  WORKFLOW_EXECUTION_CONTINUED_AS_NEW_EVENT_ATTRIBUTES: 33,
  START_CHILD_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES: 34,
  START_CHILD_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES: 35,
  CHILD_WORKFLOW_EXECUTION_STARTED_EVENT_ATTRIBUTES: 36,
  CHILD_WORKFLOW_EXECUTION_COMPLETED_EVENT_ATTRIBUTES: 37,
  CHILD_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES: 38,
  CHILD_WORKFLOW_EXECUTION_CANCELED_EVENT_ATTRIBUTES: 39,
  CHILD_WORKFLOW_EXECUTION_TIMED_OUT_EVENT_ATTRIBUTES: 40,
  CHILD_WORKFLOW_EXECUTION_TERMINATED_EVENT_ATTRIBUTES: 41,
  SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED_EVENT_ATTRIBUTES: 42,
  SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_EVENT_ATTRIBUTES: 43,
  EXTERNAL_WORKFLOW_EXECUTION_SIGNALED_EVENT_ATTRIBUTES: 44,
  UPSERT_WORKFLOW_SEARCH_ATTRIBUTES_EVENT_ATTRIBUTES: 45
};

/**
 * @return {proto.temporal.api.history.v1.HistoryEvent.AttributesCase}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getAttributesCase = function() {
  return /** @type {proto.temporal.api.history.v1.HistoryEvent.AttributesCase} */(jspb.Message.computeOneofCase(this, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0]));
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
proto.temporal.api.history.v1.HistoryEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.HistoryEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.HistoryEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.HistoryEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventTime: (f = msg.getEventTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    eventType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    taskId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    workflowExecutionStartedEventAttributes: (f = msg.getWorkflowExecutionStartedEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.toObject(includeInstance, f),
    workflowExecutionCompletedEventAttributes: (f = msg.getWorkflowExecutionCompletedEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.toObject(includeInstance, f),
    workflowExecutionFailedEventAttributes: (f = msg.getWorkflowExecutionFailedEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.toObject(includeInstance, f),
    workflowExecutionTimedOutEventAttributes: (f = msg.getWorkflowExecutionTimedOutEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.toObject(includeInstance, f),
    workflowTaskScheduledEventAttributes: (f = msg.getWorkflowTaskScheduledEventAttributes()) && proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.toObject(includeInstance, f),
    workflowTaskStartedEventAttributes: (f = msg.getWorkflowTaskStartedEventAttributes()) && proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.toObject(includeInstance, f),
    workflowTaskCompletedEventAttributes: (f = msg.getWorkflowTaskCompletedEventAttributes()) && proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.toObject(includeInstance, f),
    workflowTaskTimedOutEventAttributes: (f = msg.getWorkflowTaskTimedOutEventAttributes()) && proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.toObject(includeInstance, f),
    workflowTaskFailedEventAttributes: (f = msg.getWorkflowTaskFailedEventAttributes()) && proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.toObject(includeInstance, f),
    activityTaskScheduledEventAttributes: (f = msg.getActivityTaskScheduledEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.toObject(includeInstance, f),
    activityTaskStartedEventAttributes: (f = msg.getActivityTaskStartedEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.toObject(includeInstance, f),
    activityTaskCompletedEventAttributes: (f = msg.getActivityTaskCompletedEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.toObject(includeInstance, f),
    activityTaskFailedEventAttributes: (f = msg.getActivityTaskFailedEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.toObject(includeInstance, f),
    activityTaskTimedOutEventAttributes: (f = msg.getActivityTaskTimedOutEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.toObject(includeInstance, f),
    timerStartedEventAttributes: (f = msg.getTimerStartedEventAttributes()) && proto.temporal.api.history.v1.TimerStartedEventAttributes.toObject(includeInstance, f),
    timerFiredEventAttributes: (f = msg.getTimerFiredEventAttributes()) && proto.temporal.api.history.v1.TimerFiredEventAttributes.toObject(includeInstance, f),
    activityTaskCancelRequestedEventAttributes: (f = msg.getActivityTaskCancelRequestedEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.toObject(includeInstance, f),
    activityTaskCanceledEventAttributes: (f = msg.getActivityTaskCanceledEventAttributes()) && proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.toObject(includeInstance, f),
    timerCanceledEventAttributes: (f = msg.getTimerCanceledEventAttributes()) && proto.temporal.api.history.v1.TimerCanceledEventAttributes.toObject(includeInstance, f),
    markerRecordedEventAttributes: (f = msg.getMarkerRecordedEventAttributes()) && proto.temporal.api.history.v1.MarkerRecordedEventAttributes.toObject(includeInstance, f),
    workflowExecutionSignaledEventAttributes: (f = msg.getWorkflowExecutionSignaledEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.toObject(includeInstance, f),
    workflowExecutionTerminatedEventAttributes: (f = msg.getWorkflowExecutionTerminatedEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.toObject(includeInstance, f),
    workflowExecutionCancelRequestedEventAttributes: (f = msg.getWorkflowExecutionCancelRequestedEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.toObject(includeInstance, f),
    workflowExecutionCanceledEventAttributes: (f = msg.getWorkflowExecutionCanceledEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.toObject(includeInstance, f),
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes: (f = msg.getRequestCancelExternalWorkflowExecutionInitiatedEventAttributes()) && proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.toObject(includeInstance, f),
    requestCancelExternalWorkflowExecutionFailedEventAttributes: (f = msg.getRequestCancelExternalWorkflowExecutionFailedEventAttributes()) && proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.toObject(includeInstance, f),
    externalWorkflowExecutionCancelRequestedEventAttributes: (f = msg.getExternalWorkflowExecutionCancelRequestedEventAttributes()) && proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.toObject(includeInstance, f),
    workflowExecutionContinuedAsNewEventAttributes: (f = msg.getWorkflowExecutionContinuedAsNewEventAttributes()) && proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.toObject(includeInstance, f),
    startChildWorkflowExecutionInitiatedEventAttributes: (f = msg.getStartChildWorkflowExecutionInitiatedEventAttributes()) && proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.toObject(includeInstance, f),
    startChildWorkflowExecutionFailedEventAttributes: (f = msg.getStartChildWorkflowExecutionFailedEventAttributes()) && proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionStartedEventAttributes: (f = msg.getChildWorkflowExecutionStartedEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionCompletedEventAttributes: (f = msg.getChildWorkflowExecutionCompletedEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionFailedEventAttributes: (f = msg.getChildWorkflowExecutionFailedEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionCanceledEventAttributes: (f = msg.getChildWorkflowExecutionCanceledEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionTimedOutEventAttributes: (f = msg.getChildWorkflowExecutionTimedOutEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.toObject(includeInstance, f),
    childWorkflowExecutionTerminatedEventAttributes: (f = msg.getChildWorkflowExecutionTerminatedEventAttributes()) && proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.toObject(includeInstance, f),
    signalExternalWorkflowExecutionInitiatedEventAttributes: (f = msg.getSignalExternalWorkflowExecutionInitiatedEventAttributes()) && proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.toObject(includeInstance, f),
    signalExternalWorkflowExecutionFailedEventAttributes: (f = msg.getSignalExternalWorkflowExecutionFailedEventAttributes()) && proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.toObject(includeInstance, f),
    externalWorkflowExecutionSignaledEventAttributes: (f = msg.getExternalWorkflowExecutionSignaledEventAttributes()) && proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.toObject(includeInstance, f),
    upsertWorkflowSearchAttributesEventAttributes: (f = msg.getUpsertWorkflowSearchAttributesEventAttributes()) && proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.history.v1.HistoryEvent}
 */
proto.temporal.api.history.v1.HistoryEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.HistoryEvent;
  return proto.temporal.api.history.v1.HistoryEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.HistoryEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.HistoryEvent}
 */
proto.temporal.api.history.v1.HistoryEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEventTime(value);
      break;
    case 3:
      var value = /** @type {!proto.temporal.api.enums.v1.EventType} */ (reader.readEnum());
      msg.setEventType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTaskId(value);
      break;
    case 6:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionStartedEventAttributes(value);
      break;
    case 7:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionCompletedEventAttributes(value);
      break;
    case 8:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionFailedEventAttributes(value);
      break;
    case 9:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTimedOutEventAttributes(value);
      break;
    case 10:
      var value = new proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowTaskScheduledEventAttributes(value);
      break;
    case 11:
      var value = new proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowTaskStartedEventAttributes(value);
      break;
    case 12:
      var value = new proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowTaskCompletedEventAttributes(value);
      break;
    case 13:
      var value = new proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowTaskTimedOutEventAttributes(value);
      break;
    case 14:
      var value = new proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowTaskFailedEventAttributes(value);
      break;
    case 15:
      var value = new proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskScheduledEventAttributes(value);
      break;
    case 16:
      var value = new proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskStartedEventAttributes(value);
      break;
    case 17:
      var value = new proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskCompletedEventAttributes(value);
      break;
    case 18:
      var value = new proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskFailedEventAttributes(value);
      break;
    case 19:
      var value = new proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskTimedOutEventAttributes(value);
      break;
    case 20:
      var value = new proto.temporal.api.history.v1.TimerStartedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.TimerStartedEventAttributes.deserializeBinaryFromReader);
      msg.setTimerStartedEventAttributes(value);
      break;
    case 21:
      var value = new proto.temporal.api.history.v1.TimerFiredEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.TimerFiredEventAttributes.deserializeBinaryFromReader);
      msg.setTimerFiredEventAttributes(value);
      break;
    case 22:
      var value = new proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskCancelRequestedEventAttributes(value);
      break;
    case 23:
      var value = new proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.deserializeBinaryFromReader);
      msg.setActivityTaskCanceledEventAttributes(value);
      break;
    case 24:
      var value = new proto.temporal.api.history.v1.TimerCanceledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.TimerCanceledEventAttributes.deserializeBinaryFromReader);
      msg.setTimerCanceledEventAttributes(value);
      break;
    case 25:
      var value = new proto.temporal.api.history.v1.MarkerRecordedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.MarkerRecordedEventAttributes.deserializeBinaryFromReader);
      msg.setMarkerRecordedEventAttributes(value);
      break;
    case 26:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionSignaledEventAttributes(value);
      break;
    case 27:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionTerminatedEventAttributes(value);
      break;
    case 28:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionCancelRequestedEventAttributes(value);
      break;
    case 29:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionCanceledEventAttributes(value);
      break;
    case 30:
      var value = new proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader);
      msg.setRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(value);
      break;
    case 31:
      var value = new proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader);
      msg.setRequestCancelExternalWorkflowExecutionFailedEventAttributes(value);
      break;
    case 32:
      var value = new proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.deserializeBinaryFromReader);
      msg.setExternalWorkflowExecutionCancelRequestedEventAttributes(value);
      break;
    case 33:
      var value = new proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.deserializeBinaryFromReader);
      msg.setWorkflowExecutionContinuedAsNewEventAttributes(value);
      break;
    case 34:
      var value = new proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader);
      msg.setStartChildWorkflowExecutionInitiatedEventAttributes(value);
      break;
    case 35:
      var value = new proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader);
      msg.setStartChildWorkflowExecutionFailedEventAttributes(value);
      break;
    case 36:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionStartedEventAttributes(value);
      break;
    case 37:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionCompletedEventAttributes(value);
      break;
    case 38:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionFailedEventAttributes(value);
      break;
    case 39:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionCanceledEventAttributes(value);
      break;
    case 40:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionTimedOutEventAttributes(value);
      break;
    case 41:
      var value = new proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.deserializeBinaryFromReader);
      msg.setChildWorkflowExecutionTerminatedEventAttributes(value);
      break;
    case 42:
      var value = new proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.deserializeBinaryFromReader);
      msg.setSignalExternalWorkflowExecutionInitiatedEventAttributes(value);
      break;
    case 43:
      var value = new proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.deserializeBinaryFromReader);
      msg.setSignalExternalWorkflowExecutionFailedEventAttributes(value);
      break;
    case 44:
      var value = new proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.deserializeBinaryFromReader);
      msg.setExternalWorkflowExecutionSignaledEventAttributes(value);
      break;
    case 45:
      var value = new proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes;
      reader.readMessage(value,proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.deserializeBinaryFromReader);
      msg.setUpsertWorkflowSearchAttributesEventAttributes(value);
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
proto.temporal.api.history.v1.HistoryEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.HistoryEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.HistoryEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.HistoryEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEventTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEventType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTaskId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getWorkflowExecutionStartedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionCompletedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTimedOutEventAttributes();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskScheduledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskStartedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskCompletedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskTimedOutEventAttributes();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowTaskFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskScheduledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskStartedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskCompletedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskTimedOutEventAttributes();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getTimerStartedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.temporal.api.history.v1.TimerStartedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getTimerFiredEventAttributes();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.temporal.api.history.v1.TimerFiredEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskCancelRequestedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getActivityTaskCanceledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getTimerCanceledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.temporal.api.history.v1.TimerCanceledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getMarkerRecordedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.temporal.api.history.v1.MarkerRecordedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionSignaledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionTerminatedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionCancelRequestedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionCanceledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getRequestCancelExternalWorkflowExecutionInitiatedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getRequestCancelExternalWorkflowExecutionFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getExternalWorkflowExecutionCancelRequestedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowExecutionContinuedAsNewEventAttributes();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getStartChildWorkflowExecutionInitiatedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getStartChildWorkflowExecutionFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionStartedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionCompletedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionCanceledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionTimedOutEventAttributes();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getChildWorkflowExecutionTerminatedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getSignalExternalWorkflowExecutionInitiatedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getSignalExternalWorkflowExecutionFailedEventAttributes();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getExternalWorkflowExecutionSignaledEventAttributes();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes.serializeBinaryToWriter
    );
  }
  f = message.getUpsertWorkflowSearchAttributesEventAttributes();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 event_id = 1;
 * @return {number}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setEventId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp event_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getEventTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setEventTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearEventTime = function() {
  this.setEventTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasEventTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.enums.v1.EventType event_type = 3;
 * @return {!proto.temporal.api.enums.v1.EventType}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getEventType = function() {
  return /** @type {!proto.temporal.api.enums.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.temporal.api.enums.v1.EventType} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setEventType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 task_id = 5;
 * @return {number}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getTaskId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setTaskId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional WorkflowExecutionStartedEventAttributes workflow_execution_started_event_attributes = 6;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionStartedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes, 6));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionStartedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionStartedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionStartedEventAttributes = function() {
  this.setWorkflowExecutionStartedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionStartedEventAttributes = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WorkflowExecutionCompletedEventAttributes workflow_execution_completed_event_attributes = 7;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionCompletedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes, 7));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionCompletedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionCompletedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionCompletedEventAttributes = function() {
  this.setWorkflowExecutionCompletedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionCompletedEventAttributes = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WorkflowExecutionFailedEventAttributes workflow_execution_failed_event_attributes = 8;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes, 8));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionFailedEventAttributes = function() {
  this.setWorkflowExecutionFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionFailedEventAttributes = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional WorkflowExecutionTimedOutEventAttributes workflow_execution_timed_out_event_attributes = 9;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionTimedOutEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes, 9));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionTimedOutEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionTimedOutEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionTimedOutEventAttributes = function() {
  this.setWorkflowExecutionTimedOutEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionTimedOutEventAttributes = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WorkflowTaskScheduledEventAttributes workflow_task_scheduled_event_attributes = 10;
 * @return {?proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowTaskScheduledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes, 10));
};


/** @param {?proto.temporal.api.history.v1.WorkflowTaskScheduledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowTaskScheduledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowTaskScheduledEventAttributes = function() {
  this.setWorkflowTaskScheduledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowTaskScheduledEventAttributes = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WorkflowTaskStartedEventAttributes workflow_task_started_event_attributes = 11;
 * @return {?proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowTaskStartedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes, 11));
};


/** @param {?proto.temporal.api.history.v1.WorkflowTaskStartedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowTaskStartedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowTaskStartedEventAttributes = function() {
  this.setWorkflowTaskStartedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowTaskStartedEventAttributes = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional WorkflowTaskCompletedEventAttributes workflow_task_completed_event_attributes = 12;
 * @return {?proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowTaskCompletedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes, 12));
};


/** @param {?proto.temporal.api.history.v1.WorkflowTaskCompletedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowTaskCompletedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowTaskCompletedEventAttributes = function() {
  this.setWorkflowTaskCompletedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowTaskCompletedEventAttributes = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WorkflowTaskTimedOutEventAttributes workflow_task_timed_out_event_attributes = 13;
 * @return {?proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowTaskTimedOutEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes, 13));
};


/** @param {?proto.temporal.api.history.v1.WorkflowTaskTimedOutEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowTaskTimedOutEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowTaskTimedOutEventAttributes = function() {
  this.setWorkflowTaskTimedOutEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowTaskTimedOutEventAttributes = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WorkflowTaskFailedEventAttributes workflow_task_failed_event_attributes = 14;
 * @return {?proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowTaskFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes, 14));
};


/** @param {?proto.temporal.api.history.v1.WorkflowTaskFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowTaskFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowTaskFailedEventAttributes = function() {
  this.setWorkflowTaskFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowTaskFailedEventAttributes = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ActivityTaskScheduledEventAttributes activity_task_scheduled_event_attributes = 15;
 * @return {?proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskScheduledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes, 15));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskScheduledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskScheduledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskScheduledEventAttributes = function() {
  this.setActivityTaskScheduledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskScheduledEventAttributes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ActivityTaskStartedEventAttributes activity_task_started_event_attributes = 16;
 * @return {?proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskStartedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes, 16));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskStartedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskStartedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskStartedEventAttributes = function() {
  this.setActivityTaskStartedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskStartedEventAttributes = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ActivityTaskCompletedEventAttributes activity_task_completed_event_attributes = 17;
 * @return {?proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskCompletedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes, 17));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskCompletedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskCompletedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskCompletedEventAttributes = function() {
  this.setActivityTaskCompletedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskCompletedEventAttributes = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ActivityTaskFailedEventAttributes activity_task_failed_event_attributes = 18;
 * @return {?proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes, 18));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskFailedEventAttributes = function() {
  this.setActivityTaskFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskFailedEventAttributes = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ActivityTaskTimedOutEventAttributes activity_task_timed_out_event_attributes = 19;
 * @return {?proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskTimedOutEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes, 19));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskTimedOutEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskTimedOutEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskTimedOutEventAttributes = function() {
  this.setActivityTaskTimedOutEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskTimedOutEventAttributes = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional TimerStartedEventAttributes timer_started_event_attributes = 20;
 * @return {?proto.temporal.api.history.v1.TimerStartedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getTimerStartedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.TimerStartedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.TimerStartedEventAttributes, 20));
};


/** @param {?proto.temporal.api.history.v1.TimerStartedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setTimerStartedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearTimerStartedEventAttributes = function() {
  this.setTimerStartedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasTimerStartedEventAttributes = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional TimerFiredEventAttributes timer_fired_event_attributes = 21;
 * @return {?proto.temporal.api.history.v1.TimerFiredEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getTimerFiredEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.TimerFiredEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.TimerFiredEventAttributes, 21));
};


/** @param {?proto.temporal.api.history.v1.TimerFiredEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setTimerFiredEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearTimerFiredEventAttributes = function() {
  this.setTimerFiredEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasTimerFiredEventAttributes = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ActivityTaskCancelRequestedEventAttributes activity_task_cancel_requested_event_attributes = 22;
 * @return {?proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskCancelRequestedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes, 22));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskCancelRequestedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskCancelRequestedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskCancelRequestedEventAttributes = function() {
  this.setActivityTaskCancelRequestedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskCancelRequestedEventAttributes = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ActivityTaskCanceledEventAttributes activity_task_canceled_event_attributes = 23;
 * @return {?proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getActivityTaskCanceledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes, 23));
};


/** @param {?proto.temporal.api.history.v1.ActivityTaskCanceledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setActivityTaskCanceledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearActivityTaskCanceledEventAttributes = function() {
  this.setActivityTaskCanceledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasActivityTaskCanceledEventAttributes = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional TimerCanceledEventAttributes timer_canceled_event_attributes = 24;
 * @return {?proto.temporal.api.history.v1.TimerCanceledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getTimerCanceledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.TimerCanceledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.TimerCanceledEventAttributes, 24));
};


/** @param {?proto.temporal.api.history.v1.TimerCanceledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setTimerCanceledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 24, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearTimerCanceledEventAttributes = function() {
  this.setTimerCanceledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasTimerCanceledEventAttributes = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional MarkerRecordedEventAttributes marker_recorded_event_attributes = 25;
 * @return {?proto.temporal.api.history.v1.MarkerRecordedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getMarkerRecordedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.MarkerRecordedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.MarkerRecordedEventAttributes, 25));
};


/** @param {?proto.temporal.api.history.v1.MarkerRecordedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setMarkerRecordedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 25, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearMarkerRecordedEventAttributes = function() {
  this.setMarkerRecordedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasMarkerRecordedEventAttributes = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional WorkflowExecutionSignaledEventAttributes workflow_execution_signaled_event_attributes = 26;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionSignaledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes, 26));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionSignaledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionSignaledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 26, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionSignaledEventAttributes = function() {
  this.setWorkflowExecutionSignaledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionSignaledEventAttributes = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional WorkflowExecutionTerminatedEventAttributes workflow_execution_terminated_event_attributes = 27;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionTerminatedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes, 27));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionTerminatedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionTerminatedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 27, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionTerminatedEventAttributes = function() {
  this.setWorkflowExecutionTerminatedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionTerminatedEventAttributes = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional WorkflowExecutionCancelRequestedEventAttributes workflow_execution_cancel_requested_event_attributes = 28;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionCancelRequestedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes, 28));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionCancelRequestedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionCancelRequestedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 28, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionCancelRequestedEventAttributes = function() {
  this.setWorkflowExecutionCancelRequestedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionCancelRequestedEventAttributes = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional WorkflowExecutionCanceledEventAttributes workflow_execution_canceled_event_attributes = 29;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionCanceledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes, 29));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionCanceledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionCanceledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 29, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionCanceledEventAttributes = function() {
  this.setWorkflowExecutionCanceledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionCanceledEventAttributes = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional RequestCancelExternalWorkflowExecutionInitiatedEventAttributes request_cancel_external_workflow_execution_initiated_event_attributes = 30;
 * @return {?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes, 30));
};


/** @param {?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 30, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function() {
  this.setRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional RequestCancelExternalWorkflowExecutionFailedEventAttributes request_cancel_external_workflow_execution_failed_event_attributes = 31;
 * @return {?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getRequestCancelExternalWorkflowExecutionFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes, 31));
};


/** @param {?proto.temporal.api.history.v1.RequestCancelExternalWorkflowExecutionFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setRequestCancelExternalWorkflowExecutionFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 31, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearRequestCancelExternalWorkflowExecutionFailedEventAttributes = function() {
  this.setRequestCancelExternalWorkflowExecutionFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasRequestCancelExternalWorkflowExecutionFailedEventAttributes = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional ExternalWorkflowExecutionCancelRequestedEventAttributes external_workflow_execution_cancel_requested_event_attributes = 32;
 * @return {?proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getExternalWorkflowExecutionCancelRequestedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes, 32));
};


/** @param {?proto.temporal.api.history.v1.ExternalWorkflowExecutionCancelRequestedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setExternalWorkflowExecutionCancelRequestedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 32, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearExternalWorkflowExecutionCancelRequestedEventAttributes = function() {
  this.setExternalWorkflowExecutionCancelRequestedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasExternalWorkflowExecutionCancelRequestedEventAttributes = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WorkflowExecutionContinuedAsNewEventAttributes workflow_execution_continued_as_new_event_attributes = 33;
 * @return {?proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getWorkflowExecutionContinuedAsNewEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes, 33));
};


/** @param {?proto.temporal.api.history.v1.WorkflowExecutionContinuedAsNewEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setWorkflowExecutionContinuedAsNewEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 33, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearWorkflowExecutionContinuedAsNewEventAttributes = function() {
  this.setWorkflowExecutionContinuedAsNewEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasWorkflowExecutionContinuedAsNewEventAttributes = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional StartChildWorkflowExecutionInitiatedEventAttributes start_child_workflow_execution_initiated_event_attributes = 34;
 * @return {?proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getStartChildWorkflowExecutionInitiatedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes, 34));
};


/** @param {?proto.temporal.api.history.v1.StartChildWorkflowExecutionInitiatedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setStartChildWorkflowExecutionInitiatedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 34, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearStartChildWorkflowExecutionInitiatedEventAttributes = function() {
  this.setStartChildWorkflowExecutionInitiatedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasStartChildWorkflowExecutionInitiatedEventAttributes = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional StartChildWorkflowExecutionFailedEventAttributes start_child_workflow_execution_failed_event_attributes = 35;
 * @return {?proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getStartChildWorkflowExecutionFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes, 35));
};


/** @param {?proto.temporal.api.history.v1.StartChildWorkflowExecutionFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setStartChildWorkflowExecutionFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 35, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearStartChildWorkflowExecutionFailedEventAttributes = function() {
  this.setStartChildWorkflowExecutionFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasStartChildWorkflowExecutionFailedEventAttributes = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional ChildWorkflowExecutionStartedEventAttributes child_workflow_execution_started_event_attributes = 36;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionStartedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes, 36));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionStartedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionStartedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 36, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionStartedEventAttributes = function() {
  this.setChildWorkflowExecutionStartedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionStartedEventAttributes = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional ChildWorkflowExecutionCompletedEventAttributes child_workflow_execution_completed_event_attributes = 37;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionCompletedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes, 37));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionCompletedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionCompletedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 37, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionCompletedEventAttributes = function() {
  this.setChildWorkflowExecutionCompletedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionCompletedEventAttributes = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional ChildWorkflowExecutionFailedEventAttributes child_workflow_execution_failed_event_attributes = 38;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes, 38));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 38, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionFailedEventAttributes = function() {
  this.setChildWorkflowExecutionFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionFailedEventAttributes = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional ChildWorkflowExecutionCanceledEventAttributes child_workflow_execution_canceled_event_attributes = 39;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionCanceledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes, 39));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionCanceledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionCanceledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 39, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionCanceledEventAttributes = function() {
  this.setChildWorkflowExecutionCanceledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionCanceledEventAttributes = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional ChildWorkflowExecutionTimedOutEventAttributes child_workflow_execution_timed_out_event_attributes = 40;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionTimedOutEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes, 40));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionTimedOutEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionTimedOutEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 40, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionTimedOutEventAttributes = function() {
  this.setChildWorkflowExecutionTimedOutEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionTimedOutEventAttributes = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional ChildWorkflowExecutionTerminatedEventAttributes child_workflow_execution_terminated_event_attributes = 41;
 * @return {?proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getChildWorkflowExecutionTerminatedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes, 41));
};


/** @param {?proto.temporal.api.history.v1.ChildWorkflowExecutionTerminatedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setChildWorkflowExecutionTerminatedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 41, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearChildWorkflowExecutionTerminatedEventAttributes = function() {
  this.setChildWorkflowExecutionTerminatedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasChildWorkflowExecutionTerminatedEventAttributes = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional SignalExternalWorkflowExecutionInitiatedEventAttributes signal_external_workflow_execution_initiated_event_attributes = 42;
 * @return {?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getSignalExternalWorkflowExecutionInitiatedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes, 42));
};


/** @param {?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionInitiatedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setSignalExternalWorkflowExecutionInitiatedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 42, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearSignalExternalWorkflowExecutionInitiatedEventAttributes = function() {
  this.setSignalExternalWorkflowExecutionInitiatedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasSignalExternalWorkflowExecutionInitiatedEventAttributes = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional SignalExternalWorkflowExecutionFailedEventAttributes signal_external_workflow_execution_failed_event_attributes = 43;
 * @return {?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getSignalExternalWorkflowExecutionFailedEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes, 43));
};


/** @param {?proto.temporal.api.history.v1.SignalExternalWorkflowExecutionFailedEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setSignalExternalWorkflowExecutionFailedEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 43, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearSignalExternalWorkflowExecutionFailedEventAttributes = function() {
  this.setSignalExternalWorkflowExecutionFailedEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasSignalExternalWorkflowExecutionFailedEventAttributes = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional ExternalWorkflowExecutionSignaledEventAttributes external_workflow_execution_signaled_event_attributes = 44;
 * @return {?proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getExternalWorkflowExecutionSignaledEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes, 44));
};


/** @param {?proto.temporal.api.history.v1.ExternalWorkflowExecutionSignaledEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setExternalWorkflowExecutionSignaledEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 44, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearExternalWorkflowExecutionSignaledEventAttributes = function() {
  this.setExternalWorkflowExecutionSignaledEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasExternalWorkflowExecutionSignaledEventAttributes = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional UpsertWorkflowSearchAttributesEventAttributes upsert_workflow_search_attributes_event_attributes = 45;
 * @return {?proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.getUpsertWorkflowSearchAttributesEventAttributes = function() {
  return /** @type{?proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes, 45));
};


/** @param {?proto.temporal.api.history.v1.UpsertWorkflowSearchAttributesEventAttributes|undefined} value */
proto.temporal.api.history.v1.HistoryEvent.prototype.setUpsertWorkflowSearchAttributesEventAttributes = function(value) {
  jspb.Message.setOneofWrapperField(this, 45, proto.temporal.api.history.v1.HistoryEvent.oneofGroups_[0], value);
};


proto.temporal.api.history.v1.HistoryEvent.prototype.clearUpsertWorkflowSearchAttributesEventAttributes = function() {
  this.setUpsertWorkflowSearchAttributesEventAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.history.v1.HistoryEvent.prototype.hasUpsertWorkflowSearchAttributesEventAttributes = function() {
  return jspb.Message.getField(this, 45) != null;
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
proto.temporal.api.history.v1.History = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temporal.api.history.v1.History.repeatedFields_, null);
};
goog.inherits(proto.temporal.api.history.v1.History, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.history.v1.History.displayName = 'proto.temporal.api.history.v1.History';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temporal.api.history.v1.History.repeatedFields_ = [1];



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
proto.temporal.api.history.v1.History.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.history.v1.History.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.history.v1.History} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.History.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.temporal.api.history.v1.HistoryEvent.toObject, includeInstance)
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
 * @return {!proto.temporal.api.history.v1.History}
 */
proto.temporal.api.history.v1.History.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.history.v1.History;
  return proto.temporal.api.history.v1.History.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.history.v1.History} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.history.v1.History}
 */
proto.temporal.api.history.v1.History.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.temporal.api.history.v1.HistoryEvent;
      reader.readMessage(value,proto.temporal.api.history.v1.HistoryEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.temporal.api.history.v1.History.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.history.v1.History.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.history.v1.History} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.history.v1.History.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.temporal.api.history.v1.HistoryEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HistoryEvent events = 1;
 * @return {!Array<!proto.temporal.api.history.v1.HistoryEvent>}
 */
proto.temporal.api.history.v1.History.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.temporal.api.history.v1.HistoryEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.temporal.api.history.v1.HistoryEvent, 1));
};


/** @param {!Array<!proto.temporal.api.history.v1.HistoryEvent>} value */
proto.temporal.api.history.v1.History.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.temporal.api.history.v1.HistoryEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.temporal.api.history.v1.HistoryEvent}
 */
proto.temporal.api.history.v1.History.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.temporal.api.history.v1.HistoryEvent, opt_index);
};


proto.temporal.api.history.v1.History.prototype.clearEventsList = function() {
  this.setEventsList([]);
};


goog.object.extend(exports, proto.temporal.api.history.v1);
