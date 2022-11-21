import { GreeterClient } from "../protobuf/helloworld.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

// see README, grpc proxy exposes 8080 by default, and we use websockets
// so we use this URL
let transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:8080",
});

export const greeterService = new GreeterClient(transport);
