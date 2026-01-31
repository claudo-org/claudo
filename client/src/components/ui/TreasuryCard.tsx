import { Wallet, TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface TreasuryCardProps {
  totalBalance: number;
  deployed: number;
  available: number;
  dailyPnl: number;
  dailyPnlPercent: number;
  treasuryAddress?: string;
}

export function TreasuryCard({ 
  totalBalance, 
  deployed, 
  available, 
  dailyPnl, 
  dailyPnlPercent,
  treasuryAddress = "CLAW2rSmDHvGEE8b25MJiBdYrpyxdApRbkbqEoeEQTG8"
}: TreasuryCardProps) {
  const isPositive = dailyPnl >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-8 rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm"
      data-testid="card-treasury"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Total Treasury</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono text-primary">LIVE</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono ${
            isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isPositive ? '+' : ''}{dailyPnlPercent.toFixed(1)}%
          </div>
          <a 
            href={`https://solscan.io/account/${treasuryAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-white/30 hover:text-primary transition-colors flex items-center gap-1"
          >
            {treasuryAddress.slice(0, 8)}...{treasuryAddress.slice(-4)}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      
      <div className="mb-8">
        <span className="text-5xl md:text-6xl font-bold tracking-tight text-white" data-testid="text-total-balance">
          ${totalBalance.toLocaleString()}
        </span>
        <div className={`mt-2 text-sm font-mono ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}${dailyPnl.toFixed(2)} this week
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5" data-testid="card-deployed">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Deployed</span>
          <span className="text-xl font-bold text-white" data-testid="text-deployed">${deployed.toLocaleString()}</span>
          <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary" 
              style={{ width: `${(deployed / totalBalance) * 100}%` }}
            />
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5" data-testid="card-available">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Available</span>
          <span className="text-xl font-bold text-white" data-testid="text-available">${available.toLocaleString()}</span>
          <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/30" 
              style={{ width: `${(available / totalBalance) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
