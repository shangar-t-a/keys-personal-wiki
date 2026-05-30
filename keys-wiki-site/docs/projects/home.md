---
sidebar_label: 'Home'
sidebar_level: 1
sidebar_position: 0
---

import GradientHeading from '@site/src/components/core/GradientHeading';
import CenteredIntro from '@site/src/components/core/CenteredIntro';
import Card from '@site/src/components/core/Card';

<GradientHeading
  as="h1"
  gradientFrom="#338cf1"
  gradientMid="#27dafd"
  gradientTo="#8f43ec"
>
    # Keys' Project Gallery
</GradientHeading>

<CenteredIntro>
A curated showcase of personal engineering projects spanning AI systems, backend services, and desktop applications.
</CenteredIntro>

---

<div
  style={{
    marginTop: '2rem',
  }}
>
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/"
    title="Bella Keys — Personal AI Assistant"
    description="A privacy-first desktop application combining a personal AI assistant with multi-period expense and budget tracking. Built on LangGraph, FastAPI, React, Electron, and the Model Context Protocol."
  />
</div>

<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem',
  }}
>
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/bella-chat"
    title="Bella Chat"
    description="LangGraph orchestration engine with RAG, MCP tool use, SSE streaming, and Arize Phoenix observability."
  />
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/expense-manager"
    title="Expense Manager"
    description="Clean Architecture FastAPI service for multi-period budgeting, savings envelopes, and account tracking."
  />
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/ems-mcp-server"
    title="EMS MCP Server"
    description="FastMCP server exposing financial data as LLM-callable tools over streamable HTTP."
  />
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/etl-pipelines"
    title="ETL Pipelines"
    description="GitHub-sourced knowledge ingestion pipeline that loads wiki docs into Qdrant for semantic search."
  />
</div>
