import { motion } from "framer-motion";
import { Users, Wallet, TrendingUp, Gift, Percent, Clock } from "lucide-react";

export default function HolderRewards() {
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
              <span className="text-primary">DISTRIBUTION</span>
              <span className="text-white/20">/</span>
              <span>HOLDERS</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">REWARDS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Holder Rewards
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              <span className="text-primary font-medium">85% of net profits</span> are automatically distributed to token holders. Proportional allocation based on verified wallet holdings at epoch snapshot.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Earn Simply by Holding</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                CLAWDE's reward mechanism is designed for simplicity and fairness. If you hold CLAWDE tokens, you automatically earn a share of treasury profits. There's no staking required, no complex DeFi interactions, and no need to claim rewards manually.
              </p>
              <p>
                The reward calculation is straightforward: your share equals your percentage of the total token supply multiplied by 85% of the epoch's net yield. If you hold 1% of the supply and the epoch generates $100 in net yield, you receive $0.85.
              </p>
              <p>
                The remaining 15% is split between treasury reserves (10%) and operational costs (5%). Treasury reserves are reinvested to grow the yield-generating base, benefiting all holders through compounding returns over time.
              </p>
              <p>
                Rewards are distributed directly to your wallet at the end of each weekly epoch. You'll see the USDC appear in your wallet within minutes of the epoch closing. The entire process is trustless, automatic, and verifiable onchain.
              </p>
            </div>
          </div>

          {/* Distribution Breakdown */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, label: "Holder Distribution", value: "85%", desc: "Direct to token holders", color: "bg-primary" },
              { icon: TrendingUp, label: "Treasury Reserve", value: "10%", desc: "Reinvested for growth", color: "bg-purple-500" },
              { icon: Wallet, label: "Operations", value: "5%", desc: "Infrastructure & gas", color: "bg-blue-500" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-card/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.color}/10 flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${item.color === 'bg-primary' ? 'text-primary' : item.color === 'bg-purple-500' ? 'text-purple-400' : 'text-blue-400'}`} />
                  </div>
                  <span className="text-4xl font-bold text-white">{item.value}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{item.label}</h3>
                <p className="text-sm text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* How It Works */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">How Rewards Work</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                The reward process is fully automated. Here's what happens each week without any action required from you.
              </p>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Hold CLAWDE Tokens", desc: "Rewards are proportional to your token holdings. More tokens equals a larger share of profits." },
                  { step: 2, title: "Epoch Snapshot", desc: "At the end of each 7-day epoch, a snapshot captures all wallet balances for calculation." },
                  { step: 3, title: "Proportional Calculation", desc: "Your share equals (Your Tokens / Total Supply) multiplied by 85% of Epoch Yield." },
                  { step: 4, title: "Automatic Distribution", desc: "Rewards are automatically sent to your wallet in USDC. No claiming required." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reward Calculator */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Estimated Rewards</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Based on current treasury performance and token supply, here are example reward estimates for different holding sizes.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-white/30 uppercase mb-2">Example: 1,000 CLAWDE Tokens (1% of supply)</div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-white/40 mb-1">Weekly Estimate</div>
                      <div className="text-2xl font-bold text-primary">$1.02</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-1">Monthly Estimate</div>
                      <div className="text-2xl font-bold text-white">$4.08</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-white/30 uppercase mb-2">Example: 10,000 CLAWDE Tokens (10% of supply)</div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-white/40 mb-1">Weekly Estimate</div>
                      <div className="text-2xl font-bold text-primary">$10.20</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-1">Monthly Estimate</div>
                      <div className="text-2xl font-bold text-white">$40.80</div>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-white/30 font-mono">* Estimates based on current epoch yield of ~$120/week. Actual rewards vary based on treasury performance.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
