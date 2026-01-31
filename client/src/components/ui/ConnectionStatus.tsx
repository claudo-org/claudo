import { useQuery } from "@tanstack/react-query";
import { Wifi, WifiOff, Activity } from "lucide-react";

interface ProtocolStatus {
  stake: { configured: boolean };
  solana: { configured: boolean };
}

export function ConnectionStatus() {
  const { data, isLoading } = useQuery<ProtocolStatus>({
    queryKey: ["/api/protocols/status"],
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
        <Activity className="w-3 h-3 animate-pulse" />
        <span>Connecting...</span>
      </div>
    );
  }

  const solanaOk = data?.solana?.configured;
  const stakeOk = data?.stake?.configured;
  const allOk = solanaOk && stakeOk;

  return (
    <div className="flex items-center gap-3 text-xs font-mono" data-testid="status-connection">
      <div className={`flex items-center gap-1.5 ${solanaOk ? 'text-emerald-400' : 'text-red-400'}`}>
        {solanaOk ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
        <span>Helius</span>
      </div>
      <div className={`flex items-center gap-1.5 ${stakeOk ? 'text-emerald-400' : 'text-red-400'}`}>
        {stakeOk ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
        <span>Stake</span>
      </div>
      <div className={`w-1.5 h-1.5 rounded-full ${allOk ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
    </div>
  );
}
