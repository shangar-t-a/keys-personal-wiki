---
sidebar_level: 3
sidebar_label: 'Architecture'
sidebar_position: 2
---

# Expense Manager Service Architecture

The expense manager service is built with FastAPI, following Clean Architecture principles.

## Folder Structure (Backend)

```text
expense-manager-service/
├── .coveragerc                                              # Test coverage config
├── .dockerignore                                            # Docker ignore file
├── .env                                                     # Environment variables (for local development)
├── .env.sample                                              # Sample env file for reference
├── .gitignore                                               # Git ignore file
├── Dockerfile                                               # Dockerfile for containerizing the app
├── mypy.ini                                                 # Mypy config (static type checking)
├── pyproject.toml                                           # Project metadata and dependencies
├── pytest.ini                                               # Pytest configurations
├── README.md                                                # Project documentation
├── ruff.toml                                                # Ruff config (linting)
├── tox.ini                                                  # Tox config (testing in isolated environments)
├── uv.lock                                                  # UV lock file (dependency management)
├── app/                                                     # Main application code
│   ├── __init__.py
│   ├── main.py                                              # FastAPI app entrypoint
│   ├── entities/                                            # Domain layer
│   │   ├── errors/                                          # Domain-specific errors
│   │   ├── models/                                          # Domain models
│   │   └── repositories/                                    # Repository interfaces
│   ├── infrastructures/                                     # Infrastructure layer (external systems)
│   │   ├── inmemory_db/                                     # In-memory DB implementations (for testing/dev)
│   │   └── sqlite_db/                                       # SQLite DB implementations (for production)
│   │       └── models/                                      # SQLAlchemy models
│   ├── routers/                                             # Presentation/API layer
│   │   ├── v1/                                              # API version 1
│   │   │   ├── endpoints/                                   # FastAPI routers
│   │   │   ├── mappers/                                     # Mappers between schemas and entities
│   │   │   ├── schemas/                                     # Pydantic schemas
│   │   │   ├── services.py                                  # Dependency injection
│   │   │   └── __init__.py
│   │   └── __init__.py
│   ├── settings/                                            # Configuration layer
│   │   ├── base.py                                          # Base settings
│   │   ├── config.py                                        # Config loader
│   │   ├── dev.py                                           # Development settings
│   │   └── __init__.py
│   └── use_cases/                                           # Use Cases layer (Business logic)
│       ├── errors/                                          # Use-case-specific errors
│       └── models/                                          # Use-case-specific models
├── docs/                                                    # Documentation
├── tests/                                                   # Test cases
│   ├── conftest.py                                          # Pytest configurations at root
│   ├── integration/                                         # Integration tests
|   |   ├── conftest.py                                      # Pytest configurations at integration test level
│   │   └── routers/
│   │       └── v1/
│   └── unit/                                                # Unit tests
│       ├── conftest.py                                      # Pytest configurations at unit test level
│       ├── settings.py
│       └── use_cases/
```

## Layered Architecture & File-Level Details

The backend follows Clean Architecture principles, with each layer mapped to specific folders and files:

### Domain Layer (`app/entities/`)

- **Purpose:** Core business logic, domain models, and error definitions.
- **Key Files:**
  - `models/*`: Define immutable business entities (e.g., `AccountName`).
  - `models/base.py`: Base entity with common fields (e.g., `id`).
  - `errors/`: Custom exceptions for domain errors (e.g., `AccountNotFoundError`).
  - `repositories/`: Abstract repository interfaces (e.g., `AccountRepositoryInterface`).

### Use Cases Layer (`app/use_cases/`)

- **Purpose:** Application-specific business logic and orchestration.
- **Key Files:**
  - Service classes encapsulating business use cases (e.g., `AccountService`).
  - `models/`: Use-case-specific models if needed.
  - `errors/`: Use-case-specific errors, distinct from domain errors.

### Infrastructure Layer (`app/infrastructures/`)

- **Purpose:** External system integration, persistence, and adapters.
- **Key Files:**
  - `inmemory_db/`: In-memory repository implementations for testing/dev.
  - `sqlite_db/`: SQLite repository implementations and DB config (e.g., `accounts.py`, `database.py`).

### Presentation/API Layer (`app/routers/`)

- **Purpose:** API endpoints, request/response schemas, and routing.
- **Key Files:**
  - `v1/endpoints/`: FastAPI routers for each resource (e.g., `accounts.py`).
  - `v1/mappers/`: Convert between schemas and entities. DTO not needed here as Schemas serve that purpose.
  - `v1/schemas/`: Pydantic schemas for API requests/responses.
  - `v1/services.py`: Dependency injection for repositories/services.

### Configuration Layer (`app/settings/`)

- **Purpose:** Environment and application configuration.
- **Key Files:**
  - `base.py`, `dev.py`, `config.py`: Settings for different environments, loaded via Pydantic.

### Entrypoint

- **`main.py`**: FastAPI app initialization, middleware, and startup logic.

### Tests

- **`tests/`**: Unit and integration tests for all layers.

## Technology Stack & Rationale

- **Python 3.13+**: Backend technology.
- **FastAPI**: High-performance, async web framework for building APIs.
- **Pydantic**: Data validation and settings management.
- **SQLAlchemy (async)**: Async ORM for database access (SQLite).
- **Uvicorn**: ASGI server for running FastAPI apps.
- **UV**: Dependency management.
- **Mypy**: Static type checking.
- **Pytest**: Testing framework.
- **Tox**: Testing in isolated environments.
- **Ruff**: Linting and code quality.
- **Clean Architecture**: Promotes separation of concerns, testability, and maintainability.
- **In-memory, SQLite & PostgreSQL Repositories**: Support for both development/testing and production persistence.

## Notes & Best Practices

- **Dependency Rule:** Outer layers (API, Infrastructure) depend on inner layers (Use Cases, Entities), never the reverse.
- **Extensibility:** Add new features by extending the appropriate layer, maintaining separation of concerns.
- **Configuration:** Environment-specific settings are managed in `settings/` and `.env` files.
- **Testing:** All tests are in `tests/`.

:::info
This structure ensures maintainability, testability, and clear separation of concerns as the service evolves.
:::
