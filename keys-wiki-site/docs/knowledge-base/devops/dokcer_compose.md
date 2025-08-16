---
sidebar_label: 'Docker Compose Cookbook'
sidebar_level: 2
---

# Docker Compose Cookbook

## What is Docker Compose?

1. Docker Compose is a tool for defining and running multi-container Docker applications.
2. Managing multiple containers while using docker
   1. Without docker compose, user should manually create and manage each container, including networking and volume
      management. A network bridge must be created to allow containers to communicate, and data volumes must be managed
      individually for each container.
3. With Compose, users can use a simple YAML file to configure their application's services, networks, and volumes,
   making it easy to manage complex applications with multiple interconnected components.

## How multi container application managed without docker compose?

1. Create network for the application

   ```bash
   docker network create <network_name>
   ```

   1. Check if the network is created

   ```bash
   docker network ls
   ```

2. Run the image in the created network

   ```bash
   docker run -d \
   -p 5000:5000 \
   -e <env_var_name>=<env_var_value> \
   --network <network_name> \
   --name my-python-app \
   my-python-app:0.0.1
   ```

   1. Similar steps are followed for each additional container, ensuring they are all connected to the same network.

## Managing multiple containers using Docker Compose

1. Create a `docker-compose.yml` file in the root of your project directory. The name of the file can be changed, but
   it is recommended to keep it as `docker-compose.yml` for consistency.
2. Define the services, networks, and volumes in the YAML file. For example:

   1. Typical docker compose used in development.

        ```yaml
        services:
            app_service:
            build: .\<service_path>
            ports:
                - "8000:8000"
            environment:
                - ENV_VAR_NAME=${ENV_VAR_VALUE}

            ui_service:
            build: .\<ui_service_path>
            ports:
                - "3000:3000"
            environment:
                - ENV_VAR_NAME=${ENV_VAR_VALUE}
        ```

   2. Docker compose for production.

        ```yaml
        services:
            app_service:
            image: my-python-app:latest
            ports:
                - "8000:8000"
            environment:
                - ENV_VAR_NAME=${ENV_VAR_VALUE}

            ui_service:
            image: my-ui-app:latest
            ports:
                - "3000:3000"
            environment:
                - ENV_VAR_NAME=${ENV_VAR_VALUE}
            depends_on:
                - app_service
        ```

   3. Best Practices or Considerations while generating docker compose.
      1. The docker compose file shall be maintained in source control.
      2. The docker compose should not contain any sensitive information, such as passwords or API keys. Use environment
         variables or Docker secrets to manage sensitive data. Example: `ENV_VAR_NAME=${ENV_VAR_VALUE}`, the
         `${ENV_VAR_VALUE}` part should be defined in a `.env` file or in the environment where the Docker Compose
         command is run.
      3. Use `image` tags to specify the exact version of the image to be used, `build` context should be used for
         development.
      4. Networks need not be explicitly defined in the Compose file if not required, as Docker will create a default
         network for the application.
      5. Use `depends_on` to specify the order of service startup.

   4. Image naming in docker compose
      1. Docker compose usually prefix the image names with the project name, which is derived from the directory name
         containing the `docker-compose.yml` file and suffix the image name with instance number.
      2. User can override the project name using the `--project-name` or `-p` flag when running `docker-compose`
         commands.

         ```bash
         docker-compose -d \
         -f <docker_compose_file> \
         -p <project_name> \
         up
         ```

3. Start the application using the `docker-compose up` command:

   ```bash
   docker-compose up -d \
   -f <docker_compose_file> \
   ```

   1. The `-d` flag runs the containers in detached mode (in the background).
   2. The `-f` flag allows you to specify the Compose file.

4. Stop the application using the `docker-compose down` command:

   ```bash
   docker-compose down
   ```

   1. This command stops and removes all containers defined in the `docker-compose.yml` file.

5. Stop and retain the containers using the `docker-compose stop` command:

   ```bash
   docker-compose stop
   ```

   1. This command stops the containers without removing them, allowing you to start them again later
      with `docker-compose start`.

6. Start the containers using the `docker-compose start` command:

   ```bash
   docker-compose start
   ```

   1. This command starts the containers that were stopped with `docker-compose stop`.
