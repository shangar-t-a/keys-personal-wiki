"""Greeter client implementation."""

# Standard Library
import time

# Custom Modules
import greet_pb2
import greet_pb2_grpc

# Installed Packages
import grpc


def get_client_stream_request() -> greet_pb2.HelloRequest:
    """Get a client stream request.

    Yields:
    -------
        greet_pb2.HelloRequest: Array of HelloRequest objects.
    """
    while True:
        name = input("Please enter a name (or nothing to stop chatting): ")

        if name == "":
            break

        hello_request = greet_pb2.HelloRequest(greeting="Bello", name=name)
        yield hello_request
        time.sleep(1)


def run():
    """Run the gRPC greeter client."""
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = greet_pb2_grpc.GreeterStub(channel)
        print("1. SayHello - Unary")
        print("2. ParrotSayHello - Server Side Streaming")
        print("3. ChattyClientSayHello - Client Side Streaming")
        print("4. InteractiveSayHello - Bidirectional Streaming")
        rpc_choice = input("Which RPC would you like to run? ")

        if rpc_choice == "1":
            hello_request = greet_pb2.HelloRequest(greeting="Bello", name="Keys")
            hello_response = stub.SayHello(hello_request)
            print("SayHello Response Received:")
            print(hello_response.message)
        elif rpc_choice == "2":
            hello_request = greet_pb2.HelloRequest(greeting="Bello", name="Keys")
            hello_responses = stub.ParrotSayHello(hello_request)

            for hello_response in hello_responses:
                print("ParrotSayHello Response Received:")
                print(hello_response.message)
        elif rpc_choice == "3":
            delayed_response = stub.ChattyClientSayHello(get_client_stream_request())

            print("ChattyClientSayHello Response Received:")
            print(delayed_response)
        elif rpc_choice == "4":
            responses = stub.InteractiveSayHello(get_client_stream_request())

            for response in responses:
                print("InteractiveSayHello Response Received:")
                print(response)
        else:
            print("Invalid choice. Exiting.")
            return


if __name__ == "__main__":
    run()
