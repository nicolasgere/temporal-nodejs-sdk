# Temporal nodejs/typescript sdk (experimental)

##### This project is an experimental/unstable sdk for [temporal](https://www.temporal.io/). Do not use it in production.
The nodejs sdk is (very very) limited in term of feature compare to golang/java sdk. If your looking for production ready sdk, please visit [temporal](https://www.temporal.io/).

### Getting started
Visit [temporal documentation](https://docs.temporal.io/docs/install-temporal-server/) to start a temporal server.
Check [examples](/examples)

### Features 🚀
 #### Available 
 Nothing 
 #### In progress 
 - Client connection secure/insecure
 - Activity registration
 - Activity with options registration
 - Activity heartbeat
 - Activity session
 - Activity logger
 ####  Future
 - Workflow: Everything
 - Test environment
 - And much more...
 


### Dev documentation

##### Generate client from grpc definition.

Install submodule with `git submodule init`

``` bash
$ export PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

$ export PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

$ protoc -I ./api  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:./lib/temporal-client" --grpc_out=:./lib/temporal-client --ts_out="service=grpc-node:./lib/temporal-client" api/**/*.proto

```