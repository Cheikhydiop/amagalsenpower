import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ShoppingCart, Check, Package } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    toast.success(
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-primary" />
        <span><strong>{product.name}</strong> ajouté au panier!</span>
      </div>
    );
    setTimeout(() => setIsAdding(false), 600);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'proteine':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'creatine':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'accessoire':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'proteine':
        return '💪 Protéine';
      case 'creatine':
        return '⚡ Créatine';
      case 'accessoire':
        return '🎯 Accessoire';
      default:
        return category;
    }
  };

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl ${featured
        ? 'border-2 border-primary/50 hover:border-primary hover:glow-green'
        : 'hover:border-primary/30'
        }`}
    >
      <CardHeader className="p-0 relative">
        {/* Product Image */}
        <div className="relative aspect-square bg-gradient-senegal-soft overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Package className="h-24 w-24 text-muted-foreground/20" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <Badge className={getCategoryColor(product.category)}>
              {getCategoryLabel(product.category)}
            </Badge>
            {product.badge && (
              <Badge className="bg-accent text-accent-foreground font-bold">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Stock Indicator */}
          {product.stock < 10 && (
            <div className="absolute bottom-3 left-3">
              <Badge variant="destructive" className="font-semibold">
                Plus que {product.stock} en stock!
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-3">
        {/* Product Name */}
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">
            {product.price.toLocaleString('fr-FR')}
          </span>
          <span className="text-sm text-muted-foreground">FCFA</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className={`w-full font-semibold transition-all ${isAdding
            ? 'bg-primary text-primary-foreground'
            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }`}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? (
            'Rupture de stock'
          ) : isAdding ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Ajouté!
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Ajouter au panier
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
