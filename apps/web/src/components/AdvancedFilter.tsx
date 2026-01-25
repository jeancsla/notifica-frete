import { useState } from "react";
import { Filter, X, Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface FilterValues {
  search: string;
  equipamento: string[];
  tipoTransporte: string[];
}

interface AdvancedFilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export function AdvancedFilter({ onFilterChange }: AdvancedFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<FilterValues>({
    search: "",
    equipamento: [],
    tipoTransporte: [],
  });

  const equipamentos = [
    "Plataforma",
    "Sider",
    "Baú",
    "Grade Baixa",
    "Vanderleia",
  ];
  const tipos = ["CIF", "FOB", "TRANSFERÊNCIA"];

  const toggleArrayFilter = (key: keyof FilterValues, value: string) => {
    setLocalFilters((prev) => {
      const current = prev[key] as string[];
      const next = current.includes(value)
        ? current.filter((i) => i !== value)
        : [...current, value];

      const updated = { ...prev, [key]: next };
      return updated;
    });
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const clearFilters = () => {
    const cleared = { search: "", equipamento: [], tipoTransporte: [] };
    setLocalFilters(cleared);
    onFilterChange(cleared);
  };

  const activeCount =
    localFilters.equipamento.length +
    localFilters.tipoTransporte.length +
    (localFilters.search ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="relative group min-w-[300px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Pesquisa rápida..."
          className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl focus-visible:ring-primary/40 focus-visible:bg-white/10 transition-all text-base"
          value={localFilters.search}
          onChange={(e) => {
            const next = { ...localFilters, search: e.target.value };
            setLocalFilters(next);
            onFilterChange(next);
          }}
        />
      </div>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "h-14 px-6 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 relative transition-all",
              activeCount > 0 && "border-primary/50 bg-primary/5 text-primary",
            )}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filtros Avançados
            {activeCount > 0 && (
              <Badge
                variant="default"
                className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px] bg-primary text-primary-foreground border-none"
              >
                {activeCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 glass border-white/10 rounded-2xl p-6 shadow-2xl"
          align="end"
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                  Filtros Ativos
                </h4>
                {activeCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="h-8 text-[11px] text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    Limpar tudo
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase text-white/50">
                    Equipamento
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {equipamentos.map((eq) => (
                      <button
                        key={eq}
                        onClick={() => toggleArrayFilter("equipamento", eq)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-bold border transition-all",
                          localFilters.equipamento.includes(eq)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-white/5 text-muted-foreground border-white/5 hover:border-white/20",
                        )}
                      >
                        {eq}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase text-white/50">
                    Tipo de Transporte
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {tipos.map((t) => (
                      <button
                        key={t}
                        onClick={() => toggleArrayFilter("tipoTransporte", t)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-bold border transition-all",
                          localFilters.tipoTransporte.includes(t)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-white/5 text-muted-foreground border-white/5 hover:border-white/20",
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-white/5" />

            <div className="flex gap-3">
              <Button
                variant="ghost"
                className="flex-1 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                className="flex-1 bg-primary text-primary-foreground rounded-xl font-bold"
                onClick={applyFilters}
              >
                Aplicar
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
