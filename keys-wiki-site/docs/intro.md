---
sidebar_label: 'Home'
sidebar_position: 1
---

import GradientHeading from '@site/src/components/core/GradientHeading';

import LinkedInIcon from '@site/static/img/docs/intro/linkedin-icon.png';
import GitHubIcon from '@site/static/img/docs/intro/github-icon.png';
import ShangarAvatar from '@site/static/img/docs/intro/shangar.png';

<GradientHeading
  as="h1"
  gradientFrom="#338cf1"
  gradientMid="#27dafd"
  gradientTo="#8f43ec"
>
# Shangar Arivazhagan (Keys)

</GradientHeading>

<p style={{
  textAlign: 'center',
  fontStyle: 'italic',
  fontWeight: '500',
  fontSize: '1.1rem'
}}>
AI & Software Engineering Technical Lead<br />
Python · AI Systems · LLMs · Backend Engineering
</p>

<div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
  <img
    src={ShangarAvatar}
    alt="Shangar Avatar"
    style={{
      width: '150px',
      borderRadius: '50%',
      border: '3px solid rgba(76, 201, 240, 0.7)',
      boxShadow: '0 0 35px rgba(76,201,240,0.4)'
    }}
  />
</div>

<p style={{ textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.8' }}>
I'm <strong>Shangar (Keys)</strong>, an AI and Software Engineering Technical Lead based in Coimbatore, Tamil Nadu.
I focus on building backend systems, agentic AI solutions that work reliably at scale. <br></br>
This wiki is my <strong>digital portfolio</strong> where I document projects, technical decisions and learnings, and
experiments across AI and backend systems.
</p>

---

## About Me

I lead technical delivery across AI and Backend projects, working closely with teams to design systems that solves
customer pain points in the field of T&M and Enterprise Solutions. My day-to-day spans agentic workflows, API design,
and keeping production Python services healthy and maintainable.

Outside of work, I spend time exploring AI advancements, working on personal projects, and writing up what I learn here.

---

## Connect with Me

<div
  style={{
    display: 'flex',
    justifyContent: 'left',
    gap: '1.2rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap'
  }}
>
  <a href="https&#58;//www.linkedin.com/in/shangar-arivazhagan/" target="_blank" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    padding: '0.8rem 1.6rem',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, #0077B5, #00A0DC)',
    color: '#fff',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease'
  }}>
    <img src={LinkedInIcon} width="22" height="22" style={{ verticalAlign: 'middle' }} />
    <span>LinkedIn</span>
  </a>

  {/*markdownlint-disable-next-line MD011*/}
  <a href="https&#58;//github.com/shangar-t-a/" target="_blank" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    padding: '0.8rem 1.6rem',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)',
    color: '#fff',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease'
  }}>
    <img src={GitHubIcon} width="22" height="22" style={{ verticalAlign: 'middle' }} />
    <span>GitHub</span>
  </a>
</div>

---

## Tech Focus

I work across the full stack of modern AI and backend engineering. Here is where most of my depth sits right now.

**AI Systems and Agent Engineering**
Building agentic workflows that go beyond simple chat: tool use, multi-step reasoning, structured planning, and
MCP-based integrations. I care about making agents reliable, observable and evaluatable.

**LLM Engineering**
RAG pipeline design, retrieval quality, structured outputs, prompt engineering and context engineering, and evaluation
strategies. I work across OpenAI, Anthropic Claude, and Google Gemini depending on the use case.

**Backend Engineering**
Async Python with `asyncio` and `httpx`, FastAPI service design, event-driven patterns, Clean Code and clean domain
modeling with Pydantic and SQLAlchemy. I lean heavily on typed, tested, well-linted code as a baseline.

**AI Infrastructure**
Vector database management with Qdrant, LLM observability, cost tracking, and evaluation with TruLens and custom
harnesses. Getting the plumbing right matters as much as the models.

---

## AI Tools and LLMs

**LLM Providers:** OpenAI, Anthropic (Claude), Google Gemini, Ollama, Hugging Face

**Frameworks:** LlamaIndex, LangChain & LangGraph (Intermediate)

**Vector Databases:** Qdrant

**Evaluation:** TruLens, custom eval harnesses

**Embeddings:** OpenAI, Ollama, Hugging Face

**AI Coding:** Claude Code, Antigravity, GitHub Copilot

---

## Python Stack

**Web Frameworks:** FastAPI, Django

**Supporting Libraries:** Django REST Framework, Pydantic v2, SQLAlchemy, Alembic, `httpx`, `asyncio`

**Dependency Management:** uv, Poetry (Not Recommending for new projects)

**Code Quality:** ruff, mypy, pytest

---

## Development and Tooling

**Containerisation:** Docker, Docker Compose

**IDEs:** VS Code (Professional) and Antigravity (Personal)

**Version Control:** GitHub, Bitbucket, Azure DevOps

**Project Management:** Azure DevOps, Jira

**Documentation Platforms:** Confluence, Azure DevOps Wiki
