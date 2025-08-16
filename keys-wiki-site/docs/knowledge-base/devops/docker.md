---
sidebar_label: 'Docker Cookbook'
sidebar_level: 2
---

# Docker Cookbook

## What is Docker?

1. Docker enables developers to containerize the applications eliminating the hurdles in setting up the app in
   development and ease deployment.
2. How docker differ from VM?
   1. Layers in System: Application -> OS Kernel -> Hardware
   2. A VM abstracts both Kernel and Application layers, while Docker only abstracts the Application layer.
   3. Docker uses less resources and space compared to VMs.
   4. Docker spins up faster than VMs.
3. How docker abstracts Kernel?
   1. Docker primarily built for Linux and later scaled for other Kernels.
   2. In Windows, Docker uses a lightweight Linux distribution to run containers.
   3. This setup can be simplifies via `Docker Desktop` installation. A GUI to manage Docker containers on Windows.
   4. Docker primarily provides a client-server architecture. Docker client communicates with the Docker daemon to
      manage the containers.
   5. The Application layer communicates with the lightweight Linux distribution to run the containers.

## Docker Components

1. `Docker Hub`: A cloud-based registry for storing and sharing Docker images. It allows users to upload their images
   and pull images created by others.
2. `Docker Repository`: A collection of related Docker images, typically used to organize and manage images for a
   specific application or service. Different cloud providers offer their own Docker repositories, such as Amazon ECR,
   Google Container Registry, and Azure Container Registry.
3. `Docker Image`: A lightweight, standalone, and executable software package that includes everything needed to run a
   piece of software, including the code, runtime, libraries, and system tools. Docker images are the building blocks
   of containers and are stored in Docker repositories.
4. `Docker Container`: A runtime instance of a Docker image. It includes the application and all its dependencies, but
   shares the kernel with other containers. Containers are isolated from each other and can be easily started, stopped,
   and removed. Each docker image can have multiple containers running from it.
5. `Dockerfile`: A text file that contains instructions for building a Docker image. It specifies the base image,
   application code, dependencies, and any other configuration needed to create the image. Dockerfiles are used with
   the `docker build` command to automate the image creation process.

## Setting up a Docker Image

For demonstration purposes, let's create a simple Python web application.

1. Create a `Dockerfile` in the root of your project directory.
2. Define the base image using the `FROM` instruction. For example:

   ```dockerfile
   FROM python:3.13-slim
   ```

   1. slim version is a smaller, more lightweight version of the standard Python image, which reduces the overall size
      of the Docker image and improves performance.

3. Set the working directory inside the container using the `WORKDIR` instruction:

   ```dockerfile
   WORKDIR /app
   ```

4. Copy the application code into the container using the `COPY` instruction:

   ```dockerfile
   COPY . .
   ```

   1. In docker image always the first path argument is the source path on the host, and the second path argument is
      the destination path inside the container. Here, the application code is copied from the host where the docker
      file is located to the `/app` (WORKDIR) directory inside the container.

5. Install any dependencies using the `RUN` instruction:

   ```dockerfile
   RUN pip install poetry
   RUN poetry install --no-dev
   ```

6. Specify the command to run your application using the `CMD` instruction:

   ```dockerfile
   CMD ["python", "app.py"]
   ```

7. Build the Docker image using the `docker build` command:

   ```bash
   docker build -t my-python-app:0.0.1 .
   ```

   1. Best practice is to tag your images with a version number (e.g., `0.0.1`) to easily identify and manage different
   versions of your application.
   2. `-t` is used to specify the tag for the image being built.

8. Run a container from the image using the `docker run` command:

   ```bash
   docker run -d \
   -p 5000:5000 \
   --name my-python-app \
   my-python-app:0.0.1
   ```

   1. The `-d` flag runs the container in detached mode (in the background).
   2. The `-p` flag maps port 5000 on the host to port 5000 in the container.
   3. The `--name` flag is used to assign a name to the container, making it easier to manage.

9. The complete Dockerfile for our Python web application looks like this:

   ```dockerfile
   FROM python:3.13-slim
   
   WORKDIR /app
   
   COPY . .
   
   RUN pip install poetry
   
   RUN poetry install --no-dev
   
   CMD ["python", "app.py"]
   ```

## Docker Commands

1. `docker build`: Builds a Docker image from a Dockerfile. Example: `docker build -t my-image:1.0 .`
   1. `-t`: Tags the image with a name and optionally a version (e.g., `my-image:1.0`).
   2. `.`: The build context, usually the current directory.

   ```bash
   docker build -t <image_name:version> .
   ```

2. `docker run`: Runs a container from a Docker image. Example:
   `docker run --name my-container -d -p 8080:80 my-image:1.0`
   1. `--name`: Assigns a name to the container.
   2. `-d`: Runs the container in detached mode (in the background).
   3. `-p`: Maps a port on the host to a port in the container (e.g., `8080:80`). Best practice is to use the same
      port number for both host and container when possible. Here, 8080:80 could be changed to 8080:8080.

   ```bash
   docker run --name <container_name> -d -p <host_port>:<container_port> <image_name:version>
   ```

3. `docker ps`: Lists all running containers. Example: `docker ps -a`
   1. `-a`: Shows all containers, including stopped ones.

   ```bash
   docker ps -a
   ```

4. `docker images`: Lists all Docker images on the host. Example: `docker images`

   ```bash
   docker images
   ```

5. `docker stop <container_name>`: Stops a running container. Example: `docker stop my-container`

   ```bash
   docker stop <container_name>
   ```

6. `docker rm <container_name>`: Removes a stopped container. Example: `docker rm my-container`

   ```bash
   docker rm <container_name>
   ```

7. `docker rmi <image_name>`: Removes a Docker image. Example: `docker rmi my-image:1.0`

   ```bash
   docker rmi <image_name>
   ```

8. `docker logs <container_name>`: Fetches the logs of a container. Example: `docker logs my-container`

   ```bash
   docker logs <container_name>
   ```

9. `docker system prune -a --volumes --force`: Removes all unused data, including stopped containers, networks, images,
   and volumes.

   ```bash
   docker system prune -a --volumes --force
   ```

10. `docker builder prune --all --force`: Removes all unused build cache.

    ```bash
    docker builder prune --all --force
    ```

## Tutorials

1. [Intro to Docker](https://youtu.be/pg19Z8LL06w?si=4LZ9nYfgYhZRAuLw)
2. [Docker Compose](https://youtu.be/SXwC9fSwct8?si=iZK81h52lzyV7FAa)
