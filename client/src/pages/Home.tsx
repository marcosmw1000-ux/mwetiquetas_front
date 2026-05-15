import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCategories } from '@/components/ProductCategories';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductCategories />
        <Features />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
