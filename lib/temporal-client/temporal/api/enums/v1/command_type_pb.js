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

goog.exportSymbol('proto.temporal.api.enums.v1.CommandType', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.CommandType = {
  COMMAND_TYPE_UNSPECIFIED: 0,
  COMMAND_TYPE_SCHEDULE_ACTIVITY_TASK: 1,
  COMMAND_TYPE_REQUEST_CANCEL_ACTIVITY_TASK: 2,
  COMMAND_TYPE_START_TIMER: 3,
  COMMAND_TYPE_COMPLETE_WORKFLOW_EXECUTION: 4,
  COMMAND_TYPE_FAIL_WORKFLOW_EXECUTION: 5,
  COMMAND_TYPE_CANCEL_TIMER: 6,
  COMMAND_TYPE_CANCEL_WORKFLOW_EXECUTION: 7,
  COMMAND_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION: 8,
  COMMAND_TYPE_RECORD_MARKER: 9,
  COMMAND_TYPE_CONTINUE_AS_NEW_WORKFLOW_EXECUTION: 10,
  COMMAND_TYPE_START_CHILD_WORKFLOW_EXECUTION: 11,
  COMMAND_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION: 12,
  COMMAND_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES: 13
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
