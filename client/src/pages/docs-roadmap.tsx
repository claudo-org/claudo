import { DocsLayout } from "./docs";
import { Link } from "wouter";
import { ChevronRight, Check, Circle, Clock } from "lucide-react";

type Phase = {
  phase: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  items: { title: string; status: "completed" | "in-progress" | "planned"; description?: string }[];
};

const roadmapPhases: Phase[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    items: [
      { title: "Core architecture design", status: "completed" },
      { title: "Rule engine implementation", status: "completed" },
      { title: "Treasury contract deployment", status: "completed" },
      { title: "Stake integration research", status: "completed" },
    ]
  },
  {
    phase: "Phase 2",
    title: "Engine Development",
    status: "in-progress",
    items: [
      { title: "Claudo Engine integration", status: "completed", description: "Claude AI advisory system" },
      { title: "Execution engine automation", status: "in-progress", description: "Automated Stake interactions" },
      { title: "Real-time monitoring dashboard", status: "completed" },
      { title: "Distribution logic implementation", status: "in-progress" },
    ]
  },
  {
    phase: "Phase 3",
    title: "Launch Preparation",
    status: "planned",
    items: [
      { title: "Security audit", status: "planned", description: "Third-party contract review" },
      { title: "Beta testing with select holders", status: "planned" },
      { title: "Public dashboard launch", status: "planned" },
      { title: "Documentation finalization", status: "planned" },
    ]
  },
  {
    phase: "Phase 4",
    title: "Full Deployment",
    status: "planned",
    items: [
      { title: "Mainnet treasury activation", status: "planned" },
      { title: "First autonomous session", status: "planned" },
      { title: "Holder distribution initiation", status: "planned" },
      { title: "Community governance framework", status: "planned" },
    ]
  },
  {
    phase: "Phase 5",
    title: "Expansion",
    status: "planned",
    items: [
      { title: "Additional game integrations", status: "planned" },
      { title: "Multi-platform execution", status: "planned", description: "Beyond Stake" },
      { title: "Advanced analytics dashboard", status: "planned" },
      { title: "API access for partners", status: "planned" },
    ]
  }
];

function StatusIcon({ status }: { status: "completed" | "in-progress" | "planned" }) {
  switch (status) {
    case "completed":
      return <Check className="w-4 h-4 text-primary" />;
    case "in-progress":
      return <Clock className="w-4 h-4 text-primary animate-pulse" />;
    case "planned":
      return <Circle className="w-4 h-4 text-muted-foreground/40" />;
  }
}

function StatusBadge({ status }: { status: "completed" | "in-progress" | "planned" }) {
  const styles = {
    completed: "bg-primary/20 text-primary border-primary/30",
    "in-progress": "bg-primary/10 text-primary border-primary/20",
    planned: "bg-muted text-muted-foreground border-muted-foreground/20",
  };
  
  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-light border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function DocsRoadmap() {
  const toc = roadmapPhases.map((phase) => ({
    id: phase.phase.toLowerCase().replace(" ", "-"),
    label: `${phase.phase}: ${phase.title}`,
    level: 2,
  }));
  
  return (
    <DocsLayout toc={toc}>
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60 mb-4">
            <Link href="/docs" data-testid="link-breadcrumb-docs">
              <span className="cursor-pointer">Docs</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground" data-testid="breadcrumb-roadmap">Roadmap</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4" data-testid="text-roadmap-title">
            Development Roadmap
          </h1>
          <p className="text-lg text-muted-foreground/70 font-light leading-relaxed">
            Track the progress of CLAUDO development from foundation to full autonomous operation.
          </p>
        </div>
        
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground/70">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground/70">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-4 h-4 text-muted-foreground/40" />
                <span className="text-muted-foreground/70">Planned</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground/50 font-mono">Updated: January 2026</span>
          </div>
        </div>
        
        <div className="space-y-8">
          {roadmapPhases.map((phase, phaseIndex) => (
            <section key={phase.phase} id={phase.phase.toLowerCase().replace(" ", "-")} className="relative">
              {phaseIndex < roadmapPhases.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-px bg-border" />
              )}
              
              <div className="flex items-start gap-4">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1
                  ${phase.status === "completed" ? "bg-primary" : phase.status === "in-progress" ? "bg-primary/50" : "bg-muted"}
                `}>
                  {phase.status === "completed" ? (
                    <Check className="w-3.5 h-3.5 text-background" />
                  ) : phase.status === "in-progress" ? (
                    <Clock className="w-3.5 h-3.5 text-background" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  )}
                </div>
                
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-light tracking-wide text-foreground">
                      {phase.phase}: {phase.title}
                    </h2>
                    <StatusBadge status={phase.status} />
                  </div>
                  
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start gap-3 p-3 border border-border/50 rounded-lg"
                        data-testid={`roadmap-item-${phase.phase.toLowerCase().replace(" ", "-")}-${itemIndex}`}
                      >
                        <StatusIcon status={item.status} />
                        <div>
                          <span className={`text-sm ${item.status === "completed" ? "text-foreground" : "text-muted-foreground"}`}>
                            {item.title}
                          </span>
                          {item.description && (
                            <p className="text-xs text-muted-foreground/50 mt-0.5">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        
        <div className="p-6 bg-muted/30 border border-border rounded-md text-center">
          <p className="text-muted-foreground/70 font-light mb-2">
            Have suggestions for the roadmap?
          </p>
          <a 
            href="https://github.com/orgs/claudo-org/repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary"
            data-testid="link-github-issue"
          >
            Open an issue on GitHub
          </a>
        </div>
        
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <Link href="/docs/architecture" data-testid="link-prev-architecture">
            <span className="text-sm text-muted-foreground cursor-pointer">
              Architecture
            </span>
          </Link>
          <Link href="/docs" data-testid="link-back-overview">
            <span className="text-sm text-primary cursor-pointer">
              Back to Overview
            </span>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
                    }
