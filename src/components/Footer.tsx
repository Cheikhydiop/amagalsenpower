import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* About Section */}
      <section id="a-propos" className="py-20 bg-gradient-senegal-soft">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold display-font text-gradient-senegal">
                À Propos d'AmaGalsenPower
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AmaGalsenPower</strong> est née de la passion pour le sport et
                la fierté sénégalaise. Nous proposons des suppléments de qualité premium
                pour accompagner les athlètes dans leur quête de performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque produit est sélectionné avec soin pour garantir les meilleurs résultats.
                Notre mission : <span className="text-primary font-bold">rendre la nutrition sportive
                  accessible</span> à tous les Sénégalais.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-lg border border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    🇸🇳
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Sénégalais</p>
                    <p className="text-sm text-muted-foreground">Fierté locale</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-lg border border-secondary/20">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    ✨
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Qualité Premium</p>
                    <p className="text-sm text-muted-foreground">Certifiée</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold display-font">Nos Valeurs</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">💪</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Nous ne proposons que les meilleurs produits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Confiance</h4>
                    <p className="text-sm text-muted-foreground">
                      Transparence et honnêteté dans nos pratiques
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Résultats</h4>
                    <p className="text-sm text-muted-foreground">
                      Votre réussite est notre priorité
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <h3 className="text-xl font-bold display-font text-gradient-senegal">
                AmaGalsenPower
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre partenaire nutrition pour des performances exceptionnelles.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-muted-foreground hover:text-primary transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Protéines
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Créatine
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Accessoires
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+221 77 372 97 37</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@amagalsenpower.sn</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-senegal-soft border border-border rounded-2xl p-6 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-bold">📬 Restez informé</h4>
            <p className="text-sm text-muted-foreground">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © 2026 AmaGalsenPower. Tous droits réservés. 🇸🇳
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
