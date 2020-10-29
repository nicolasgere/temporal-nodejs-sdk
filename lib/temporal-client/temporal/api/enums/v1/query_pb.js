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

goog.exportSymbol('proto.temporal.api.enums.v1.QueryRejectCondition', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.QueryResultType', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.QueryResultType = {
  QUERY_RESULT_TYPE_UNSPECIFIED: 0,
  QUERY_RESULT_TYPE_ANSWERED: 1,
  QUERY_RESULT_TYPE_FAILED: 2
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.QueryRejectCondition = {
  QUERY_REJECT_CONDITION_UNSPECIFIED: 0,
  QUERY_REJECT_CONDITION_NONE: 1,
  QUERY_REJECT_CONDITION_NOT_OPEN: 2,
  QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY: 3
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
