import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Truck, Clock, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { ProductCarousel } from '@/components/ProductCarousel';

export function Hero() {
  return (
    <section className="bg-background">
      {/* Main Hero */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Etiquetas Personalizadas
                <span className="text-primary"> Para Vários Segmentos</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Visualize sua arte em tempo real com nossa tecnologia avançada.
                Etiquetas personalizadas com qualidade profissional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/simulador">
                <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                  Simular Sua Etiqueta
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/catalogo">
                <Button variant="outline">Ver Catálogo</Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Entrega Rápida</div>
                <div className="text-xs text-muted-foreground">A partir de 24h</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Qualidade</div>
                <div className="text-xs text-muted-foreground">Garantida</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">24h Online</div>
                <div className="text-xs text-muted-foreground">Peça quando quiser</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <ProductCarousel />
       
          </div>
        </div>
           
      </div>

      {/* Trust Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                Pagamento 100% Seguro
              </span>
              <span className="hidden sm:flex items-center">
                <Truck className="h-4 w-4 mr-2 text-primary" />
                Entregamos para todo Brasil
              </span>
              <span className="hidden lg:flex items-center">
                <Star className="h-4 w-4 mr-2 text-primary" />
                25+ Anos de Experiência
              </span>
            </div>
            <div className="text-sm font-medium text-primary">
              Orçamento em até 30 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
