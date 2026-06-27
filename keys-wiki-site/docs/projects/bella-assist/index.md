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
  <TabItem value="budget" label="Budget and Envelopes" default>
    <h3>Period Allocation Planner</h3>
    <p>Distribute active monthly income into customized spending and savings envelopes using an interactive radial allocation planner:</p>
    <img src={require('./assets/images/08-budget-visuals.png').default} alt="Period Allocation Planner" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Savings Envelopes Breakdown</h3>
    <p>Monitor target progress, category splits, and transaction ledger updates dynamically for savings objectives:</p>
    <img src={require('./assets/images/05-savings-envelopes.png').default} alt="Savings Envelopes Top" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('./assets/images/06-savings-envelopes-txs.png').default} alt="Savings Envelopes Ledger" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="accounts" label="Accounts and Balances">
    <h3>Liquid Ledger and Reconciliations</h3>
    <p>Consolidate bank accounts, credit liabilities, and transaction histories into a single view to monitor liquid balances:</p>
    <img src={require('./assets/images/04-spending-accounts.png').default} alt="Account Balances" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Account and Category Configurations</h3>
    <p>Manage active ledger accounts and category thresholds directly inside settings cards:</p>
    <img src={require('./assets/images/17-settings-accounts.png').default} alt="Bank Accounts Settings" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('./assets/images/18-settings-categories.png').default} alt="Budget Categories Settings" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="wealth" label="Wealth Manager">
    <h3>Assets Trackers</h3>
    <p>Track value-based (e.g. cash, savings) and unit-based (e.g. equity, gold) assets across five distinct categories:</p>
    <img src={require('./assets/images/09-wealth-assets.png').default} alt="Assets Tracker" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Liabilities Tracking & Projections</h3>
    <p>Model Scheduled EMI and Non-EMI interest-bearing liabilities, configure moratoriums, and project long-term amortization curves:</p>
    <img src={require('./assets/images/10-wealth-liabilities.png').default} alt="Liabilities Tracker" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Historical Net Worth Trajectory</h3>
    <p>Visualize the 12-month trajectory of assets, liabilities, and net worth side-by-side using composed charts:</p>
    <img src={require('./assets/images/13-wealth-networth.png').default} alt="Net Worth Tab" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Portfolio Allocation & Health Ratios</h3>
    <p>Monitor self-owned asset financing leverage and track portfolio liquidity and debt risk ratios against industry-standard limits:</p>
    <img src={require('./assets/images/14-wealth-allocation.png').default} alt="Allocation Tab" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="chat" label="Intelligent Assistant">
    <h3>Multi-Turn Agentic Chat Workspace</h3>
    <p>The desktop chat panel supports multi-turn conversations and connects to the LangGraph OrchestratorAgent, routing queries to financial data tools (e.g. EMS MCP server tools to retrieve top expenses) or summarizing the chat history:</p>
    <img src={require('./assets/images/ai-chat-ems-tool-and-chat-history.png').default} alt="Chat Workspace" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
    <br/><br/>
    <h3>Context Retrieval with Grounded Citations</h3>
    <p>The agent uses the RAG search tool to perform semantic vector search against the Qdrant knowledge base, returning grounded answers with clickable source citations:</p>
    <img src={require('./assets/images/ai-chat-rag-tool.png').default} alt="Chat RAG Response" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
</Tabs>
