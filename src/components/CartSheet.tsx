import { ReactNode } from 'react';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface CartSheetProps {
  children: ReactNode;
}

export function CartSheet({ children }: CartSheetProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Votre panier est vide');
      return;
    }

    let message = "Bonjour, je voudrais commander :\n\n";
    items.forEach(item => {
      message += `- *${item.product.name}* (x${item.quantity})\n  ${item.product.description}\n  Prix unitaire : ${item.product.price.toLocaleString('fr-FR')} FCFA\n\n`;
    });

    message += `*Total à payer : ${totalPrice.toLocaleString('fr-FR')} FCFA*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/221773729737?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast.success('Redirection vers WhatsApp...', {
      description: 'Finalisez votre commande avec le vendeur.',
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast.info('Panier vidé');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold display-font">
            <span className="text-gradient-senegal">Votre Panier</span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Votre panier est vide</p>
              <p className="text-sm text-muted-foreground">
                Ajoutez des produits pour commencer vos achats
              </p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-card border border-border rounded-lg p-4 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold line-clamp-2">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.product.price.toLocaleString('fr-FR')} FCFA
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Badge variant="secondary" className="min-w-[40px] justify-center">
                          {item.quantity}
                        </Badge>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {(item.product.price * item.quantity).toLocaleString('fr-FR')} FCFA
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4 border-t">
              {/* Subtotal */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">
                    {totalPrice.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-medium text-primary">Gratuite</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-gradient-senegal">
                    {totalPrice.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>
              </div>

              {/* Actions */}
              <SheetFooter className="flex-col sm:flex-col gap-2">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 glow-green"
                >
                  Commander maintenant
                </Button>
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  className="w-full"
                >
                  Vider le panier
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
