import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import TreasuryInfo from "@/pages/TreasuryInfo";
import ExecutionInfo from "@/pages/ExecutionInfo";
import StrategyInfo from "@/pages/StrategyInfo";
import DistributionInfo from "@/pages/DistributionInfo";
import { Nav } from "@/components/Nav";
import ScrollToTop from "./components/ScrollToTop";

// Treasury sub-pages
import VaultArchitecture from "@/pages/treasury/VaultArchitecture";
import AssetDeployment from "@/pages/treasury/AssetDeployment";
import ReserveManagement from "@/pages/treasury/ReserveManagement";

// Execution sub-pages
import DeterministicEngine from "@/pages/execution/DeterministicEngine";
import SafetyWatchers from "@/pages/execution/SafetyWatchers";
import PerformanceMetrics from "@/pages/execution/PerformanceMetrics";

// Intelligence sub-pages
import ClaudeAdvisory from "@/pages/intelligence/ClaudeAdvisory";
import RiskFramework from "@/pages/intelligence/RiskFramework";
import AlphaGeneration from "@/pages/intelligence/AlphaGeneration";

// Distribution sub-pages
import EpochPayouts from "@/pages/distribution/EpochPayouts";
import HolderRewards from "@/pages/distribution/HolderRewards";
import AuditTrail from "@/pages/distribution/AuditTrail";

// Admin
import AdminSettings from "@/pages/AdminSettings";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Treasury routes */}
        <Route path="/treasury" component={TreasuryInfo} />
        <Route path="/treasury/vault" component={VaultArchitecture} />
        <Route path="/treasury/assets" component={AssetDeployment} />
        <Route path="/treasury/reserves" component={ReserveManagement} />
        
        {/* Execution routes */}
        <Route path="/execution" component={ExecutionInfo} />
        <Route path="/execution/engine" component={DeterministicEngine} />
        <Route path="/execution/safety" component={SafetyWatchers} />
        <Route path="/execution/metrics" component={PerformanceMetrics} />
        
        {/* Intelligence routes */}
        <Route path="/strategy" component={StrategyInfo} />
        <Route path="/strategy/claude" component={ClaudeAdvisory} />
        <Route path="/strategy/risk" component={RiskFramework} />
        <Route path="/strategy/alpha" component={AlphaGeneration} />
        
        {/* Distribution routes */}
        <Route path="/distribution" component={DistributionInfo} />
        <Route path="/distribution/epochs" component={EpochPayouts} />
        <Route path="/distribution/rewards" component={HolderRewards} />
        <Route path="/distribution/audit" component={AuditTrail} />
        
        {/* Admin routes */}
        <Route path="/admin" component={AdminSettings} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
