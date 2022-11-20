import { GreeterClient } from "../go-grpc/HelloworldServiceClientPb";

// see README, grpc proxy exposes 8080 by default, and we use websockets
// so we use this URL
export const greeterService = new GreeterClient(
  "http://localhost:8080",
  null,
  null
);
