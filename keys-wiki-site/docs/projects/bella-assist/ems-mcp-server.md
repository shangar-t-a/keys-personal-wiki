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
