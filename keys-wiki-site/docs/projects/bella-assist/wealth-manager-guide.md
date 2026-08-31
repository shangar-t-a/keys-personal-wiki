---
sidebar_label: 'Wealth Manager Guide'
sidebar_position: 2
description: 'Complete guide to the Wealth Manager: assets, liabilities, net worth, and portfolio allocation'
---

# Wealth Manager: User Guide

This guide explains every value, number, and metric you see in the Wealth Manager so you always know exactly what you are looking at.

## Assets

### What is an Asset?

An asset is anything you own that has financial value – bank savings, stocks, gold, property, mutual funds, and so on. The Wealth Manager tracks these in one place and keeps a history of every change.

### Asset Categories

Your assets are organized into five buckets:

| Category | What belongs here |
| --- | --- |
| Equity | Stocks, mutual funds, ETFs, NPS equity |
| Debt | Fixed deposits, PPF, bonds, EPF |
| Real Estate | Property, land, REITs |
| Commodities | Physical gold/silver, digital gold, sovereign gold bonds |
| Cash / Bank | Savings accounts, current accounts, cash in hand |

### What do "Invested Value" and "Current Value" mean?

**Invested Value** is how much of your own money you have put in – the total cost of what you bought, minus what you sold.

**Current Value** is what those assets are worth today.

For most assets like bank balances or FDs, the current value is whatever you last recorded as a statement balance (a "Revalue" entry). For market assets like stocks or mutual funds, the current value is calculated as `units you hold × today's price`.

**Gain / Loss** is simply `Current Value − Invested Value`. A positive number means you are in profit; negative means a loss.

### What is a "Unit-Based" vs "Value-Based" asset?

- **Value-Based** (e.g., bank savings, PPF): The value is a plain INR amount. You update it by adding a new statement balance.
- **Unit-Based** (e.g., stocks, gold, mutual funds): The value is calculated automatically from `units held × price per unit`. When you buy or sell, you record the number of units and the price. The app does the math.

### How do I update an asset's value?

- **Bank / FD / PPF:** Add a `Revalue` transaction with your latest statement balance.
- **Stocks / Gold / MF:** Add a `Buy` or `Sell` transaction with the number of units and the price. The app will try to fetch the live price automatically for well-known assets.

### Transaction types for assets

| Type | When to use |
| --- | --- |
| Buy | You purchased or deposited into this asset |
| Sell | You sold or withdrew from this asset |
| Revalue | You have a statement balance to record as the current value |

---

## Liabilities

### What is a Liability?

A liability is money you owe – personal loans, home loans, credit card balances, family debts, and so on. Tracking them alongside your assets gives you your real net worth.

### Key Values on the Liability Card

| Value | What it means |
| --- | --- |
| **Original Loan Amount** | The total principal you borrowed (sum of all loan disbursals) |
| **Current Outstanding** | What you owe right now, calculated month by month |
| **Total Repaid** | Everything you have paid back so far (EMIs + extra payments) |
| **Accumulated Interest** | Total interest charged on this loan to date |
| **Progress %** | How much of the original loan you have paid off: `(1 − outstanding / original) × 100` |
| **EMI** | Your scheduled monthly payment |
| **Start Date** | The date your first loan instalment began |
| **Projected End Date** | When the loan will be fully paid off at the current pace |

### How is the outstanding balance calculated?

The app simulates your loan month by month:

1. Every month, interest is accrued on your opening balance using your annual interest rate.
2. Your scheduled EMI is applied.
3. Any extra repayments you have logged are also applied.
4. If you have recorded a bank statement balance (a "Revalue" entry), that takes over as the authoritative balance for that month – overriding the simulation.

This means **you do not need to log every EMI manually**. The app assumes each month's scheduled EMI was paid unless you record something different. When you get your bank statement, just record a Revalue to anchor the simulation to reality.

### Transaction types for liabilities

| Type | When to use |
| --- | --- |
| Borrow | Initial loan disbursal or additional top-up borrowing |
| Repay | An extra payment you made on top of your scheduled EMI (part-payment, prepayment) |
| Revalue | Your bank's official outstanding balance from a statement – this is the most important entry |

:::tip Best Practice
Log a Revalue entry every time you receive a bank statement. This keeps the projected curves accurate and reconciles any missed EMIs or bank charges automatically.
:::

### What is a "Revalue" on a liability?

When you log a Revalue with your bank statement's outstanding balance, the app:

- Sets the closing balance for that month to exactly that amount.
- Attributes any difference from the simulated value as interest or charges.
- Resumes normal simulation from that balance going forward.

This is the recommended way to handle missed payments, late fees, or prepayment adjustments – instead of manually entering every bank charge, just log the bank's number.

### What if I missed a payment?

