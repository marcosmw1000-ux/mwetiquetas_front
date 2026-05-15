import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Link } from 'wouter';

const products = [
  {
    id: 1,
    name: 'Etiquetas Adesivas Personalizadas',
    category: 'Adesivas',
    description: 'Material resistente à água, ideal para produtos externos',
    rating: 5,
    popular: true,
    icon: '🏷️',
    materials: ['BOPP', 'Couchê'],
    sizes: ['25x15mm', '40x25mm', '60x40mm', 'Personalizado'],
  },
  {
    id: 2,
    name: 'Etiquetas para Confecção',
    category: 'Resinadas',
    description: 'Coleção de etiquetas resinadas para empresas e marcas',
    rating: 5,
    icon: '👕',
    materials: ['Papel couchê', 'Resina brilhante'],
    sizes: ['Diversos tamanhos', 'Personalizado'],
  },
  {
    id: 3,
    name: 'Gôndola Amarela Sem Cola',
    category: 'Gôndolas',
    description: 'Etiqueta gôndola para prateleiras sem adesivo',
    rating: 5,
    icon: '🛒',
    materials: ['Papel couchê'],
    sizes: ['100x30 rolo com 30 metros'],
  },
  {
    id: 4,
    name: 'Etiquetas para Automação',
    category: 'Automação',
    description: 'Para identificação e rastreamento industrial',
    rating: 5,
    icon: '⚙️',
    materials: ['Papel térmico', 'Adesivo permanente'],
    sizes: ['50x25mm', '70x35mm', '100x50mm', 'Personalizado'],
  },
  {
    id: 5,
    name: "Tag's Personalizados",
    category: 'Tags',
    description: 'Corte especial em formatos únicos com acabamentos premium',
    rating: 5,
    popular: true,
    icon: '✨',
    materials: ['Papel especial', 'Corte personalizado', 'Hot stamping'],
    sizes: ['Formato livre', 'Até 10x10cm'],
  },
  {
    id: 6,
    name: 'Fitas em Cetim Personalizadas',
    category: 'Fitas',
    description: 'Fitas de cetim personalizadas com impressão dourada e prateada',
    rating: 5,
    icon: '🎀',
    materials: ['Cetim', 'Impressão dourada', 'Impressão prateada'],
    sizes: ['15mm', '22mm', '38mm', 'Personalizado'],
  },
  {
    id: 7,
    name: 'Etiquetas Bordadas',
    category: 'Bordadas',
    description: 'Etiquetas bordadas com acabamento premium',
    rating: 5,
    icon: '🧵',
    materials: ['Algodão', 'Poliéster'],
    sizes: ['Personalizado'],
  },
  {
    id: 8,
    name: 'Etiquetas Resinadas',
    category: 'Resinadas',
    description: 'Etiquetas com acabamento resinado brilhante',
    rating: 5,
    icon: '💎',
    materials: ['Papel couchê', 'Resina'],
    sizes: ['Personalizado'],
  },
  {
    id: 9,
    name: 'Etiquetas Holográficas',
    category: 'Especiais',
    description: 'Etiquetas com efeito holográfico premium',
    rating: 5,
    icon: '🌈',
    materials: ['Holográfico'],
    sizes: ['Personalizado'],
  },
];

export default function Catalogo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="container">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore nossa linha completa de etiquetas e adesivos personalizados. Encontre o
              produto ideal para sua necessidade.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 h-48 flex items-center justify-center">
                    <div className="text-6xl">{product.icon}</div>
                    {product.popular && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        Popular
                      </Badge>
                    )}
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{product.description}</p>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-foreground">Materiais:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.materials.map((material, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-foreground">Tamanhos:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.sizes.slice(0, 2).map((size, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {size}
                            </Badge>
                          ))}
                          {product.sizes.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.sizes.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="default" size="sm" className="flex-1">
                        Ver Mais
                      </Button>
                      <Link href="/simulador">
                        <Button variant="outline" size="sm" className="flex-1">
                          Simular
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
