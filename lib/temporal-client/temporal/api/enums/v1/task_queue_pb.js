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

goog.exportSymbol('proto.temporal.api.enums.v1.TaskQueueKind', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.TaskQueueType', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.TaskQueueKind = {
  TASK_QUEUE_KIND_UNSPECIFIED: 0,
  TASK_QUEUE_KIND_NORMAL: 1,
  TASK_QUEUE_KIND_STICKY: 2
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.TaskQueueType = {
  TASK_QUEUE_TYPE_UNSPECIFIED: 0,
  TASK_QUEUE_TYPE_WORKFLOW: 1,
  TASK_QUEUE_TYPE_ACTIVITY: 2
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
