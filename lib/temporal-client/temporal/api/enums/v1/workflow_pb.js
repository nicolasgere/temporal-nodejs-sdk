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

goog.exportSymbol('proto.temporal.api.enums.v1.ContinueAsNewInitiator', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.HistoryEventFilterType', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.ParentClosePolicy', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.PendingActivityState', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.RetryState', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.TimeoutType', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.WorkflowExecutionStatus', null, global);
goog.exportSymbol('proto.temporal.api.enums.v1.WorkflowIdReusePolicy', null, global);
/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.WorkflowIdReusePolicy = {
  WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED: 0,
  WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE: 1,
  WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY: 2,
  WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE: 3
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.ParentClosePolicy = {
  PARENT_CLOSE_POLICY_UNSPECIFIED: 0,
  PARENT_CLOSE_POLICY_TERMINATE: 1,
  PARENT_CLOSE_POLICY_ABANDON: 2,
  PARENT_CLOSE_POLICY_REQUEST_CANCEL: 3
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.ContinueAsNewInitiator = {
  CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED: 0,
  CONTINUE_AS_NEW_INITIATOR_WORKFLOW: 1,
  CONTINUE_AS_NEW_INITIATOR_RETRY: 2,
  CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE: 3
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.WorkflowExecutionStatus = {
  WORKFLOW_EXECUTION_STATUS_UNSPECIFIED: 0,
  WORKFLOW_EXECUTION_STATUS_RUNNING: 1,
  WORKFLOW_EXECUTION_STATUS_COMPLETED: 2,
  WORKFLOW_EXECUTION_STATUS_FAILED: 3,
  WORKFLOW_EXECUTION_STATUS_CANCELED: 4,
  WORKFLOW_EXECUTION_STATUS_TERMINATED: 5,
  WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW: 6,
  WORKFLOW_EXECUTION_STATUS_TIMED_OUT: 7
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.PendingActivityState = {
  PENDING_ACTIVITY_STATE_UNSPECIFIED: 0,
  PENDING_ACTIVITY_STATE_SCHEDULED: 1,
  PENDING_ACTIVITY_STATE_STARTED: 2,
  PENDING_ACTIVITY_STATE_CANCEL_REQUESTED: 3
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.HistoryEventFilterType = {
  HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED: 0,
  HISTORY_EVENT_FILTER_TYPE_ALL_EVENT: 1,
  HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT: 2
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.RetryState = {
  RETRY_STATE_UNSPECIFIED: 0,
  RETRY_STATE_IN_PROGRESS: 1,
  RETRY_STATE_NON_RETRYABLE_FAILURE: 2,
  RETRY_STATE_TIMEOUT: 3,
  RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED: 4,
  RETRY_STATE_RETRY_POLICY_NOT_SET: 5,
  RETRY_STATE_INTERNAL_SERVER_ERROR: 6,
  RETRY_STATE_CANCEL_REQUESTED: 7
};

/**
 * @enum {number}
 */
proto.temporal.api.enums.v1.TimeoutType = {
  TIMEOUT_TYPE_UNSPECIFIED: 0,
  TIMEOUT_TYPE_START_TO_CLOSE: 1,
  TIMEOUT_TYPE_SCHEDULE_TO_START: 2,
  TIMEOUT_TYPE_SCHEDULE_TO_CLOSE: 3,
  TIMEOUT_TYPE_HEARTBEAT: 4
};

goog.object.extend(exports, proto.temporal.api.enums.v1);
