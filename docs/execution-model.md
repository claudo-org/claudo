# Execution Model

This document describes how Claudo evaluates decisions
and executes actions in a controlled and auditable manner.

Claudo does **not** allow advisory models to execute actions directly.

---

## Core Principle

Claudo enforces a strict separation between:

- **Decision Advisory** — reasoning and proposal generation
- **Execution Authority** — controlled, deterministic action execution

At no point does the advisory model hold execution credentials.

---

## Execution Lifecycle

1. **State Collection**
   - System state is collected from predefined sources
   - Includes balances, environment signals, limits, and execution context

2. **Decision Proposal**
   - The advisory model (Claude) receives the state snapshot
   - It proposes one or more candidate actions
   - Proposals are declarative, not imperative

3. **Rule Validation**
   - Proposed actions are validated against:
     - Safety constraints
     - Risk limits
     - Execution policies
   - Invalid actions are rejected and logged

4. **Controlled Execution**
   - Approved actions are executed by the executor
   - Execution credentials are isolated
   - Actions are deterministic and reproducible

5. **Result Logging**
   - All decisions, actions, and outcomes are recorded
   - Logs are structured for audit and replay

---

## Failure Handling

- Advisory failure → no execution
- Validation failure → no execution
- Execution failure → state rollback or safe halt

Claudo defaults to **inaction over unsafe action**.

---

## Design Guarantees

- Advisory models cannot bypass rules
- Execution behavior is predictable
- Every action is traceable to a validated proposal
