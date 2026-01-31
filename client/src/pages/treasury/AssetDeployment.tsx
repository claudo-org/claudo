import { motion } from "framer-motion";
import { Database, TrendingUp, BarChart3, Layers, Activity, Coins } from "lucide-react";

export default function AssetDeployment() {
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
              <span>ASSETS</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">DEPLOYMENT</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Asset Deployment
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Strategic allocation across <span className="text-primary font-medium">yield-bearing gaming positions</span>. Realtime monitoring of liquidity depth, APY fluctuations, and risk exposure metrics.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Strategic Capital Deployment</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                CLAWDE's asset deployment strategy focuses on generating sustainable yield from onchain gaming protocols. Unlike speculative trading strategies, we target established revenue-generating platforms that offer predictable cash flows through liquidity provision, staking, and fee sharing mechanisms.
              </p>
              <p>
                Our deployment philosophy centers on diversification across multiple gaming verticals including prediction markets, casino protocols, and gaming DeFi infrastructure. Each position undergoes rigorous analysis by our Claude AI advisory system before capital allocation, with continuous monitoring throughout the investment lifecycle.
              </p>
              <p>
                Position sizing is dynamically adjusted based on risk adjusted return profiles. Higher-yield opportunities typically receive smaller allocations due to increased risk, while more stable yield sources can command larger positions. This balanced approach allows us to capture upside from emerging protocols while maintaining a stable return baseline.
              </p>
              <p>
                All deployed capital remains fully liquid with no lockup periods exceeding 7 days. This liquidity constraint ensures that we can rapidly reallocate capital in response to changing market conditions or emerging opportunities. Emergency withdrawal procedures can be executed within 4 hours for any position.
              </p>
            </div>
          </div>

          {/* Active Positions */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Active Positions</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Below is a realtime view of our currently deployed capital across approved protocols. Each position is continuously monitored by our safety watcher network, with automatic alerts triggered for any significant changes in APY, liquidity depth, or risk metrics. Position values update every 15 seconds.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-white/30 text-xs font-mono uppercase border-b border-white/5">
                    <th className="pb-4 pr-6">Protocol</th>
                    <th className="pb-4 pr-6">Position</th>
                    <th className="pb-4 pr-6">Value</th>
                    <th className="pb-4 pr-6">APY</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { protocol: "Stake.com LP", position: "SOL/USDC", value: "$580", apy: "24.5%", status: "Active", address: "STak...9xRm" },
                    { protocol: "Rollbit Vault", position: "SOL Staking", value: "$420", apy: "18.2%", status: "Active", address: "RoLb...3vKp" },
                    { protocol: "Polymarket LP", position: "USDC Pool", value: "$350", apy: "12.8%", status: "Active", address: "PoLy...7mNx" },
                    { protocol: "Pump.fun", position: "Fee Share", value: "$185", apy: "35.2%", status: "Monitoring", address: "PuMp...2wLq" }
                  ].map((pos) => (
                    <tr key={pos.protocol} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 pr-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Coins className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <span className="text-white font-bold">{pos.protocol}</span>
                            <p className="text-[10px] font-mono text-white/30">{pos.address}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 pr-6 text-white/60">{pos.position}</td>
                      <td className="py-5 pr-6 text-white font-mono font-bold">{pos.value}</td>
                      <td className="py-5 pr-6 text-green-400 font-mono">{pos.apy}</td>
                      <td className="py-5">
                        <span className={`text-xs font-mono px-3 py-1 rounded-full ${pos.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                          {pos.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deployment Philosophy */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Deployment Philosophy</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Our approach to capital deployment is guided by three core principles: security first, sustainable yield, and strategic diversification. We never chase the highest APY at the expense of security, and we thoroughly vet each protocol before any capital allocation.
              </p>
              <p>
                <strong className="text-white">Security First:</strong> Before deploying to any protocol, our team conducts extensive due diligence including smart contract review, team background checks, and historical performance analysis. We only deploy to protocols with completed security audits from reputable firms and a minimum 6-month track record of stable operations.
              </p>
              <p>
                <strong className="text-white">Sustainable Yield:</strong> We focus on yield sources that are backed by real economic activity rather than inflationary token emissions. This includes trading fee revenue from liquidity provision, house edge from gaming protocols, and staking rewards from proof of stake validation. These yields are inherently more sustainable than yield farming schemes.
              </p>
              <p>
                <strong className="text-white">Strategic Diversification:</strong> No single protocol receives more than 25% of our operational capital. We diversify across different yield mechanisms, blockchains, and protocol types to minimize correlation risk. This approach ensures that issues with any single protocol have limited impact on overall treasury performance.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, label: "Total Deployed", value: "$1,535", change: "+12.4%", desc: "Total capital actively generating yield across all approved protocols." },
              { icon: BarChart3, label: "Avg APY", value: "22.7%", change: "+3.2%", desc: "Weighted average yield across all positions, net of gas costs." },
              { icon: Activity, label: "Active Pools", value: "4", change: "+1", desc: "Number of distinct yield-generating positions currently active." }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-white/40 text-sm uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-green-400 mb-4">{stat.change} this epoch</div>
                <p className="text-xs text-white/40 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Risk Parameters */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Deployment Risk Parameters</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Each deployment must satisfy strict risk parameters enforced by our deterministic execution engine. These parameters cannot be overridden without multisignature approval from the governance committee, ensuring consistent risk management across all operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { param: "Maximum Single Protocol Exposure", value: "25%", desc: "No more than 25% of operational capital can be deployed to any single protocol." },
                { param: "Minimum Liquidity Depth", value: "$5,000", desc: "Protocols must maintain minimum liquidity to ensure we can exit positions without significant slippage." },
                { param: "Maximum Lock Period", value: "7 days", desc: "All positions must be redeemable within 7 days to maintain treasury flexibility." },
                { param: "Minimum Audit Score", value: "85/100", desc: "Protocols must have a minimum security audit score from recognized auditors." }
              ].map((item) => (
                <div key={item.param} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-white font-bold">{item.param}</span>
                    <span className="text-primary font-mono font-bold">{item.value}</span>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
