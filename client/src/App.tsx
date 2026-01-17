import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Dashboard from "@/pages/dash";
import DocsOverview from "@/pages/docs";
import DocsArchitecture from "@/pages/docs-architecture";
import DocsRoadmap from "@/pages/docs-roadmap";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dash" component={Dashboard} />
      <Route path="/docs" component={DocsOverview} />
      <Route path="/docs/architecture" component={DocsArchitecture} />
      <Route path="/docs/roadmap" component={DocsRoadmap} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
