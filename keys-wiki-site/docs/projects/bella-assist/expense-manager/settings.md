---
sidebar_level: 3
sidebar_label: 'Settings Configuration'
sidebar_position: 2
description: 'Bank Accounts and Budget Categories Configuration'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Settings Configuration

The Expense Manager Settings panel allows users to configure account structures and classification categories that feed into the transaction ledgers, budgeting plans, and wealth dashboards.

---

## Bank Accounts

Users can manage cash, checking, savings, and credit card accounts. Editing an account's name automatically updates all historical references in database transactions.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/17-settings-accounts.png').default} alt="Bank Accounts Settings - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/17-settings-accounts.png').default} alt="Bank Accounts Settings - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Budget Categories

Categories act as classification anchors for monthly spending and savings envelope planners.

* **Spending**: Tracks monthly operational costs (e.g. food, utility bills).
* **Saving**: Targets allocation toward long-term savings envelopes.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/18-settings-categories.png').default} alt="Budget Categories Settings - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/18-settings-categories.png').default} alt="Budget Categories Settings - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>
