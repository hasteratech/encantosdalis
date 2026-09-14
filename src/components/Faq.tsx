import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#fdfaf8] border-t border-rose-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tudo o que você precisa saber sobre prazos, acabamentos e compras via WhatsApp
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-rose-100 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-rose-50/40 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-800 font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-rose-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 bg-rose-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp help banner */}
        <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 fill-emerald-100" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-900">
                Ainda tem alguma dúvida especial?
              </h4>
              <p className="text-xs text-emerald-700">
                Estamos online agora no WhatsApp para te atender com carinho!
              </p>
            </div>
          </div>
          <a
            href={getGeneralWhatsAppUrl('Tenho uma dúvida que não encontrei no site')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all shrink-0"
          >
            Falar com Atendente
          </a>
        </div>
      </div>
    </section>
  );
};
