#!/bin/bash
cwd=$(pwd)
parentDir="$(dirname "$cwd")"

npx protoc -I=$parentDir/grpc-service \
    --ts_out $cwd/src/protobuf \
    --proto_path . $parentDir/grpc-service/helloworld.proto 
