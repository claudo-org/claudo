import { motion } from "framer-motion";
import { Shield, AlertTriangle, Eye, Server, Activity, Bell } from "lucide-react";

export default function SafetyWatchers() {
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
              <span>SAFETY</span>
              <span className="text-white/20">/</span>
              <span className="text-primary">WATCHERS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]">
              Safety Watchers
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-6">
              Distributed failsafe monitoring nodes that <span className="text-primary font-medium">continuously validate system health</span>, circuit breakers, and anomaly detection across all active positions.
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
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">24/7 Autonomous Monitoring</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Safety Watchers are the guardian angels of the CLAWDE ecosystem. These distributed monitoring nodes operate independently from the execution engine, providing an external validation layer that continuously checks for anomalies, risks, and potential threats across all treasury operations.
              </p>
              <p>
                Unlike the deterministic engine which focuses on executing transactions, Safety Watchers focus exclusively on prevention and protection. They monitor external market conditions, protocol health, and our own system behavior to identify potential problems before they impact treasury value.
              </p>
              <p>
                The watcher network consists of multiple independent nodes deployed across different geographic regions and cloud providers. This distribution ensures that no single point of failure can compromise our monitoring capability. Each node runs identical monitoring logic but operates independently, with consensus required to trigger major protective actions.
              </p>
              <p>
                When watchers detect anomalies, they can take graduated responses ranging from alerting operators to automatically pausing specific operations or triggering emergency withdrawal procedures. The severity of the response is calibrated to the nature and magnitude of the detected threat.
              </p>
            </div>
          </div>

          {/* Watcher Nodes */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Server, label: "Primary Watcher", location: "US-East (Virginia)", status: "online", latency: "8ms", desc: "Primary monitoring node handling realtime price feeds and liquidity monitoring." },
              { icon: Server, label: "Secondary Watcher", location: "EU-West (Frankfurt)", status: "online", latency: "24ms", desc: "Secondary node providing redundancy and cross validation of primary observations." },
              { icon: Server, label: "Tertiary Watcher", location: "APAC (Singapore)", status: "online", latency: "45ms", desc: "Tertiary node ensuring global coverage and timezone-distributed monitoring." }
            ].map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-card/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <node.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-green-400 uppercase">{node.status}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{node.label}</h3>
                <p className="text-sm text-white/40 mb-4">{node.location}</p>
                <p className="text-xs text-white/40 leading-relaxed mb-4">{node.desc}</p>
                <div className="text-[10px] font-mono text-white/30">Latency: <span className="text-primary">{node.latency}</span></div>
              </motion.div>
            ))}
          </div>

          {/* What Watchers Monitor */}
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Monitoring Scope</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Safety Watchers monitor a comprehensive set of metrics across multiple dimensions. This multi-layered approach ensures that threats are detected regardless of their origin, whether from external market conditions, protocol vulnerabilities, or internal system anomalies.
              </p>
              <p>
                <strong className="text-white">Market Conditions:</strong> Watchers continuously track price movements, volatility levels, and liquidity depth across all markets where we have exposure. Sudden price moves exceeding predefined thresholds trigger alerts and may activate protective measures depending on severity.
              </p>
              <p>
                <strong className="text-white">Protocol Health:</strong> Each protocol where we deploy capital is monitored for signs of distress including unusual withdrawal patterns, smart contract upgrades, governance proposals, and TVL changes. We maintain integration with protocol-specific monitoring tools to catch issues early.
              </p>
              <p>
                <strong className="text-white">Onchain Anomalies:</strong> Watchers analyze onchain activity for suspicious patterns such as large whale movements, unusual transaction volumes, or potential exploit signatures. Machine learning models help identify patterns that might indicate ongoing attacks.
              </p>
              <p>
                <strong className="text-white">Internal System Health:</strong> Beyond external monitoring, watchers also observe our own systems for anomalies. Unusual transaction patterns, unexpected gas consumption, or deviation from expected behavior triggers investigation and potential circuit breaker activation.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Circuit Breakers */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Circuit Breakers</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Circuit breakers are automatic protective mechanisms that can pause or halt operations when certain conditions are met. These breakers operate independently of human oversight and cannot be overridden during an active trigger event.
              </p>
              <div className="space-y-6">
                {[
                  { trigger: "Flash Crash Detection", threshold: ">10% in 5min", status: "armed", desc: "Halts all trading if asset prices move more than 10% within 5 minutes." },
                  { trigger: "Liquidity Drain", threshold: "<$1k depth", status: "armed", desc: "Pauses operations on pools where liquidity falls below minimum threshold." },
                  { trigger: "Oracle Deviation", threshold: ">2% from median", status: "armed", desc: "Stops price-dependent operations if oracle prices deviate significantly." },
                  { trigger: "Gas Spike", threshold: ">50k lamports", status: "armed", desc: "Delays non-urgent transactions during periods of extreme network congestion." }
                ].map((breaker) => (
                  <div key={breaker.trigger} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        <div>
                          <span className="text-white font-bold text-sm">{breaker.trigger}</span>
                          <p className="text-xs text-white/40">{breaker.threshold}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-yellow-400 uppercase px-3 py-1 rounded-full bg-yellow-400/10">{breaker.status}</span>
                    </div>
                    <p className="text-xs text-white/40 pl-9">{breaker.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert History */}
            <div className="p-10 rounded-3xl border border-white/10 bg-card/30">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Recent Alerts</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                All alerts generated by the Safety Watcher network are logged and categorized by severity. Critical alerts trigger immediate response protocols while informational alerts are reviewed during regular operations review.
              </p>
              <div className="space-y-4">
                {[
                  { type: "INFO", message: "Rebalance completed successfully. All positions within target allocation.", time: "2 min ago" },
                  { type: "WARNING", message: "Gas price elevated above comfort threshold. Delaying non-urgent transactions until network normalizes.", time: "1 hour ago" },
                  { type: "INFO", message: "New position opened in Stake LP. Position size: $85. Expected APY: 24.5%.", time: "3 hours ago" },
                  { type: "SUCCESS", message: "All health checks passed. System operating within normal parameters.", time: "6 hours ago" }
                ].map((alert, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Bell className={`w-5 h-5 mt-0.5 ${alert.type === 'WARNING' ? 'text-yellow-400' : alert.type === 'SUCCESS' ? 'text-green-400' : 'text-blue-400'}`} />
                    <div className="flex-1">
                      <p className="text-white text-sm leading-relaxed">{alert.message}</p>
                      <p className="text-xs text-white/30 mt-1">{alert.time}</p>
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
