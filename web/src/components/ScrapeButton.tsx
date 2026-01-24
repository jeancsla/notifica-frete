import { useState } from "react";
import { Play, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/eden";

export function ScrapeButton({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleScrape = async () => {
    setLoading(true);
    try {
      const { data, error } = await api.api.scrape.post();

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro na Operação",
          description: "Não foi possível conectar ao portal Tegma no momento.",
        });
      } else if (data?.success && data.summary) {
        toast({
          title: "Sincronização Concluída",
          description: `Identificados: ${data.summary.totalFound} | Novos: ${data.summary.created}`,
          className: "glass border-primary/20",
        });
        if (onComplete) onComplete();
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erro de Rede",
        description: "Verifique sua conexão com o servidor local.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleScrape}
      disabled={loading}
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-2xl h-12 px-8 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all active:scale-95 group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
      {loading ? (
        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
      ) : (
        <Sparkles className="mr-3 h-5 w-5 fill-current transition-transform group-hover:rotate-12" />
      )}
      Sincronizar Tegma
    </Button>
  );
}