If you miss a payment and do not log anything, the app assumes the EMI was paid on time. When you next record a bank statement Revalue (which will show a higher balance than expected), the simulation reconciles the difference. The accumulated interest shown will increase to reflect the actual situation.

### Delayed / backdated entry

You can log any transaction with a past date. The simulation engine replays the full history from day one in the correct chronological order, so entering data late does not break the calculations.

---

## Projections and Intelligence (Liabilities)

The projections graph and metrics answer the key question: **how much are your prepayments actually helping?**

### The Graph

The graph shows four curves over time:

| Curve | What it shows |
| --- | --- |
| **Ideal Balance** | How the principal would have decreased if you paid only the scheduled EMI every month from day one |
| **Actual / Projected Balance** | How your balance actually moved (historical) and will move (projected) based on real payments |
| **Ideal Interest** | Cumulative interest under the ideal schedule |
| **Actual / Projected Interest** | Cumulative interest as it actually accrued and will accrue |

When your actual balance is **below** the ideal balance, you are ahead of schedule – prepayments are working.

### Tenure Saved

This is how many months earlier your loan will end compared to the original schedule.

- **Positive value:** You are ahead – you'll finish early. Your prepayments have shortened the loan.
- **Negative value:** You are behind – the loan will end later than planned. This happens after missed payments or penalty charges.

### Interest Saved

How much less total interest you will pay compared to the ideal schedule.

- **Positive value:** Prepayments have reduced your total interest burden.
- **Negative value:** Missed payments or charges have increased your total interest beyond what was originally planned.

### Projected End Date

The date when your loan will be fully paid off if you continue paying the current scheduled EMI from today's outstanding balance, with no further prepayments or missed payments.

---

## Net Worth Tab

Your Net Worth is the ultimate measure of your financial health. It is calculated by taking the total value of what you own (Assets) and subtracting the total value of what you owe (Liabilities):

```
Net Worth = Sum of all Asset Current Values − Sum of all Liability Outstanding Balances
```

### 1. High-Level Summary Cards

- **Current Net Worth:** The net value of your portfolio (`Assets − Liabilities`).
- **Total Assets:** The current valuation of all items you own.
- **Total Liabilities:** The sum of all outstanding debt balances.

### 2. Historical Portfolio Trajectory Chart

This composed chart tracks the last 12 months of your portfolio's history:

- **Total Assets** (Green Area): Shows the growth of your investments and savings.
- **Total Liabilities** (Red Area): Shows the decrease (or increase) of outstanding debt.
- **Net Worth** (Blue Line): Displays the overall upward/downward trend of your self-owned wealth.

### 3. Historical Net Worth Ledger

A detailed month-over-month ledger showing the exact asset, liability, and net worth balance for past months along with your MoM growth percentage.

---

## Allocation Tab

Diversification is key to managing risk. The Allocation Tab helps you visualize your portfolio structure.

### 1. Asset &amp; Liability Distribution Donut Charts

- **Asset Distribution:** Shows the percentage of your capital allocated across cash/bank, equities, real estate, commodities, and debt instruments.
- **Liability Distribution:** Shows the breakdown of your borrowing (secured loans vs unsecured loans vs revolving credit cards).

### 2. Asset Financing Leverage Bar

This horizontal bar visualizes your leverage split:

- **Equity (Self-Owned):** The net percentage of your assets financed by your own wealth.
- **Debt (Borrowed):** The percentage of your assets financed by borrowed capital.
- *Note:* Ideally, your self-owned Equity should be significantly larger than your Debt.

### 3. Portfolio Health Metrics &amp; Ratios

These metrics calculate risk based on industry standard limits:

- **Debt-to-Asset Ratio:** Calculates total leverage: `(Total Liabilities / Total Assets) × 100`.
  - **Low Risk (Healthy):** Under 30%. Your portfolio has a very strong, safe financial cushion.
  - **Moderate Risk (Watch):** 30% to 50%. You are utilizing leverage, but it should be monitored.
  - **High Risk (Leveraged):** Over 50%. More than half of your assets are debt-financed, signifying high leverage risk.
- **Portfolio Liquidity Ratio:** Calculates the percentage of your portfolio in highly liquid assets (Cash/Bank savings + Equities) that can be quickly converted to cash:
  - **Healthy Liquidity:** 15% or higher (target zone is 15% to 35%). Ensures you can meet short-term emergency cash needs without being forced to sell illiquid assets (like property) at a loss.
  - **Low Liquidity:** Under 15%. A warning sign that too much of your wealth is tied up in illiquid holdings.

---

## Currency and Display

All values are in **Indian Rupees (₹)** with standard Indian comma grouping:

- Thousands: `₹1,000`
- Lakhs: `₹1,00,000`
- Crores: `₹1,00,00,000`

Decimal places are always shown to two places (e.g., `₹12,50,000.00`).
