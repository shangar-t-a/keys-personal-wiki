"""Greeter server implementation."""

# Standard Library
import time
from concurrent import futures

# Custom Modules
import greet_pb2
import greet_pb2_grpc

# Installed Packages
import grpc


class GreeterServicer(greet_pb2_grpc.GreeterServicer):
    """Greeter service implementation."""

    def SayHello(self, request, context):
        print("SayHello RPC made:")
        print("Request received:")
        print(request)
        hello_reply = greet_pb2.HelloReply()
        hello_reply.message = f"{request.greeting} {request.name}!"

        return hello_reply

    def ParrotSayHello(self, request, context):
        print("ParrotSayHello RPC made:")
        print("Request received:")
        print(request)

        for iter in range(3):
            message = f"{request.greeting} {request.name} {iter+1}!"
            hello_reply = greet_pb2.HelloReply(message=message)
            yield hello_reply
            time.sleep(3)

    def ChattyClientSayHello(self, request_iterator, context):
        delayed_reply = greet_pb2.DelayedReply()

        for request in request_iterator:
            print("ChattyClientSayHello RPC made:")
            print("Request received:")
            print(request)
            delayed_reply.request.append(request)

        delayed_reply.message = (
            f"You have sent {len(delayed_reply.request)} messages! Please expect a delayed response..."
        )
        return delayed_reply

    def InteractiveSayHello(self, request_iterator, context):
        for request in request_iterator:
            print("InteractiveSayHello RPC made:")
            print("Request received:")
            print(request)

            hello_reply = greet_pb2.HelloReply()
            hello_reply.message = f"{request.greeting} {request.name}!"

            yield hello_reply


def serve():
    """Start the gRPC server."""
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    port = "localhost:50051"
    greet_pb2_grpc.add_GreeterServicer_to_server(GreeterServicer(), server)
    server.add_insecure_port(port)
    server.start()
    print(f"Server started at {port}...")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
