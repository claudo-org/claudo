# Security Model

This document outlines the security assumptions, trust boundaries,
and threat mitigations within the Clawdo framework.

Clawdo is designed under the assumption that **advisory models are untrusted by default**.

---

## Trust Boundaries

Clawdo explicitly separates the system into trust domains:

### Untrusted Domain
- Decision advisory models (e.g. Claude)
- External data inputs
- Non-deterministic reasoning components

### Trusted Domain
- Rule Engine
- Executor
- Execution credentials
- Logging and reporting systems

No component in the untrusted domain has direct access
to execution authority or credentials.

---

## Advisory Model Constraints

The advisory model:

- Cannot execute actions
- Cannot access private keys or credentials
- Cannot bypass rule validation
- Cannot modify execution logic
- Cannot persist state across executions unless explicitly allowed

All advisory outputs are treated as **untrusted suggestions**.

---

## Rule Enforcement

All proposed actions must pass through the Rule Engine, which enforces:

- Static constraints
- Dynamic risk limits
- Context-aware safety policies
- Execution allowlists

Rules are evaluated deterministically and cannot be overridden
by advisory input.

---

## Threat Scenarios & Mitigations

### Malicious or Unsafe Advisory Output
- Mitigation: Rule rejection + logging
- Result: No execution

### Advisory Hallucination
- Mitigation: Schema validation + constraints
- Result: No execution

### Execution Failure
- Mitigation: Safe halt or rollback
- Result: System enters known-safe state

### Replay or State Drift
- Mitigation: Deterministic execution and structured logs
- Result: Full auditability and replay support

---

## Security Posture

Claudo follows a **default-deny execution policy**.

If an action is not explicitly allowed, it is not executed.

Safety is prioritized over liveness.
