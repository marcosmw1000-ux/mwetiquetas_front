import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/557532269299?text=Olá! Quero fazer etiquetas personalizadas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-40"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
