import React from 'react';
import { MessageCircle, Heart, Sparkles, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY } from '../data/products';
import logoImg from '../assets/images/logo.png';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-rose-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value icons strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-rose-100 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Envio para Todo o Brasil</h4>
              <p className="text-[11px] text-slate-500">Frete fixo e embalagem reforçada</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Garantia Antialérgica</h4>
              <p className="text-[11px] text-slate-500">Bico encapado e fita sem puxões</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Pix ou Cartão em 3x</h4>
              <p className="text-[11px] text-slate-500">Facilidade e segurança no pagamento</p>
            </div>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img 
                src={logoImg} 
                alt="Encantos da Lis Logo"
                className="w-9 h-9 rounded-2xl object-cover"
              />
              <span className="font-extrabold text-lg text-slate-800 font-display">
                Encantos da Lis
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Ateliê dedicado à criação de laços, tiaras, scrunchies e presilhas infantis para meninas de 0 a 12 anos. Conforto comprovado por mães e estilo amado pelas pequenas.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Feito artesanalmente à mão no Brasil</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Navegação Rápida
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <button onClick={() => scrollTo('catalogo')} className="hover:text-rose-600 cursor-pointer">
                  Catálogo de Laços
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('idades')} className="hover:text-rose-600 cursor-pointer">
                  Laços por Idade (0 a 12 anos)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diferenciais')} className="hover:text-rose-600 cursor-pointer">
                  Por que não machuca
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('como-cuidar')} className="hover:text-rose-600 cursor-pointer">
                  Como cuidar das fitas
                </button>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct Contact Box */}
          <div className="md:col-span-4 bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200/70 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              <span>Canal Direto no WhatsApp</span>
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Dúvidas sobre combinações de cores, prazos ou pedidos para festas? Nosso time responde prontamente.
            </p>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              Falar agora: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Encantos da Lis Acessórios Infantis. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Criado por Hastera Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
