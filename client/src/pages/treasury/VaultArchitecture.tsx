import { motion } from "framer-motion";
import { Lock, Shield, Server, Key, Database, Activity, Users } from "lucide-react";

export default function VaultArchitecture() {
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
              <span>VAULT</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">ARCHITECTURE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Vault Architecture
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Multisignature capital segregation with <span className="text-primary font-medium">institutional-grade security</span>. Funds are isolated across cold storage, operational reserves, and deployment pools.
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
          {/* Introduction Text */}
          <div className="prose prose-invert max-w-none">
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Understanding Our Vault System</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  The CLAWDE vault architecture represents the foundation of our capital security infrastructure. Unlike traditional DeFi protocols that rely on single-signature wallets or basic multisig implementations, we've engineered a comprehensive three-tier vault system designed to protect treasury assets while maintaining operational efficiency.
                </p>
                <p>
                  Our primary vault operates as a cold storage solution, holding the majority of treasury funds in an airgapped environment. This vault requires a 3-of-5 multisignature approval process, with signing keys distributed across geographically diverse locations. Each key holder undergoes rigorous operational security training and follows strict protocols for transaction signing.
                </p>
                <p>
                  The secondary operational vault maintains sufficient liquidity for daily yield farming operations. This vault operates with a 2-of-3 signature requirement for transactions below predetermined thresholds, allowing for rapid execution of time sensitive opportunities while maintaining security standards. For larger transactions, the system automatically escalates to the primary vault's approval process.
                </p>
                <p>
                  Our emergency reserve vault serves as a rapid-response fund, designed to provide immediate liquidity during market stress events or unexpected opportunities. This vault maintains a minimum 15% of total treasury value and can be accessed with expedited approval processes during defined emergency scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Multi-Sig Diagram */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Multisignature Configuration</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Our multisignature system ensures that no single party can unilaterally move treasury funds. Each signer operates independently with hardware wallets stored in secure, geographically distributed locations. The signing ceremony follows a strict protocol that includes identity verification, transaction review, and cryptographic confirmation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Key, label: "3-of-5 Signers", desc: "Requires 3 out of 5 authorized signers to approve any capital movement above threshold limits. Signers are distributed across different time zones and jurisdictions for maximum security." },
                { icon: Shield, label: "Hardware Keys", desc: "All signing keys are stored on airgapped hardware wallets with geographic distribution. We use industry-leading Ledger devices with custom firmware verification to prevent supply chain attacks." },
                { icon: Lock, label: "Time Locks", desc: "48-hour delay on large withdrawals provides emergency response window for anomaly detection. This timelock can be extended to 72 hours during high risk market conditions." }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.label}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Technical Implementation Details</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                The CLAWDE vault system is built on Solana's native multisignature program, enhanced with custom security modules developed specifically for our operational requirements. Our implementation extends the standard Squads Protocol with additional features including time-locked transactions, spending limits, and automated alert systems.
              </p>
              <p>
                Each vault address is derived using a deterministic key derivation scheme that allows for transparent verification of all treasury wallets. The primary vault address <span className="font-mono text-primary">CLAW...QTG8</span> is publicly visible onchain, allowing any community member to verify treasury holdings in realtime through any Solana block explorer.
              </p>
              <p>
                Our security model assumes that up to 2 signers could be compromised simultaneously without resulting in unauthorized fund movement. This threshold was chosen based on extensive threat modeling and represents an optimal balance between security and operational efficiency. The geographic distribution of signers ensures that physical attacks on multiple signers simultaneously would be impractical.
              </p>
              <p>
                All vault transactions are logged immutably onchain and mirrored to our transparency dashboard. Community members can subscribe to realtime notifications for any treasury movement, ensuring complete visibility into fund management operations. Large transactions trigger automatic announcements in our official communication channels.
              </p>
            </div>
          </div>

          {/* Capital Segregation */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Capital Pools</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Treasury funds are strategically allocated across three distinct pools, each serving a specific purpose in our operational framework. This segregation ensures that we maintain both maximum security for long-term holdings and sufficient liquidity for active yield generation.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Cold Storage", percent: "60%", desc: "Long-term reserves in airgapped multisig. These funds represent our core treasury and are only accessed for major strategic deployments or emergency situations.", color: "bg-blue-500" },
                  { label: "Operational", percent: "25%", desc: "Active deployment and yield generation. This pool funds our daily farming operations across approved protocols and is managed by the execution engine.", color: "bg-primary" },
                  { label: "Emergency", percent: "15%", desc: "Instant liquidity for risk events. Maintained in highly liquid positions that can be converted to stablecoins within minutes during market stress.", color: "bg-purple-500" }
                ].map((pool) => (
                  <div key={pool.label} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-bold">{pool.label}</span>
                        <p className="text-xs text-white/40 mt-1">{pool.desc}</p>
                      </div>
                      <span className="text-white font-mono font-bold">{pool.percent}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: pool.percent }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${pool.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Current Phase</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                CLAWDE is currently in its early proving phase. We are demonstrating execution capability using personal team funds and distributing betting profits from Stake to CLAWDE token holders. Full transparency in all operations.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-4 mb-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-white font-bold">Proving Execution</span>
                      <p className="text-xs text-white/40">Active since Jan 2026</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 pl-9">Live betting operations on Stake with real funds. All profits distributed to holders weekly.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-4 mb-2">
                    <Users className="w-5 h-5 text-white/40" />
                    <div>
                      <span className="text-white font-bold">Team Funded</span>
                      <p className="text-xs text-white/40">Personal capital</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 pl-9">Treasury funded by founding team to prove concept before expanding.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vault Addresses */}
          <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Public Vault Addresses</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              All CLAWDE treasury addresses are publicly verifiable on the Solana blockchain. We encourage community members to monitor these addresses and verify our treasury holdings independently. Transparency is fundamental to our operational philosophy.
            </p>
            <div className="space-y-4">
              {[
                { label: "Primary Treasury", address: "CLAW2rSmDHvGEE8b25MJiBdYrpyxdApRbkbqEoeEQTG8", balance: "$0" },
              ].map((vault) => (
                <div key={vault.label} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5 gap-4">
                  <div>
                    <span className="text-white font-bold">{vault.label}</span>
                    <p className="text-xs font-mono text-primary mt-1 break-all">{vault.address}</p>
                  </div>
                  <span className="text-white font-mono font-bold text-lg">{vault.balance}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
