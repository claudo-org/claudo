import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle, Coins, TrendingUp, ArrowRight } from "lucide-react";

export default function EpochPayouts() {
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
              <span>EPOCHS</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">PAYOUTS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Epoch Payouts
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Weekly deterministic profit distribution cycles. Every epoch is <span className="text-primary font-medium">cryptographically verifiable</span> onchain with complete transaction transparency.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">How Epoch Payouts Work</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                CLAWDE operates on a weekly epoch cycle. Each epoch begins on Monday at 00:00 UTC and ends the following Sunday at 23:59 UTC. During the epoch, all yield generated from treasury operations is accumulated into a distribution pool.
              </p>
              <p>
                At the end of each epoch, a snapshot is taken of all token holder balances. This snapshot determines each holder's share of the distribution. The calculation is simple: your share equals your token balance divided by the total supply, multiplied by 85% of the epoch's net yield.
              </p>
              <p>
                The distribution is then executed automatically by our deterministic engine. Each eligible holder receives their share directly to their wallet. There's no need to claim rewards or interact with any contracts. The entire process is trustless and verifiable onchain.
              </p>
              <p>
                We publish a detailed epoch report within 24 hours of each distribution. This report includes all yield sources, any fees or expenses deducted, the final distribution amount, and transaction hashes for verification. Complete transparency is non-negotiable.
              </p>
            </div>
          </div>

          {/* Current Epoch */}
          <div className="p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-2">Current Epoch</div>
                <div className="text-5xl font-bold text-white mb-2">#12</div>
                <div className="text-white/60">Jan 25 ~ Jan 31, 2026</div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$127</div>
                  <div className="text-sm text-white/40">Accumulated Yield</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3d 14h</div>
                  <div className="text-sm text-white/40">Until Distribution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Epoch Lifecycle */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Epoch Lifecycle</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Each epoch follows a structured lifecycle that ensures accurate accounting and fair distribution. The process is fully automated and requires no manual intervention.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block" />
              {[
                { day: "Day 1~5", phase: "Collection", desc: "Yield harvesting from all active positions", status: "complete", icon: Coins },
                { day: "Day 6", phase: "Calculation", desc: "Proportional share computation per holder", status: "complete", icon: TrendingUp },
                { day: "Day 7", phase: "Distribution", desc: "Automated payout to all wallets", status: "pending", icon: ArrowRight }
              ].map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex flex-col items-center relative z-10 p-8 rounded-2xl border ${
                    phase.status === 'complete' ? 'bg-green-500/5 border-green-500/20' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    phase.status === 'complete' ? 'bg-green-500/20' : 'bg-primary/20'
                  }`}>
                    {phase.status === 'complete' ? 
                      <CheckCircle className="w-7 h-7 text-green-400" /> :
                      <phase.icon className="w-7 h-7 text-primary" />
                    }
                  </div>
                  <div className="text-[10px] font-mono text-white/40 mb-1">{phase.day}</div>
                  <div className="text-white font-bold text-lg mb-1">{phase.phase}</div>
                  <div className="text-xs text-white/40 text-center max-w-[150px]">{phase.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Epochs */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Past Epochs</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Historical record of all completed epochs. Each epoch includes the total yield generated, amount distributed to holders, and a link to verify the distribution transaction onchain.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-white/30 text-xs font-mono uppercase border-b border-white/5">
                    <th className="pb-4 pr-6">Epoch</th>
                    <th className="pb-4 pr-6">Period</th>
                    <th className="pb-4 pr-6">Total Yield</th>
                    <th className="pb-4 pr-6">Distributed</th>
                    <th className="pb-4">TX Signature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { epoch: "#11", period: "Jan 18~24", yield: "$142", dist: "$120", hash: "4xKm...7vRp" },
                    { epoch: "#10", period: "Jan 11~17", yield: "$128", dist: "$108", hash: "3nLq...9wMx" },
                    { epoch: "#9", period: "Jan 4~10", yield: "$115", dist: "$97", hash: "7pYz...2kNr" },
                    { epoch: "#8", period: "Dec 28~Jan 3", yield: "$98", dist: "$83", hash: "9mXw...4eLp" }
                  ].map((ep) => (
                    <tr key={ep.epoch} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-6 text-white font-bold">{ep.epoch}</td>
                      <td className="py-4 pr-6 text-white/60">{ep.period}</td>
                      <td className="py-4 pr-6 text-white font-mono">{ep.yield}</td>
                      <td className="py-4 pr-6 text-primary font-mono">{ep.dist}</td>
                      <td className="py-4">
                        <a href="#" className="text-xs font-mono text-primary hover:underline">{ep.hash}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
