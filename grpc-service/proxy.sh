#!/bin/bash
GOPATH=~/go ; export GOPATH
$GOPATH/bin/grpcwebproxy \
    --backend_addr=localhost:50051 \
    --run_tls_server=false \
    --use_websockets \
    --allow_all_origins