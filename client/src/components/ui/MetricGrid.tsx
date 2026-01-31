import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Target, Zap, BarChart3, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
}

interface MetricGridProps {
  metrics: Metric[];
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-lg border border-white/5 bg-card/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className="w-4 h-4 text-white/40" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{metric.label}</span>
          </div>
          <div className="text-2xl font-bold text-white">{metric.value}</div>
          {metric.change && (
            <div className={`flex items-center gap-1 mt-1 text-xs font-mono ${
              metric.isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {metric.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {metric.change}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function DefaultMetrics() {
  const metrics: Metric[] = [
    { label: "Weekly ROI", value: "+8.7%", change: "+2.1%", isPositive: true, icon: TrendingUp },
    { label: "Win Rate", value: "68%", change: "+3%", isPositive: true, icon: Target },
    { label: "Today's Trades", value: "12", icon: Zap },
    { label: "Avg Duration", value: "4.2s", icon: Clock },
  ];
  
  return <MetricGrid metrics={metrics} />;
}
