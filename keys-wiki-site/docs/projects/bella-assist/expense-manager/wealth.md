---
sidebar_level: 3
sidebar_label: 'Wealth Manager'
sidebar_position: 4
description: 'Assets, Liabilities, Net Worth tracking and Asset Allocation ratios'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wealth Manager

The Wealth Manager provides deep portfolio analytics by aggregating asset valuations, simulating amortization schedules for outstanding debt, and computing financial health indicators.

---

## Assets Tracking

The Assets module supports tracking and valuation of various holdings grouped into five categories: **Equity**, **Debt**, **Real Estate**, **Commodities**, and **Cash & Bank**.

### Valuation & Performance Metrics

Assets are classified by valuation type:

* **Value-Based Assets**: Valuation is tracked chronologically based on ledger transactions.
  * *Invested Value* = `Sum(BUYS) - Sum(SELLS)`
  * *Current Value* = Snapshots set by official statement `REVALUE` entries, adjusted by subsequent transactions.
* **Unit-Based Assets**: Valuation is calculated dynamically:
  * `Current Value = Units Held × Current Unit Price`
* **Performance Calculations**:
  * `Absolute Returns = Current Value - Invested Value`
  * `Percentage Returns = (Absolute Returns / Invested Value) × 100` (computed if Invested Value > 0)

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/09-wealth-assets.png').default} alt="Assets Tracker - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/09-wealth-assets.png').default} alt="Assets Tracker - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Liabilities Tracking & Projections

The Liabilities module tracks scheduled EMI loans and custom non-EMI interest-bearing debt through a month-by-month simulation engine.

### Amortization Engine Mechanics

The engine calculates outstanding balances chronologically starting from the initial borrowing transaction up to the current date:

* **Interest Accrual**: Accrues monthly interest based on compounding configurations: **Monthly**, **Quarterly**, **Half-Yearly**, or **Yearly**.
* **Prepayments & Payments**: Directs custom prepayments or regular payments to satisfy accrued interest first, before reducing the remaining principal.
* **Moratoriums**: Supports configuration of absolute, interest-only, or interest-free moratoriums during the simulation.
* **Statement Reconciliation (`REVALUE`)**: Integrates official bank statement balances. The simulation engine snaps to the revalued amount and attributes any discrepancy between the expected and official balances as a positive (charges) or negative (relief) interest adjustment.
* **Payoff Projections**: Models future balances, tenure reductions, and interest savings by comparing the Ideal schedule (EMIs only) against the Actual/Projected path (inclusive of logged prepayments).

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/10-wealth-liabilities.png').default} alt="Liabilities Tracker - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/light/11-wealth-liabilities-charts.png').default} alt="Liabilities Curves - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/light/12-wealth-liabilities-ledger.png').default} alt="Liabilities Ledger - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/10-wealth-liabilities.png').default} alt="Liabilities Tracker - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/dark/11-wealth-liabilities-charts.png').default} alt="Liabilities Curves - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={require('../assets/images/dark/12-wealth-liabilities-ledger.png').default} alt="Liabilities Ledger - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Portfolio Net Worth

Net Worth is calculated as:

```text
Net Worth = (Sum of Asset Current Values) - (Sum of Liability Outstanding Balances)
```

The interface tracks historical net worth over a rolling 12-month period, mapping asset growth, debt reduction, and overall net worth progress.

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/13-wealth-networth.png').default} alt="Net Worth - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/13-wealth-networth.png').default} alt="Net Worth - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>

---

## Asset Allocation & Health Ratios

Ratios and charts help assess asset distribution and leverage risk against industry standards.

### Capital Allocation

* **Asset Distribution**: Percentage share of capital across the five core asset categories.
* **Liability Composition**: Outstanding debt types (secured vs unsecured).
* **Leverage Financing**: Ratio of self-owned equity against borrowed debt.

### Portfolio Health Indicators

* **Debt-to-Asset Ratio**: Measures overall leverage: `(Total Liabilities / Total Assets) × 100`.
  * **Low Risk (Healthy)**: `< 30%`
  * **Moderate Risk (Watch)**: `30% to 50%`
  * **High Risk (Leveraged)**: `> 50%`
* **Portfolio Liquidity Ratio**: Measures short-term reserves: `(Highly Liquid Assets / Total Assets) × 100`, where highly liquid assets comprise the **Equity** and **Cash & Bank** categories.
  * **Healthy Liquidity**: `>= 15%`
  * **Low Liquidity**: `< 15%`

<Tabs groupId="theme-preference">
  <TabItem value="light" label="Light Theme" default>
    <img src={require('../assets/images/light/14-wealth-allocation.png').default} alt="Portfolio Ratios - Light" style={{ borderRadius: '8px', border: '1px solid #ddd', maxWidth: '100%' }} />
  </TabItem>
  <TabItem value="dark" label="Dark Theme">
    <img src={require('../assets/images/dark/14-wealth-allocation.png').default} alt="Portfolio Ratios - Dark" style={{ borderRadius: '8px', border: '1px solid #333', maxWidth: '100%' }} />
  </TabItem>
</Tabs>
