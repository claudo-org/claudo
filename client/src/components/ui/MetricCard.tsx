import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  isLive?: boolean;
  delay?: number;
}

export function MetricCard({ label, value, isLive, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative border border-primary/20 bg-card/50 backdrop-blur-sm p-4 rounded-lg overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs uppercase tracking-widest text-white/50 font-medium group-hover:text-white/70 transition-colors">{label}</span>
          {isLive && (
            <span className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(106,227,255,0.8)]" />
              <span className="text-[10px] font-mono font-bold text-primary tracking-wider">LIVE</span>
            </span>
          )}
        </div>
        <div className="text-2xl font-mono-numbers font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {value}
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 rounded-tl-sm" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 rounded-br-sm" />
      </div>
    </motion.div>
  );
}
