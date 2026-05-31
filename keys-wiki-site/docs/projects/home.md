---
sidebar_label: 'Home'
sidebar_level: 1
sidebar_position: 0
---

import CenteredIntro from '@site/src/components/core/CenteredIntro';
import CardGrid from '@site/src/components/core/CardGrid';
import FeatureCard from '@site/src/components/core/FeatureCard';

# Keys' Project Gallery

<CenteredIntro>
A curated showcase of personal engineering projects spanning AI systems, backend services, and desktop applications.
</CenteredIntro>

---

<div style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
  <FeatureCard
    href="/keys-personal-wiki/docs/projects/bella-assist/"
    title="Bella Assist &mdash; Personal AI Assistant"
    badge="Featured App"
    tags={['Electron', 'LangGraph', 'FastAPI', 'React']}
    description="A privacy-first desktop application combining a personal AI assistant with multi-period expense and budget tracking. Built on LangGraph, FastAPI, React, Electron, and the Model Context Protocol."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    }
  />
</div>

<CardGrid>
  <FeatureCard
    href="/keys-personal-wiki/docs/projects/bella-assist/bella-chat"
    title="Bella Chat"
    badge="Agent"
    tags={['LangGraph', 'RAG', 'Qdrant']}
    description="LangGraph orchestration engine with RAG, MCP tool use, SSE streaming, and Arize Phoenix observability."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    }
  />
  <FeatureCard
    href="/keys-personal-wiki/docs/projects/bella-assist/expense-manager"
    title="Expense Manager"
    badge="Backend"
    tags={['FastAPI', 'PostgreSQL', 'SQLAlchemy']}
    description="Clean Architecture FastAPI service for multi-period budgeting, savings envelopes, and account tracking."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    }
  />
  <FeatureCard
    href="/keys-personal-wiki/docs/projects/bella-assist/ems-mcp-server"
    title="EMS MCP Server"
    badge="MCP"
    tags={['FastMCP', 'LLM Tools', 'HTTP']}
    description="FastMCP server exposing EMS financial data as LLM-callable tools over streamable HTTP."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    }
  />
  <FeatureCard
    href="/keys-personal-wiki/docs/projects/bella-assist/etl-pipelines"
    title="ETL Pipelines"
    badge="Data"
    tags={['Qdrant', 'Embeddings', 'Ingestion']}
    description="GitHub-sourced knowledge ingestion pipeline that loads wiki docs into Qdrant for semantic search."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    }
  />
</CardGrid>
