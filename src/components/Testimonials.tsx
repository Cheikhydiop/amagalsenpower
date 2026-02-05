import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Sathies",
            role: "Lutteur Professionnel",
            content: "AmaGalsenPower m'a accompagné dans ma préparation physique. Les produits sont d'une qualité exceptionnelle et m'ont aidé à atteindre mon pic de forme. Je recommande à 100% !",
            image: "/placeholder.svg", // We'll use a placeholder or if there is a specific asset
            initials: "ST",
        },
        {
            name: "Fatou Ndiaye",
            role: "Crossfit Athlete",
            content: "Livraison super rapide et produits authentiques. J'ai enfin trouvé mon fournisseur de confiance à Dakar.",
            image: "/placeholder.svg",
            initials: "FN",
        },
        {
            name: "Moussa Diop",
            role: "Coach Sportif",
            content: "Mes clients sont ravis des résultats. La gamme est complète et adaptée aux besoins des sportifs sénégalais.",
            image: "/placeholder.svg",
            initials: "MD",
        },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold display-font text-gradient-senegal">
                        Ils nous font confiance
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Découvrez pourquoi les meilleurs athlètes du Sénégal choisissent AmaGalsenPower pour leur nutrition.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12 border-2 border-primary/20">
                                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                        {testimonial.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-lg leading-none">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                                <p className="text-muted-foreground italic relative z-10">
                                    "{testimonial.content}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
