import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY } from '../data/products';
import logoImg from '../assets/images/logo.png';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main navigation container */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-rose-50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-left"
            id="brand-logo-link"
          >
            <img 
              src={logoImg} 
              alt="Encantos da Lis Logo"
              className="w-10 h-10 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-200"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 font-display">
                  Encantos da Lis
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-rose-100 text-rose-700 rounded-full">
                  Ateliê
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Acessórios para meninas de 0 a 12 anos
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('catalogo')}
              className="hover:text-rose-600 transition-colors cursor-pointer"
            >
              Coleções
            </button>
            <button
              onClick={() => scrollToSection('idades')}
              className="hover:text-rose-600 transition-colors cursor-pointer"
            >
              Por Idade
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="hover:text-rose-600 transition-colors cursor-pointer"
            >
              Conforto & Fixação
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-rose-600 transition-colors cursor-pointer"
            >
              Dúvidas
            </button>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WhatsApp direct CTA */}
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs sm:text-sm font-semibold transition-all hover:shadow-sm"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 lg:hidden rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-rose-100 bg-white px-4 pt-3 pb-5 space-y-2 mt-2 shadow-lg">
            <button
              onClick={() => scrollToSection('catalogo')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-rose-50 font-medium text-slate-700"
            >
              🌸 Coleções de Laços
            </button>
            <button
              onClick={() => scrollToSection('idades')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-rose-50 font-medium text-slate-700"
            >
              👶 Acessórios por Idade (0 a 12 anos)
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-rose-50 font-medium text-slate-700"
            >
              ✨ Por que nossos laços não machucam
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-rose-50 font-medium text-slate-700"
            >
              ❓ Perguntas Frequentes
            </button>

            <div className="pt-2 border-t border-rose-100">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Atendimento Direto no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
