import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { MessageCircle, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: ProductColor) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor);
    setJustAdded(true);

    // Subtle celebration confetti
    try {
      confetti({
        particleCount: 28,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#a855f7']
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setJustAdded(false);
    }, 1600);
  };

  return (
    <div
      className="group bg-white rounded-3xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Section */}
      <div
        className="relative aspect-4/3 overflow-hidden bg-rose-50/50 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-rose-700 shadow-xs backdrop-blur-xs border border-rose-100">
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
            {product.ageRecommendation}
          </span>
        </div>

        {/* Quick View trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-slate-700 hover:bg-white hover:text-rose-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="Ver detalhes"
          aria-label="Ver detalhes do produto"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Rating overlay */}
        <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-700 flex items-center gap-1 shadow-2xs">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Base Type Indicator */}
          <p className="text-[11px] font-semibold tracking-wide uppercase text-rose-600">
            {product.baseTypeName}
          </p>

          <h3
            onClick={() => onViewDetails(product)}
            className="text-base sm:text-lg font-bold text-slate-800 leading-snug hover:text-rose-600 transition-colors cursor-pointer mt-0.5 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Color Palette Swatches */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Cor selecionada:</span>
            <span className="font-semibold text-slate-700">{selectedColor.name}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {product.colors.map((color) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer relative ${
                    isSelected
                      ? 'border-rose-500 scale-110 shadow-xs'
                      : 'border-white hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Selecionar cor ${color.name}`}
                >
                  {isSelected && (
                    <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-slate-700/60" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Action Block */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">
              Pronta-entrega
            </span>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Na Sacola</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Order */}
            <a
              href={getProductWhatsAppUrl(product, selectedColor)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
              title="Pedir este laço direto pelo WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Pedir no Zap</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
