import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY } from '../data/products';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendPrompt = (topic: string) => {
    window.open(getGeneralWhatsAppUrl(topic), '_blank');
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(getGeneralWhatsAppUrl(customMsg.trim()), '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Consultation Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🎀
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Ateliê Encantos da Lis</h4>
                <p className="text-[11px] text-emerald-100">Online no WhatsApp agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick options */}
          <div className="p-4 space-y-3 bg-[#fdfaf8]">
            <p className="text-xs text-slate-600">
              Olá! Como podemos ajudar você e sua princesinha hoje?
            </p>

            <div className="space-y-1.5">
              <button
                onClick={() => handleSendPrompt('Dúvida sobre qual tamanho de laço escolher para a idade da minha filha')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200/80 hover:border-rose-300 text-xs text-slate-700 font-medium transition-colors flex items-center justify-between"
              >
                <span>👶 Qual tamanho combina com a idade dela?</span>
                <span className="text-rose-500">→</span>
              </button>

              <button
                onClick={() => handleSendPrompt('Gostaria de ver as opções de cores para kit de uniforme escolar')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200/80 hover:border-rose-300 text-xs text-slate-700 font-medium transition-colors flex items-center justify-between"
              >
                <span>🎒 Laços para uniforme escolar</span>
                <span className="text-rose-500">→</span>
              </button>

              <button
                onClick={() => handleSendPrompt('Gostaria de encomendar um laço sob medida para festa ou batizado')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200/80 hover:border-rose-300 text-xs text-slate-700 font-medium transition-colors flex items-center justify-between"
              >
                <span>👑 Laço para festa / aniversário / daminha</span>
                <span className="text-rose-500">→</span>
              </button>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2 flex gap-1.5">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                title="Enviar para o WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <p className="text-[10px] text-center text-slate-400">
              Atendimento rápido • {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -top-1 -left-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-whatsapp-trigger"
          className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer transform hover:scale-105"
          aria-label="Atendimento no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="hidden sm:inline font-bold text-xs pr-1">
            Fale Conosco
          </span>
        </button>
      </div>
    </div>
  );
};
