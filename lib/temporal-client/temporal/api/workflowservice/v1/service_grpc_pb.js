// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
'use strict';
var grpc = require('grpc');
var temporal_api_workflowservice_v1_request_response_pb = require('../../../../temporal/api/workflowservice/v1/request_response_pb.js');

function serialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.CountWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.CountWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DeprecateNamespaceRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DeprecateNamespaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DeprecateNamespaceRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DeprecateNamespaceResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DeprecateNamespaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DeprecateNamespaceResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeNamespaceRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeNamespaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeNamespaceRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeNamespaceResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeNamespaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeNamespaceResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeTaskQueueRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeTaskQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeTaskQueueRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeTaskQueueResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeTaskQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeTaskQueueResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.DescribeWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetClusterInfoRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetClusterInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetClusterInfoRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetClusterInfoResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetClusterInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetClusterInfoResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetSearchAttributesRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetSearchAttributesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetSearchAttributesRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetSearchAttributesResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetSearchAttributesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetSearchAttributesResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListArchivedWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListClosedWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListNamespacesRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListNamespacesRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListNamespacesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListNamespacesRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListNamespacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListNamespacesResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListNamespacesResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListNamespacesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListNamespacesResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListNamespacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListOpenWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListTaskQueuePartitionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListTaskQueuePartitionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_PollActivityTaskQueueRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.PollActivityTaskQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_PollActivityTaskQueueRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_PollActivityTaskQueueResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.PollActivityTaskQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_PollActivityTaskQueueResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.PollWorkflowTaskQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.PollWorkflowTaskQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_QueryWorkflowRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.QueryWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_QueryWorkflowRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_QueryWorkflowResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.QueryWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_QueryWorkflowResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RecordActivityTaskHeartbeatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RegisterNamespaceRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RegisterNamespaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RegisterNamespaceRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RegisterNamespaceResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RegisterNamespaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RegisterNamespaceResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ResetStickyTaskQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ResetStickyTaskQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ResetWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCanceledByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCanceledRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCanceledResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCompletedByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCompletedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskCompletedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskFailedByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskFailedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondActivityTaskFailedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondQueryTaskCompletedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondQueryTaskCompletedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondWorkflowTaskCompletedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondWorkflowTaskFailedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.RespondWorkflowTaskFailedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ScanWorkflowExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.ScanWorkflowExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.SignalWithStartWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.SignalWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_StartWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.StartWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_StartWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_StartWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.StartWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_StartWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.TerminateWorkflowExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_UpdateNamespaceRequest(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceRequest)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.UpdateNamespaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_UpdateNamespaceRequest(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_temporal_api_workflowservice_v1_UpdateNamespaceResponse(arg) {
  if (!(arg instanceof temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceResponse)) {
    throw new Error('Expected argument of type temporal.api.workflowservice.v1.UpdateNamespaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_temporal_api_workflowservice_v1_UpdateNamespaceResponse(buffer_arg) {
  return temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// WorkflowService API is exposed to provide support for long running applications.  Application is expected to call
// StartWorkflowExecution to create an instance for each instance of long running workflow.  Such applications are expected
// to have a worker which regularly polls for WorkflowTask and ActivityTask from the WorkflowService.  For each
// WorkflowTask, application is expected to process the history of events for that session and respond back with next
// commands.  For each ActivityTask, application is expected to execute the actual logic for that task and respond back
// with completion or failure.  Worker is expected to regularly heartbeat while activity task is running.
var WorkflowServiceService = exports.WorkflowServiceService = {
  // RegisterNamespace creates a new namespace which can be used as a container for all resources.  Namespace is a top level
// entity within Temporal, used as a container for all resources like workflow executions, task queues, etc.  Namespace
// acts as a sandbox and provides isolation for all resources within the namespace.  All resources belongs to exactly one
// namespace.
registerNamespace: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RegisterNamespace',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RegisterNamespaceResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RegisterNamespaceRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RegisterNamespaceRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RegisterNamespaceResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RegisterNamespaceResponse,
  },
  // DescribeNamespace returns the information and configuration for a registered namespace.
describeNamespace: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/DescribeNamespace',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.DescribeNamespaceResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_DescribeNamespaceRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeNamespaceRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_DescribeNamespaceResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeNamespaceResponse,
  },
  // ListNamespaces returns the information and configuration for all namespaces.
listNamespaces: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListNamespaces',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListNamespacesRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListNamespacesResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListNamespacesRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListNamespacesRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListNamespacesResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListNamespacesResponse,
  },
  // (-- api-linter: core::0134::method-signature=disabled
//     aip.dev/not-precedent: UpdateNamespace RPC doesn't follow Google API format. --)
// (-- api-linter: core::0134::response-message-name=disabled
//     aip.dev/not-precedent: UpdateNamespace RPC doesn't follow Google API format. --)
// UpdateNamespace is used to update the information and configuration for a registered namespace.
updateNamespace: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/UpdateNamespace',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.UpdateNamespaceResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_UpdateNamespaceRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_UpdateNamespaceRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_UpdateNamespaceResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_UpdateNamespaceResponse,
  },
  // DeprecateNamespace is used to update state of a registered namespace to DEPRECATED.  Once the namespace is deprecated
// it cannot be used to start new workflow executions.  Existing workflow executions will continue to run on
// deprecated namespaces.
deprecateNamespace: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/DeprecateNamespace',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.DeprecateNamespaceResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_DeprecateNamespaceRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_DeprecateNamespaceRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_DeprecateNamespaceResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_DeprecateNamespaceResponse,
  },
  // StartWorkflowExecution starts a new long running workflow instance.  It will create the instance with
