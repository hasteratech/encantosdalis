import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Heart, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import menina1Img from '../assets/images/menina-1.jpg';
import menina2Img from '../assets/images/menina-2.jpg';
import menina3Img from '../assets/images/menina-3.jpg';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [menina1Img, menina2Img, menina3Img];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-[#fdfaf8]">
      {/* Delicate pastel atmospheric blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-rose-200/80 shadow-xs text-rose-800 text-xs sm:text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Coleção Primavera & Dia a Dia 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.18] font-display">
              Tiaras feitas com{' '}
              <span className="relative inline-block text-rose-600">
                xuxinhas
                <span className="absolute left-0 -bottom-1 w-full h-2 bg-rose-200/60 rounded-full -z-10" />
              </span>{' '}
              e toalhas bordadas com fita.
            </h1>

            {/* Subheading */}

            {/* Key Quality Assurances */}

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver Catálogo de Produtos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

          {/* Right Column: Image Carousel - Visible on all screen sizes */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Carousel */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border-3 sm:border-4 border-white bg-white">
                <img
                  src={images[currentImageIndex]}
                  alt="Laços e adereços de cabelo de menina feitos à mão"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 sm:h-80 lg:h-96 lg:sm:h-[500px] object-contain transition-opacity duration-500 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm text-rose-700 text-[10px] sm:text-xs font-bold rounded-lg mb-1">
                    Nova Coleção
                  </span>
                  <p className="text-xs sm:text-sm font-medium drop-shadow-sm hidden sm:block">
                    Fitas importadas de gorgurão acetinado e acabamento à prova de puxões
                  </p>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 p-1.5 sm:p-2.5 rounded-full shadow-lg transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 p-1.5 sm:p-2.5 rounded-full shadow-lg transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex gap-1.5 sm:gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-5 sm:w-6 h-1.5 sm:h-2'
                          : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 h-1.5 sm:h-2'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge: Handmade with Love - Hidden on mobile, visible on sm+ */}
              <div className="hidden sm:flex absolute -top-3 -right-2 sm:-top-4 sm:-right-3 lg:-right-6 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl shadow-lg border border-rose-100 items-center gap-2.5 animate-bounce-gentle">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs sm:text-sm">
                  ✨
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">100% Artesanal</p>
                  <p className="text-[10px] text-rose-600 font-medium">Com muito amor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
