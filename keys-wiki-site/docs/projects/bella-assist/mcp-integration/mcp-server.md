---
sidebar_level: 3
sidebar_label: 'EMS MCP Server'
sidebar_position: 2
description: 'Expense Manager Service Model Context Protocol Server'
---

# EMS MCP Server

The EMS MCP Server exposes live database queries as standardized tools. It uses streamable HTTP transport to exchange JSON-RPC payloads with the client environment.

---

## Tool List

The server exposes read-only tools to allow LLM agents to fetch financial data:

| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| `list_accounts` | None | Retrieves all active and archived spending/savings accounts. |
| `get_account` | `account_id` | Retrieves configuration details for a specific bank account. |
| `list_periods` | None | Lists double-entry budgeting periods. |
| `get_period` | `period_id` | Returns income limits and envelope targets for a specific period. |
| `list_spending_entries` | `period_id` (optional) | Returns all spending transactions logged under a budgeting period. |
| `list_spending_entries_for_account` | `account_id`, `period_id` | Returns account-specific transactions. |

---

## Configuration

Server startup parameters are declared using environment variables:

- `HOST`: Server bind address (default: `0.0.0.0`).
- `PORT`: Server bind port (default: `8001`).
- `EMS_BASE_URL`: Endpoint of the underlying FastAPI Expense Manager backend (default: `http://localhost:8000`).

---

## Debugging

To run and debug the MCP endpoints locally:

1. Install project dependencies:

   ```bash
   uv sync
   ```

2. Start the service:

   ```bash
   uv run app/main.py
   ```

3. Launch the inspector client:

   ```bash
   npx @modelcontextprotocol/inspector
   ```

   *The interactive web inspector runs at `http://localhost:6274` to test tool execution and log payloads.*
