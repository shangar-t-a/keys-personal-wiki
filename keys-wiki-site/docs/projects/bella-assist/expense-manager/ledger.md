---
sidebar_level: 3
sidebar_label: 'Ledgers & Planning'
sidebar_position: 3
description: 'Account Balances, Savings Envelopes, and Monthly Budgeting Ledgers'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ledgers & Budget Planning

Track liquid assets, allocate monthly incomes, and monitor savings envelope progress through active ledger interfaces.

---

## Account Balances

The Account Balances dashboard displays metrics and audit ledgers to monitor total liquid capital.

* **KPI Summaries**: Top-level cards displaying aggregate **Starting Balance**, **Current Balance**, **Credit Used**, and **Net Balance**.
* **Monthly Audit Table**: A detailed list of accounts tracking month-over-month balances and historical running totals.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/04-spending-accounts.png').default} alt="Account Balances Dashboard - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/04-spending-accounts.png').default} alt="Account Balances Dashboard - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Savings Envelopes

Savings envelopes represent dedicated, goal-based sub-buckets of cash (e.g. emergency reserves, travel funds).

* **Envelopes Overview**: Visualizes active envelope distributions using a composition donut chart.
* **Allocation Ledger**: Tracks individual deposit and withdrawal entries per envelope, showing progress against targets.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/05-savings-envelopes.png').default} alt="Savings Envelopes Overview - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/light/06-savings-envelopes-txs.png').default} alt="Savings Envelopes Ledger - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/05-savings-envelopes.png').default} alt="Savings Envelopes Overview - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/dark/06-savings-envelopes-txs.png').default} alt="Savings Envelopes Ledger - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Monthly Budget Allocation

Before each budgeting period begins, users allocate income into categories and envelopes.

* **Period Allocation Planner**: A visual planner displaying allocations as SVG segments. Slices can be edited dynamically with automatic database synchronization.
* **Monthly Checklist**: A validation checklist displaying envelope allocations, notes, and operations (Add, Edit, Sync Previous month, or Reset).

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/08-budget-visuals.png').default} alt="Period Allocation Planner - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/light/07-budget-checklist.png').default} alt="Monthly Allocation Checklist - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/08-budget-visuals.png').default} alt="Period Allocation Planner - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/dark/07-budget-checklist.png').default} alt="Monthly Allocation Checklist - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>
