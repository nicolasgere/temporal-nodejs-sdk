// package: temporal.api.enums.v1
// file: temporal/api/enums/v1/failed_cause.proto

import * as jspb from "google-protobuf";

export interface WorkflowTaskFailedCauseMap {
  WORKFLOW_TASK_FAILED_CAUSE_UNSPECIFIED: 0;
  WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_COMMAND: 1;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES: 2;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES: 3;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES: 4;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES: 5;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES: 6;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES: 7;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES: 8;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES: 9;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES: 10;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES: 11;
  WORKFLOW_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID: 12;
  WORKFLOW_TASK_FAILED_CAUSE_RESET_STICKY_TASK_QUEUE: 13;
  WORKFLOW_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE: 14;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES: 15;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES: 16;
  WORKFLOW_TASK_FAILED_CAUSE_FORCE_CLOSE_COMMAND: 17;
  WORKFLOW_TASK_FAILED_CAUSE_FAILOVER_CLOSE_COMMAND: 18;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE: 19;
  WORKFLOW_TASK_FAILED_CAUSE_RESET_WORKFLOW: 20;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_BINARY: 21;
  WORKFLOW_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID: 22;
  WORKFLOW_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES: 23;
}

export const WorkflowTaskFailedCause: WorkflowTaskFailedCauseMap;

export interface StartChildWorkflowExecutionFailedCauseMap {
  START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0;
  START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS: 1;
}

export const StartChildWorkflowExecutionFailedCause: StartChildWorkflowExecutionFailedCauseMap;

export interface CancelExternalWorkflowExecutionFailedCauseMap {
  CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0;
  CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND: 1;
}

export const CancelExternalWorkflowExecutionFailedCause: CancelExternalWorkflowExecutionFailedCauseMap;

export interface SignalExternalWorkflowExecutionFailedCauseMap {
  SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0;
  SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND: 1;
}

export const SignalExternalWorkflowExecutionFailedCause: SignalExternalWorkflowExecutionFailedCauseMap;
