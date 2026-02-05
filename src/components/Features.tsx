import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: <Clock className="h-10 w-10 text-primary" />,
            title: "Livraison Express 24h",
            description: "Recevez vos produits en moins de 24h partout à Dakar et dans la banlieue.",
        },
        {
            icon: <Truck className="h-10 w-10 text-secondary" />,
            title: "Livraison Gratuite",
            description: "La livraison est 100% offerte pour toute commande, sans minimum d'achat.",
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-accent" />,
            title: "Produits Authentiques",
            description: "Garantie 100% original. Nous importons directement des marques certifiées.",
        },
        {
            icon: <MapPin className="h-10 w-10 text-primary" />,
            title: "Paiement à la livraison",
            description: "Vérifiez votre commande avant de payer. Satisfaction garantie.",
        },
    ];

    return (
        <section className="py-16 bg-card border-y border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="p-4 bg-muted rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
