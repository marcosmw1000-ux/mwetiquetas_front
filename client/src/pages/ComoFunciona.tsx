import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function ComoFunciona() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Como Funciona</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Conheça o processo completo de criação e produção de suas etiquetas personalizadas
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Escolha o Produto',
                  description: 'Selecione o tipo de etiqueta que melhor se adequa ao seu projeto',
                },
                {
                  step: '2',
                  title: 'Customize',
                  description: 'Use nosso simulador para criar sua arte com cores e tamanhos personalizados',
                },
                {
                  step: '3',
                  title: 'Solicite Orçamento',
                  description: 'Envie seu projeto e receba um orçamento em até 30 minutos',
                },
                {
                  step: '4',
                  title: 'Receba sua Encomenda',
                  description: 'Produção em até 24h com entrega para todo Brasil',
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <Link href="/simulador">
                <Button size="lg" className="group">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <Badge className="mb-4">Sobre Nós</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  25 Anos de Experiência em Etiquetas Personalizadas
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  A MW Etiquetas é uma empresa especializada na fabricação de etiquetas personalizadas
                  com tecnologia de ponta e atendimento diferenciado. Ao longo de 25 anos, consolidamos
                  nossa posição como referência no mercado de etiquetagem.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Materiais Disponíveis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'BOPP',
                      description: 'Material resistente à água, ideal para produtos externos e ambientes úmidos',
                    },
                    {
                      name: 'Couchê',
                      description: 'Papel de alta qualidade com acabamento liso, perfeito para impressão detalhada',
                    },
                    {
                      name: 'Papel Térmico',
                      description: 'Ideal para etiquetas de automação e rastreamento industrial',
                    },
                    {
                      name: 'Cetim',
                      description: 'Fitas personalizadas com impressão dourada ou prateada para acabamento premium',
                    },
                  ].map((material, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{material.name}</h4>
                          <p className="text-muted-foreground text-sm">{material.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Acabamentos Especiais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Hot Stamping',
                      description: 'Acabamento com impressão dourada ou prateada para um toque premium',
                    },
                    {
                      name: 'Corte Personalizado',
                      description: 'Facas exclusivas para formatos únicos e diferenciados',
                    },
                    {
                      name: 'Resinagem',
                      description: 'Acabamento brilhante que protege a impressão e aumenta durabilidade',
                    },
                    {
                      name: 'Bordado',
                      description: 'Etiquetas bordadas com acabamento artesanal de alta qualidade',
                    },
                  ].map((acabamento, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{acabamento.name}</h4>
                          <p className="text-muted-foreground text-sm">{acabamento.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pedido Mínimo</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Não temos pedido mínimo! Você pode encomendar a quantidade que precisar, desde uma
                  pequena quantidade para testes até grandes volumes para sua empresa.
                </p>
                <p className="text-muted-foreground">
                  Quanto maior a quantidade, melhor o preço unitário. Solicite um orçamento personalizado
                  para sua necessidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Use nosso simulador para criar sua etiqueta personalizada e receba um orçamento em até
              30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/simulador">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Acessar Simulador
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open('https://wa.me/557532269299', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
