---
sidebar_label: 'Setup Guide'
sidebar_position: 2
description: 'Prerequisites, database initialization, and startup procedures for Bella Assist'
---

# Setup Guide

This guide covers the prerequisites, database initialization, and startup procedures for running Bella Assist.

## Prerequisites

Ensure the following dependencies are installed and running on your host machine:

* **Docker Desktop:** Required for running containerized application services.
* **PostgreSQL:** Required on the host machine to store financial and AI checkpoint data.
* **Ollama (Optional):** Required on the host machine if using local-first AI models.

## 1. Local Development Setup

The application uses an "inside-out" architecture, meaning the application logic runs in Docker containers while data (PostgreSQL database and Ollama models) resides on your host machine.

Run the setup automation script to copy environment files, sync dependencies, and initialize the databases automatically (works on Linux, macOS, and Windows Git Bash):

```bash
bash scripts/setup.sh
```

During the setup process, choose `y` when prompted to initialize the PostgreSQL databases. This runs the SQL schema `scripts/database/init-db.sql` automatically.

If you prefer manual setup:

1. Copy `docker/.env.example` to `docker/.env` and edit it to configure passwords and keys.
2. Execute `scripts/database/init-db.sql` on your host PostgreSQL instance.

## 2. Production Deployment &amp; Service Management (`bella-manager`)

Production service deployment and lifecycle management across Windows, macOS, and Linux are orchestrated using **`bella-manager`**.

:::info Installing `bella-manager`
`bella-manager` is distributed from the private project repository. Installation requires repo access. Contact the project owner or use the instructions provided within the repository.
:::

### Running the Manager

Navigate to your production deployment directory (e.g., `~/.keys_sandbox/bella-keys/` or `%USERPROFILE%\.keys_sandbox\bella-keys\`) and run:

```bash
# Launch interactive TUI
bella-manager

# Or direct commands
bella-manager start --profile ems
bella-manager status
bella-manager logs -f
bella-manager update
```

If configuration files (`docker-compose.prod.yaml`, `.env.example`, `init-db-prod.sql`) are not present in your directory, `bella-manager` will automatically download and initialize them on first launch.

## 3. Terminal Companion (`bella` TUI)

For an interactive terminal interface or command-line scripting with full application feature parity, install and run **`bella`** (see the [Bella TUI Guide](/docs/projects/bella-assist/bella-tui-guide)):

:::info Installing `bella`
`bella` is distributed from the private project repository. Installation requires repo access. See the [Bella TUI Guide](/docs/projects/bella-assist/bella-tui-guide) for full usage instructions once installed.
:::

```bash
# Launch interactive TUI
bella
```

## 4. Running the Application (Development)

Launch both the backend services and the desktop application using the unified runner script (works on Linux, macOS, and Windows Git Bash):

```bash
bash scripts/run-desktop-app.sh
```

During startup, select a service profile:

| Profile                | Services Running | RAM Required | Description                                           |
| :--------------------- | :--------------- | :----------- | :---------------------------------------------------- |
| **EMS Only (Minimal)** | Expense Manager  | ~2GB         | Primary financial tracking profile [Default]          |
| **AI Chat (Standard)** | EMS + Bella Chat | ~4GB         | Full AI assistant and finance tracking [Experimental] |

## Troubleshooting

### Database Connection Failures

* Ensure PostgreSQL is running on the host machine.
* Verify that your firewall allows traffic on port `5432`.
* Check that `EMS_PG_DB_HOST` in `docker/.env` is set to `host.docker.internal`.

### Port Conflicts

If a port is already allocated, modify the target port in `docker/.env` (e.g., change `EMS_PORT` or `PERSONAL_ASSIST_UI_PORT`).
