---
sidebar_level: 2
sidebar_label: 'Overview'
sidebar_position: 1
description: 'Bella Assist Project Overview'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CenteredIntro from '@site/src/components/core/CenteredIntro';

# Bella Assist

<CenteredIntro>
Bella Assist is a privacy-first desktop application combining a personal AI assistant with multi-period expense and budget tracking. Built on LangGraph, FastAPI, React, Electron, and the Model Context Protocol.
</CenteredIntro>

---

## Deployment Architecture

Bella Assist uses an inside-out architecture: application logic runs in Docker containers while all user data (PostgreSQL, Qdrant, Ollama models) stays on the host machine. The React UI is served by nginx in web mode and connects directly to services in Electron mode.

```mermaid
graph TD
    subgraph Client ["Client"]
        UI["React 19 UI (Electron Desktop)"]
    end

    subgraph Gateway ["nginx (Web / Docker mode)"]
        Nginx["nginx Reverse Proxy"]
    end

    subgraph Containers ["Docker Containers (Stateless Logic)"]
        EMS["Expense Manager Service (FastAPI :8000)"]
        Chat["Bella Chat Service (FastAPI :5000)"]
        MCPServer["EMS MCP Server (FastMCP :8001)"]
    end

    subgraph Host ["Host OS (Stateful Data)"]
        Postgres["PostgreSQL :5432"]
        Qdrant["Qdrant :6333"]
        Ollama["Ollama :11434"]
    end

    UI -->|"Electron: direct HTTP"| EMS
    UI -->|"Electron: direct SSE"| Chat
    UI -->|"Web: /api/ems"| Nginx
    UI -->|"Web: /api/bella-chat"| Nginx
    Nginx -->|"proxy_pass"| EMS
    Nginx -->|"proxy_pass"| Chat
    Chat -->|"streamable-HTTP tools"| MCPServer
    MCPServer -->|"HTTP"| EMS
    Chat -->|"vector search"| Qdrant
    Chat -->|"checkpoints"| Postgres
    Chat -->|"inference"| Ollama
    EMS -->|"ORM"| Postgres
```

---

## Core Components

1. **Desktop Client**
   React 19 interface inside Electron, compiled with Vite and styled with Material UI v6. Served by nginx in web/Docker mode; connects directly to services in Electron mode.

2. **Expense Manager Service** ([Technical Details](./expense-manager.md))
   Clean Architecture FastAPI service for multi-period budgeting, savings envelopes, and account tracking. Backed by async SQLAlchemy and PostgreSQL.

3. **Bella Chat Service** ([Agent Details](./bella-chat.md))
   LangGraph `create_agent` orchestrator with RAG knowledge search, MCP tool use, SSE streaming, and Arize Phoenix observability. Supports Ollama (local) and Google Gemini as the LLM backend.

4. **EMS MCP Server** ([Server Details](./ems-mcp-server.md))
   FastMCP service exposing EMS financial data as read-only LLM-callable tools over streamable HTTP.

5. **ETL Pipelines** ([Pipeline Details](./etl-pipelines.md))
   Offline ingestion job that fetches wiki docs from GitHub and loads dense vector embeddings into Qdrant.

---

## User Workspace Showcase

<Tabs>
  <TabItem value="budget" label="Budgeting and Envelopes" default>
    <h3>Envelope Allocations and Period Parameters</h3>
    <p>Distribute active monthly income into customized spending and savings envelopes. The table updates balances in real-time as expense items are added.</p>
    <img src={require('./assets/images/monthly-budget.png').default} alt="Monthly Budget" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Savings Envelopes Breakdown</h3>
    <p>Monitor target progress and transaction balances dynamically for savings objectives:</p>
    <img src={require('./assets/images/dashboards-savings-envelopes-top.png').default} alt="Savings Envelopes Top" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('./assets/images/dashboards-savings-envelopes-bottom.png').default} alt="Savings Envelopes Bottom" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="accounts" label="Accounts and Balances">
    <h3>Liquid Assets and Liabilities</h3>
    <p>Consolidate bank accounts, savings allocations, and credit liabilities into a single view to monitor net worth statistics:</p>
    <img src={require('./assets/images/dashboards-account-balances.png').default} alt="Account Balances" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Account and Category Configurations</h3>
    <p>Manage active ledger accounts and category thresholds directly inside settings cards:</p>
    <img src={require('./assets/images/settings-bank-accounts.png').default} alt="Bank Accounts Settings" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('./assets/images/settings-budget-categories.png').default} alt="Budget Categories Settings" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="chat" label="Intelligent Assistant">
    <h3>Multi-Turn Agentic Chat Workspace</h3>
    <p>The desktop chat panel connects to the LangGraph OrchestratorAgent, routing queries to financial data tools or the RAG knowledge base:</p>
    <img src={require('./assets/images/chat-loading.png').default} alt="Chat Workspace" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Context Retrieval with Grounded Citations</h3>
    <p>The RAGAgent performs semantic vector search and returns source-linked citations alongside the answer:</p>
    <img src={require('./assets/images/chat-response-ans-available.png').default} alt="Chat RAG Response" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
</Tabs>
