export interface Product {
  id: string;
  name: string;
  category: 'proteine' | 'creatine' | 'accessoire';
  price: number;
  image: string;
  description: string;
  stock: number;
  featured?: boolean;
  badge?: string;
  brand?: string;
}

export const products: Product[] = [
  // --- Protéines ---

  // 1. Gold Standard 100% Whey
  {
    id: 'p_gold_std',
    name: 'Gold Standard 100% Whey',
    category: 'proteine',
    price: 45000,
    image: '/asset/produit1.jpeg',
    description: 'La référence mondiale des whey protéines. 24g de protéine pure par dose, 5.5g de BCAAs. Idéal pour la construction musculaire.',
    stock: 45,
    featured: true,
    badge: 'BEST SELLER',
    brand: 'Optimum Nutrition'
  },

  // 2. Platinum Isolate Whey
  {
    id: 'p_plat_iso',
    name: 'Platinum Isolate Whey',
    category: 'proteine',
    price: 55000,
    image: '/asset/produit2.jpeg',
    description: 'Isolat de whey ultra-pur et hydrolysé. Absorption ultra-rapide, sans lactose ni graisses. Le choix des pros.',
    stock: 20,
    featured: true,
    badge: 'PREMIUM',
    brand: 'MuscleTech'
  },

  // 3. Pure Whey EAFIT
  {
    id: 'p_pure_whey',
    name: 'Pure Whey EAFIT',
    category: 'proteine',
    price: 38000,
    image: '/asset/produit3.jpeg',
    description: 'Formule riche en acides aminés essentiels. Parfait pour la récupération après des séances intenses.',
    stock: 35,
    brand: 'EAFIT'
  },

  // 4. Iso Whey Zero
  {
    id: 'p_iso_zero',
    name: 'Iso Whey Zero',
    category: 'proteine',
    price: 48000,
    image: '/asset/produit4.jpeg',
    description: '0 sucre, 0 lactose, 0 gluten. L\'isolat natif de qualité supérieure pour une définition musculaire sèche.',
    stock: 50,
    badge: 'ZERO SUGAR',
    brand: 'BioTechUSA'
  },

  // 5. Mega Mass Gainer
  {
    id: 'p_gainer',
    name: 'Mega Mass Gainer',
    category: 'proteine',
    price: 42000,
    image: '/asset/produit5.jpeg',
    description: 'Le mélange ultime pour la prise de masse rapide. Riche en calories et protéines de qualité.',
    stock: 25,
    brand: 'Generic'
  },

  // 6. 100% Whey Protein (Kanje)
  {
    id: 'p_kanje',
    name: '100% Whey Protein',
    category: 'proteine',
    price: 32000,
    image: '/asset/produit6.jpeg',
    description: 'Protéine polyvalente au rapport qualité/prix imbattable. Saveur Chocolat Intense.',
    stock: 60,
    brand: 'Kanje'
  },


  // --- Créatine ---
  {
    id: 'c1',
    name: 'Créatine Monohydrate',
    category: 'creatine',
    price: 18000,
    image: '/asset/produit7.jpeg',
    description: 'Créatine monohydrate micronisée pure à 100%. Augmente la force physique et l\'explosivité.',
    stock: 60,
    featured: true,
    badge: 'ESSENTIEL',
    brand: 'AmaGalsen'
  },
  {
    id: 'c2',
    name: 'Créatine HCL',
    category: 'creatine',
    price: 25000,
    image: '/asset/produit8.jpeg',
    description: 'Créatine Hydrochloride ultra-concentrée. Pas de rétention d\'eau, pas de ballonnement.',
    stock: 40,
    brand: 'AmaGalsen Pro'
  },

  // --- Accessoires ---
  {
    id: 'a1',
    name: 'Shaker Pro AmaGalsen',
    category: 'accessoire',
    price: 5000,
    image: '/asset/produit9.jpeg',
    description: 'Shaker 700ml avec grille anti-grumeaux. Design exclusif Sénégal (Vert/Jaune/Rouge).',
    stock: 100,
    featured: true,
    badge: 'NOUVEAU',
    brand: 'AmaGalsen'
  },
  {
    id: 'a2',
    name: 'Ceinture Lombaire Cuir',
    category: 'accessoire',
    price: 15000,
    image: '/asset/produit10.jpeg',
    description: 'Ceinture de force en cuir véritable pour un maintien optimal lors de vos squats et deadlifts.',
    stock: 30,
    brand: 'AmaGalsen Gear'
  },
  {
    id: 'a3',
    name: 'Sangles de Tirage',
    category: 'accessoire',
    price: 7000,
    image: '/produit11.jpeg',
    description: 'Améliorez votre grip et soulevez plus lourd avec nos sangles de tirage renforcées.',
    stock: 50,
    brand: 'AmaGalsen Gear'
  }
];

export const categories = [
  { id: 'all', name: 'Tous les produits', count: products.length },
  { id: 'proteine', name: 'Protéines', count: products.filter(p => p.category === 'proteine').length },
  { id: 'creatine', name: 'Créatine', count: products.filter(p => p.category === 'creatine').length },
  { id: 'accessoire', name: 'Accessoires', count: products.filter(p => p.category === 'accessoire').length },
];
