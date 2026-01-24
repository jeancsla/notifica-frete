import { useEffect, useState } from "react";
import {
  TrendingUp,
  Package,
  AlertCircle,
  CheckCircle2,
  RefreshCcw,
  Search,
  ArrowUpRight,
  Filter,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { api } from "@/lib/eden";
import { ScrapeButton } from "./ScrapeButton";
import { AdvancedFilter } from "./AdvancedFilter";
import type { FilterValues } from "./AdvancedFilter";

export function Overview() {
  const [cargas, setCargas] = useState<any[]>([]);
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    equipamento: [],
    tipoTransporte: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchCargas = async () => {
    setLoading(true);
    try {
      const { data } = await api.api.cargas.get();
      if (Array.isArray(data)) {
        setCargas(data);
      } else {
        console.warn(
          "API returned non-array data, falling back to empty list.",
        );
        setCargas([]);
      }
    } catch (err) {
      console.error("Failed to fetch freight data:", err);
      setCargas([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredCargas = Array.isArray(cargas)
    ? cargas.filter((carga) => {
        const matchesSearch =
          !filters.search ||
          carga.origem?.toLowerCase().includes(filters.search.toLowerCase()) ||
          carga.destino?.toLowerCase().includes(filters.search.toLowerCase()) ||
          carga.viagem?.toLowerCase().includes(filters.search.toLowerCase()) ||
          carga.equipamento
            ?.toLowerCase()
            .includes(filters.search.toLowerCase());

        const matchesEquipamento =
          filters.equipamento.length === 0 ||
          filters.equipamento.some((eq) =>
            carga.equipamento?.toLowerCase().includes(eq.toLowerCase()),
          );

        const matchesTipo =
          filters.tipoTransporte.length === 0 ||
          filters.tipoTransporte.some(
            (t) => carga.tipoTransporte?.toLowerCase() === t.toLowerCase(),
          );

        return matchesSearch && matchesEquipamento && matchesTipo;
      })
    : [];

  useEffect(() => {
    fetchCargas();
  }, []);

  const stats = [
    {
      label: "Fretes Ativos",
      value: cargas.length,
      icon: Package,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      label: "Vistos Hoje",
      value: 142,
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      label: "Alertas",
      value: 0,
      icon: AlertCircle,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      label: "Status Engine",
      value: "Online",
      icon: CheckCircle2,
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            Painel Geral
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Controle de fluxo de fretes Tegma.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={fetchCargas}
            disabled={loading}
            className="border-white/5 bg-white/5 hover:bg-white/10 rounded-2xl h-12 px-6"
          >
            <RefreshCcw
              className={cn("mr-2 h-5 w-5", loading && "animate-spin")}
            />
            Sincronizar
          </Button>
          <ScrapeButton onComplete={fetchCargas} />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-[2rem] p-7 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center border border-white/5",
                  stat.bg,
                )}
              >
                <stat.icon className={cn("h-6 w-6", stat.color)} />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <div className="text-3xl font-black">
                {loading ? <Skeleton className="h-10 w-20" /> : stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table Card */}
      <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl">
        <div className="p-10 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-black">Fretes Identificados</h3>
              <p className="text-muted-foreground font-medium">
                Monitoramento em tempo real do portal Tegma.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <AdvancedFilter onFilterChange={setFilters} />
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-[2rem] border border-white/5 overflow-hidden bg-black/20">
            {loading ? (
              <div className="p-8 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton
                    key={i}
                    className="h-16 w-full rounded-2xl opacity-20"
                  />
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5 hover:bg-transparent px-6">
                    <TableHead className="h-16 px-8 text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
                      Carga / Viagem
                    </TableHead>
                    <TableHead className="h-16 px-8 text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
                      Logística
                    </TableHead>
                    <TableHead className="h-16 px-8 text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
                      Equipamento
                    </TableHead>
                    <TableHead className="h-16 px-8 text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
                      Remuneração
                    </TableHead>
                    <TableHead className="h-16 px-8 text-right text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
                      Ações
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCargas.map((carga) => (
                    <TableRow
                      key={carga.id}
                      className="group border-white/5 hover:bg-white/5 transition-all px-6"
                    >
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-primary group-hover:scale-110 transition-transform">
                            <Truck className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-base leading-tight">
                              {carga.viagem}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-tight">
                              {carga.tipoTransporte}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold flex items-center gap-2">
                            <ArrowUpRight className="h-3 w-3 text-emerald-500" />{" "}
                            {carga.origem}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            {carga.destino}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6">
                        <Badge
                          variant="secondary"
                          className="bg-white/5 hover:bg-white/10 text-xs font-bold py-1 px-3 rounded-lg border-white/5"
                        >
                          {carga.equipamento}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-black text-primary text-base">
                            {carga.vrFrete || "Consultar"}
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase font-black">
                            Preço Estimado
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6 text-right">
                        <Button
                          variant="ghost"
                          className="h-10 w-10 p-0 rounded-xl hover:bg-primary/20 hover:text-primary transition-all"
                        >
                          <Search className="h-5 w-5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredCargas.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="h-40 text-center">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center border border-white/5 border-dashed">
                            <Filter className="h-8 w-8 text-muted-foreground opacity-20" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-lg font-black">
                              {filters.search ||
                              filters.equipamento.length > 0 ||
                              filters.tipoTransporte.length > 0
                                ? "Nenhum resultado"
                                : "Lista Vazia"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {filters.search ||
                              filters.equipamento.length > 0 ||
                              filters.tipoTransporte.length > 0
                                ? "Tente buscar por outro termo ou limpe o filtro."
                                : "Aguardando sincronização com o portal."}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
