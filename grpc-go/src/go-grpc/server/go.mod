module go-grpc/server

go 1.19

require (
	go-grpc/utils v0.0.0-00010101000000-000000000000
	google.golang.org/grpc v1.51.0
	google.golang.org/grpc/examples v0.0.0-20221118215143-3011eaf70e31
)

require (
	github.com/golang/protobuf v1.5.2 // indirect
	golang.org/x/net v0.2.0 // indirect
	golang.org/x/sys v0.2.0 // indirect
	golang.org/x/text v0.4.0 // indirect
	google.golang.org/genproto v0.0.0-20221118155620-16455021b5e6 // indirect
	google.golang.org/protobuf v1.28.1 // indirect
)

replace go-grpc/utils => ../utils
