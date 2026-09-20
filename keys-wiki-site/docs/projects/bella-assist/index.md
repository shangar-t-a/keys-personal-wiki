---
sidebar_level: 2
sidebar_label: 'Overview'
sidebar_position: 1
description: 'Bella Assist Project Overview and Interactive Showcase'
---

import CenteredIntro from '@site/src/components/core/CenteredIntro';

# Bella Assist

<CenteredIntro>
Bella Assist is a privacy-first personal assistant and wealth management application. It integrates intelligent assistance with multi-period budgeting, asset and liability tracking, savings envelopes, and terminal productivity tools.
</CenteredIntro>

---

## Interactive Application Showcase

Explore the interactive application showcase below, featuring screen navigation, dark and light theme switching, budget visualizations, net worth trajectories, and AI chat capabilities.

<iframe
  src="/keys-personal-wiki/showcase/user-journey.html"
  style={{
    width: '100%',
    height: '800px',
    border: '1px solid var(--border-line)',
    borderRadius: '12px',
    boxShadow: 'var(--card-shadow)',
    marginBottom: '2rem'
  }}
  title="Bella Assist Interactive User Journey Showcase"
  loading="lazy"
/>

* <a href="/keys-personal-wiki/showcase/user-journey.html" target="_blank" rel="noopener noreferrer"><strong>Open Showcase in Fullscreen</strong></a> &ndash; Open the live interactive showcase in a dedicated browser tab.

---

## Key Features

1. **Multi-Period Budgeting & Savings Envelopes**
   Organize income into dedicated allocations (Bills, Discretionary, Savings Envelopes) with real-time balance tracking and recurring transaction support.

2. **Wealth & Net Worth Tracking**
   Track tangible and financial assets alongside interest-bearing liabilities with automated EMI schedules and forward-looking net worth projections.

3. **Personal AI Assistant**
   Chat with your assistant using local or cloud language models. Query your expense history, search personal knowledge bases, and run tool-assisted financial calculations.

4. **Terminal Companion (`bella`)**
   A fast terminal UI (TUI) and scriptable CLI tool for quick transaction logging, balance inquiries, and system monitoring directly from your shell.

---

## User Guides & Manuals

* **[Wealth Manager Guide](/docs/projects/bella-assist/wealth-manager-guide)** &ndash; Asset tracking, interest-bearing liabilities, EMI projections, and net worth trajectory models.
* **[Bella TUI Terminal Guide](/docs/projects/bella-assist/bella-tui-guide)** &ndash; Installation, authentication flow, keyboard shortcuts, and commands for the `bella` terminal companion.
* **[Single Sign-On & Session Guide](/docs/projects/bella-assist/auth/sso-login)** &ndash; Single Sign-On workflow across Web and Electron, session lifecycle, and logout protocols.
* **[Permissions & Delegation Guide](/docs/projects/bella-assist/auth/permissions-and-delegation)** &ndash; Permission scope descriptions and token delegation model.

---

## Technical & Developer Documentation

For container deployment, architecture details, and developer setup instructions, refer to the developer documentation:

* **[WSL2 & Docker Deployment Guide](/docs/developer/deployment/wsl-docker-setup)** &ndash; Deploying the full stack with Docker Compose and Windows Host PostgreSQL.
* **[Architecture & Guidelines](/docs/developer/architecture-standards)** &ndash; Coding conventions, domain patterns, and system design specifications.
