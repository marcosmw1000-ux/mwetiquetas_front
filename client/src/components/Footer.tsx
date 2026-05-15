import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo_marca.png"
                alt="MW Etiquetas"
                className="h-10 w-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Especialistas em etiquetas personalizadas com tecnologia de ponta e
              atendimento diferenciado há mais de 25 anos.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/catalogo">
                <a className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Catálogo
                </a>
              </Link>
              <Link href="/simulador">
                <a className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Simulador
                </a>
              </Link>
              <Link href="/como-funciona">
                <a className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Como Funciona
                </a>
              </Link>
              <Link href="/contato">
                <a className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Produtos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Etiquetas Adesivas
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Etiquetas Resinadas
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Etiquetas Bordadas
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Automação
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Tags Personalizadas
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Rua Doutor Macario Cerqueira, 248
                    <br />
                    Chácara São Cosme
                    <br />
                    Feira de Santana - BA, 44004-205
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">(75) 3226-9299</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">mwetiquetas@uol.com.br</p>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Seg - Sex: 7h às 18:00</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://wa.me/557532269299', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 MW Etiquetas. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
