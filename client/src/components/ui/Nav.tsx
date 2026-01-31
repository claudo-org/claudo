import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, FileText, Wallet, Zap, BrainCircuit, Share2, ChevronRight, Shield, Cpu, Lock, TrendingUp, BarChart3, Clock, Users, Coins, Database, Activity, Settings } from "lucide-react";
import { SiX } from "react-icons/si";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    label: "Treasury",
    href: "/treasury",
    icon: Wallet,
    description: "Capital management and yield optimization infrastructure",
    subItems: [
      { 
        label: "Vault Architecture", 
        href: "/treasury/vault", 
        desc: "Multi-signature capital segregation with institutional-grade security. Funds are isolated across cold storage, operational reserves, and deployment pools.",
        icon: Lock 
      },
      { 
        label: "Asset Deployment", 
        href: "/treasury/assets", 
        desc: "Strategic allocation across yield-bearing gaming positions. Real-time monitoring of liquidity depth, APY fluctuations, and risk exposure metrics.",
        icon: Database 
      },
      { 
        label: "Reserve Management", 
        href: "/treasury/reserves", 
        desc: "Automated rebalancing protocols ensure optimal capital efficiency while maintaining emergency liquidity thresholds at all times.",
        icon: Shield 
      },
    ]
  },
  {
    label: "Execution",
    href: "/execution",
    icon: Zap,
    description: "Deterministic trade execution and position management",
    subItems: [
      { 
        label: "Deterministic Engine", 
        href: "/execution/engine", 
        desc: "Rule-enforced execution authority system with sub-second transaction finality. Zero human intervention in live trading operations.",
        icon: Cpu 
      },
      { 
        label: "Safety Watchers", 
        href: "/execution/safety", 
        desc: "Distributed fail-safe monitoring nodes that continuously validate system health, circuit breakers, and anomaly detection across all active positions.",
        icon: Shield 
      },
      { 
        label: "Performance Metrics", 
        href: "/execution/metrics", 
        desc: "Real-time execution quality analytics including slippage analysis, gas optimization, and transaction success rates across supported chains.",
        icon: Activity 
      },
    ]
  },
  {
    label: "Intelligence",
    href: "/strategy",
    icon: BrainCircuit,
    description: "AI-powered strategy analysis and risk assessment",
    subItems: [
      { 
        label: "Claude Advisory Logic", 
        href: "/strategy/claude", 
        desc: "Claude-3.5 Sonnet analyzes on-chain patterns, market sentiment, and historical yield data to propose optimized capital allocation strategies.",
        icon: BrainCircuit 
      },
      { 
        label: "Risk Framework", 
        href: "/strategy/risk", 
        desc: "Predictive exposure control with dynamic position sizing. AI evaluates counterparty risk, smart contract audit status, and liquidity depth before any deployment.",
        icon: BarChart3 
      },
      { 
        label: "Alpha Generation", 
        href: "/strategy/alpha", 
        desc: "Continuous simulation of yield optimization routes. The system identifies arbitrage opportunities and inefficiencies across gaming protocol reward pools.",
        icon: TrendingUp 
      },
    ]
  },
  {
    label: "Distribution",
    href: "/distribution",
    icon: Share2,
    description: "Transparent profit sharing and holder rewards",
    subItems: [
      { 
        label: "Epoch Payouts", 
        href: "/distribution/epochs", 
        desc: "Weekly deterministic profit distribution cycles. Every epoch is cryptographically verifiable on-chain with complete transaction transparency.",
        icon: Clock 
      },
      { 
        label: "Holder Rewards", 
        href: "/distribution/rewards", 
        desc: "85% of net profits are automatically distributed to token holders. Pro-rata allocation based on verified wallet holdings at epoch snapshot.",
        icon: Users 
      },
      { 
        label: "Audit Trail", 
        href: "/distribution/audit", 
        desc: "Complete performance ledger with verifiable proof-of-yield. All harvest transactions, fee deductions, and distributions are publicly auditable.",
        icon: FileText 
      },
    ]
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/clawde/clawde", icon: Github },
  { label: "Twitter", href: "https://x.com/clauwdoxyz", icon: SiX },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 border-b border-white/5 bg-background/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer" data-testid="link-home">
            <img src="/clawde-logo.png" alt="CLAWDE Logo" className="w-8 h-8 object-contain" data-testid="img-logo" />
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary transition-all" data-testid="text-brand">
              CLAWDE
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 mr-8">
              {navigation.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link href={item.href} className="text-sm font-mono text-white/50 hover:text-primary transition-colors py-2 flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-[420px] bg-card border border-white/10 rounded-2xl p-6 shadow-2xl mt-2 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                        
                        {/* Section Header */}
                        <div className="mb-6 pb-4 border-b border-white/5">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-lg">{item.label}</h3>
                              <p className="text-[11px] text-white/40">{item.description}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {item.subItems.map((sub) => (
                            <Link key={sub.label} href={sub.href} className="block p-4 rounded-xl hover:bg-white/5 transition-colors group">
                              <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0 mt-0.5">
                                  <sub.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors mb-1">{sub.label}</div>
                                  <div className="text-[11px] text-white/40 leading-relaxed line-clamp-3">{sub.desc}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/5">
                          <Link href={item.href} className="flex items-center justify-between text-[10px] font-mono text-primary group uppercase tracking-widest">
                            View Full {item.label} Dashboard <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 px-4 border-l border-white/10">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <Link 
                href="/admin" 
                className="text-white/40 hover:text-primary transition-colors"
                data-testid="link-admin"
              >
                <Settings className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Mobile Hamburger Button */}
            <Button 
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-primary transition-colors"
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
            >
              <Menu className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-[110]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-card border-l border-white/10 z-[120] p-6 pt-6 overflow-y-auto"
            >
              {/* Close Button Inside Drawer */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <img src="/clawde-logo.png" alt="CLAWDE" className="w-8 h-8" />
                  <span className="font-bold text-white text-lg">CLAWDE</span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-primary transition-colors"
                  data-testid="button-close-menu"
                >
                  <X className="w-8 h-8" />
                </Button>
              </div>

              <div className="space-y-10">
                {navigation.map((item) => (
                  <div key={item.label} className="space-y-5">
                    {/* Section Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Link 
                          href={item.href} 
                          onClick={() => setIsOpen(false)}
                          className="text-xl font-bold text-white hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                        <p className="text-xs text-white/40 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Sub Items */}
                    <div className="pl-4 space-y-4 border-l-2 border-white/5 ml-6">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.label} 
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block group"
                        >
                          <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <sub.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-white/80 group-hover:text-primary transition-colors mb-1">{sub.label}</div>
                              <div className="text-[11px] text-white/30 leading-relaxed">{sub.desc}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Social Links */}
                <div className="pt-10 border-t border-white/5">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-6">Connect With Us</p>
                  <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.label}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors"
                      >
                        <social.icon className="w-6 h-6" />
                        <span className="text-sm font-mono uppercase">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] text-white/20 font-mono leading-relaxed">
                    CLAWDE is an autonomous execution platform for on-chain game yield. Intelligence advises, systems decide, and deterministic protocols execute.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
