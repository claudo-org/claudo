import { motion } from "framer-motion";
import { FileText, Search, ExternalLink, CheckCircle, Shield, Database } from "lucide-react";

export default function AuditTrail() {
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
              <span>AUDIT</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">TRAIL</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Audit Trail
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Complete performance ledger with <span className="text-primary font-medium">verifiable proof of yield</span>. All harvest transactions, fee deductions, and distributions are publicly auditable.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Complete Transparency</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Trust is built through transparency. Every action taken by the CLAWDE treasury is recorded onchain and accessible to anyone who wants to verify our operations. This audit trail serves as an immutable record of how we manage capital and distribute profits.
              </p>
              <p>
                Our audit trail includes several categories of records: yield harvests from each protocol, rebalancing transactions between pools, fee payments for operations, and distribution transactions to token holders. Each record includes a timestamp, amount, and Solana transaction signature for independent verification.
              </p>
              <p>
                We also publish weekly epoch reports that summarize all activity during that period. These reports are human-readable summaries of the onchain data, making it easy for non-technical token holders to understand treasury operations.
              </p>
              <p>
                In addition to onchain records, we undergo quarterly audits by independent security firms. These audits verify that our systems are operating as described and that all funds are accounted for properly. Audit reports are published publicly.
              </p>
            </div>
          </div>

          {/* Verification Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, label: "Verified Epochs", value: "12", color: "text-green-400" },
              { icon: Database, label: "Total Distributed", value: "$892", color: "text-primary" },
              { icon: Shield, label: "Audit Score", value: "100%", color: "text-green-400" },
              { icon: FileText, label: "TX Records", value: "247", color: "text-white" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-card/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs font-mono text-white/30 uppercase">{stat.label}</span>
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Transparency Features */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Transparency Features</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We've built multiple layers of transparency to ensure token holders can verify every aspect of treasury operations.
              </p>
              <div className="space-y-6">
                {[
                  { icon: ExternalLink, title: "Onchain Verification", desc: "Every distribution transaction is recorded onchain. Click any TX signature to verify on Solana explorers like Solscan or Solana FM." },
                  { icon: Database, title: "Merkle Proofs", desc: "Distribution amounts are committed to merkle trees. Any holder can verify their allocation independently using our open-source verification tools." },
                  { icon: FileText, title: "Public Reports", desc: "Weekly epoch reports are published with complete breakdowns of yield sources, operational costs, and distribution calculations." },
                  { icon: Shield, title: "Third-Party Audits", desc: "Quarterly audits by independent security firms verify accuracy of all distributions and treasury balances." }
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Audit Records */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Recent Records</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                The most recent treasury operations. Each record can be independently verified on the Solana blockchain.
              </p>
              <div className="space-y-4">
                {[
                  { type: "Distribution", epoch: "#11", amount: "$120", hash: "4xKm...7vRp", time: "2 days ago" },
                  { type: "Harvest", protocol: "Stake.com", amount: "$48", hash: "7nLq...3wMx", time: "3 days ago" },
                  { type: "Harvest", protocol: "Rollbit", amount: "$32", hash: "3pYz...8kNr", time: "4 days ago" },
                  { type: "Rebalance", action: "LP Adjust", amount: "$85", hash: "9mXw...4eLp", time: "5 days ago" },
                  { type: "Harvest", protocol: "Polymarket", amount: "$22", hash: "1dKw...6rNm", time: "6 days ago" }
                ].map((record, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        record.type === 'Distribution' ? 'bg-green-500/10 text-green-400' :
                        record.type === 'Harvest' ? 'bg-blue-500/10 text-blue-400' :
                        'bg-purple-500/10 text-purple-400'
                      }`}>{record.type}</span>
                      <div>
                        <span className="text-white font-medium text-sm">{record.epoch || record.protocol || record.action}</span>
                        <p className="text-xs text-white/40">{record.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white font-mono">{record.amount}</span>
                      <a href="#" className="text-xs font-mono text-primary hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {record.hash} <ExternalLink className="w-3 h-3" />
                      </a>
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
