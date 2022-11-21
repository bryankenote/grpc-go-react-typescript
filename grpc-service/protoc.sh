#!/bin/bash
protoc --go_out=src/protobuf/. --go_opt=paths=source_relative \
    --go-grpc_out=src/protobuf/. --go-grpc_opt=paths=source_relative \
    helloworld.proto