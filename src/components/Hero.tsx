import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-senegal-soft opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 105, 62, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                🇸🇳 100% Sénégalais • 100% Qualité
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold display-font leading-tight">
              <span className="text-gradient-senegal">
                AmaGalsen
              </span>
              <br />
              <span className="text-foreground">
                Power
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Libérez votre <span className="text-secondary font-bold">force intérieure</span> avec nos
              suppléments premium. La <span className="text-accent font-bold">fierté sénégalaise</span> au
              service de vos performances.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 glow-green"
                onClick={scrollToProducts}
              >
                Découvrir nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2"
                onClick={() => document.getElementById('a-propos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">17</p>
                <p className="text-sm text-muted-foreground">Produits premium</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Qualité garantie</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden md:block">
            <div className="relative z-10 animate-float">
              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:glow-green">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Performance Max</h3>
                      <p className="text-sm text-muted-foreground">Résultats garantis</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-secondary transition-all duration-300 hover:glow-yellow ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Qualité Certifiée</h3>
                      <p className="text-sm text-muted-foreground">Produits contrôlés</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:glow-red">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Champions du Sénégal</h3>
                      <p className="text-sm text-muted-foreground">Fabriqué localement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-background"
            d="M0,50 C320,80 420,20 720,50 C1020,80 1120,20 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
