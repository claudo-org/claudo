import { motion } from "framer-motion";
import { BarChart3, Shield, AlertTriangle, Target, TrendingDown, Lock } from "lucide-react";

export default function RiskFramework() {
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
              <span>RISK</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">FRAMEWORK</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Risk Framework
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Predictive exposure control with <span className="text-primary font-medium">dynamic position sizing</span>. AI evaluates counterparty risk, smart contract audit status, and liquidity depth before any deployment.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Comprehensive Risk Management</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Risk management is not an afterthought at CLAWDE. It's woven into every decision, every transaction, and every line of code. Our risk framework provides a structured approach to identifying, quantifying, and mitigating the various risks inherent in onchain yield generation.
              </p>
              <p>
                We categorize risks into four primary dimensions: smart contract risk (the possibility of bugs or exploits in protocol code), counterparty risk (the risk that a protocol team acts maliciously or incompetently), market risk (exposure to price movements and liquidity changes), and operational risk (failures in our own systems or processes).
              </p>
              <p>
                Each dimension is continuously monitored and scored. These scores feed into our position sizing algorithms, ensuring that higher risk opportunities receive proportionally smaller allocations. This dynamic approach allows us to capture yield from emerging protocols while limiting potential losses.
              </p>
              <p>
                Our risk framework is transparent and auditable. All risk assessments are logged, and the reasoning behind each score is documented. Token holders can review how we evaluate opportunities and understand the risk profile of every treasury position.
              </p>
            </div>
          </div>

          {/* Risk Scores */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Portfolio Risk", value: "LOW", score: 2.4, max: 10, color: "text-green-400" },
              { label: "Smart Contract", value: "MINIMAL", score: 1.8, max: 10, color: "text-green-400" },
              { label: "Liquidity Risk", value: "LOW", score: 2.1, max: 10, color: "text-green-400" },
              { label: "Counterparty", value: "MODERATE", score: 4.2, max: 10, color: "text-yellow-400" }
            ].map((risk, i) => (
              <motion.div
                key={risk.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-card/30"
              >
                <div className="text-xs font-mono text-white/30 uppercase mb-3">{risk.label}</div>
                <div className={`text-2xl font-bold ${risk.color} mb-2`}>{risk.value}</div>
                <div className="text-sm text-white/40 font-mono">{risk.score}/{risk.max}</div>
              </motion.div>
            ))}
          </div>

          {/* Risk Dimensions Explained */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Understanding Risk Dimensions</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Smart Contract Risk:</strong> This measures the likelihood of bugs, exploits, or vulnerabilities in protocol code. We evaluate audit quality, code complexity, historical security incidents, and the use of battle-tested components. Protocols using unaudited or experimental code receive higher risk scores.
              </p>
              <p>
                <strong className="text-white">Counterparty Risk:</strong> This assesses the trustworthiness of the protocol team and their incentive alignment with users. We consider team background, token distribution, governance structure, and historical behavior. Anonymous teams or those with concentrated token holdings receive higher scores.
              </p>
              <p>
                <strong className="text-white">Liquidity Risk:</strong> This evaluates our ability to exit positions without significant slippage. We monitor pool depth, trading volume, and withdrawal patterns. Positions in low-liquidity pools or those with potential for rapid liquidity changes receive higher scores.
              </p>
              <p>
                <strong className="text-white">Market Risk:</strong> This measures exposure to price movements and correlation with other positions. We consider volatility, correlation with major assets, and the sustainability of current yield levels. Highly correlated positions or those dependent on volatile token emissions receive higher scores.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Risk Parameters */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Risk Parameters</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                These parameters define the boundaries within which our execution engine operates. They cannot be modified without governance approval and serve as hard limits on risk exposure.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Target, param: "Max Single Position", value: "20%", desc: "Maximum allocation to any single protocol" },
                  { icon: TrendingDown, param: "Stop Loss", value: "-15%", desc: "Automatic exit trigger on position loss" },
                  { icon: Lock, param: "Min Audit Score", value: "85/100", desc: "Minimum security audit score required" },
                  { icon: Shield, param: "Max Counterparty", value: "35%", desc: "Maximum exposure to single counterparty" }
                ].map((item, i) => (
                  <div key={item.param} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-white font-bold">{item.param}</span>
                        <p className="text-xs text-white/40">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-primary font-mono font-bold text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol Risk Matrix */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Protocol Risk Matrix</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Each protocol in our deployment universe is continuously evaluated across multiple risk dimensions. These scores determine maximum allocation and trigger automatic reviews when they change significantly.
              </p>
              <div className="space-y-4">
                {[
                  { protocol: "Stake.com", audit: 92, liquidity: 88, counterparty: 85, overall: "A" },
                  { protocol: "Rollbit", audit: 88, liquidity: 82, counterparty: 78, overall: "B+" },
                  { protocol: "Polymarket", audit: 95, liquidity: 90, counterparty: 88, overall: "A+" },
                  { protocol: "Pump.fun", audit: 75, liquidity: 65, counterparty: 70, overall: "B-" }
                ].map((proto) => (
                  <div key={proto.protocol} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold">{proto.protocol}</span>
                      <span className={`text-sm font-mono px-3 py-1 rounded-full ${
                        proto.overall.startsWith('A') ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>{proto.overall}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-[10px] text-white/30 uppercase mb-1">Audit</div>
                        <div className="text-primary font-mono">{proto.audit}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase mb-1">Liquidity</div>
                        <div className="text-primary font-mono">{proto.liquidity}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase mb-1">Counterparty</div>
                        <div className="text-primary font-mono">{proto.counterparty}</div>
                      </div>
                    </div>
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