// 'WorkflowExecutionStarted' event in history and also schedule the first WorkflowTask for the worker to make the
// first command for this instance.  It will return 'WorkflowExecutionAlreadyStartedFailure', if an instance already
// exists with same workflowId.
startWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/StartWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.StartWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_StartWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_StartWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_StartWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_StartWorkflowExecutionResponse,
  },
  // GetWorkflowExecutionHistory returns the history of specified workflow execution.  It fails with 'NotFoundFailure' if specified workflow
// execution in unknown to the service.
getWorkflowExecutionHistory: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/GetWorkflowExecutionHistory',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.GetWorkflowExecutionHistoryResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_GetWorkflowExecutionHistoryResponse,
  },
  // PollWorkflowTaskQueue is called by application worker to process WorkflowTask from a specific task queue.  A
// WorkflowTask is dispatched to callers for active workflow executions, with pending workflow tasks.
// Application is then expected to call 'RespondWorkflowTaskCompleted' API when it is done processing the WorkflowTask.
// It will also create a 'WorkflowTaskStarted' event in the history for that session before handing off WorkflowTask to
// application worker.
pollWorkflowTaskQueue: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/PollWorkflowTaskQueue',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.PollWorkflowTaskQueueResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_PollWorkflowTaskQueueResponse,
  },
  // RespondWorkflowTaskCompleted is called by application worker to complete a WorkflowTask handed as a result of
// 'PollWorkflowTaskQueue' API call.  Completing a WorkflowTask will result in new events for the workflow execution and
// potentially new ActivityTask being created for corresponding commands.  It will also create a WorkflowTaskCompleted
// event in the history for that session.  Use the 'taskToken' provided as response of PollWorkflowTaskQueue API call
// for completing the WorkflowTask.
// The response could contain a new workflow task if there is one or if the request asking for one.
respondWorkflowTaskCompleted: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondWorkflowTaskCompleted',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskCompletedResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskCompletedResponse,
  },
  // RespondWorkflowTaskFailed is called by application worker to indicate failure.  This results in
// WorkflowTaskFailedEvent written to the history and a new WorkflowTask created.  This API can be used by client to
// either clear sticky task queue or report any panics during WorkflowTask processing.  Temporal will only append first
// WorkflowTaskFailed event to the history of workflow execution for consecutive failures.
respondWorkflowTaskFailed: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondWorkflowTaskFailed',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondWorkflowTaskFailedResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondWorkflowTaskFailedResponse,
  },
  // PollActivityTaskQueue is called by application worker to process ActivityTask from a specific task queue.  ActivityTask
