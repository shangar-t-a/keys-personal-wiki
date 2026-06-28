---
sidebar_level: 2
sidebar_label: 'Bella Chat'
sidebar_position: 2
description: 'Bella Chat Service'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bella Chat Service

The Bella Chat Service is the AI orchestration service for Bella Assist. It processes user natural language inputs and routes tasks to specialized tools—such as financial ledger access via the EMS MCP Server, vector search queries via the RAG database, or fallback conversational responses—streaming token responses over Server-Sent Events (SSE).

---

<Tabs>
  <TabItem value="capabilities" label="Capabilities" default>

**Financial Database Interaction**
Translates natural language questions into database filters (e.g. query accounts, spending details, or budget limits) executed by the EMS MCP Server.

**Semantic Retrieval (RAG)**
Queries the Qdrant vector database containing dense text embeddings of the personal wiki, returning grounded facts alongside hyperlinks to the source documents.

**Checkpointed Memory**
Serializes conversation states to a PostgreSQL database using LangGraph's `AsyncPostgresSaver`, allowing chat histories to persist across client restarts.

**Real-Time Token Streaming**
Streams response tokens over standard `text/event-stream` protocols. Emits detailed runtime events: `thinking`, `tool_call`, `tool_result`, `response`, `error`, and `done`.

**Configurable Inference Engines**
Integrates with Ollama for local offline execution (defaulting to the `qwen2.5vl:7b` model) or Google Gemini for cloud-based inference, toggleable via environment flags.

**Observability Traces**
Logs detailed execution graph runs to an Arize Phoenix instance using OpenInference, enabling debug tracing for production instances.

  </TabItem>
  <TabItem value="architecture" label="Architecture">

### OrchestratorAgent

The core agent is built using a LangGraph `create_agent` ReAct loop. On incoming messages, it assesses tool specifications, issues calls, evaluates tool outputs, and repeats this cycle until it constructs the final response.

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

A fallback agent designed for generic conversational queries. It operates on a single-node graph resolving direct LLM queries without tool overhead.

### State Persistence

All conversational history turns are stored in the `bella_chat_checkpoints` PostgreSQL table managed by `AsyncPostgresSaver`. Schema migrations are executed automatically on service boot via `checkpointer.setup()`.

  </TabItem>
  <TabItem value="workspace" label="Workspace">

### Empty Chat Panel

The chat panel provides a clean interface for interaction.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('./assets/images/light/15-chat-empty.png').default} alt="Empty Chat Workspace - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('./assets/images/dark/15-chat-empty.png').default} alt="Empty Chat Workspace - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

### Multi-Turn Conversation & Tool Execution

The interface displays history turns and active tool calls, such as querying the EMS MCP server to retrieve spending limits or category balances.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('./assets/images/ai-chat-ems-tool-and-chat-history.png').default} alt="Chat Workspace with tool call - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('./assets/images/ai-chat-ems-tool-and-chat-history.png').default} alt="Chat Workspace with tool call - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

### Context Retrieval & Citations (RAG)

When referencing documentation, the agent performs semantic searches on Qdrant, formatting links to verified sources.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('./assets/images/ai-chat-rag-tool.png').default} alt="Chat RAG Response - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('./assets/images/ai-chat-rag-tool.png').default} alt="Chat RAG Response - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

  </TabItem>
</Tabs>
