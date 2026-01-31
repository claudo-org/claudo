import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ProfitSparklineProps {
  data?: number[];
  label?: string;
}

const defaultData = [120, 145, 132, 178, 156, 189, 210];

export function ProfitSparkline({ data = defaultData, label = "7-Day Profit Trend" }: ProfitSparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  const areaPoints = `0,100 ${points} 100,100`;
  
  const totalChange = data[data.length - 1] - data[0];
  const percentChange = ((totalChange / data[0]) * 100).toFixed(1);
  const isPositive = totalChange >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm"
      data-testid="card-profit-trend"
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-white/40" />
          <span className="text-xs font-mono text-white/40 uppercase tracking-wider">{label}</span>
        </div>
        <div className={`text-sm font-mono font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{percentChange}%
        </div>
      </div>
      
      <div className="h-24 relative">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(106, 227, 255)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(106, 227, 255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.polygon
            fill="url(#sparklineGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            points={areaPoints}
          />
          
          <motion.polyline
            fill="none"
            stroke="rgb(106, 227, 255)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            points={points}
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-mono text-white/20">
          <span>7d ago</span>
          <span>Today</span>
        </div>
      </div>
    </motion.div>
  );
}
