import { Phone } from 'lucide-react';

export function WhatsAppFloat() {
    const phoneNumber = "221773729737";
    const message = "Bonjour AmaGalsenPower, j'ai besoin de conseils sur vos produits.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce-slow flex items-center gap-2 group"
            aria-label="Contacter sur WhatsApp"
        >
            <Phone className="h-6 w-6 fill-current" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
                Besoin d'aide ?
            </span>
        </a>
    );
}
