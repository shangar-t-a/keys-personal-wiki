import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ShangarAvatar from '@site/static/img/docs/intro/shangar.png';

export default function AboutPage(): JSX.Element {
  return (
    <Layout
      title="About"
      description="Shangar Arivazhagan (Keys) – Technical Lead (AI & Software Development) – Engineering notes, background, and technical stack.">
      <main className="editorial-wrapper">
        <article className="editorial-container">
          {/* Eyebrow */}
          <p className="editorial-eyebrow">About</p>

          {/* Primary Display Heading */}
          <h1 className="editorial-title">
            Shangar Arivazhagan (Keys)
          </h1>

          {/* Lead Paragraph */}
          <p className="editorial-lead">
            I am an <strong>AI and Software Engineering Technical Lead</strong> based in Coimbatore, Tamil Nadu.
            In my day job, I focus on building AI systems, backend microservices, and automation frameworks that accelerate test engineering workflows across the Test &amp; Measurement (T&amp;M) and silicon lifecycle.
          </p>

          {/* Author Callout Banner */}
          <div className="editorial-bio-card">
            <img
              src={ShangarAvatar}
              alt="Shangar Arivazhagan (Keys)"
              className="editorial-bio-avatar"
            />
            <div className="editorial-bio-details">
              <h3 className="editorial-bio-name">Shangar Arivazhagan (Keys)</h3>
              <p className="editorial-bio-role">
                Technical Lead &ndash; AI &amp; Software Development
              </p>
              <p className="editorial-bio-text">
                Specializing in Python backend engineering, LlamaIndex &amp; agentic workflows, enterprise Microsoft Entra ID integration, and T&amp;M test automation.
              </p>
              <div className="editorial-bio-links">
                <a
                  href="https://www.linkedin.com/in/shangar-arivazhagan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-pill-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/shangar-t-a/keys-personal-wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-pill-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                <Link to="/docs/projects/home" className="editorial-pill-link">
                  <span>View Projects &rarr;</span>
                </Link>
                <Link to="/docs/knowledge-base/home" className="editorial-pill-link">
                  <span>Knowledge Base &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <hr className="editorial-divider" />

          {/* Narrative Body */}
          <div className="editorial-prose">
            <h2>In My Day Job</h2>
            <p>
              I work primarily as an <strong>AI and Backend Engineer</strong>, designing systems and automation tooling that accelerate test engineers throughout the silicon and hardware validation lifecycle.
            </p>

            <p>
              My background spans key phases of the <strong>Test &amp; Measurement (T&amp;M)</strong> lifecycle in silicon and embedded systems:
            </p>

            <ul className="editorial-list">
              <li>
                <strong>Pre-Silicon Firmware V&amp;V:</strong> Firmware verification and validation before silicon tape-out to catch logical and timing regressions early.
              </li>
              <li>
                <strong>Silicon Bench Validation:</strong> Hands-on bench testing, instrument control, and electrical validation of physical silicon.
              </li>
              <li>
                <strong>Online Design Tool (ODT):</strong> A web-based engineering simulation platform enabling customers to list parts, simulate real-world operational scenarios, and pick the optimal part for their specific use case.
              </li>
              <li>
                <strong>Medical Equipment Test Rig Automation:</strong> Designed an end-to-end automation framework controlling a hardware test rig setup to execute full product validation &ndash; spanning firmware dumping/flashing through real-time patient health monitoring.
              </li>
              <li>
                <strong>AI-Assisted ATE Test Development:</strong> Building AI-driven workflows to accelerate test program development for Automated Test Equipment (ATE) test engineers.
              </li>
              <li>
                <strong>Customer Acceleration AI Applications:</strong> Architecting intelligent systems that index deep technical documentation to speed up and sharpen technical responses for end customers.
              </li>
            </ul>

            <h2>AI Architecture &amp; Enterprise Systems</h2>
            <p>
              Currently, my work focuses heavily on building <strong>AI agent skills, plugins, and custom context connectors</strong>. This includes integrating enterprise data sources (such as SharePoint and document repositories) into LLM agent workflows using <strong>LlamaIndex</strong>, <strong>Claude Agent SDKs</strong>, <strong>LangGraph</strong>, and <strong>Model Context Protocol (MCP)</strong> servers.
            </p>
            <p>
              On the enterprise backend side, I design architectures following <strong>Microsoft Entra ID (Azure AD)</strong> security best practices &ndash; implementing OAuth 2.1 / OIDC token delegation, On-Behalf-Of (OBO) flows, and robust role-based access control (RBAC) in FastAPI and async Python services.
            </p>

            <h2>Technical Focus &amp; Stack</h2>
            <p>
              Here is a summary of the technologies, frameworks, and domain tooling I work with regularly:
            </p>
          </div>

          {/* Restored Technical Focus Grid */}
          <div className="editorial-grid">
            <div className="editorial-card">
              <div className="editorial-card-badge">AI &amp; RAG</div>
              <h3 className="editorial-card-title">AI &amp; Intelligent Systems</h3>
              <p className="editorial-card-text">
                Primary depth with <strong>LlamaIndex</strong> for document ingestion, hierarchical indexing, and advanced retrieval. Building agent skills &amp; plugins, tool use with MCP, <strong>Claude Agent SDKs</strong>, <strong>LangGraph</strong>, <strong>Qdrant</strong> vector storage, and <strong>Arize Phoenix</strong> tracing.
              </p>
              <div className="editorial-tag-list">
                <span className="editorial-tag">LlamaIndex</span>
                <span className="editorial-tag">Claude SDK</span>
                <span className="editorial-tag">LangGraph</span>
                <span className="editorial-tag">MCP</span>
                <span className="editorial-tag">SharePoint Connectors</span>
                <span className="editorial-tag">Qdrant</span>
                <span className="editorial-tag">Arize Phoenix</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Backend</div>
              <h3 className="editorial-card-title">Python &amp; API Architecture</h3>
              <p className="editorial-card-text">
                Asynchronous Python with <strong>FastAPI</strong>, <strong>asyncio</strong>, and <strong>httpx</strong>. Clean Architecture, declarative schema modeling with <strong>Pydantic v2</strong>, and relational persistence with <strong>SQLAlchemy</strong> and <strong>Alembic</strong>.
              </p>
              <div className="editorial-tag-list">
                <span className="editorial-tag">FastAPI</span>
                <span className="editorial-tag">asyncio</span>
                <span className="editorial-tag">Pydantic v2</span>
                <span className="editorial-tag">SQLAlchemy</span>
                <span className="editorial-tag">PostgreSQL</span>
                <span className="editorial-tag">Alembic</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Identity &amp; DevOps</div>
              <h3 className="editorial-card-title">Enterprise Security &amp; Infra</h3>
              <p className="editorial-card-text">
                <strong>Microsoft Entra ID</strong> enterprise authentication, OIDC + PKCE, token rotation, and app registrations. Containerization with <strong>Docker</strong> / <strong>Docker Compose</strong>, WSL2 Linux workflows, and modern tooling with <strong>uv</strong>, <strong>ruff</strong>, <strong>mypy</strong>, and <strong>pytest</strong>.
              </p>
              <div className="editorial-tag-list">
                <span className="editorial-tag">Microsoft Entra ID</span>
                <span className="editorial-tag">OIDC / PKCE</span>
                <span className="editorial-tag">Docker</span>
                <span className="editorial-tag">WSL2</span>
                <span className="editorial-tag">uv</span>
                <span className="editorial-tag">ruff / mypy</span>
                <span className="editorial-tag">pytest</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Domain</div>
              <h3 className="editorial-card-title">Test &amp; Measurement Engineering</h3>
              <p className="editorial-card-text">
                Experience across pre-silicon firmware V&amp;V, silicon bench validation, web-based Online Design Tools (ODT), medical device test rig automation frameworks, and ATE test program acceleration.
              </p>
              <div className="editorial-tag-list">
                <span className="editorial-tag">Silicon T&amp;M Lifecycle</span>
                <span className="editorial-tag">Pre-Silicon V&amp;V</span>
                <span className="editorial-tag">ODT Simulation Tool</span>
                <span className="editorial-tag">Hardware Test Rigs</span>
                <span className="editorial-tag">ATE Automation</span>
              </div>
            </div>
          </div>

          <div className="editorial-prose" style={{ marginTop: '2.5rem' }}>
            <h2>Say hi</h2>
            <p>
              Feel free to connect on{' '}
              <a
                href="https://www.linkedin.com/in/shangar-arivazhagan/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-accent-link">
                LinkedIn
              </a>
              {' '}or explore the code repositories on{' '}
              <a
                href="https://github.com/shangar-t-a/keys-personal-wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-accent-link">
                GitHub
              </a>
              .
            </p>
          </div>
        </article>
      </main>
    </Layout>
  );
}
