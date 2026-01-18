import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import claudoLogo from "@assets/claudo-logo.png";

const MOCK_STATS = {
  totalTreasury: 125.5,
  totalExecuted: 89.2,
  totalReturns: 12.3,
  totalDistributed: 45.8,
};

const MOCK_EXECUTIONS = [
  { id: 1, timestamp: "Jan 17, 14:32", game: "Slots", amount: 2.5, outcome: "Positive" },
  { id: 2, timestamp: "Jan 17, 13:15", game: "Blackjack", amount: 1.0, outcome: "Negative" },
  { id: 3, timestamp: "Jan 17, 11:42", game: "Roulette", amount: 3.2, outcome: "Positive" },
  { id: 4, timestamp: "Jan 17, 09:08", game: "Slots", amount: 1.8, outcome: "Flat" },
  { id: 5, timestamp: "Jan 16, 22:55", game: "Blackjack", amount: 2.0, outcome: "Positive" },
];

const MOCK_DISTRIBUTIONS = [
  { id: 1, timestamp: "Jan 16, 22:00", amount: 5.2, address: "7xKd...3mN2", txHash: "4fGh...8kLp" },
  { id: 2, timestamp: "Jan 15, 22:00", amount: 4.8, address: "9pQr...7vXw", txHash: "2aBc...6dEf" },
  { id: 3, timestamp: "Jan 14, 22:00", amount: 6.1, address: "3sTu...1yZa", txHash: "7gHi...4jKl" },
];

const MOCK_WALLET_DATA: Record<string, { rewards: number; share: number; distributions: number }> = {
  "7xKdF8mN3pQr5sTuVwXy9zAb2cDeF4gH": { rewards: 2.45, share: 1.2, distributions: 3 },
  "9pQrS7vXwY1zAbC3dEfG5hIjK8lMnO": { rewards: 5.12, share: 2.8, distributions: 7 },
};

function StatsCard({ title, value, suffix = "SOL", positive = false }: { title: string; value: number; suffix?: string; positive?: boolean }) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-light text-muted-foreground tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-2xl md:text-3xl font-light tracking-wide ${positive ? "text-primary" : "text-foreground"}`} data-testid={`stat-${title.toLowerCase().replace(/\s/g, "-")}`}>
          {positive && value > 0 ? "+" : ""}{value.toFixed(1)} <span className="text-sm text-muted-foreground">{suffix}</span>
        </p>
      </CardContent>
    </Card>
  );
}

function OutcomeBadge({ outcome }: { outcome: string }) {
  const colorClass = outcome === "Positive" 
    ? "bg-primary/20 text-primary border-primary/30" 
    : outcome === "Negative" 
    ? "bg-muted text-muted-foreground border-muted-foreground/30" 
    : "bg-muted/50 text-muted-foreground/80 border-muted-foreground/20";
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-light border ${colorClass}`}>{outcome}</span>;
}

function SystemStatusIndicator({ name, status }: { name: string; status: "active" | "monitoring" | "halted" }) {
  const colors = {
    active: "bg-primary",
    monitoring: "bg-muted-foreground",
    halted: "bg-muted-foreground/40",
  };
  const textColors = {
    active: "text-primary",
    monitoring: "text-muted-foreground",
    halted: "text-muted-foreground/60",
  };
  const labels = {
    active: "ACTIVE",
    monitoring: "MONITORING",
    halted: "HALTED",
  };
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      <span className="text-xs text-muted-foreground font-light">{name}:</span>
      <span className={`text-xs font-medium ${textColors[status]}`}>{labels[status]}</span>
    </div>
  );
}

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletResult, setWalletResult] = useState<{ rewards: number; share: number; distributions: number } | null>(null);
  const [walletError, setWalletError] = useState(false);

  const handleCheckWallet = () => {
    const result = MOCK_WALLET_DATA[walletAddress];
    if (result) {
      setWalletResult(result);
      setWalletError(false);
    } else if (walletAddress.length > 20) {
      setWalletResult({ rewards: 0.85, share: 0.4, distributions: 1 });
      setWalletError(false);
    } else {
      setWalletResult(null);
      setWalletError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer" data-testid="link-home">
              <img src={claudoLogo} alt="Claudo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-light tracking-widest text-foreground">CLAUDO</span>
            </div>
          </Link>
          <span className="text-sm text-muted-foreground font-light">Dashboard</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <section>
          <h1 className="text-2xl font-light tracking-wide mb-6" data-testid="text-dashboard-title">System Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard title="Total Treasury" value={MOCK_STATS.totalTreasury} />
            <StatsCard title="Total Executed" value={MOCK_STATS.totalExecuted} />
            <StatsCard title="Total Returns" value={MOCK_STATS.totalReturns} positive />
            <StatsCard title="Total Distributed" value={MOCK_STATS.totalDistributed} />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-light tracking-wide">Execution History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-light">Timestamp</th>
                      <th className="text-left py-2 text-muted-foreground font-light">Game</th>
                      <th className="text-right py-2 text-muted-foreground font-light">Amount</th>
                      <th className="text-right py-2 text-muted-foreground font-light">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_EXECUTIONS.map((exec) => (
                      <tr key={exec.id} className="border-b border-border/50" data-testid={`row-execution-${exec.id}`}>
                        <td className="py-3 text-muted-foreground font-light">{exec.timestamp}</td>
                        <td className="py-3 text-foreground">{exec.game}</td>
                        <td className="py-3 text-right text-foreground">{exec.amount} SOL</td>
                        <td className="py-3 text-right"><OutcomeBadge outcome={exec.outcome} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-light tracking-wide">Distribution History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-light">Timestamp</th>
                      <th className="text-right py-2 text-muted-foreground font-light">Amount</th>
                      <th className="text-right py-2 text-muted-foreground font-light">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_DISTRIBUTIONS.map((dist) => (
                      <tr key={dist.id} className="border-b border-border/50" data-testid={`row-distribution-${dist.id}`}>
                        <td className="py-3 text-muted-foreground font-light">{dist.timestamp}</td>
                        <td className="py-3 text-right text-primary">{dist.amount} SOL</td>
                        <td className="py-3 text-right text-foreground font-mono text-xs">{dist.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-light tracking-wide">Wallet Checker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Paste your Solana wallet address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="font-mono text-sm"
                  data-testid="input-wallet-address"
                />
                <Button onClick={handleCheckWallet} data-testid="button-check-wallet">
                  Check Address
                </Button>
              </div>
              
              {walletError && (
                <p className="text-sm text-muted-foreground" data-testid="text-wallet-error">Please enter a valid wallet address.</p>
              )}
              
              {walletResult && (
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-2xl font-light text-primary" data-testid="text-estimated-rewards">{walletResult.rewards.toFixed(2)} SOL</p>
                    <p className="text-xs text-muted-foreground">Estimated Rewards</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-light text-foreground" data-testid="text-share-percentage">{walletResult.share.toFixed(1)}%</p>
                    <p className="text-xs text-muted-foreground">Share Percentage</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-light text-foreground" data-testid="text-total-distributions">{walletResult.distributions}</p>
                    <p className="text-xs text-muted-foreground">Total Distributions</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-light tracking-wide">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SystemStatusIndicator name="Claude Engine" status="active" />
              <SystemStatusIndicator name="Rule Engine" status="monitoring" />
              <SystemStatusIndicator name="Execution" status="active" />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
                        }
