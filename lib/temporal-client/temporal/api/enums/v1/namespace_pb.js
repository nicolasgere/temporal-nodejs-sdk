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

goog.exportSymbol('proto.temporal.api.enums.v1.ArchivalState', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.NamespaceState', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.NamespaceState = {
  NAMESPACE_STATE_UNSPECIFIED: 0,
  NAMESPACE_STATE_REGISTERED: 1,
  NAMESPACE_STATE_DEPRECATED: 2,
  NAMESPACE_STATE_DELETED: 3
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.ArchivalState = {
  ARCHIVAL_STATE_UNSPECIFIED: 0,
  ARCHIVAL_STATE_DISABLED: 1,
  ARCHIVAL_STATE_ENABLED: 2
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
