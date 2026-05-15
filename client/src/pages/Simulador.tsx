import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { MessageCircle, Download } from 'lucide-react';

export default function Simulador() {
  const [selectedShape, setSelectedShape] = useState('retangular');
  const [selectedSize, setSelectedSize] = useState('40x25');
  const [selectedMaterial, setSelectedMaterial] = useState('bopp');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const shapes = [
    { id: 'retangular', label: 'Retangular', icon: '▭' },
    { id: 'quadrado', label: 'Quadrado', icon: '□' },
    { id: 'circular', label: 'Circular', icon: '◯' },
  ];

  const sizes = ['25x15', '40x25', '60x40', '100x50', 'Personalizado'];

  const materials = [
    { id: 'bopp', label: 'BOPP' },
    { id: 'couche', label: 'Couchê' },
    { id: 'termico', label: 'Papel Térmico' },
    { id: 'cetim', label: 'Cetim' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRequestQuote = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para uma etiqueta com as seguintes especificações:
- Formato: ${selectedShape}
- Tamanho: ${selectedSize}mm
- Material: ${materials.find((m) => m.id === selectedMaterial)?.label}

Por favor, enviem um orçamento.`;
    window.open(
      `https://wa.me/557532269299?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="container">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simulador de Etiquetas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Customize sua etiqueta em tempo real e visualize como ficará antes de produzir.
            </p>
          </div>
        </section>

        {/* Simulator Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Panel - Configuration */}
              <div className="lg:col-span-1 space-y-6">
                {/* Upload Image */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Sua Arte</h3>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <label className="cursor-pointer">
                      <div className="text-4xl mb-2">📤</div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Clique para enviar sua arte
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG ou PDF (máx. 10MB)
                      </p>
                      <Input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {uploadedImage && (
                    <div className="mt-4 p-2 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">✓ Arquivo enviado com sucesso</p>
                    </div>
                  )}
                </Card>

                {/* Shape Selection */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Formato</h3>
                  <div className="space-y-2">
                    {shapes.map((shape) => (
                      <button
                        key={shape.id}
                        onClick={() => setSelectedShape(shape.id)}
                        className={`w-full p-3 rounded-lg border-2 transition-all ${
                          selectedShape === shape.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="text-2xl mr-2">{shape.icon}</span>
                        <span className="font-medium">{shape.label}</span>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Size Selection */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tamanho</h3>
                  <div className="space-y-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-full p-3 rounded-lg border-2 transition-all ${
                          selectedSize === size
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium">{size}mm</span>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Material Selection */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Material</h3>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <button
                        key={material.id}
                        onClick={() => setSelectedMaterial(material.id)}
                        className={`w-full p-3 rounded-lg border-2 transition-all ${
                          selectedMaterial === material.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium">{material.label}</span>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Panel - Preview */}
              <div className="lg:col-span-2 space-y-6">
                {/* Preview Card */}
                <Card className="p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Visualização</h3>
                  <div className="bg-muted/30 rounded-lg p-12 flex items-center justify-center min-h-96">
                    {uploadedImage ? (
                      <div className="w-full">
                        <div
                          className={`mx-auto bg-white border-2 border-primary/20 shadow-lg ${
                            selectedShape === 'circular' ? 'rounded-full' : 'rounded-lg'
                          }`}
                          style={{
                            width:
                              selectedShape === 'quadrado' ? '200px' : '280px',
                            height:
                              selectedShape === 'quadrado' ? '200px' : '140px',
                            backgroundImage: `url(${uploadedImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏷️</div>
                        <p className="text-muted-foreground">
                          Envie sua arte para visualizar
                        </p>
                      </div>
                    )}
                  </div>
                </Card>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <Badge className="mb-2 bg-primary text-primary-foreground">
                      Entrega
                    </Badge>
                    <p className="font-semibold text-foreground">Até 24h</p>
                    <p className="text-sm text-muted-foreground">Produção rápida</p>
                  </Card>
                  <Card className="p-4">
                    <Badge className="mb-2 bg-accent text-accent-foreground">
                      Orçamento
                    </Badge>
                    <p className="font-semibold text-foreground">30 minutos</p>
                    <p className="text-sm text-muted-foreground">Resposta rápida</p>
                  </Card>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={handleRequestQuote}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Arquivo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
