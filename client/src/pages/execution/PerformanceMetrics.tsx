import { motion } from "framer-motion";
import { Activity, BarChart3, TrendingUp, Clock, Gauge, Zap } from "lucide-react";

export default function PerformanceMetrics() {
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
              <span className="text-primary">EXECUTION</span>
              <span className="text-white/20">/</span>
              <span>PERFORMANCE</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">METRICS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Performance Metrics
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Realtime execution quality analytics including <span className="text-primary font-medium">slippage analysis</span>, gas optimization, and transaction success rates across supported chains.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Measuring Execution Excellence</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Execution quality directly impacts treasury returns. Every basis point of slippage, every failed transaction retry, every suboptimal gas payment reduces the yield that ultimately reaches token holders. That's why we obsessively measure and optimize every aspect of our execution performance.
              </p>
              <p>
                Our performance monitoring system tracks hundreds of metrics in realtime, from macro-level statistics like overall success rates to micro-level details like the distribution of confirmation times across different transaction types. This data drives continuous improvement in our execution algorithms.
              </p>
              <p>
                We benchmark our performance against theoretical optimums and industry standards. Our goal is not just acceptable execution, but best in class execution that maximizes the value captured from every trading opportunity. The metrics displayed here represent our current performance across all active operations.
              </p>
              <p>
                All performance data is logged immutably and available for community verification. We believe that transparent reporting of execution quality is essential for building trust with token holders who depend on our operational excellence for their returns.
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Gauge, label: "Avg Slippage", value: "0.12%", status: "optimal", desc: "Average price impact across all executed trades" },
              { icon: Clock, label: "Avg Latency", value: "14ms", status: "optimal", desc: "Time from signal generation to transaction broadcast" },
              { icon: TrendingUp, label: "Success Rate", value: "99.7%", status: "optimal", desc: "Percentage of transactions confirmed on first attempt" },
              { icon: Zap, label: "Gas Saved", value: "$24", status: "monthly", desc: "Cost savings from gas optimization strategies" }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-card/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-white/30 uppercase">{metric.label}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-[10px] font-mono text-green-400 uppercase mb-2">{metric.status}</div>
                <p className="text-xs text-white/40 leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Slippage Deep Dive */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Understanding Slippage</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Slippage is the difference between the expected price of a trade and the actual executed price. In DeFi, slippage occurs because trades move through liquidity pools where prices change based on trade size relative to available liquidity. Managing slippage is critical for preserving treasury value.
              </p>
              <p>
                Our execution engine employs multiple strategies to minimize slippage. First, we carefully size positions relative to available liquidity. Our maximum position size is calibrated to ensure slippage stays below 0.5% even in adverse conditions. Second, we use smart order routing to split large trades across multiple pools when beneficial.
              </p>
              <p>
                We also time our executions strategically. Non-urgent rebalancing operations are scheduled during periods of typically higher liquidity and lower volatility. For time sensitive trades, we employ MEV protection strategies to prevent front-running and sandwich attacks that would increase our effective slippage.
              </p>
              <p>
                The slippage metrics shown below represent actual realized slippage compared to the quoted price at the moment of trade initiation. We calculate this for every transaction and aggregate by protocol to identify any venues where execution quality may be suboptimal.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Slippage Analysis */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Slippage by Protocol</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Protocol-level slippage analysis helps us optimize routing decisions. Protocols with consistently higher slippage may receive smaller allocations or trigger investigation into underlying liquidity conditions.
              </p>
              <div className="space-y-6">
                {[
                  { protocol: "Stake.com", slippage: "0.08%", volume: "$420", desc: "Excellent liquidity with tight spreads" },
                  { protocol: "Rollbit", slippage: "0.15%", volume: "$285", desc: "Good execution with moderate liquidity" },
                  { protocol: "Polymarket", slippage: "0.11%", volume: "$195", desc: "Efficient routing through main pool" },
                  { protocol: "Pump.fun", slippage: "0.22%", volume: "$120", desc: "Higher slippage due to volatile pairs" }
                ].map((proto, i) => (
                  <div key={proto.protocol} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-bold">{proto.protocol}</span>
                        <p className="text-xs text-white/40">{proto.desc}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-white/40">Vol: {proto.volume}</span>
                        <span className="text-primary font-mono">{proto.slippage}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${100 - parseFloat(proto.slippage) * 100}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Recent Transactions</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Recent transaction log showing execution details including type, asset pair, value, and gas costs. All transactions are verifiable on Solana block explorers.
              </p>
              <div className="space-y-4">
                {[
                  { type: "Swap", pair: "SOL/USDC", amount: "$85", gas: "0.00042 SOL", status: "success", tx: "4vKm...9xRp" },
                  { type: "LP Add", pair: "SOL/USDC", amount: "$65", gas: "0.00120 SOL", status: "success", tx: "7nLq...3wMx" },
                  { type: "Harvest", pair: "Stake Rewards", amount: "$12", gas: "0.00018 SOL", status: "success", tx: "2pYz...8kNr" },
                  { type: "Swap", pair: "USDC/SOL", amount: "$48", gas: "0.00035 SOL", status: "success", tx: "9mXw...5vLp" }
                ].map((tx, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <Activity className="w-5 h-5 text-primary" />
                        <div>
                          <span className="text-white font-bold text-sm">{tx.type}: {tx.pair}</span>
                          <p className="text-xs text-white/40">Gas: {tx.gas}</p>
                        </div>
                      </div>
                      <span className="text-white font-mono">{tx.amount}</span>
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
