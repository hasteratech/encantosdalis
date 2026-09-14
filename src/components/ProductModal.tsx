import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { X, Star, CheckCircle2, MessageCircle, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, customName?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [customName, setCustomName] = useState('');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, customName);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-rose-100 max-h-[90vh] flex flex-col relative"
        id="product-detail-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-square bg-rose-50/60 relative border border-rose-100">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-bold text-rose-700 shadow-xs">
                {product.size}
              </span>
            </div>

            {/* Title & Specs */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-rose-600 font-bold uppercase tracking-wider">
                <span>{product.ageRecommendation}</span>
                <span>•</span>
                <span>{product.baseTypeName}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-display leading-tight">
                {product.name}
              </h2>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {product.rating} ({product.reviewsCount} avaliações)
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-extrabold text-slate-900 font-display">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color choices */}
              <div className="pt-2 space-y-2">
                <p className="text-xs font-semibold text-slate-700">
                  Escolha a Cor: <span className="text-rose-600">{selectedColor.name}</span>
                </p>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          isSelected ? 'border-rose-600 scale-110 shadow-xs' : 'border-slate-200'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Optional Name Tag personalization */}
              <div className="pt-2 space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                  <span>Nome da menina na tag (opcional):</span>
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Ex: Cecília, Maitê, Sofia..."
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-rose-200 bg-rose-50/30 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>
          </div>

          {/* Details list */}
          <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>Garantias de Conforto e Acabamento:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleAdd}
              className={`py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{added ? 'Adicionado com sucesso!' : 'Adicionar à Minha Sacola'}</span>
            </button>

            <a
              href={getProductWhatsAppUrl(product, selectedColor)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Comprar Direto no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
