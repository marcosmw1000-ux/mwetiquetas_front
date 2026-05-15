import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface CarouselItem {
  id: string;
  name: string;
  metrics: string[];
  icon: string;
  link: string;
  image?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 'automacao',
    name: 'Etiqueta Automação',
    metrics: ['100x150', '100x77', '100x50', '50x30', 'Código de Barras'],
    icon: '',
    link: '/catalogo',
    image: '/etiqueta_automacao.png',
  },
  {
    id: 'balanca',
    name: 'Etiqueta Balança',
    metrics: ['61x30', '40x40', '40x30'],
    icon: '',
    link: '/catalogo',
  },
  {
    id: 'preco',
    name: 'Etiqueta Preço',
    metrics: ['MX5500', 'Volte Sempre'],
    icon: '',
    link: '/catalogo',
    image: '/etiqueta_preco.jpeg',
  },
  {
    id: 'congelamento',
    name: 'Etiqueta Congelamento',
    metrics: ['Resistente ao Frio'],
    icon: '',
    link: '/catalogo',
  },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    setAutoplay(false);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        className="relative rounded-lg overflow-hidden"
        style={
          currentItem.image && window.innerWidth < 640
            ? {
                backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.85), rgba(234, 88, 12, 0.85)), url(${currentItem.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {
                backgroundColor: 'rgb(230, 240, 250)',
              }
        }
      >
        {/* Desktop Layout */}
        <div className="hidden sm:block py-12 px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Image Section */}
            {currentItem.image && (
              <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-40 lg:w-48">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="h-40 lg:h-48 w-auto object-contain"
                />
              </div>
            )}

            {/* Content Section */}
            <div className="flex-1 space-y-3 animate-in fade-in duration-500">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                {currentItem.name}
              </h3>
              
              <div className="text-sm lg:text-base text-primary font-semibold leading-relaxed">
                {currentItem.metrics.join(' • ')}
              </div>

              {/* CTA Button */}
              <Link href={currentItem.link}>
                <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Compre Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden py-16 px-6 flex flex-col items-center justify-center text-center min-h-80">
          <div className="space-y-4 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {currentItem.name}
            </h3>
            
            <div className="text-sm font-semibold text-white drop-shadow-lg leading-relaxed">
              {currentItem.metrics.join(' • ')}
            </div>

            {/* CTA Button */}
            <Link href={currentItem.link}>
              <Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Compre Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto bg-white/80 hover:bg-white text-foreground rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto bg-white/80 hover:bg-white text-foreground rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoplay(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-primary/30 w-2 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
