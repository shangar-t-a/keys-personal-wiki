---
sidebar_label: 'Home'
sidebar_position: 1
---

import CardGrid from '@site/src/components/core/CardGrid';
import FeatureCard from '@site/src/components/core/FeatureCard';

import ShangarAvatar from '@site/static/img/docs/intro/shangar.png';

# Shangar Arivazhagan (Keys)

<div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap-reverse', margin: '1rem 0 2.5rem 0' }}>
  <div style={{ flex: '3', minWidth: '300px' }}>
    <p style={{
      fontStyle: 'italic',
      fontWeight: '600',
      fontSize: '1.2rem',
      color: 'var(--ifm-color-primary)',
      marginBottom: '1.5rem',
      lineHeight: '1.5'
    }}>
      Technical Lead &mdash; AI &amp; Software Development<br />
      <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--ifm-font-color-base)', opacity: 0.8 }}>Python · AI Systems · LLMs · Backend Engineering</span>
    </p>
    <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
      I'm <strong>Shangar (Keys)</strong>, an AI and Software Engineering Technical Lead based in Coimbatore, Tamil Nadu.
      I focus on building backend systems and agentic AI solutions that work reliably at scale.
    </p>
    <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
      This wiki is my <strong>digital portfolio</strong> where I document projects, technical decisions, and experiments across AI and backend systems.
    </p>
  </div>
  <div style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '220px' }}>
    <img
      src={ShangarAvatar}
      alt="Shangar Avatar"
      style={{
        width: '220px',
        height: '275px',
        objectFit: 'cover',
        borderRadius: '12px',
        border: '3px solid rgba(76, 201, 240, 0.7)',
        boxShadow: '0 0 35px rgba(76,201,240,0.4)',
        imageRendering: '-webkit-optimize-contrast'
      }}
    />
  </div>
</div>

---

## About Me

I lead technical delivery across AI and Backend projects, working closely with teams to design systems that solve
customer pain points in the field of T&M and Enterprise Solutions. My day-to-day spans agentic workflows, API design,
and keeping production Python services healthy and maintainable.

Outside of work, I spend time exploring AI advancements, working on personal projects, and writing up what I learn here.

---

## Connect with Me

<div style={{
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem',
  flexWrap: 'wrap'
}}>
  <a href="https://www.linkedin.com/in/shangar-arivazhagan/" target="_blank" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'var(--card-border)',
    background: 'var(--ifm-card-background-color)',
    color: 'var(--ifm-font-color-base)',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: 'var(--card-shadow)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
    e.currentTarget.style.color = 'var(--ifm-color-primary)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.color = 'var(--ifm-font-color-base)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    <span>LinkedIn</span>
  </a>

  <a href="<https://github.com/shangar-t-a/>" target="_blank" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'var(--card-border)',
    background: 'var(--ifm-card-background-color)',
    color: 'var(--ifm-font-color-base)',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: 'var(--card-shadow)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
    e.currentTarget.style.color = 'var(--ifm-color-primary)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.color = 'var(--ifm-font-color-base)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    <span>GitHub</span>
  </a>
</div>

---

## Tech Focus

I work across the full stack of modern AI and backend engineering. Here is where most of my depth sits right now.

<CardGrid>
  <FeatureCard
    title="AI Systems"
    description="Prompt, context, and harness engineering. Designing systems utilizing RAG, tool use, multi-step reasoning, structured planning, and MCP integrations. I primarily work on OpenAI models and Anthropic Claude for development (claude code), and Gemini for personal projects."
  />
  <FeatureCard
    title="Backend Engineering"
    description="Async Python with asyncio and httpx, FastAPI service design, Clean Code, and clean domain modeling with Pydantic and SQLAlchemy. Designing secure authentication flows using OIDC + PKCE across web, SPA, and desktop/CLI platforms."
  />
  <FeatureCard
    title="DevOps & AI Infrastructure"
    description="Infrastructure containerisation using Docker, Docker Compose, and basics of Kubernetes. Managing vector database storage with Qdrant, alongside LLM observability, cost tracking, and evaluation with TruLens."
  />
</CardGrid>

---

## Technical Stack & Tooling

Here is the breakdown of the specific technologies and tools I employ on a regular basis.

### AI & LLM Systems

<CardGrid>
  <FeatureCard
    title="Models & Providers"
    badge="Engines"
    tags={['OpenAI', 'Anthropic Claude', 'Gemini', 'Others']}
    description="Primarily working with OpenAI models and Anthropic Claude for development (claude code), and Gemini or others for personal projects."
  />
  <FeatureCard
    title="Frameworks & RAG"
    badge="Pipelines"
    tags={['LlamaIndex', 'LangChain', 'LangGraph', 'Custom Agent Loops']}
    description="Orchestrating agent workflows, structured cognitive patterns, memory management, and advanced retrieval."
  />
  <FeatureCard
    title="Data & Eval"
    badge="Quality"
    tags={['Qdrant', 'TruLens', 'Custom Eval Harnesses']}
    description="Vector storage management, semantic indexing, semantic search tuning, and testing model outputs."
  />
</CardGrid>

### Python & Backend Development

<CardGrid>
  <FeatureCard
    title="Core Stack"
    badge="Frameworks"
    tags={['FastAPI', 'Django REST Framework', 'Pydantic v2', 'SQLAlchemy', 'Alembic']}
    description="Constructing reliable APIs, clean databases, migrations, and declarative schema validations."
  />
  <FeatureCard
    title="Security & Auth"
    badge="Identity"
    tags={['OIDC', 'PKCE', 'OAuth2']}
    description="Implementing robust identity verification and secure authentication scopes for web, SPA, and desktop/CLI apps."
  />
  <FeatureCard
    title="DevOps & Concurrency"
    badge="Infra"
    tags={['asyncio', 'httpx', 'Docker', 'Docker Compose', 'k8s basics']}
    description="Building concurrent background tasks, non-blocking requests, container setups, and basic Kubernetes resources."
  />
  <FeatureCard
    title="Quality & Tooling"
    badge="Tooling"
    tags={['uv', 'Poetry', 'ruff', 'mypy', 'pytest']}
    description="Fast packaging, type safety linting, strict formatting, and robust unit/integration testing."
  />
</CardGrid>

### Dev Infrastructure & Tooling

<CardGrid>
  <FeatureCard
    title="Workspace"
    badge="IDEs"
    tags={['VS Code (Professional)', 'Antigravity (Personal)']}
    description="Tailored code editing environments with type completions and fast command-line utilities."
  />
  <FeatureCard
    title="Platforms"
    badge="Management"
    tags={['GitHub', 'Azure DevOps', 'Bitbucket', 'Jira', 'Confluence']}
    description="Project tracking, source control, continuous integration, and engineering wikis."
  />
</CardGrid>
