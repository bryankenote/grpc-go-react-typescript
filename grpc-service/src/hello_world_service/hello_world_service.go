package helloWorldService

import (
	"context"
	"log"

	pb "example.com/helloworld/src/protobuf"

	"example.com/helloworld/src/utils"
)

type Server struct {
	pb.UnimplementedGreeterServer
}

// SayHello implements helloworld.GreeterServer
func (s *Server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())
	log.Printf("Returning: %v", utils.Reverse(in.GetName()))
	return &pb.HelloReply{Message: utils.Reverse(in.GetName())}, nil
}

// SayHelloAgain implements helloworld.GreeterServer
func (s *Server) SayHelloAgain(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())
	log.Printf("Returning: %v", utils.Reverse(in.GetName()))
	return &pb.HelloReply{Message: utils.Reverse(in.GetName())}, nil
}
