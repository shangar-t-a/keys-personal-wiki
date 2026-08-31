---
sidebar_label: 'SSO & Session Management'
sidebar_position: 5
description: 'Step-by-step SSO login for Web and Electron Desktop App, session lifecycle, and logout protocols'
---

# Single Sign-On (SSO) and Session Management

Bella Keys uses a centralized Single Sign-On (SSO) authentication system built on OAuth 2.1 and OpenID Connect (OIDC).

---

## Authentication Instructions

### Web Interface

1. Open Bella Keys in your web browser.
2. Click **Sign In with SSO**.
3. The browser presents the **Bella Keys Authorization Screen**.
4. Enter your Master Username and Password, review the requested permissions, and click **Authorize**.
5. Upon authentication, the browser redirects back to the primary application dashboard.

### Desktop Application (Electron)

1. Open the Bella Keys desktop application.
2. Click **Sign In with SSO**.
3. The system default web browser opens automatically to display the authorization page.
4. Enter your Master Username and Password, and click **Authorize**.
5. The browser prompts you to return to the application using the `bella-app://callback` protocol.
6. Confirm the prompt to complete authentication and open the application dashboard.

:::note Master Credentials Storage
Master credentials are saved locally in the database. Credentials are not sent to external servers.
:::

---

## Session Lifecycle and Security

Bella Keys implements a dual-token strategy to maintain high security:

* **Active Session Expiration**: Short-lived access tokens expire after 1 hour.
* **Silent Refresh**: Active sessions undergo background token rotation via `HttpOnly` cookies without interrupting user activity.
* **Maximum Session Duration**: If the application remains inactive or closed for 7 days, the refresh token expires completely, requiring authentication.

---

## Manual Logout Protocol

To end an active session:

1. Select your profile menu in the lower-left sidebar.
2. Click **Log Out**.
3. Access tokens are evicted from memory, and `HttpOnly` session cookies are invalidated by the Auth Service.
