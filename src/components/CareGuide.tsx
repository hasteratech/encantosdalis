import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Smile, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const CareGuide: React.FC = () => {
  return (
    <section id="como-cuidar" className="py-16 bg-gradient-to-b from-[#fdfaf8] to-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Dicas do Ateliê
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display">
                Como cuidar dos lacinhos para durarem anos
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nossos laços são peças de alfaiataria infantil feitas à mão. Com pequenos cuidados simples, eles mantêm a armação perfeita, as cores vibrantes e o brilho dos cristais por muito tempo:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Armazenamento ideal</h4>
                    <p className="text-xs text-slate-500">Guarde pendurados em organizadores de laços ou em caixinhas sem amassar com pesos em cima.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Limpeza delicada</h4>
                    <p className="text-xs text-slate-500">Passe um paninho ou esponja macia umedecida com água e sabão neutro. Nunca mergulhe ou use máquina.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Cuidado com cosméticos</h4>
                    <p className="text-xs text-slate-500">Aplique perfumes, protetor solar e spray de cabelo antes de colocar o laço ou a tiara na criança.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right WhatsApp Custom Atelier Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-rose-100/70 via-pink-100/50 to-purple-100/50 rounded-3xl p-6 sm:p-8 border border-rose-200/80 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-rose-600 shadow-sm mx-auto flex items-center justify-center">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-display">
                Precisa de uma cor ou modelo sob medida?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Fazemos laços combinando exatamente com o vestido de aniversário da sua filha, daminhas de casamento, batizado ou com as cores do uniforme escolar!
              </p>
              <div className="pt-2">
                <a
                  href={getGeneralWhatsAppUrl('Olá! Gostaria de encomendar um laço sob medida para uma ocasião especial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir Laço Personalizado no WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                Envie a foto do vestidinho pelo WhatsApp que indicamos a melhor combinação!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
