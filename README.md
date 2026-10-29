# Cane360 Frontend MVP

A responsive Next.js + React + TypeScript + Tailwind CSS frontend prototype based on the supplied Cane360 Unified MVP Specification Pitch.

## Features in this demo
- Operations dashboard with summary metrics, recent tickets, settlement progress and attention items.
- Harvest ticket creation with generated 4-digit PIN (local demo state only).
- Weighbridge check-in by PIN; gross/tare validation, net weight calculation and >15% variance flagging against the estimated field tonnage.
- Ticket search and status tracking.
- Deduction waterfall overview and illustrative net-payable estimator.
- Settlement review queue and disputes/exception review UI.
- Responsive layout for desktop, tablet and mobile.

## Requirements
- Node.js 20.9 or newer recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Project structure
```text
src/
  app/
    globals.css       # Tailwind import and responsive design system
    layout.tsx        # Root layout and metadata
    page.tsx          # MVP page orchestration and demo interactions
  components/
    Sidebar.tsx       # Main navigation
    Topbar.tsx        # Page heading, date and utility actions
    StatusBadge.tsx   # Shared ticket status label
  lib/
    data.ts           # Typed demo records and formatting helpers
```

## Important MVP boundaries
This is a frontend-only prototype. State is held in the browser and resets on refresh. There is no Go API, database, authentication, USSD/SMS provider, IndexedDB offline queue, M-Pesa/Daraja or PesaLink integration. No actual payment or SMS is sent. Deduction amounts/rates and financial dashboard values are illustrative and must be verified/configured with the mill/cooperative before real use.

## Suggested next steps
1. Define Go API contracts for tickets, weighbridge entries, deductions, disputes and settlement approvals.
2. Replace local state with API calls and server-side validation.
3. Add role-based access for cooperative supervisor, driver, weighbridge clerk, manager and finance officer.
4. Add durable audit records, PostgreSQL persistence and a PWA/offline sync queue.
5. Integrate SMS/USSD and payment providers only after credentials, compliance and test environments are ready.
