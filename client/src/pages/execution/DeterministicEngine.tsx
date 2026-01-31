import { motion } from "framer-motion";
import { Cpu, Zap, Code, GitBranch, Terminal, CheckCircle } from "lucide-react";

export default function DeterministicEngine() {
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
              <span>ENGINE</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">DETERMINISTIC</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Deterministic Engine
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Rule-enforced execution authority system with <span className="text-primary font-medium">subsecond transaction finality</span>. Zero human intervention in live trading operations.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Heart of CLAWDE Operations</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                The Deterministic Engine is the core execution layer of CLAWDE, responsible for translating AI-generated signals into onchain transactions. Unlike human traders who can make emotional decisions or override risk parameters, our engine operates with absolute adherence to predefined rules. It literally cannot execute a transaction that violates its constraints.
              </p>
              <p>
                This deterministic approach is fundamental to our operational philosophy. When Claude AI proposes a trade, it must pass through multiple validation layers before execution. Each layer checks different aspects: position sizing limits, slippage thresholds, gas price ceilings, and protocol whitelists. Only if all checks pass does the transaction proceed to signing and broadcast.
              </p>
              <p>
                The engine processes approximately 40 transactions daily, ranging from routine yield harvests to complex multi-step arbitrage operations. Each transaction is executed with subsecond latency once approved, leveraging Solana's high throughput architecture and our optimized RPC infrastructure.
              </p>
              <p>
                Human operators cannot bypass the engine's rules. Even governance-level changes to parameters require multisignature approval and take effect only after a mandatory delay period. This separation ensures that our capital is protected from both external attacks and internal operational errors.
              </p>
            </div>
          </div>

          {/* Execution Flow */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Execution Pipeline</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Every transaction flows through a structured pipeline that ensures consistent, rule-compliant execution. The pipeline is designed with multiple checkpoints where transactions can be rejected if they fail validation criteria. This defense in depth approach minimizes the risk of erroneous or malicious transactions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block" />
              {[
                { step: 1, label: "Signal", desc: "AI generates trade signal based on market analysis" },
                { step: 2, label: "Validate", desc: "Rules engine checks all constraints and limits" },
                { step: 3, label: "Sign", desc: "Multi-sig approval if required by transaction size" },
                { step: 4, label: "Execute", desc: "Onchain transaction broadcast to Solana" },
                { step: 5, label: "Confirm", desc: "Block confirmation and logging to dashboard" }
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center relative z-10 bg-card p-6 rounded-2xl border border-white/5"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4 text-primary font-bold">
                    {s.step}
                  </div>
                  <div className="text-white font-bold text-sm uppercase">{s.label}</div>
                  <div className="text-[10px] text-white/40 text-center mt-1 max-w-[120px]">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Technical Architecture</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                The Deterministic Engine is implemented as a Rust-based service running on dedicated infrastructure with multiple redundancy layers. The core engine maintains persistent connections to Solana validators through our private RPC cluster, ensuring minimal latency and maximum reliability for transaction submission.
              </p>
              <p>
                <strong className="text-white">Transaction Construction:</strong> When a trade signal is received from the Claude AI advisory system, the engine constructs the appropriate transaction using Anchor framework primitives. All transaction parameters are computed deterministically from the signal data. There's no randomness or discretion in how transactions are built.
              </p>
              <p>
                <strong className="text-white">Validation Layer:</strong> Before signing, each transaction passes through a comprehensive validation layer. This layer checks the transaction against hundreds of rules including: does the target protocol exist in our whitelist? Is the transaction size within allowed limits? Does the expected slippage fall below our threshold? Is the gas price acceptable? Would this transaction cause any pool allocation to exceed maximum limits?
              </p>
              <p>
                <strong className="text-white">Signing Authority:</strong> The engine holds signing authority only for operational transactions within predefined limits. Large transactions or unusual patterns automatically escalate to multisignature approval. The signing keys are held in secure enclaves with hardware backed protection against extraction.
              </p>
              <p>
                <strong className="text-white">Execution and Monitoring:</strong> Once signed, transactions are broadcast through multiple RPC endpoints simultaneously to maximize confirmation speed. The engine monitors transaction status and automatically retries with adjusted priority fees if initial attempts fail due to network congestion.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Rules Engine */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Rules Engine</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Every transaction must satisfy all rules defined in the rules engine. These rules are immutable during operation and can only be modified through governance proposals with timelock delays.
              </p>
              <div className="space-y-4">
                {[
                  { rule: "Max Position Size", value: "$500", status: "enforced", desc: "Maximum value for any single transaction" },
                  { rule: "Max Slippage", value: "0.5%", status: "enforced", desc: "Maximum acceptable price impact" },
                  { rule: "Min Liquidity Depth", value: "$5,000", status: "enforced", desc: "Target pool must have sufficient liquidity" },
                  { rule: "Gas Price Ceiling", value: "50,000 lamports", status: "enforced", desc: "Maximum priority fee per transaction" },
                  { rule: "Daily Volume Limit", value: "$1,500", status: "enforced", desc: "Total daily transaction volume cap" }
                ].map((rule) => (
                  <div key={rule.rule} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium">{rule.rule}</span>
                      </div>
                      <span className="text-primary font-mono">{rule.value}</span>
                    </div>
                    <p className="text-xs text-white/40 pl-7">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Engine Performance</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Realtime performance metrics for the deterministic engine. These metrics are monitored 24/7 with automatic alerts for any degradation below target thresholds.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Avg Latency", value: "12ms", desc: "Signal to execution time" },
                  { label: "Success Rate", value: "99.8%", desc: "Transaction confirmation rate" },
                  { label: "Uptime", value: "99.99%", desc: "System availability over 30 days" },
                  { label: "TX/Day", value: "~40", desc: "Average daily transactions" }
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-2">{stat.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-[10px] text-white/40">{stat.desc}</p>
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
