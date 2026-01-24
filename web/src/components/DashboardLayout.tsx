import type { ReactNode } from "react";
import {
  BarChart3,
  Truck,
  History,
  Settings,
  LogOut,
  Search,
  Bell,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

import { useToast } from "@/hooks/use-toast";

export function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}: DashboardLayoutProps) {
  const { toast } = useToast();

  const handleNotImplemented = (feature: string) => {
    toast({
      title: "Recurso em Desenvolvimento",
      description: `A seção de ${feature} estará disponível na próxima atualização.`,
    });
  };
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart3 },
    { id: "freights", label: "Fretes", icon: Truck },
    { id: "history", label: "Histórico", icon: History },
    { id: "logs", label: "Logs", icon: Terminal },
    { id: "settings", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0c] text-foreground font-sans selection:bg-primary/20">
      {/* Sidebar */}
      <aside className="w-64 glass-sidebar flex flex-col z-50">
        <div className="p-8 pb-4 flex items-center gap-3">
          <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Truck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg leading-none tracking-tight">
              Notifica Frete
            </h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              Logistics v2
            </p>
          </div>
        </div>

        <ScrollArea className="flex-1 px-4 py-8">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "group flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative",
                  activeTab === item.id
                    ? "text-primary bg-primary/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                    activeTab === item.id
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                />
                {item.label}
                {activeTab === item.id && (
                  <>
                    <div className="absolute left-0 w-1 h-5 bg-primary rounded-full" />
                    <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                  </>
                )}
              </button>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">
              Assinatura
            </p>
            <p className="text-xs font-bold">Plano Pro Enterprise</p>
            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary" />
            </div>
          </div>
          <button
            onClick={() => handleNotImplemented("Logout")}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all"
          >
            <LogOut className="h-5 w-5" />
            Sair do Painel
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="glass-header px-10 h-20 flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-2xl">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input
                type="search"
                placeholder="Pesquisar fretes, destinos ou códigos..."
                className="pl-12 h-12 bg-white/5 border-white/5 focus-visible:bg-white/10 focus-visible:ring-primary/50 rounded-2xl transition-all w-full text-base"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 ml-6">
            <button
              onClick={() => handleNotImplemented("Notificações")}
              className="relative h-12 w-12 flex items-center justify-center hover:bg-white/5 rounded-2xl transition-all group"
            >
              <Bell className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-[#0a0a0c]" />
            </button>

            <button
              onClick={() => handleNotImplemented("Perfil")}
              className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-lg active:scale-95 transition-transform"
            >
              <span className="text-sm font-black text-primary">JD</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <div className="p-10 max-w-7xl mx-auto min-h-[calc(100vh-5rem)]">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
