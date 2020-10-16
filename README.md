


### Generate temporal grpc client

`export PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"`
`export PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"`

✗ protoc -I ./api  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:./lib/temporal-client" --grpc_out=generate_package_definition:./lib/temporal-client --ts_out="service=grpc-node:./lib/temporal-client" api/temporal/api/workflowservice/v1/request_response.proto api/temporal/api/workflowservice/v1/service.proto api/temporal/api/version/v1/message.proto api/temporal/api/taskqueue/v1/message.proto api/temporal/api/replication/v1/message.proto api/temporal/api/query/v1/message.proto api/temporal/api/namespace/v1/message.proto api/temporal/api/history/v1/message.proto api/temporal/api/filter/v1/message.proto api/temporal/api/failure/v1/message.proto api/temporal/api/errordetails/v1/message.proto api/temporal/api/workflow/v1/message.proto api/temporal/api/common/v1/message.proto api/temporal/api/command/v1/message.proto api/temporal/api/enums/v1/command_type.proto api/temporal/api/enums/v1/common.proto api/temporal/api/enums/v1/event_type.proto api/temporal/api/enums/v1/failed_cause.proto api/temporal/api/enums/v1/namespace.proto api/temporal/api/enums/v1/query.proto api/temporal/api/enums/v1/task_queue.proto api/temporal/api/enums/v1/workflow.proto api/dependencies/gogoproto/gogo.proto