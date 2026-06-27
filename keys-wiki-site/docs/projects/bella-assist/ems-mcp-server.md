---
sidebar_level: 2
sidebar_label: 'EMS MCP Server'
sidebar_position: 4
description: 'EMS MCP Server'
---

# EMS MCP Server

A FastMCP service that exposes Expense Manager data as read-only LLM-callable tools over streamable HTTP. The Bella Chat OrchestratorAgent calls these tools at inference time to answer financial queries.

---

## Tool Reference

| Tool | Parameters | Description |
| :--- | :--- | :--- |
| `list_accounts` | — | Lists all spending accounts (id, name). |
| `get_account` | `account_id` | Returns details for a specific account. |
| `list_periods` | — | Lists all budgeting periods. |
| `get_period` | `period_id` | Returns income limits and envelope targets for a period. |
| `list_spending_entries` | `page`, `size`, `month`, `year`, `account_name`, `sort_by`, `sort_order` | Paginated spending entries across all accounts, filterable by month, year, or account. |
| `list_spending_entries_for_account` | `account_id`, `page`, `size`, `month`, `year`, `sort_by`, `sort_order` | Paginated spending entries for a specific account. |

---

## Configuration

| Variable | Default | Description |
| :--- | :--- | :--- |
| `HOST` | `0.0.0.0` | Server bind address. |
| `PORT` | `8001` | Server bind port. |
| `EMS_BASE_URL` | `http://localhost:8000` | Endpoint of the Expense Manager Service. |
| `AUTH_SERVICE_URL` | `http://localhost:8002` | Endpoint of the Authentication Service. |

---

## Authentication & Security

When running over HTTP-based transports (like `streamable-http` or `sse`), the server secures its endpoints using token validation middleware:

1. It intercepts incoming requests and extracts the `Authorization: Bearer <token>` header.
2. It queries `AUTH_SERVICE_URL/me` to authenticate the user and verify token validity.
3. Once validated, the request is processed, and the token is forwarded dynamically to the EMS backend.

For local execution and debugging using the standard `stdio` transport, the authentication middleware is bypassed automatically.

---

## Local Debugging

1. Install dependencies:

   ```bash
   uv sync
   ```

2. Start the server:

   ```bash
   uv run app/main.py
   ```

3. Launch the MCP Inspector:

   ```bash
   npx @modelcontextprotocol/inspector
   ```

   *The interactive inspector runs at `http://localhost:6274`.*
