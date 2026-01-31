import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Database } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { useMetrics } from "@/hooks/use-metrics";

export function Hero() {
  const { data: metrics } = useMetrics();
  
  const defaultMetrics = [
    { label: "Daily Cycles", value: "1,482", isLive: true },
    { label: "Treasury Status", value: "ACTIVE", isLive: true },
    { label: "Uptime", value: "99.99%", isLive: false },
  ];

  const displayMetrics = metrics?.length ? metrics : defaultMetrics;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 mb-8 flex-wrap">
            <span className="text-primary">FEES</span>
            <span className="text-white/20">→</span>
            <span>TREASURY</span>
            <span className="text-white/20">→</span>
            <span>AI ANALYSIS</span>
            <span className="text-white/20">→</span>
            <span>EXECUTION</span>
            <span className="text-white/20">→</span>
            <span className="text-primary">DISTRIBUTION</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 uppercase">
            CLAWDE
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-lg mb-10 leading-relaxed border-l-2 border-primary/20 pl-6">
            Autonomous execution for on-chain game yield. Intelligence advises. <span className="text-primary font-medium">Systems decide.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#execution" 
              className="px-8 py-4 rounded bg-primary/10 border border-primary/50 text-primary font-bold hover:bg-primary/20 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Execution
            </a>
            <a 
              href="#documentation" 
              className="px-8 py-4 rounded bg-transparent border border-white/10 text-foreground font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
            >
              System Documentation
            </a>
          </div>
        </motion.div>

        {/* HUD / Metrics Visual */}
        <div className="relative">
          <motion.div 
            className="absolute inset-0 border border-primary/10 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
          />
          
          <div className="grid gap-4">
            {displayMetrics.map((metric, i) => (
              <MetricCard 
                key={i} 
                label={metric.label} 
                value={metric.value} 
                isLive={metric.isLive}
                delay={0.2 + (i * 0.1)} 
              />
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-6 rounded-lg bg-white/5 border border-dashed border-white/10"
            >
              <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
                <Cpu className="w-4 h-4" />
                <span>INTELLIGENCE LAYER ACTIVE</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-mono text-white/30">
                <span>PROCESSING</span>
                <span>BLOCK 192834</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        <span className="text-[10px] font-mono tracking-widest text-primary/50 uppercase">Scroll to initialize</span>
      </motion.div>
    </section>
  );
}
