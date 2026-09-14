import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AgeFilter } from './components/AgeFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Features } from './components/Features';
import { CareGuide } from './components/CareGuide';
import { Faq } from './components/Faq';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { AgeGroup, CartItem, Product, ProductColor } from './types';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<AgeGroup>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, color: ProductColor, customName?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor.name === color.name
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        if (customName) updated[existingIndex].customName = customName;
        return updated;
      }

      return [...prev, { product, selectedColor: color, quantity: 1, customName }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todas' ? true : item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.baseTypeName.toLowerCase().includes(q) ||
        item.colors.some((c) => c.name.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf8] text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with value prop & WhatsApp CTA */}
        <Hero onExploreClick={scrollToCatalog} />

        {/* Age & Style Collections Section */}
        <section id="catalogo" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="idades">
            <AgeFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Product Grid */}
          <div className="mt-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-rose-100 p-8">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center text-2xl mb-3">
                  🔍
                </div>
                <h3 className="text-base font-bold text-slate-700 font-display">
                  Nenhum laço encontrado
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                  Não encontramos nenhum acessório com a busca "{searchQuery}". Tente usar outros termos como "rosa", "tiara" ou "presilha".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('todas');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition-colors"
                >
                  Ver Todos os Modelos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p, c) => handleAddToCart(p, c)}
                    onViewDetails={(p) => setSelectedProduct(p)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Comfort Guarantees & Features (Why bows don't hurt) */}
        <Features />

        {/* Care Guide & Custom Atelier Commission */}
        <CareGuide />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer with WhatsApp checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Sticky Floating WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}
