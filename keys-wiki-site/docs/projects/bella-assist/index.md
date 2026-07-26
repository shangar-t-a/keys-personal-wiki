---
sidebar_level: 2
sidebar_label: 'Overview'
sidebar_position: 1
description: 'Bella Assist Project Overview and Interactive Showcase'
---

import CenteredIntro from '@site/src/components/core/CenteredIntro';

# Bella Assist

<CenteredIntro>
Bella Assist is a local-first desktop application that integrates an AI personal assistant with multi-period budgeting, asset and liability tracking, and semantic search. The application is built using a clean-architecture backend in FastAPI, a React interface packaged inside Electron, and custom Model Context Protocol (MCP) servers.
</CenteredIntro>

---

## Live User Journey Showcase

Explore the interactive application showcase rendered directly below, featuring full screen navigation, light/dark theme switching, budget visualizations, net worth trajectories, and AI chat capabilities.

<iframe
  src="https://shangar-t-a.github.io/bella-keys-personal-assist/screens/user-journey.html"
  style={{
    width: '100%',
    height: '800px',
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '2rem'
  }}
  title="Bella Assist Interactive User Journey Showcase"
  loading="lazy"
/>

* **[Open Showcase in Fullscreen](https://shangar-t-a.github.io/bella-keys-personal-assist/)** — Open the live showcase in a dedicated browser tab.
* **[GitHub Repository](https://github.com/shangar-t-a/bella-keys-personal-assist)** — Access source code, issue tracker, and releases.

---

## Deployed Documentation

To ensure smooth documentation reuse and prevent content duplication across repositories, technical specifications, user manuals, and developer guidelines are maintained and deployed directly alongside the application source code.

### User Guides & Manuals

* **[User Setup & Installation Guide](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/user/setup-guide.md)** — Native host prerequisites, PostgreSQL/Ollama initialization, and Docker deployment scripts.
* **[Authentication & Security Guide](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/user/authentication-guide.md)** — SSO identity management, JWT access tokens, HttpOnly refresh cookies, and token rotation.
* **[Wealth Manager Guide](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/user/wealth-manager-guide.md)** — Asset trackers, interest-bearing liabilities, EMI projections, and net worth trajectory models.

### Developer & Architecture Specifications

* **[System Architecture & Coding Standards](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/architecture-standards.md)** — Layered Clean Architecture rules, stateless containers, and backend standards.
* **[Developer Workflow](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/development-workflow.md)** — Monorepo layout, local execution scripts, dependency management, and linting standards.
* **[MCP Authorization Specification](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/mcp-authorization.md)** — Security boundaries, bearer token verification, and FastMCP integration design.
* **[Frontend & UI Guidelines](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/frontend-guidelines.md)** — React 18/19, Material UI v6 design system, accessibility, and [UI Guidelines](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/ui-guidelines.md).
* **[Testing Guidelines](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/testing-guidelines.md)** — Async unit testing, integration test suits, and pytest conventions.

---

## Deployment Architecture

Bella Assist uses a hybrid local architecture: stateless application logic runs within containerized Docker environments while all stateful user data (PostgreSQL databases, Qdrant vector store, and Ollama model inference) is maintained directly on the host machine to ensure privacy and data sovereignty.

```mermaid
graph TD
    subgraph Client ["Client"]
        UI["React UI (Electron Desktop)"]
    end

    subgraph Gateway ["nginx (Web / Docker mode)"]
        Nginx["nginx Reverse Proxy"]
    end

    subgraph Containers ["Docker Containers (Stateless Logic)"]
        EMS["Expense Manager Service (FastAPI :8000)"]
        Chat["Bella Chat Service (FastAPI :5000)"]
        MCPServer["EMS MCP Server (FastMCP :8001)"]
        Auth["Authentication Service (FastAPI :8002)"]
    end

    subgraph Host ["Host OS (Stateful Data)"]
        Postgres["PostgreSQL :5432"]
        Qdrant["Qdrant :6333"]
        Ollama["Ollama :11434"]
    end

    UI -->|"Electron: direct HTTP"| EMS
    UI -->|"Electron: direct SSE"| Chat
    UI -->|"Electron: direct HTTP"| Auth
    UI -->|"Web: /api/ems"| Nginx
    UI -->|"Web: /api/bella-chat"| Nginx
    UI -->|"Web: /api/auth"| Nginx
    Nginx -->|"proxy_pass"| EMS
    Nginx -->|"proxy_pass"| Chat
    Nginx -->|"proxy_pass"| Auth
    Chat -->|"streamable-HTTP tools"| MCPServer
    MCPServer -->|"HTTP"| EMS
    MCPServer -->|"HTTP (verify token)"| Auth
    Chat -->|"vector search"| Qdrant
    Chat -->|"checkpoints"| Postgres
    Chat -->|"inference"| Ollama
    EMS -->|"ORM"| Postgres
    Auth -->|"ORM"| Postgres
```

---

## Core Components

1. **Desktop Client** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/keys-personal-assist-ui))
   React 19 interface inside Electron, compiled with Vite and styled with Material UI v6. Served by nginx in web/Docker mode; connects directly to services in Electron mode.

2. **Expense Manager Service** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/services/expense-manager-service))
   Clean Architecture FastAPI service for budgeting, savings envelopes, and account tracking. Backed by async SQLAlchemy and PostgreSQL.

3. **Authentication Service** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/services/auth-service) | [Guide](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/user/authentication-guide.md))
   FastAPI identity manager handling registration, login, and secure sessions via token rotation and HttpOnly cookies.

4. **Bella Chat Service** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/services/bella-chat-service))
   LangGraph `create_agent` orchestrator with RAG knowledge search, MCP tool use, SSE streaming, and Arize Phoenix observability. Supports Ollama (local) and Google Gemini as the LLM backend.

5. **EMS MCP Server** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/mcps/ems-mcp-server) | [Specification](https://github.com/shangar-t-a/bella-keys-personal-assist/blob/main/docs/developer/mcp-authorization.md))
   FastMCP service exposing EMS financial data as read-only LLM-callable tools over streamable HTTP.

6. **ETL Pipelines** ([Codebase](https://github.com/shangar-t-a/bella-keys-personal-assist/tree/main/services/etl-pipelines))
   Offline ingestion job that fetches wiki docs from GitHub and loads dense vector embeddings into Qdrant.
