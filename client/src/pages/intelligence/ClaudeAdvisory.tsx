import { motion } from "framer-motion";
import { BrainCircuit, MessageSquare, Sparkles, Binary, Network, Cpu } from "lucide-react";

export default function ClaudeAdvisory() {
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
              <span>CLAUDE</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">ADVISORY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Claude Advisory Logic
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              <span className="text-primary font-medium">Claude 4.5 Sonnet</span> analyzes onchain patterns, market sentiment, and historical yield data to propose optimized capital allocation strategies.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Brain Behind CLAWDE</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Claude serves as CLAWDE's strategic intelligence layer. It's the system that analyzes vast amounts of data to identify opportunities and assess risks that would be impossible for human operators to process in realtime. Unlike traditional trading bots that follow rigid rules, Claude brings nuanced reasoning to complex market situations.
              </p>
              <p>
                It's crucial to understand what Claude does and doesn't do in our architecture. Claude advises; it does not execute. Every recommendation Claude makes must pass through our deterministic execution engine, which enforces strict rules that Claude cannot override. This separation of intelligence and authority is fundamental to CLAWDE's security model.
              </p>
              <p>
                Claude analyzes multiple data streams simultaneously: onchain transaction patterns, liquidity pool metrics, social sentiment indicators, historical yield performance, and macroeconomic factors. From this analysis, it generates structured recommendations that include not just what action to take, but detailed reasoning explaining why.
              </p>
              <p>
                The advisory system operates continuously, generating both proactive recommendations for yield optimization and reactive alerts when market conditions change. Each recommendation is timestamped, logged, and available for review, creating a complete audit trail of AI decision-making.
              </p>
            </div>
          </div>

          {/* AI Status */}
          <div className="p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/40">
                  <BrainCircuit className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Claude 4.5 Sonnet</h2>
                  <p className="text-white/60">Anthropic's latest and most capable model for complex reasoning and analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono uppercase text-sm">Operational</span>
              </div>
            </div>
          </div>

          {/* How Claude Thinks */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">How Claude Analyzes Opportunities</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                When evaluating a potential yield opportunity, Claude follows a structured analytical framework designed to ensure comprehensive risk assessment before any recommendation. This framework has been refined over months of operation and continuous improvement.
              </p>
              <p>
                <strong className="text-white">Data Collection Phase:</strong> Claude first gathers all relevant data about the opportunity including current and historical APY, liquidity depth, smart contract audit status, team background, TVL trends, and user activity patterns. This data is collected from multiple sources including onchain analytics, protocol documentation, and aggregator APIs.
              </p>
              <p>
                <strong className="text-white">Risk Assessment Phase:</strong> With data in hand, Claude evaluates multiple risk dimensions. This includes smart contract risk (audit quality, code complexity, upgrade mechanisms), counterparty risk (team reputation, protocol governance, rug pull indicators), and market risk (correlation with other positions, liquidity concentration, APY sustainability).
              </p>
              <p>
                <strong className="text-white">Opportunity Scoring Phase:</strong> Claude synthesizes risk and return factors into an opportunity score that balances potential yield against identified risks. This score is calibrated against historical performance of similar opportunities to ensure consistency.
              </p>
              <p>
                <strong className="text-white">Recommendation Generation:</strong> Finally, Claude generates a structured recommendation including the proposed action, position size (respecting all risk limits), expected outcomes, and detailed reasoning. This recommendation is then submitted to the execution engine for validation and potential execution.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">AI Capabilities</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Claude's analytical capabilities span multiple domains, enabling comprehensive assessment of yield opportunities and risks across the onchain gaming ecosystem.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Network, title: "Onchain Analysis", desc: "Processes thousands of data points daily including pool depth, withdrawal patterns, whale movements, and transaction flow analysis. Realtime monitoring of all deployed positions with automated anomaly detection." },
                  { icon: Sparkles, title: "Yield Prediction", desc: "Forecasts APY fluctuations using historical data, seasonal patterns, and current market conditions. Prediction models achieve high accuracy on 7-day forward yield estimates." },
                  { icon: Binary, title: "Risk Assessment", desc: "Evaluates smart contract risk through code analysis, audit review, and historical exploit pattern matching. Assigns risk scores across multiple dimensions for each potential deployment." },
                  { icon: Cpu, title: "Strategy Generation", desc: "Proposes optimal rebalancing routes and new position entries based on risk adjusted return optimization. Considers gas costs, slippage, and timing in all recommendations." }
                ].map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <cap.icon className="w-6 h-6 text-primary group-hover:text-background" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{cap.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Advisories */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Recent Advisories</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                All Claude advisories are logged with full reasoning and outcome tracking. This transparency enables continuous improvement of the advisory system.
              </p>
              <div className="space-y-4">
                {[
                  { action: "REBALANCE", message: "Shift 15% from Rollbit to Stake LP. Analysis shows higher risk adjusted yield due to increased Stake trading volume and lower impermanent loss exposure.", time: "1 hour ago", status: "executed" },
                  { action: "HOLD", message: "Maintain current Polymarket position despite slight APY decline. Volatility expected to normalize within 48 hours based on historical patterns.", time: "4 hours ago", status: "acknowledged" },
                  { action: "ALERT", message: "Pump.fun liquidity depth declining 12% over 24 hours. Recommending close monitoring and exit preparation if decline continues.", time: "8 hours ago", status: "monitoring" },
                  { action: "DEPLOY", message: "New opportunity identified in Stake SOL/USDC pool. Projected 28% APY with acceptable risk profile. Recommended allocation: $150.", time: "1 day ago", status: "executed" }
                ].map((advisory, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                        advisory.action === 'REBALANCE' ? 'bg-blue-500/10 text-blue-400' :
                        advisory.action === 'HOLD' ? 'bg-yellow-500/10 text-yellow-400' :
                        advisory.action === 'ALERT' ? 'bg-red-500/10 text-red-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>{advisory.action}</span>
                      <span className="text-[10px] text-white/30">{advisory.time}</span>
                    </div>
                    <p className="text-white text-sm mb-2 leading-relaxed">{advisory.message}</p>
                    <span className="text-[10px] font-mono text-primary uppercase">{advisory.status}</span>
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
