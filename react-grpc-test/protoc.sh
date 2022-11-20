#!/bin/bash
cwd=$(pwd)
parentDir="$(dirname "$cwd")"

~/Downloads/protoc-3.20.3-linux-x86_64/bin/protoc \
    -I=$parentDir/grpc-go \
    $parentDir/grpc-go/src/go-grpc/helloworld.proto \
    --js_out=import_style=commonjs,binary:$cwd \
    --grpc-web_out=import_style=typescript,mode=grpcweb:$cwd