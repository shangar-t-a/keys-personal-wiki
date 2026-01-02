# Alembic Setup Guide

Alembic is a database migration tool for SQLAlchemy. This document outlines the setup and configuration of Alembic for
managing database migrations in the Expense Manager Service Postgres infrastructure.

## Requirements

- ORM defined using SQLAlchemy
- Alembic installed in the development environment

:::info
This guide assumes you are using UV as your development environment manager. In case of using a different environment
manager, adjust the commands accordingly.
:::

## Alembic Installation

Add Alembic to the UV development environment

```bash
uv add alembic
```

## Alembic Initialization

Once Alembic is installed, initialize it in the Postgres infrastructure directory:

```bash
cd <path-to-database-directory>
```

For synchronous support, you can run:

```bash
uv run alembic init alembic
```

For asynchronous support, run the following command:

```bash
uv run alembic init -t async alembic
```

:::info
The `-t async` flag initializes Alembic with support for asynchronous database operations, which is suitable for
async SQLAlchemy or asyncpg setups.
:::

## Alembic Configuration

Once initialized, you would need to update configurations in `alembic.ini` and `alembic/env.py` to connect to your
Postgres database and to set up the target metadata for autogeneration.

1. Disable the `sqlalchemy.url` in `alembic.ini` since we will set it dynamically from environment variables.
2. Update `alembic/env.py` to read the database URL from environment variables and set the target metadata to the
   SQLAlchemy models' metadata. An example of these changes can be found in the `env.py` file in this directory. A
   short code snippet is shown below for convenience:

   ```python
   import os
   from dotenv import load_dotenv

   load_dotenv()  # Load environment variables from .env file (here: DATABASE_URL)

   database_url = os.getenv("DATABASE_URL")
   if not database_url:
       raise ValueError("DATABASE_URL environment variable is not set")
   config.set_main_option("sqlalchemy.url", database_url)
   ```

3. Set the `target_metadata` to your models' metadata:

   ```python
   from your_model_module import Base  # Import your SQLAlchemy Base
   from your_model_module import *  # Import all your models

   target_metadata = Base.metadata
   ```

## Create Migration Script

To create a new migration script, use the following command:

```bash
uv run alembic revision --autogenerate -m "Initial migration"
```

This will generate a new migration script in the `alembic/versions` directory based on the current state of your models.

## Apply Migrations

To apply the migrations to your database, use the following command:

```bash
uv run alembic upgrade head
```

## References

1. [Alembic Setup for FastAPI with SQLAlchemy and Asyncpg](https://berkkaraal.com/blog/2024/09/19/setup-fastapi-project-with-async-sqlalchemy-2-alembic-postgresql-and-docker/#setup-database-migrations-with-alembic)
