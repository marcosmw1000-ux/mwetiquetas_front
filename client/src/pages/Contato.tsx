import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Estamos aqui para ajudar! Entre em contato conosco através de qualquer canal abaixo.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Phone,
                  title: 'Telefone',
                  content: '(75) 3226-9299',
                  action: 'tel:+557532269299',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  content: 'mwetiquetas@uol.com.br',
                  action: 'mailto:mwetiquetas@uol.com.br',
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  content: '(75) 99999-9999',
                  action: 'https://wa.me/557532269299',
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{contact.content}</p>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => {
                        if (contact.action.startsWith('http')) {
                          window.open(contact.action, '_blank');
                        } else {
                          window.location.href = contact.action;
                        }
                      }}
                    >
                      Contatar
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hours */}
              <Card className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Horário de Funcionamento
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Segunda a Sexta</span>
                    <span className="text-muted-foreground">7h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Sábado</span>
                    <span className="text-muted-foreground">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <Badge className="bg-accent text-accent-foreground mb-2">
                    Atendimento Online
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Estamos disponíveis 24h por dia para receber suas mensagens e solicitações
                    online.
                  </p>
                </div>
              </Card>

              {/* Address */}
              <Card className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Localização</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-2">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Doutor Macario Cerqueira, 248
                      <br />
                      Chácara São Cosme
                      <br />
                      Feira de Santana - BA, 44004-205
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      window.open(
                        'https://maps.google.com/?q=Rua+Doutor+Macario+Cerqueira+248+Feira+de+Santana+BA',
                        '_blank'
                      )
                    }
                  >
                    Ver no Mapa
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de um orçamento?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Envie sua solicitação e receba um orçamento personalizado em até 30 minutos.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://wa.me/557532269299', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Solicitar Orçamento via WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
