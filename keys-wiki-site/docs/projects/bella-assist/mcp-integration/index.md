---
sidebar_level: 2
sidebar_label: 'Overview'
sidebar_position: 1
description: 'MCP & Integration Layer Overview'
---

# MCP & Integration

To connect the conversational assistant to structured user data and unstructured documents, Bella Keys provides two distinct integration layers:

---

## Architecture Components

- **Model Context Protocol (MCP) Server**: Exposes database operations as standard JSON-RPC tools. This enables the LLM to read live financial balances and double-entry transaction periods securely.
- **ETL Pipelines**: Standardizes document parsing and text chunking. Converts markdown pages into dense vector embeddings and loads them to a host Qdrant database to fuel semantic search.

---

## Integration Layout

```mermaid
graph LR
    subgraph UI ["Desktop client"]
        Chat["Chat interface"]
    end

    subgraph LLM ["Assistant Engine"]
        Orchestration["LangGraph Router"]
    end

    subgraph Interface ["Integration Bridges"]
        MCP["EMS MCP Server"]
        ETL["ETL Pipelines"]
    end

    subgraph Storage ["Persistent Stores"]
        DB["PostgreSQL Finance DB"]
        Qdrant["Qdrant Vector DB"]
    end

    Chat --> Orchestration
    Orchestration -->|Call Tools| MCP
    Orchestration -->|Vector Query| Qdrant
    MCP -->|Query| DB
    ETL -->|Load Embeddings| Qdrant
```