// is dispatched to callers whenever a ScheduleTask command is made for a workflow execution.
// Application is expected to call 'RespondActivityTaskCompleted' or 'RespondActivityTaskFailed' once it is done
// processing the task.
// Application also needs to call 'RecordActivityTaskHeartbeat' API within 'heartbeatTimeoutSeconds' interval to
// prevent the task from getting timed out.  An event 'ActivityTaskStarted' event is also written to workflow execution
// history before the ActivityTask is dispatched to application worker.
pollActivityTaskQueue: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/PollActivityTaskQueue',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.PollActivityTaskQueueResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_PollActivityTaskQueueRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_PollActivityTaskQueueRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_PollActivityTaskQueueResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_PollActivityTaskQueueResponse,
  },
  // RecordActivityTaskHeartbeat is called by application worker while it is processing an ActivityTask.  If worker fails
// to heartbeat within 'heartbeatTimeoutSeconds' interval for the ActivityTask, then it will be marked as timedout and
// 'ActivityTaskTimedOut' event will be written to the workflow history.  Calling 'RecordActivityTaskHeartbeat' will
// fail with 'NotFoundFailure' in such situations.  Use the 'taskToken' provided as response of
// PollActivityTaskQueue API call for heart beating.
recordActivityTaskHeartbeat: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RecordActivityTaskHeartbeat',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatResponse,
  },
  // (-- api-linter: core::0136::prepositions=disabled
//     aip.dev/not-precedent: "By" is used to indicate request type. --)
// RecordActivityTaskHeartbeatById is called by application worker while it is processing an ActivityTask.  If worker fails
// to heartbeat within 'heartbeatTimeoutSeconds' interval for the ActivityTask, then it will be marked as timed out and
// 'ActivityTaskTimedOut' event will be written to the workflow history.  Calling 'RecordActivityTaskHeartbeatById' will
// fail with 'NotFoundFailure' in such situations.  Instead of using 'taskToken' like in RecordActivityTaskHeartbeat,
// use Namespace, WorkflowId and ActivityId
recordActivityTaskHeartbeatById: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RecordActivityTaskHeartbeatById',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RecordActivityTaskHeartbeatByIdResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RecordActivityTaskHeartbeatByIdResponse,
  },
  // RespondActivityTaskCompleted is called by application worker when it is done processing an ActivityTask.  It will
// result in a new 'ActivityTaskCompleted' event being written to the workflow history and a new WorkflowTask
// created for the workflow so new commands could be made.  Use the 'taskToken' provided as response of
// PollActivityTaskQueue API call for completion. It fails with 'NotFoundFailure' if the taskToken is not valid
// anymore due to activity timeout.
respondActivityTaskCompleted: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskCompleted',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedResponse,
  },
  // (-- api-linter: core::0136::prepositions=disabled
//     aip.dev/not-precedent: "By" is used to indicate request type. --)
// RespondActivityTaskCompletedById is called by application worker when it is done processing an ActivityTask.
// It will result in a new 'ActivityTaskCompleted' event being written to the workflow history and a new WorkflowTask
// created for the workflow so new commands could be made.  Similar to RespondActivityTaskCompleted but use Namespace,
// WorkflowId and ActivityId instead of 'taskToken' for completion. It fails with 'NotFoundFailure'
// if the these Ids are not valid anymore due to activity timeout.
respondActivityTaskCompletedById: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskCompletedById',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCompletedByIdResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCompletedByIdResponse,
  },
  // RespondActivityTaskFailed is called by application worker when it is done processing an ActivityTask.  It will
// result in a new 'ActivityTaskFailed' event being written to the workflow history and a new WorkflowTask
// created for the workflow instance so new commands could be made.  Use the 'taskToken' provided as response of
// PollActivityTaskQueue API call for completion. It fails with 'NotFoundFailure' if the taskToken is not valid
// anymore due to activity timeout.
respondActivityTaskFailed: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskFailed',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedResponse,
  },
  // (-- api-linter: core::0136::prepositions=disabled
