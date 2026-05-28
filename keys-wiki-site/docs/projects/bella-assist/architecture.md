---
sidebar_level: 3
sidebar_label: 'Architecture'
sidebar_position: 2
description: 'Bella Keys System Architecture'
---

# System Architecture

Bella Keys utilizes a containerized logic layer communicating with native data stores on the host operating system. This separates stateless runtime execution from persistent user databases to preserve local privacy.

---

## Service Boundaries

The following flowchart illustrates the communication paths and runtime boundaries between the desktop environment and the Docker containers:

```mermaid
graph TD
    subgraph Host ["Host OS (Local PC - Stateful)"]
        UI["Electron Desktop Window"]
        Ollama["Ollama Local LLM Instance"]
        Postgres["PostgreSQL (checkpoints and finance schema)"]
        Qdrant["Qdrant Vector Database"]
    end

    subgraph Containers ["Docker Containers (Stateless Logic)"]
        EMS["Expense Manager Service (FastAPI)"]
        ChatService["Bella Chat Service (LangGraph)"]
        MCPServer["EMS MCP Server (JSON-RPC)"]
    end

    UI -->|HTTP Requests| EMS
    UI -->|WebSocket Sessions| ChatService
    ChatService -->|Generate Answers| Ollama
    ChatService -->|Read Accounts & Periods| MCPServer
    ChatService -->|Store Chat Checkpoints| Postgres
    ChatService -->|Semantic Context RAG| Qdrant
    MCPServer -->|Query Data| EMS
    EMS -->|Store Financial Transactions| Postgres
```

---

## Network Configurations

To establish network connections between the Docker network namespace and host-bound services, the container configurations map endpoints to the host gateway:

- **PostgreSQL Database Endpoint**: `host.docker.internal:5432`
- **Qdrant Vector Storage Endpoint**: `host.docker.internal:6333`
- **Ollama Engine API Endpoint**: `host.docker.internal:11434`

This architecture allows the Docker containers to remain stateless and easily upgradeable, while all stateful user configurations and financial logs stay safely on the user's host filesystem.
