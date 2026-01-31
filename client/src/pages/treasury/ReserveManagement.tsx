import { motion } from "framer-motion";
import { Shield, RefreshCw, AlertTriangle, TrendingUp, Wallet, Lock } from "lucide-react";

export default function ReserveManagement() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="scanline" />
      <div className="grain" />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 mb-8 uppercase tracking-widest">
              <span className="text-primary">TREASURY</span>
              <span className="text-white/20">/</span>
              <span>RESERVES</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">MANAGEMENT</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Reserve Management
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Automated rebalancing protocols ensure <span className="text-primary font-medium">optimal capital efficiency</span> while maintaining emergency liquidity thresholds at all times.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Intelligent Reserve Optimization</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Reserve management is the backbone of CLAWDE's operational stability. Our automated systems continuously monitor capital allocation across all pools and positions, executing rebalancing operations whenever deviations exceed predefined thresholds. This ensures optimal capital utilization while maintaining robust safety margins.
              </p>
              <p>
                The reserve management system operates on a simple principle: capital should always be working to generate yield, but never at the expense of security or liquidity. We maintain strict minimum thresholds for emergency reserves that cannot be deployed regardless of yield opportunities elsewhere.
              </p>
              <p>
                Our rebalancing algorithms consider multiple factors including current yield rates, gas costs, slippage expectations, and lockup periods. The system will only execute a rebalance if the expected net benefit exceeds a minimum threshold, preventing unnecessary transaction costs from eroding returns.
              </p>
              <p>
                During periods of market stress, the system automatically shifts to a defensive posture, increasing emergency reserve allocations and reducing exposure to higher risk positions. This dynamic risk management approach has historically protected treasury value during market downturns while capturing upside during favorable conditions.
              </p>
            </div>
          </div>

          {/* Rebalancing Rules */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Rebalancing Protocol</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Our rebalancing protocol operates 24/7, continuously evaluating opportunities to optimize capital allocation. The system follows strict rules that prioritize security while maximizing yield efficiency. All rebalancing decisions are logged onchain for complete transparency.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: RefreshCw, title: "Auto-Rebalance", desc: "System automatically rebalances when any pool deviates more than 5% from target allocation. No manual intervention required. Rebalancing occurs during low-gas periods to minimize transaction costs and uses optimized routing to reduce slippage." },
                { icon: AlertTriangle, title: "Risk Triggers", desc: "Emergency rebalancing activates when volatility exceeds 3 standard deviations or liquidity drops below safety threshold. The system can execute full position exits within 15 minutes when risk triggers activate, moving funds to stable assets." },
                { icon: TrendingUp, title: "Yield Optimization", desc: "Capital flows dynamically to highest-yielding pools while respecting maximum exposure limits per protocol. The optimizer runs hourly simulations to identify the optimal allocation given current market conditions and gas costs." },
                { icon: Lock, title: "Lock Periods", desc: "Strategic positions with lock requirements are tracked separately with unlock schedules visible onchain. The system automatically queues withdrawal transactions before lock expiry to ensure capital is available when needed." }
              ].map((rule, i) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                      <rule.icon className="w-6 h-6 text-primary group-hover:text-background" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{rule.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Explanation */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">How Reserve Management Works</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                The reserve management system is built on a hierarchical model that prioritizes capital preservation above yield maximization. At the top of this hierarchy are our emergency reserves, which must always maintain minimum thresholds regardless of opportunity costs elsewhere.
              </p>
              <p>
                <strong className="text-white">Layer 1 | Emergency Reserves:</strong> These funds are held in the most liquid, lowest-risk positions available. Typically USDC in high security protocols or native SOL in our cold wallet. These reserves are designed to be accessible within minutes during crisis situations and are never deployed for yield generation.
              </p>
              <p>
                <strong className="text-white">Layer 2 | Operational Buffer:</strong> This layer provides daily operational flexibility, funding routine rebalancing operations and capturing time sensitive opportunities. Funds in this layer are held in liquid positions with immediate withdrawal capability.
              </p>
              <p>
                <strong className="text-white">Layer 3 | Active Deployment:</strong> The majority of treasury funds reside in this layer, actively generating yield across approved protocols. The system continuously optimizes allocation within this layer based on risk adjusted return profiles and correlation analysis.
              </p>
              <p>
                <strong className="text-white">Layer 4 | Strategic Positions:</strong> A small portion of funds may be allocated to longer-term strategic positions with lockup periods. These allocations require governance approval and are tracked separately from liquid reserves.
              </p>
            </div>
          </div>

          {/* Liquidity Status */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Liquidity Thresholds</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                These thresholds represent minimum requirements that must be maintained at all times. The system actively prevents any operation that would cause reserves to fall below these levels, regardless of potential yield opportunities.
              </p>
              <div className="space-y-8">
                {[
                  { label: "Emergency Reserve", current: "18%", target: "15%", status: "healthy", desc: "Funds available for immediate withdrawal during crisis events." },
                  { label: "Operational Buffer", current: "12%", target: "10%", status: "healthy", desc: "Day-to-day operational capital for rebalancing and opportunities." },
                  { label: "Quick Deploy", current: "8%", target: "5%", status: "healthy", desc: "Capital staged for rapid deployment to new opportunities." }
                ].map((threshold) => (
                  <div key={threshold.label} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-bold">{threshold.label}</span>
                        <p className="text-xs text-white/40 mt-1">{threshold.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-white/40">Target: {threshold.target}</span>
                        <span className="text-primary font-mono font-bold">{threshold.current}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                      <div className="absolute left-0 top-0 h-full bg-green-500/30" style={{ width: threshold.current }} />
                      <div className="absolute top-0 h-full w-0.5 bg-white/30" style={{ left: threshold.target }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Recent Rebalances</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                All rebalancing operations are recorded onchain with complete transaction details. Below are the most recent operations executed by the reserve management system.
              </p>
              <div className="space-y-4">
                {[
                  { action: "Move to Stake LP", amount: "$85", time: "2 hours ago", type: "yield", tx: "4xKm...9vRp" },
                  { action: "Emergency Reserve Top-up", amount: "$42", time: "1 day ago", type: "safety", tx: "7nLq...3wMx" },
                  { action: "Withdraw from Rollbit", amount: "$68", time: "3 days ago", type: "rebalance", tx: "2pYz...8kNr" }
                ].map((tx) => (
                  <div key={tx.action} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <Wallet className="w-5 h-5 text-primary" />
                        <div>
                          <span className="text-white font-bold text-sm">{tx.action}</span>
                          <p className="text-xs text-white/40">{tx.time}</p>
                        </div>
                      </div>
                      <span className="text-white font-mono font-bold">{tx.amount}</span>
                    </div>
                    <p className="text-[10px] font-mono text-primary pl-9">TX: {tx.tx}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
