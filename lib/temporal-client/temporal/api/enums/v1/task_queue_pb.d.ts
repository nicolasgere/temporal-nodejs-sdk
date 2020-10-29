// package: temporal.api.enums.v1
// file: temporal/api/enums/v1/task_queue.proto

import * as jspb from "google-protobuf";

export interface TaskQueueKindMap {
  TASK_QUEUE_KIND_UNSPECIFIED: 0;
  TASK_QUEUE_KIND_NORMAL: 1;
  TASK_QUEUE_KIND_STICKY: 2;
}

export const TaskQueueKind: TaskQueueKindMap;

export interface TaskQueueTypeMap {
  TASK_QUEUE_TYPE_UNSPECIFIED: 0;
  TASK_QUEUE_TYPE_WORKFLOW: 1;
  TASK_QUEUE_TYPE_ACTIVITY: 2;
}

export const TaskQueueType: TaskQueueTypeMap;

