import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ShangarAvatar from '@site/static/img/docs/intro/shangar.png';

export default function AboutPage(): JSX.Element {
  return (
    <Layout
      title="About"
      description="Technical Lead (AI & Software Development) – Portfolio, engineering notes, and project documentation.">
      <main className="editorial-wrapper">
        <article className="editorial-container">
          {/* Eyebrow */}
          <p className="editorial-eyebrow">About</p>

          {/* Display Heading */}
          <h1 className="editorial-title">
            Engineering reliable systems, APIs, and practical AI tools.
          </h1>

          {/* Lead Paragraph */}
          <p className="editorial-lead">
            I am <strong>Shangar Arivazhagan (Keys)</strong>, an AI and Software Engineering Technical Lead based in Coimbatore, Tamil Nadu.
            This wiki is my digital workshop &ndash; documenting production systems, architecture decisions, and practical engineering notes.
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
                Focusing on Python backend engineering, FastAPI services, tool-calling AI agents, vector search, and clean domain design.
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
            <p>
              In my day job, I lead engineering delivery across backend and AI initiatives. My daily work revolves around building asynchronous Python APIs with <strong>FastAPI</strong> and <strong>asyncio</strong>, structuring data access with <strong>SQLAlchemy</strong> and <strong>PostgreSQL</strong>, and orchestrating task-focused LLM systems using <strong>LangGraph</strong>, <strong>Qdrant</strong>, and custom MCP tool integrations.
            </p>

            <h2>Practical engineering focus</h2>
            <p>
              I prioritize building systems that are simple to operate, easy to troubleshoot, and resilient in production. For AI systems, that means focusing on deterministic tool execution, clear context boundaries, and robust error handling rather than overly complex abstractions.
            </p>

            <h2>What is documented here</h2>
            <p>
              This site holds two main collections of technical writing:
            </p>

            <ul className="editorial-list">
              <li>
                <strong>Projects:</strong> Production applications and desktop tools (like <Link to="/docs/projects/bella-assist">Bella Assist</Link>), complete with user guides, feature walkthroughs, and architecture notes.
              </li>
              <li>
                <strong>Knowledge Base:</strong> Direct field notes, post-mortems, and reference guides covering Python backend patterns, DevOps setups, and database configurations.
              </li>
            </ul>

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
              {' '}or check out the code repositories on{' '}
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
