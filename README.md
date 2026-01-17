# Claudo

Claude-powered decision advisory framework for autonomous execution systems.

Claudo is a modular system architecture that separates **decision intelligence**
from **execution authority**.

Claude is used as a decision advisor that analyzes observed system state
and proposes actions.

All execution is performed by a controlled, rule-validated executor,
ensuring safety, auditability, and deterministic behavior.

---
## Why Claudo Exists

Modern automation systems face two fundamental limitations:

1. AI models provide powerful reasoning, but are unsafe to execute actions directly.
2. Deterministic systems are safe and predictable, but lack adaptive decision-making.

Claudo bridges this gap by isolating reasoning from execution,
combining adaptive intelligence with strict execution controls.
---

## Core Principles

- **Advisory-only AI**  
  Claude proposes actions but never executes them.

- **Rule-enforced execution**  
  Every proposed action is validated against predefined constraints.

- **Deterministic & auditable**  
  All executions are reproducible, logged, and reviewable.

- **Separation of concerns**  
  Intelligence ≠ Authority.

---

## High-Level Execution Flow

1. System state is collected
2. Claude evaluates state and proposes actions
3. Rule engine validates proposals
4. Executor performs allowed actions
5. Results are logged and reported

> Claude cannot bypass rules, access credentials, or trigger execution directly.

---

## Architecture

Detailed system architecture and component responsibilities are documented here:

📄 **[System Architecture](./docs/architecture.md)**

---

## Status

This repository currently contains **architecture and design documentation**.  
Implementation modules will be added incrementally.

---

## Disclaimer

Claudo is a **general-purpose automation framework** designed to explore
safe architectures for AI-assisted decision advisory systems.

Claude is referenced as an **external large language model** used solely
for **decision advisory and reasoning support** within a constrained,
rule-governed execution environment.

Claudo is an **independent open-source project** and is **not affiliated with,
endorsed by, or maintained by Anthropic** or the Claude team.
