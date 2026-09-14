---
sidebar_label: 'Home'
sidebar_level: 1
sidebar_position: 0
---

import CenteredIntro from '@site/src/components/core/CenteredIntro';
import CardGrid from '@site/src/components/core/CardGrid';
import FeatureCard from '@site/src/components/core/FeatureCard';

# Projects Gallery

<CenteredIntro>
A curated showcase of engineering projects spanning desktop applications, FastAPI backend services, and AI tool integrations.
</CenteredIntro>

---

<div style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
  <FeatureCard
    href="/docs/projects/bella-assist"
    title="Bella Assist &ndash; Personal AI Assistant & Wealth Manager"
    badge="Featured App"
    tags={['Electron', 'LangGraph', 'FastAPI', 'React']}
    description="A privacy-first desktop application combining a personal assistant with multi-period expense tracking, savings envelopes, and net worth forecasting."
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
    href="/docs/projects/bella-assist"
    title="Bella Chat & Agent Loop"
    badge="Agent"
    tags={['LangGraph', 'RAG', 'Qdrant']}
    description="Agent orchestration engine supporting RAG retrieval, tool calling over MCP, and streaming responses."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    }
  />
  <FeatureCard
    href="/docs/projects/bella-assist/wealth-manager-guide"
    title="Wealth & Expense Manager"
    badge="Finance"
    tags={['FastAPI', 'PostgreSQL', 'SQLAlchemy']}
    description="Clean Architecture backend service for budgeting, savings envelopes, and automated EMI tracking."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    }
  />
  <FeatureCard
    href="/docs/projects/bella-assist/bella-tui-guide"
    title="Bella Terminal Companion"
    badge="CLI / TUI"
    tags={['Textual', 'Python', 'Terminal']}
    description="Fast terminal interface and scriptable CLI for transaction logging and status queries from your shell."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    }
  />
  <FeatureCard
    href="/docs/knowledge-base/devops/wsl-docker-hybrid-setup"
    title="WSL2 & Docker Deployment"
    badge="DevOps"
    tags={['Docker', 'WSL2', 'PostgreSQL']}
    description="Hybrid container architecture connecting isolated container networks to host-managed databases."
    icon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    }
  />
</CardGrid>
