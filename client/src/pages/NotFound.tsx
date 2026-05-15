import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="text-6xl font-bold text-primary">404</div>
        <h1 className="text-3xl font-bold text-foreground">Página não encontrada</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">Voltar para Home</Button>
        </Link>
      </div>
    </div>
  );
}
