
import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const phoneNumber = "+2348028636198";
  const message = "Hello! I'd like to inquire about your engineering services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hidden sm:flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us on WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppWidget;
