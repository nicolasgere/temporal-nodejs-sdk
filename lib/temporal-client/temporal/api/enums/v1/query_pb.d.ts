// package: temporal.api.enums.v1
// file: temporal/api/enums/v1/query.proto

import * as jspb from "google-protobuf";

export interface QueryResultTypeMap {
  QUERY_RESULT_TYPE_UNSPECIFIED: 0;
  QUERY_RESULT_TYPE_ANSWERED: 1;
  QUERY_RESULT_TYPE_FAILED: 2;
}

export const QueryResultType: QueryResultTypeMap;

export interface QueryRejectConditionMap {
  QUERY_REJECT_CONDITION_UNSPECIFIED: 0;
  QUERY_REJECT_CONDITION_NONE: 1;
  QUERY_REJECT_CONDITION_NOT_OPEN: 2;
  QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY: 3;
}

export const QueryRejectCondition: QueryRejectConditionMap;

