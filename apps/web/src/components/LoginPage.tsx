import { useState } from "react";
import { Truck, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LoginPageProps {
  onLogin: (token: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call for now (we'll connect to actual /api/auth later)
    setTimeout(() => {
      if (email && password) {
        onLogin("mock_token");
        toast({
          title: "Bem-vindo de volta!",
          description: "Login realizado com sucesso.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erro de Autenticação",
          description: "Por favor, preencha todos os campos.",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0c] relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="w-full max-w-md p-6 space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_40px_rgba(59,130,246,0.3)] mb-4">
            <Truck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Notifica Frete
          </h1>
          <p className="text-muted-foreground font-medium">
            Acesse sua plataforma de logística premium
          </p>
        </div>

        <Card className="glass border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
          <CardHeader className="space-y-1 pt-8 px-8">
            <CardTitle className="text-xl font-bold">Entrar</CardTitle>
            <CardDescription className="font-medium text-muted-foreground">
              Digite suas credenciais para gerenciar seus fretes
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 px-8 pb-8">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[11px] uppercase font-black tracking-widest text-muted-foreground ml-1"
                >
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@notificafrete.com"
                  className="h-12 bg-white/5 border-white/5 rounded-xl focus-visible:ring-primary/40 focus-visible:bg-white/10 transition-all text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label
                    htmlFor="password"
                    className="text-[11px] uppercase font-black tracking-widest text-muted-foreground"
                  >
                    Senha
                  </Label>
                  <Button
                    variant="link"
                    className="px-0 h-auto text-[11px] uppercase font-black tracking-widest opacity-50 hover:opacity-100"
                  >
                    Esqueceu?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="h-12 bg-white/5 border-white/5 rounded-xl focus-visible:ring-primary/40 focus-visible:bg-white/10 transition-all text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Acessar Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Conexão Segura SSL</span>
        </div>
      </div>
    </div>
  );
}
