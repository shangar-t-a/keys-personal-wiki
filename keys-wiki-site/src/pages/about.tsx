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
                Specializing in AI and Python backend engineering, LlamaIndex &amp; agentic workflows, enterprise applications, and T&amp;M test automations.
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
              I work primarily as an <strong>AI and Backend Engineer</strong>, designing AI systems and automation tooling that accelerate test engineers throughout the silicon and hardware validation lifecycle and enable customers to make better decisions faster.
            </p>

            <p>
              My background spans key phases of the <strong>Test &amp; Measurement (T&amp;M)</strong> lifecycle in silicon and enterprise systems:
            </p>

            <ul className="editorial-list">
              <li>
                <strong>Test and Productivity Acceleration AI Applications:</strong> Architecting intelligent AI systems that speed up knowledge discovery, workflow automation.
              </li>
              <li>
                <strong>AI-Assisted Test Development:</strong> Building AI-driven workflows to accelerate test program development for Automated Test Equipment (ATE) test engineers.
              </li>
              <li>
                <strong>Medical Equipment Test Rig Automation:</strong> Designed an end-to-end automation framework controlling a hardware test rig setup to execute full product validation &ndash; spanning firmware dumping/flashing through real-time patient health monitoring.
              </li>
              <li>
                <strong>Online Design Tool (ODT):</strong> A web-based engineering simulation platform enabling customers to list parts, simulate real-world operational scenarios, and pick the optimal part for their specific use case.
              </li>
              <li>
                <strong>Pre-Silicon Firmware V&amp;V:</strong> Firmware verification and validation before silicon tape-out to catch logical and timing regressions early.
              </li>
              <li>
                <strong>Silicon Bench Validation:</strong> Hands-on bench testing, instrument control, and electrical validation.
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
          </div>

          {/* Technical Focus Grid */}
          <div className="editorial-grid">
            <div className="editorial-card">
              <div className="editorial-card-badge">AI &amp; Multi-Agent</div>
              <h3 className="editorial-card-title">AI &amp; Intelligent Systems</h3>
              <ul className="editorial-card-list">
                <li>
                  Custom agent orchestration, multi-agent workflows, and systematic eval-driven development for LLM applications.
                </li>
                <li>
                  Agent skill/plugin engineering, tool integration via Model Context Protocol (MCP), and enterprise context connectors (SharePoint &amp; technical docs).
                </li>
                <li>
                  Frameworks &amp; Storage: <strong>Claude Agent SDK</strong>, <strong>LlamaIndex</strong>, <strong>LangGraph</strong>, <strong>Qdrant</strong> vector database, and <strong>Arize Phoenix</strong> tracing.
                </li>
              </ul>
              <div className="editorial-tag-list">
                <span className="editorial-tag">LlamaIndex</span>
                <span className="editorial-tag">Claude Agent SDK</span>
                <span className="editorial-tag">LangGraph</span>
                <span className="editorial-tag">MCP</span>
                <span className="editorial-tag">Eval-Driven Dev</span>
                <span className="editorial-tag">Qdrant</span>
                <span className="editorial-tag">Arize Phoenix</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Backend &amp; Infra</div>
              <h3 className="editorial-card-title">Python, Backend Architecture &amp; Infra</h3>
              <ul className="editorial-card-list">
                <li>
                  Asynchronous Python microservices with <strong>FastAPI</strong>, Clean Architecture, <strong>Pydantic v2</strong> declarative schemas, and <strong>PostgreSQL</strong> persistence (<strong>SQLAlchemy</strong> &amp; <strong>Alembic</strong>).
                </li>
                <li>
                  Cloud-native containerized deployments using <strong>Docker</strong> and <strong>Kubernetes</strong>, API design &amp; contracts with OpenAPI/Swagger.
                </li>
                <li>
                  Enterprise CI/CD pipelines with <strong>GitHub Actions</strong> &amp; <strong>OpenShift</strong>, monitored via <strong>Prometheus</strong>, <strong>Grafana</strong>, and <strong>Arize Phoenix</strong>. Modern tooling with <strong>uv</strong>, <strong>ruff</strong>, <strong>mypy</strong>, and <strong>pytest</strong>.
                </li>
              </ul>
              <div className="editorial-tag-list">
                <span className="editorial-tag">FastAPI</span>
                <span className="editorial-tag">PostgreSQL</span>
                <span className="editorial-tag">Docker &amp; K8s</span>
                <span className="editorial-tag">CI/CD &amp; OpenShift</span>
                <span className="editorial-tag">Prometheus / Grafana</span>
                <span className="editorial-tag">uv / ruff</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Identity &amp; Security</div>
              <h3 className="editorial-card-title">Enterprise Security &amp; Identity</h3>
              <ul className="editorial-card-list">
                <li>
                  <strong>Microsoft Entra ID (Azure AD)</strong> enterprise authentication, app registrations, and zero-trust identity architectures.
                </li>
                <li>
                  End-to-end implementation of enterprise auth flows: Authorization Code Flow with PKCE, On-Behalf-Of (OBO) token exchange, Client Credentials, and microservice RBAC.
                </li>
              </ul>
              <div className="editorial-tag-list">
                <span className="editorial-tag">Microsoft Entra ID</span>
                <span className="editorial-tag">OIDC / PKCE</span>
                <span className="editorial-tag">OBO Token Flow</span>
                <span className="editorial-tag">Client Credentials</span>
                <span className="editorial-tag">OAuth 2.1</span>
                <span className="editorial-tag">RBAC</span>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-badge">Domain &amp; Validation</div>
              <h3 className="editorial-card-title">Test &amp; Measurement Engineering</h3>
              <ul className="editorial-card-list">
                <li>
                  Pre-silicon firmware V&amp;V and post-silicon bench validation, instrument automation, and electrical verification across the silicon lifecycle.
                </li>
                <li>
                  Automated hardware test rig frameworks for full-system validation (firmware flashing, telemetry, and real-time monitoring).
                </li>
                <li>
                  Online Design Tool (ODT) engineering simulation platforms for parametric part selection and operational modeling.
                </li>
              </ul>
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
