---
sidebar_level: 2
sidebar_label: 'Bella Chat'
sidebar_position: 2
description: 'Bella Chat Service'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bella Chat Service

The Bella Chat Service is the AI orchestration engine for Bella Assist. It routes user queries to the right tool — financial data via MCP, knowledge search via RAG, or a direct LLM response — and streams the result back token-by-token over SSE.

---

<Tabs>
  <TabItem value="capabilities" label="Capabilities" default>

**Financial Data Access**
Natural language queries against accounts, spending entries, and budgeting periods. Routed to the EMS MCP Server via LLM tool calls.

**Semantic Knowledge Search (RAG)**
Retrieves grounded answers from the personal wiki using Qdrant vector search. Responses include source hyperlinks.

**Persistent Conversation Memory**
Multi-turn sessions are checkpointed to PostgreSQL via `AsyncPostgresSaver`. Conversation history survives Electron window restarts.

**SSE Streaming**
Responses stream token-by-token as `text/event-stream`. Event types: `thinking`, `tool_call`, `tool_result`, `response`, `error`, `done`.

**Configurable LLM Backend**
Supports Ollama (local, default: `qwen2.5vl:7b`) and Google Gemini, switchable via `SYNTHESIS_MODEL_PROVIDER`.

**Observability**
LangChain traces instrumented with Arize Phoenix via `openinference`. Trace data stored in PostgreSQL.

  </TabItem>
  <TabItem value="architecture" label="Architecture">

### OrchestratorAgent

Built with LangGraph's `create_agent` ReAct loop. Receives a user message, decides which tool to call (or answers directly), and iterates until a final response is ready.

```mermaid
graph TD
    Start([User Message]) --> Orchestrator["OrchestratorAgent\n(create_agent ReAct loop)"]

    Orchestrator -->|"tool: rag_search"| RAGAgent

    subgraph RAGAgent ["RAGAgent Sub-graph"]
        R1["find_relevant_contexts\n(Qdrant similarity_search k=3)"]
        R2["generate_response\n(LLM + source links)"]
        R1 --> R2
    end

    Orchestrator -->|"MCP tools"| MCPServer["EMS MCP Server\n(list_accounts, get_period,\nlist_spending_entries, ...)"]

    Orchestrator --> Checkpointer["AsyncPostgresSaver\n(bella_chat_checkpoints)"]
    Orchestrator --> LLM["Configurable LLM\n(Ollama / Google Gemini)"]
    Orchestrator --> SSE["SSE Stream\n(thinking → tool_call → tool_result → response → done)"]
```

### SimpleChatAgent

A lightweight fallback agent for persona-based Q&A when no tool is needed. Single-node graph: `generate_response` only.

### State Persistence

All conversation turns are serialized into `bella_chat_checkpoints` (PostgreSQL) by `AsyncPostgresSaver`. Tables are auto-created on first startup via `checkpointer.setup()`.

  </TabItem>
  <TabItem value="workspace" label="Workspace">

### Multi-Turn Conversation & Tool Execution

The interface displays multi-turn conversation history and active tool execution, such as retrieving the top 3 financial expenses from ledger tables using the EMS MCP server and summarizing the overall chat discussion:

![Multi-Turn Conversation and Tool Execution](./assets/images/ai-chat-ems-tool-and-chat-history.png)

### Context Retrieval & Citations (RAG)

The agent triggers the `rag_search` tool to fetch grounded information from the Qdrant vector database (e.g., retrieving details about Shangar Arivazhagan/Keys), presenting a structured markdown response with clickable source citation links:

![Context Retrieval and Citations (RAG)](./assets/images/ai-chat-rag-tool.png)

  </TabItem>
</Tabs>
