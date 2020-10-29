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

goog.exportSymbol('proto.temporal.api.enums.v1.EncodingType', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.IndexedValueType', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.Severity', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.EncodingType = {
  ENCODING_TYPE_UNSPECIFIED: 0,
  ENCODING_TYPE_PROTO3: 1,
  ENCODING_TYPE_JSON: 2
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.IndexedValueType = {
  INDEXED_VALUE_TYPE_UNSPECIFIED: 0,
  INDEXED_VALUE_TYPE_STRING: 1,
  INDEXED_VALUE_TYPE_KEYWORD: 2,
  INDEXED_VALUE_TYPE_INT: 3,
  INDEXED_VALUE_TYPE_DOUBLE: 4,
  INDEXED_VALUE_TYPE_BOOL: 5,
  INDEXED_VALUE_TYPE_DATETIME: 6
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.Severity = {
  SEVERITY_UNSPECIFIED: 0,
  SEVERITY_HIGH: 1,
  SEVERITY_MEDIUM: 2,
  SEVERITY_LOW: 3
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
