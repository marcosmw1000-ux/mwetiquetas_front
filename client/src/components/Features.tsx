import { Card } from '@/components/ui/card';
import { Eye, Scissors, Clock, Shield, Award, Users, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Visualização em Tempo Real',
    description: 'Veja como sua etiqueta ficará antes mesmo de produzir',
  },
  {
    icon: Scissors,
    title: 'Corte Personalizado',
    description: 'Facas exclusivas para formatos únicos e diferenciados',
  },
  {
    icon: Clock,
    title: 'Entrega Expressa',
    description: 'Produção em até 24h para pedidos urgentes',
  },
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: 'Materiais premium e controle rigoroso de qualidade',
  },
  {
    icon: Award,
    title: '25 Anos de Experiência',
    description: 'Especialistas em soluções personalizadas',
  },
  {
    icon: Users,
    title: 'Atendimento Especializado',
    description: 'Equipe dedicada para auxiliar em seu projeto',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Facilitado',
    description: 'Aceitamos todos os cartões de crédito e débito',
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que escolher a MW Etiquetas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia avançada, qualidade superior e atendimento personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
