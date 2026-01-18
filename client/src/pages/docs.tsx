import { Link, useLocation } from "wouter";
import { ChevronRight, ExternalLink, BookOpen, Layers, Map, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import claudoLogo from "@assets/claudo-logo.png";

const navItems = [
  { label: "Overview", href: "/docs", icon: BookOpen },
  { label: "Architecture", href: "/docs/architecture", icon: Layers },
  { label: "Roadmap", href: "/docs/roadmap", icon: Map },
];

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const externalLinks = [
  { label: "GitHub", href: "https://github.com/orgs/claudo-org/repositories", icon: Github },
  { label: "X", href: "https://x.com/helloclaudo", icon: XIcon },
];


function DocsSidebar() {
  const [location] = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer" data-testid="link-docs-home">
            <img src={claudoLogo} alt="Claudo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-light tracking-widest text-foreground">CLAUDO</span>
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location === item.href;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <Icon className="w-4 h-4" />
                        <span data-testid={`nav-${item.label.toLowerCase()}`}>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>External</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {externalLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`nav-external-${item.label.toLowerCase()}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground/60 font-mono">v1.0</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function TableOfContents({ items }: { items: { id: string; label: string; level: number }[] }) {
  return (
    <div className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-20 py-8">
        <span className="text-xs text-muted-foreground/60 font-light tracking-wider uppercase">On this page</span>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`block text-sm text-muted-foreground font-light ${item.level === 2 ? "pl-0" : "pl-4"}`}
                data-testid={`link-toc-${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function DocsLayout({ children, toc }: { children: React.ReactNode; toc?: { id: string; label: string; level: number }[] }) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <DocsSidebar />
          
          <div className="flex flex-col flex-1">
            <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
              <div className="flex items-center justify-between h-14 px-4 lg:px-8">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/docs">
                      <span className="cursor-pointer" data-testid="breadcrumb-docs">Docs</span>
                    </Link>
                  </div>
                </div>
                
                <Link href="/dash">
                  <Button variant="outline" size="sm" data-testid="button-dashboard">
                    Dashboard
                  </Button>
                </Link>
              </div>
            </header>
            
            <div className="flex flex-1 overflow-auto">
              <main className="flex-1 min-w-0 px-4 py-8 lg:px-8 xl:px-12">
                <div className="max-w-3xl">
                  {children}
                </div>
              </main>
              
              {toc && toc.length > 0 && <TableOfContents items={toc} />}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

function QuickStartCard({ title, description, href, icon: Icon }: { title: string; description: string; href: string; icon: React.ElementType }) {
  return (
    <Link href={href} data-testid={`link-card-${title.toLowerCase().replace(/\s/g, "-")}`}>
      <div 
        className="group p-5 border border-border rounded-md hover-elevate cursor-pointer"
        data-testid={`card-${title.toLowerCase().replace(/\s/g, "-")}`}
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-medium text-foreground flex items-center gap-2">
              {title}
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p className="text-sm text-muted-foreground/70 font-light mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DocsOverview() {
  const toc = [
    { id: "getting-started", label: "Getting Started", level: 2 },
    { id: "core-concepts", label: "Core Concepts", level: 2 },
    { id: "system-components", label: "System Components", level: 2 },
    { id: "transparency", label: "Transparency", level: 2 },
  ];
  
  return (
    <DocsLayout toc={toc}>
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4" data-testid="text-docs-title">
            CLAUDO Documentation
          </h1>
          <p className="text-lg text-muted-foreground/70 font-light leading-relaxed">
            Learn how the autonomous gambling execution system operates, from treasury management to outcome distribution.
          </p>
        </div>
        
        <section id="getting-started">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Getting Started
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <QuickStartCard 
              title="Architecture" 
              description="Understand the system design and component interactions"
              href="/docs/architecture"
              icon={Layers}
            />
            <QuickStartCard 
              title="Roadmap" 
              description="Explore planned features and development milestones"
              href="/docs/roadmap"
              icon={Map}
            />
          </div>
        </section>
        
        <section id="core-concepts">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Core Concepts
          </h2>
          <div className="space-y-4 text-muted-foreground/80 font-light leading-relaxed">
            <p>
              CLAUDO is an autonomous gambling execution framework that removes human emotion from the decision-making process. The system operates on three fundamental principles:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span><strong className="text-foreground font-medium">Rule Supremacy</strong> â€” All execution is governed by predefined rules. No manual overrides. No exceptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span><strong className="text-foreground font-medium">Treasury Discipline</strong> â€” Capital flows through a transparent treasury system funded by creator fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">â€¢</span>
                <span><strong className="text-foreground font-medium">Outcome Distribution</strong> â€” Session results are distributed to token holders through deterministic logic.</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section id="system-components">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            System Components
          </h2>
          <div className="grid gap-4">
            {[
              { name: "Claudo Engine", desc: "Analyzes session dynamics and generates decision advisories based on real-time conditions." },
              { name: "Rule Engine", desc: "Enforces exposure limits, stake sizing, stop conditions, and cooldown logic." },
              { name: "Execution Engine", desc: "Deploys validated actions with deterministic precision on Stake casino." },
              { name: "Claudo Treasury", desc: "Manages creator fee accumulation, session allocation, and outcome consolidation." }
            ].map((component, index) => (
              <div key={component.name} className="p-4 border border-border/50 rounded-md" data-testid={`component-${index}`}>
                <h4 className="text-sm font-medium text-foreground mb-1">{component.name}</h4>
                <p className="text-sm text-muted-foreground/60 font-light">{component.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section id="transparency">
          <h2 className="text-xl font-light tracking-wide text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Transparency
          </h2>
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-md">
            <p className="text-muted-foreground/80 font-light leading-relaxed mb-4">
              Every session, every decision, every distribution is permanently recorded and publicly reviewable. The system provides:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground/70 font-light">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Full execution logs with timestamps
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Treasury flow tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Distribution history per wallet
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Rule violation reports
              </li>
            </ul>
          </div>
        </section>
        
        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground/50">
            <span>Last updated: January 2026</span>
            <a 
              href="https://github.com/orgs/claudo-org/repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              data-testid="link-edit-github"
            >
              Edit on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
