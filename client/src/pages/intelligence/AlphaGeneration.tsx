import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Search, Zap, ArrowUpRight, Target } from "lucide-react";

export default function AlphaGeneration() {
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
              <span className="text-primary">INTELLIGENCE</span>
              <span className="text-white/20">/</span>
              <span>ALPHA</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">GENERATION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Alpha Generation
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Continuous simulation of yield optimization routes. The system identifies <span className="text-primary font-medium">arbitrage opportunities</span> and inefficiencies across gaming protocol reward pools.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Finding Edge in Onchain Gaming</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Alpha generation is the process of identifying opportunities that offer returns above the market baseline. In the context of onchain gaming yield, this means finding protocols, pools, or strategies that offer superior risk adjusted returns compared to simple alternatives.
              </p>
              <p>
                Our alpha generation system operates continuously, scanning dozens of protocols across multiple chains for opportunities. It looks for several types of alpha: yield arbitrage (where similar risk profiles offer different returns), timing alpha (entering positions before others recognize the opportunity), and structural alpha (exploiting inefficiencies in protocol design).
              </p>
              <p>
                Not every opportunity we identify gets executed. Each potential trade must pass through our risk framework and execution engine before capital is deployed. Many opportunities are rejected because the risk adjusted return doesn't meet our threshold, or because execution costs would eliminate the expected profit.
              </p>
              <p>
                We track our alpha generation performance rigorously. Every opportunity identified is logged, and we measure our hit rate (percentage of identified opportunities that were profitable), average return per trade, and the decay rate of opportunities (how quickly they disappear after identification). This data drives continuous improvement of our detection algorithms.
              </p>
            </div>
          </div>

          {/* Alpha Stats */}
          <div className="p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Monthly Alpha", value: "+6.8%", desc: "Above benchmark" },
                { label: "Opportunities Found", value: "47", desc: "This month" },
                { label: "Executed Trades", value: "18", desc: "Profitable signals" },
                { label: "Win Rate", value: "89.4%", desc: "Success rate" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-white/40">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Types of Alpha */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Types of Alpha We Target</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Yield Arbitrage:</strong> Different protocols often offer different returns for similar risk profiles. By continuously comparing yields across venues and accounting for the true risk of each, we can identify situations where capital should be reallocated to capture higher returns without increasing risk exposure.
              </p>
              <p>
                <strong className="text-white">Timing Alpha:</strong> New pools, incentive programs, or protocol launches often offer elevated yields that decay over time as more capital enters. Our monitoring systems detect these opportunities early, allowing us to capture the initial high yield period before competition drives returns down.
              </p>
              <p>
                <strong className="text-white">Structural Alpha:</strong> Some protocols have design quirks that create persistent opportunities. This might include inefficient fee structures, poorly designed incentive mechanisms, or arbitrage paths between related pools. These opportunities are rarer but can be more sustainable.
              </p>
              <p>
                <strong className="text-white">Information Alpha:</strong> By deeply understanding protocol mechanics and monitoring onchain activity, we sometimes identify opportunities before they become widely known. This might include detecting upcoming incentive changes, governance proposals that will affect yields, or shifts in user behavior that signal changing conditions.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Active Opportunities */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Active Opportunities</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Currently identified opportunities that are being evaluated or executed. Each opportunity shows its type, expected return, and current status.
              </p>
              <div className="space-y-4">
                {[
                  { type: "Arbitrage", source: "Stake", target: "Rollbit", spread: "0.42%", size: "$120", urgency: "high" },
                  { type: "Yield Gap", source: "SOL Pool", target: "USDC Pool", spread: "3.2%", size: "$250", urgency: "medium" },
                  { type: "LP Incentive", source: "Polymarket", target: "New Pool", spread: "28% APY", size: "$180", urgency: "medium" },
                  { type: "Fee Capture", source: "Pump.fun", target: "Revenue Share", spread: "2.1%", size: "$85", urgency: "low" }
                ].map((opp, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono px-2 py-1 rounded ${
                          opp.urgency === 'high' ? 'bg-red-500/10 text-red-400' :
                          opp.urgency === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        }`}>{opp.urgency.toUpperCase()}</span>
                        <span className="text-white font-bold">{opp.type}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                      <span>{opp.source}</span>
                      <Zap className="w-3 h-3 text-primary" />
                      <span>{opp.target}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Spread: <span className="text-primary">{opp.spread}</span></span>
                      <span className="text-white/40">Size: <span className="text-white">{opp.size}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discovery Engine */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Discovery Engine</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Our discovery engine runs multiple parallel processes to identify opportunities across the onchain gaming ecosystem.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Search, title: "Pool Scanner", desc: "Monitors liquidity pools across multiple protocols for yield anomalies and arbitrage windows. Runs continuous comparisons against historical baselines.", status: "Active" },
                  { icon: Sparkles, title: "Pattern Recognition", desc: "Machine learning models identify recurring profit patterns in historical trading data. These patterns help predict future opportunities.", status: "Active" },
                  { icon: Target, title: "Opportunity Scoring", desc: "Each opportunity is scored by expected value, risk, and execution probability. Only opportunities exceeding our threshold are forwarded for execution.", status: "Active" },
                  { icon: TrendingUp, title: "Trend Analysis", desc: "Tracks macro trends in gaming DeFi to anticipate emerging yield sources. Helps position the treasury ahead of market moves.", status: "Active" }
                ].map((engine, i) => (
                  <motion.div
                    key={engine.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <engine.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-bold">{engine.title}</h3>
                        <span className="text-[10px] font-mono text-green-400">{engine.status}</span>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed">{engine.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
