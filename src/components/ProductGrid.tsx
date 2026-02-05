import { useState } from 'react';
import { products, categories } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const featuredProducts = products.filter(p => p.featured);

  return (
    <section id="produits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Products */}
        {selectedCategory === 'all' && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
                ⭐ SÉLECTION PREMIUM
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold display-font text-gradient-senegal mb-4">
                Nos Produits Stars
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Les favoris de nos athlètes sénégalais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} featured />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold display-font mb-8 text-center">
            <span className="text-gradient-senegal">Tous nos produits</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 text-base font-semibold transition-all ${selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground glow-green'
                    : 'hover:border-primary'
                  }`}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className="ml-2"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
