import { motion } from "framer-motion";
import { Share2, CheckCircle, Clock, Users, ExternalLink } from "lucide-react";

interface Distribution {
  id: string;
  epoch: number;
  date: string;
  amount: number;
  holders: number;
  status: "completed" | "scheduled";
  txHash?: string;
}

interface DistributionHistoryProps {
  distributions?: Distribution[];
}

export function DistributionHistory({ distributions = [] }: DistributionHistoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm overflow-hidden"
      data-testid="card-distribution-history"
    >
      <div className="p-4 border-b border-white/5 flex items-center gap-3">
        <Share2 className="w-4 h-4 text-white/60" />
        <span className="text-sm font-medium text-white">Distribution History</span>
      </div>
      
      <div className="divide-y divide-white/5">
        {distributions.length === 0 ? (
          <div className="p-8 text-center">
            <Share2 className="w-8 h-8 text-white/20 mx-auto mb-3" />
            <p className="text-sm text-white/40">No distributions yet</p>
            <p className="text-xs text-white/30 mt-1">Profit sharing will appear after first epoch completes</p>
          </div>
        ) : null}
        {distributions.map((dist, i) => (
          <motion.div
            key={dist.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4 hover:bg-white/[0.02] transition-colors"
            data-testid={`distribution-item-${dist.id}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-white/40">EPOCH</span>
                  <span className="text-lg font-bold text-white">{dist.epoch}</span>
                </div>
                <div>
                  <div className="text-sm text-white">{dist.date}</div>
                  {dist.status === "completed" ? (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-[10px] text-white/40">
                        <Users className="w-3 h-3" />
                        <span>{dist.holders} holders</span>
                      </div>
                      {dist.txHash && (
                        <a 
                          href={`https://solscan.io/tx/${dist.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[10px] font-mono text-primary hover:underline"
                        >
                          PROOF <ExternalLink className="w-2 h-2" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono text-yellow-400">SCHEDULED</span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {dist.status === "completed" ? (
                  <>
                    <span className="text-lg font-mono font-medium text-white">${dist.amount}</span>
                    <CheckCircle className="w-5 h-5 text-green-400/60" />
                  </>
                ) : (
                  <>
                    <span className="text-sm font-mono text-white/40">TBD</span>
                    <Clock className="w-5 h-5 text-yellow-400/60" />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
