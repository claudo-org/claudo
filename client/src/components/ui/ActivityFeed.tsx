import { motion } from "framer-motion";
import { Activity, Zap, RefreshCw, Share2, TrendingUp, TrendingDown, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ActivityType = "EXECUTE" | "REBALANCE" | "DISTRIBUTE";

interface ActivityItem {
  id: string;
  type: ActivityType;
  game?: string;
  amount?: number;
  timestamp: string;
  status: "success" | "pending";
}

const typeConfig: Record<ActivityType, { icon: LucideIcon; color: string; label: string }> = {
  EXECUTE: { icon: Zap, color: "text-primary", label: "EXECUTE" },
  REBALANCE: { icon: RefreshCw, color: "text-yellow-400", label: "REBALANCE" },
  DISTRIBUTE: { icon: Share2, color: "text-green-400", label: "DISTRIBUTE" },
};

interface ActivityFeedProps {
  activities?: ActivityItem[];
}

export function ActivityFeed({ activities = [] }: ActivityFeedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm overflow-hidden"
      data-testid="card-activity-feed"
    >
      <div className="p-4 border-b border-white/5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Activity className="w-4 h-4 text-white/60" />
          <span className="text-sm font-medium text-white">Activity Log</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-mono text-primary">LIVE</span>
        </div>
      </div>
      
      <div className="divide-y divide-white/5">
        {activities.length === 0 ? (
          <div className="p-8 text-center">
            <Zap className="w-8 h-8 text-white/20 mx-auto mb-3" />
            <p className="text-sm text-white/40">No activity yet</p>
            <p className="text-xs text-white/30 mt-1">Operations will appear here when executed</p>
          </div>
        ) : null}
        {activities.map((activity, i) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          const isPositive = activity.amount && activity.amount > 0;
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 hover:bg-white/[0.02] transition-colors"
              data-testid={`activity-item-${activity.id}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${config.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white/60">{config.label}</span>
                      {activity.game && (
                        <span className="text-xs font-mono text-white">{activity.game}</span>
                      )}
                    </div>
                    <span className="text-[10px] text-white/30">{activity.timestamp}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {activity.amount !== undefined && (
                    <span className={`text-sm font-mono font-medium ${
                      isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {isPositive ? '+' : ''}${Math.abs(activity.amount)}
                    </span>
                  )}
                  {activity.status === "success" && (
                    <CheckCircle className="w-4 h-4 text-green-400/60" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
