import { useQuery } from "@tanstack/react-query";
import type { DashboardData, TreasurySnapshot, Position, Epoch, Transaction, Vault } from "@shared/schema";

export function useDashboardData() {
  return useQuery<DashboardData>({
    queryKey: ["/api/dashboard"],
    refetchInterval: 10000, // Refresh every 10 seconds
  });
}

export function useTreasurySnapshot() {
  return useQuery<TreasurySnapshot>({
    queryKey: ["/api/treasury/snapshot"],
    refetchInterval: 10000,
  });
}

export function useVaults() {
  return useQuery<Vault[]>({
    queryKey: ["/api/vaults"],
    refetchInterval: 30000,
  });
}

export function usePositions() {
  return useQuery<Position[]>({
    queryKey: ["/api/positions"],
    refetchInterval: 15000,
  });
}

export function useEpochs() {
  return useQuery<Epoch[]>({
    queryKey: ["/api/epochs"],
    refetchInterval: 60000,
  });
}

export function useCurrentEpoch() {
  return useQuery<Epoch | null>({
    queryKey: ["/api/epochs/current"],
    refetchInterval: 30000,
  });
}

export function useTransactions(limit: number = 50) {
  return useQuery<Transaction[]>({
    queryKey: ["/api/transactions", { limit }],
    refetchInterval: 15000,
  });
}
