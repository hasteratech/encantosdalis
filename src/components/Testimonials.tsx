import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, Heart, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Experiências Reais
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display mt-3">
            O que as mamães dizem
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Mais de 5.000 meninas desfilando com estilo, elegância e sem nenhuma dor de cabeça
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#fdfaf8] rounded-3xl p-6 border border-rose-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-100/60 px-2.5 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rose-100/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <p className="text-[11px] text-rose-600 font-medium">{t.daughter}</p>
                  <p className="text-[10px] text-slate-400">{t.city}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