//     aip.dev/not-precedent: "By" is used to indicate request type. --)
// RespondActivityTaskFailedById is called by application worker when it is done processing an ActivityTask.
// It will result in a new 'ActivityTaskFailed' event being written to the workflow history and a new WorkflowTask
// created for the workflow instance so new commands could be made.  Similar to RespondActivityTaskFailed but use
// Namespace, WorkflowId and ActivityId instead of 'taskToken' for completion. It fails with 'NotFoundFailure'
// if the these Ids are not valid anymore due to activity timeout.
respondActivityTaskFailedById: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskFailedById',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskFailedByIdResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskFailedByIdResponse,
  },
  // RespondActivityTaskCanceled is called by application worker when it is successfully canceled an ActivityTask.  It will
// result in a new 'ActivityTaskCanceled' event being written to the workflow history and a new WorkflowTask
// created for the workflow instance so new commands could be made.  Use the 'taskToken' provided as response of
// PollActivityTaskQueue API call for completion. It fails with 'NotFoundFailure' if the taskToken is not valid
// anymore due to activity timeout.
respondActivityTaskCanceled: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskCanceled',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledResponse,
  },
  // (-- api-linter: core::0136::prepositions=disabled
//     aip.dev/not-precedent: "By" is used to indicate request type. --)
// RespondActivityTaskCanceledById is called by application worker when it is successfully canceled an ActivityTask.
// It will result in a new 'ActivityTaskCanceled' event being written to the workflow history and a new WorkflowTask
// created for the workflow instance so new commands could be made.  Similar to RespondActivityTaskCanceled but use
// Namespace, WorkflowId and ActivityId instead of 'taskToken' for completion. It fails with 'NotFoundFailure'
// if the these Ids are not valid anymore due to activity timeout.
respondActivityTaskCanceledById: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskCanceledById',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondActivityTaskCanceledByIdResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondActivityTaskCanceledByIdResponse,
  },
  // RequestCancelWorkflowExecution is called by application worker when it wants to request cancellation of a workflow instance.
// It will result in a new 'WorkflowExecutionCancelRequested' event being written to the workflow history and a new WorkflowTask
// created for the workflow instance so new commands could be made. It fails with 'NotFoundFailure' if the workflow is not valid
// anymore due to completion or doesn't exist.
requestCancelWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RequestCancelWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RequestCancelWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RequestCancelWorkflowExecutionResponse,
  },
  // SignalWorkflowExecution is used to send a signal event to running workflow execution.  This results in
// WorkflowExecutionSignaled event recorded in the history and a workflow task being created for the execution.
signalWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/SignalWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.SignalWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_SignalWorkflowExecutionResponse,
  },
  // (-- api-linter: core::0136::prepositions=disabled
//     aip.dev/not-precedent: "With" is used to indicate combined operation. --)
// SignalWithStartWorkflowExecution is used to ensure sending signal to a workflow.
// If the workflow is running, this results in WorkflowExecutionSignaled event being recorded in the history
// and a workflow task being created for the execution.
// If the workflow is not running or not found, this results in WorkflowExecutionStarted and WorkflowExecutionSignaled
// events being recorded in history, and a workflow task being created for the execution
signalWithStartWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/SignalWithStartWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.SignalWithStartWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_SignalWithStartWorkflowExecutionResponse,
  },
  // ResetWorkflowExecution reset an existing workflow execution to WorkflowTaskCompleted event(exclusive).
// And it will immediately terminating the current execution instance.
resetWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ResetWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ResetWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ResetWorkflowExecutionResponse,
  },
  // TerminateWorkflowExecution terminates an existing workflow execution by recording WorkflowExecutionTerminated event
// in the history and immediately terminating the execution instance.
terminateWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/TerminateWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.TerminateWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_TerminateWorkflowExecutionResponse,
  },
  // ListOpenWorkflowExecutions is a visibility API to list the open executions in a specific namespace.
listOpenWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListOpenWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListOpenWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListOpenWorkflowExecutionsResponse,
  },
  // ListClosedWorkflowExecutions is a visibility API to list the closed executions in a specific namespace.
listClosedWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListClosedWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListClosedWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListClosedWorkflowExecutionsResponse,
  },
  // ListWorkflowExecutions is a visibility API to list workflow executions in a specific namespace.
listWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListWorkflowExecutionsResponse,
  },
  // ListArchivedWorkflowExecutions is a visibility API to list archived workflow executions in a specific namespace.
listArchivedWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListArchivedWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListArchivedWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListArchivedWorkflowExecutionsResponse,
  },
  // ScanWorkflowExecutions is a visibility API to list large amount of workflow executions in a specific namespace without order.
scanWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ScanWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ScanWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ScanWorkflowExecutionsResponse,
  },
  // CountWorkflowExecutions is a visibility API to count of workflow executions in a specific namespace.
countWorkflowExecutions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/CountWorkflowExecutions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.CountWorkflowExecutionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_CountWorkflowExecutionsResponse,
  },
  // GetSearchAttributes is a visibility API to get all legal keys that could be used in list APIs
getSearchAttributes: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/GetSearchAttributes',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.GetSearchAttributesResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_GetSearchAttributesRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_GetSearchAttributesRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_GetSearchAttributesResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_GetSearchAttributesResponse,
  },
  // RespondQueryTaskCompleted is called by application worker to complete a QueryTask (which is a WorkflowTask for query)
// as a result of 'PollWorkflowTaskQueue' API call. Completing a QueryTask will unblock the client call to 'QueryWorkflow'
// API and return the query result to client as a response to 'QueryWorkflow' API call.
respondQueryTaskCompleted: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/RespondQueryTaskCompleted',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.RespondQueryTaskCompletedResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_RespondQueryTaskCompletedResponse,
  },
  // ResetStickyTaskQueue resets the sticky task queue related information in mutable state of a given workflow.
// Things cleared are:
// 1. StickyTaskQueue
// 2. StickyScheduleToStartTimeout
resetStickyTaskQueue: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ResetStickyTaskQueue',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ResetStickyTaskQueueResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ResetStickyTaskQueueResponse,
  },
  // QueryWorkflow returns query result for a specified workflow execution
queryWorkflow: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/QueryWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.QueryWorkflowResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_QueryWorkflowRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_QueryWorkflowRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_QueryWorkflowResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_QueryWorkflowResponse,
  },
  // DescribeWorkflowExecution returns information about the specified workflow execution.
describeWorkflowExecution: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/DescribeWorkflowExecution',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.DescribeWorkflowExecutionResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeWorkflowExecutionResponse,
  },
  // DescribeTaskQueue returns information about the target task queue, right now this API returns the
// pollers which polled this task queue in last few minutes.
describeTaskQueue: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/DescribeTaskQueue',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.DescribeTaskQueueResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_DescribeTaskQueueRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeTaskQueueRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_DescribeTaskQueueResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_DescribeTaskQueueResponse,
  },
  // GetClusterInfo returns information about temporal cluster
getClusterInfo: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/GetClusterInfo',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.GetClusterInfoResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_GetClusterInfoRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_GetClusterInfoRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_GetClusterInfoResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_GetClusterInfoResponse,
  },
  listTaskQueuePartitions: {
    path: '/temporal.api.workflowservice.v1.WorkflowService/ListTaskQueuePartitions',
    requestStream: false,
    responseStream: false,
    requestType: temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsRequest,
    responseType: temporal_api_workflowservice_v1_request_response_pb.ListTaskQueuePartitionsResponse,
    requestSerialize: serialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsRequest,
    requestDeserialize: deserialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsRequest,
    responseSerialize: serialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsResponse,
    responseDeserialize: deserialize_temporal_api_workflowservice_v1_ListTaskQueuePartitionsResponse,
  },
};

exports.WorkflowServiceClient = grpc.makeGenericClientConstructor(WorkflowServiceService);
