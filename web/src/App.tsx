import { useState, useEffect } from "react";
import { DashboardLayout } from "./components/DashboardLayout";
import { Overview } from "./components/Overview";
import { LoginPage } from "./components/LoginPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const token = localStorage.getItem("nf_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token: string) => {
    localStorage.setItem("nf_token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("nf_token");
    setIsAuthenticated(false);
  };

  // Prevent flicker during initial auth check
  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return (
      <div className="dark">
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "freights":
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground bg-card/10 rounded-lg border border-white/5 border-dashed">
            <p className="font-medium">Seção de Fretes Detalhada</p>
            <p className="text-sm">
              Em breve: Mapa em tempo real e rotas otimizadas.
            </p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground bg-card/10 rounded-lg border border-white/5 border-dashed">
            <p>Seção {activeTab} em desenvolvimento</p>
          </div>
        );
    }
  };

  return (
    <div className="dark">
      <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </DashboardLayout>
      <Toaster />
    </div>
  );
}

export default App;
