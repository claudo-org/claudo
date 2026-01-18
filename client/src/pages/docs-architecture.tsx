import { DocsLayout } from "./docs";
import { Link } from "wouter";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function DocsArchitecture() {
  const toc = [
    { id: "overview", label: "Overview", level: 2 },
    { id: "capital-flow", label: "Capital Flow", level: 2 },
    { id: "claudo-engine", label: "Claudo Engine", level: 2 },
    { id: "rule-engine", label: "Rule Engine", level: 2 },
    { id: "execution-engine", label: "Execution Engine", level: 2 },
    { id: "treasury", label: "Treasury System", level: 2 },
    { id: "distribution", label: "Distribution Logic", level: 2 },
  ];
  
  return (
    <DocsLayout toc={toc}>
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60 mb-4">
            <Link href="/docs" data-testid="link-breadcrumb-docs">
              <span className="cursor-pointer">Docs</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground" data-testid="breadcrumb-architecture">Architecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4" data-testid="text-architecture-title">
            System Architecture
          </h1>
          <p className="text-lg text-muted-foreground/70 font-light leading-relaxed">
            A deep dive into how CLAUDO components interact to create a fully autonomous gambling execution system.
          </p>
        </div>
        
        <section id="overview">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Overview
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              CLAUDO is architected as a closed-loop autonomous system. Once initialized, it operates continuously without human intervention, executing gambling sessions on Stake casino according to strict rules.
            </p>
            <div className="p-4 bg-muted/30 border border-border rounded-lg font-mono text-sm">
              <div className="text-primary">TREASURY</div>
              <div className="ml-4 text-muted-foreground">â†“ Capital allocation</div>
              <div className="text-primary ml-4">CLAUDO ENGINE</div>
              <div className="ml-8 text-muted-foreground">â†“ Decision advisory</div>
              <div className="text-primary ml-8">RULE ENGINE</div>
              <div className="ml-12 text-muted-foreground">â†“ Validated actions</div>
              <div className="text-primary ml-12">EXECUTION ENGINE</div>
              <div className="ml-16 text-muted-foreground">â†“ Session outcomes</div>
              <div className="text-primary ml-8">DISTRIBUTION</div>
              <div className="ml-12 text-muted-foreground">â†“ Holder payouts</div>
            </div>
          </div>
        </section>
        
        <section id="capital-flow">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Capital Flow
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              Capital enters the system through creator fees collected from token transactions. This funding model ensures sustainable operation without requiring external investment or user deposits.
            </p>
            <div className="grid gap-3">
              {[
                { step: "01", title: "Fee Collection", desc: "Creator fees are collected from every token transaction and routed to the treasury." },
                { step: "02", title: "Session Allocation", desc: "The treasury allocates capital for gambling sessions based on predefined rules." },
                { step: "03", title: "Execution", desc: "Allocated capital is deployed through the execution engine on Stake casino." },
                { step: "04", title: "Outcome Processing", desc: "Session results (positive or negative) are consolidated in the treasury." },
                { step: "05", title: "Distribution", desc: "Net positive outcomes are distributed to token holders proportionally." }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 border border-border/50 rounded-lg">
                  <span className="text-primary font-mono text-sm">{item.step}</span>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground/60 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="claudo-engine">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Claudo Engine
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              The Claudo Engine is powered by Claude AI, providing real-time analysis of session dynamics. It observes patterns, evaluates conditions, and generates decision advisories.
            </p>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground font-medium mb-2">Important: Claude advises, but does not decide.</p>
              <p className="text-sm text-muted-foreground/70">
                The engine provides recommendations based on session analysis, but all final decisions must pass through the Rule Engine for validation.
              </p>
            </div>
            <p>
              The engine monitors:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Current session performance and trajectory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Historical pattern recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Risk exposure levels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Optimal stake sizing recommendations</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section id="rule-engine">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Rule Engine
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              The Rule Engine is the guardian of the system. Every action must pass through its validation layer before execution. Rules are absolute and cannot be overridden.
            </p>
            <div className="grid gap-3">
              {[
                { rule: "Exposure Limits", desc: "Maximum capital at risk per session is capped at a predetermined percentage of treasury." },
                { rule: "Stake Sizing", desc: "Individual bet sizes are calculated based on current session performance and remaining allocation." },
                { rule: "Stop Conditions", desc: "Hard stops trigger when loss thresholds are reached. No negotiation. No extension." },
                { rule: "Cooldown Logic", desc: "Mandatory waiting periods between sessions prevent emotional chasing behavior." },
                { rule: "Game Selection", desc: "Only approved games (slots, blackjack, roulette) on Stake are eligible for execution." }
              ].map((item) => (
                <div key={item.rule} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="text-sm font-medium text-foreground">{item.rule}</h4>
                  <p className="text-sm text-muted-foreground/60 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="execution-engine">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Execution Engine
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              Once the Rule Engine validates an action, the Execution Engine deploys it with precision. There is no hesitation, no second-guessing, no deviation from the validated parameters.
            </p>
            <p>
              The engine interfaces directly with Stake casino through secure automation, executing:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Slot spins with validated stake amounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Blackjack hands with strategy-optimal decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span>Roulette bets with predetermined coverage patterns</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section id="treasury">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Treasury System
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              The Claudo Treasury is the financial backbone of the system. It manages all capital flows with complete transparency.
            </p>
            <div className="p-4 bg-muted/30 border border-border rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground/60 block">Inflows</span>
                  <span className="text-foreground">Creator fees</span>
                </div>
                <div>
                  <span className="text-muted-foreground/60 block">Outflows</span>
                  <span className="text-foreground">Session allocations, distributions</span>
                </div>
                <div>
                  <span className="text-muted-foreground/60 block">Reserve</span>
                  <span className="text-foreground">Minimum 20% maintained</span>
                </div>
                <div>
                  <span className="text-muted-foreground/60 block">Audit</span>
                  <span className="text-foreground">Real-time public tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="distribution">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Distribution Logic
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              When sessions generate positive returns, the distribution engine calculates and executes payouts to token holders.
            </p>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
              <p className="text-sm text-foreground font-medium">Distribution Formula:</p>
              <code className="text-sm text-primary font-mono block">
                holder_payout = (holder_tokens / total_supply) Ã— net_positive_returns
              </code>
            </div>
            <p>
              Distributions are processed automatically at the end of each profitable session. Holders can track their rewards through the dashboard without connecting their wallet.
            </p>
          </div>
        </section>
        
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <Link href="/docs" data-testid="link-back-overview">
            <span className="text-sm text-muted-foreground cursor-pointer">
              Back to Overview
            </span>
          </Link>
          <Link href="/docs/roadmap" data-testid="link-next-roadmap">
            <span className="text-sm text-primary cursor-pointer">
              Next: Roadmap
            </span>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
