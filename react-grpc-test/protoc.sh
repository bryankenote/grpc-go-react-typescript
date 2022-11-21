#!/bin/bash
cwd=$(pwd)
parentDir="$(dirname "$cwd")"

./protoc-3.20.3/bin/protoc \
    -I=$parentDir/grpc-service \
    $parentDir/grpc-service/helloworld.proto \
    --js_out=import_style=commonjs,binary:$cwd/src/protobuf \
    --grpc-web_out=import_style=typescript,mode=grpcweb:$cwd/src/protobuf