---
sidebar_level: 3
sidebar_label: 'Expense Manager'
sidebar_position: 3
description: 'Expense Manager Overview & Architecture'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Expense Manager

A Clean Architecture FastAPI service and UI for personal‑finance tracking, covering bank accounts, budget categories, savings envelopes, and a monthly allocation planner.

---

<Tabs>
<TabItem value="settings" label="Settings" default>

## Settings Configuration

### Bank Accounts
- Add, rename, or delete checking, savings, credit‑card, or cash accounts.
- Each account feeds into the Account Balances and Monthly Planning views.

![Bank Accounts](./assets/images/settings-bank-accounts.png)

### Budget Categories
- Define **Spending** and **Saving** categories used across all envelopes.
- Categories drive classification in the Monthly Planner checklist.

![Budget Categories](./assets/images/settings-budget-categories.png)

</TabItem>

<TabItem value="balances" label="Account Balances">

## Account Balances Dashboard

### Summary Cards
- Displays **Starting Balance**, **Current Balance**, **Credit Used**, and **Net Balance** as top‑level metric cards.

### Monthly Breakdown Table
- Lists each account with month‑by‑month balances and running totals.
- Used to audit and reconcile spending at the end of each period.

![Account Balances Dashboard](./assets/images/dashboards-account-balances.png)

</TabItem>

<TabItem value="envelopes" label="Savings Envelopes">

## Savings Envelopes Allocation

### Envelope Overview
- Envelopes are goal‑based sub‑buckets (e.g., Emergency, LIC, Travel).
- A donut chart visualises the percentage split across all active envelopes.

![Savings Envelopes Overview](./assets/images/dashboards-savings-envelopes-top.png)

### Allocation Ledger
- Log deposits and withdrawals per envelope.
- Track progress toward each envelope's target balance.

![Envelopes Allocation Detail](./assets/images/dashboards-savings-envelopes-bottom.png)

</TabItem>

<TabItem value="planning" label="Monthly Planning">

## Period & Monthly Allocation Planning

### Period Allocation Planner
- Splits total salary into percentages assigned to each envelope.
- Hover over a slice to see the exact amount; click to edit.
- Changes are saved automatically and reflected in the checklist.

![Period Allocation Planner](./assets/images/monthly-budget.png)

### Monthly Allocation Checklist
- Lists every envelope, the amount allocated, and any notes for the selected month.
- **Controls:** Add, Edit, Sync Previous (copy from last month), Reset.
- Provides a final review before the month begins.

![Monthly Allocation Checklist](./assets/images/monthly-budget-visuals.png)

</TabItem>

<TabItem value="architecture" label="Architecture & Tech Stack">

## Folder Structure (Backend)

```text
expense-manager-service/
├── Dockerfile
├── pyproject.toml
├── uv.lock
├── app/
│   ├── main.py                                              # FastAPI app entrypoint
│   ├── entities/                                            # Domain layer
│   │   ├── errors/
│   │   ├── models/                                          # account, period, spending_entry, monthly_planner, savings_bucket
│   │   └── repositories/                                    # Abstract repository interfaces
│   ├── infrastructures/
│   │   ├── postgres_db/                                     # Active: PostgreSQL via async SQLAlchemy + Alembic
│   │   ├── sqlite_db/                                       # Deprecated
│   │   └── inmemory_db/                                     # Deprecated
│   ├── routers/
│   │   └── v1/
│   │       ├── endpoints/
│   │       ├── mappers/
│   │       ├── schemas/
│   │       └── services.py
│   ├── settings/
│   └── use_cases/
│       ├── errors/
│       └── models/
└── tests/
    ├── integration/
    └── unit/
```

## Layered Architecture Details

### Domain Layer (`app/entities/`)
- Core business models: `account`, `period`, `spending_entry`, `monthly_planner`, `savings_bucket`.
- Abstract repository interfaces and domain error types.
- No external library dependencies.

### Use Cases Layer (`app/use_cases/`)
- Application-specific business logic orchestrating entities and repository interfaces.
- One service class per domain aggregate: `account`, `period`, `spending_entry`, `monthly_planner`, `savings_bucket`.

### Infrastructure Layer (`app/infrastructures/`)
- **`postgres_db/`**: Active PostgreSQL implementation using async SQLAlchemy. Alembic manages schema migrations.
- **`sqlite_db/`**: Deprecated.
- **`inmemory_db/`**: Deprecated.

### Presentation/API Layer (`app/routers/`)
- **Purpose:** API endpoints, request/response schemas, and routing.
- **Key Files:**
  - `v1/endpoints/`: FastAPI routers for each resource (e.g., `accounts.py`).
  - `v1/mappers/`: Convert between schemas and entities.
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

---

## Technology Stack

- **Python 3.13+** / **FastAPI** / **Uvicorn**
- **Pydantic v2**: Request/response validation and settings management.
- **SQLAlchemy (async)** + **Alembic**: ORM and schema migrations against PostgreSQL.
- **PostgreSQL**: Active production database. SQLite and in-memory implementations are deprecated.
- **uv**: Dependency management.
- **mypy** / **ruff** / **pytest**: Type checking, linting, and testing.

</TabItem>
</Tabs>
