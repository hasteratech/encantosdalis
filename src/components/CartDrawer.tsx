import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';
import { getCartWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [childName, setChildName] = useState('');
  const [city, setCity] = useState('');
  const [shippingPref, setShippingPref] = useState('Envio Padrão / Correios');

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#ec4899', '#f43f5e', '#a855f7']
      });
    } catch {
      // ignore
    }

    const url = getCartWhatsAppUrl(items, childName, city, shippingPref);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-rose-100 animate-slide-in">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/40">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-800 font-display">
                Sua Sacola de Encomendas
              </h3>
              <p className="text-[11px] text-slate-500">
                {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-rose-50 text-rose-300 mx-auto flex items-center justify-center text-2xl">
                🎀
              </div>
              <h4 className="text-base font-bold text-slate-700">Sua sacola está vazia</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore nossas coleções de laços, tiaras e presilhas e adicione os favoritos da sua menina!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
              >
                Ver Modelos de Laços
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor.name}-${index}`}
                  className="p-3 rounded-2xl border border-rose-100 bg-[#fdfaf8] flex gap-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover bg-white shrink-0 border border-rose-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <span>Cor:</span>
                      <span className="font-semibold text-slate-700">{item.selectedColor.name}</span>
                    </p>
                    <p className="text-xs font-extrabold text-rose-700 mt-0.5">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex items-center border border-rose-200 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="p-1 text-slate-500 hover:text-rose-600"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1 text-slate-500 hover:text-rose-600"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-slate-400 hover:text-red-500 p-1"
                        title="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-slate-400 hover:text-red-500 underline"
                >
                  Limpar sacola
                </button>
              </div>

              {/* Personalization Fields */}
              <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2.5 text-xs">
                <p className="font-bold text-rose-900 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-200" />
                  <span>Personalize seu Pedido:</span>
                </p>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-0.5">
                    Nome da Menina (para a tag de brinde):
                  </label>
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Ex: Valentina, Laura, Bia..."
                    className="w-full px-2.5 py-1.5 rounded-lg border border-rose-200 bg-white text-xs focus:ring-1 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-0.5">
                    Sua Cidade / CEP (para estimar o frete):
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Campinas - SP / 13000-000"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-rose-200 bg-white text-xs focus:ring-1 focus:ring-rose-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-rose-100 bg-white space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-slate-500 font-medium">Subtotal dos laços:</span>
              <span className="text-xl font-extrabold text-slate-900 font-display">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Pedido sem compromisso: combine frete e tire dúvidas no WhatsApp</span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Finalizar Pedido no WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
