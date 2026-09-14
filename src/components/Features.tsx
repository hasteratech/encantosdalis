import React from 'react';
import { ShieldCheck, Feather, Sparkles, Smile, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      title: 'Bico 100% Encapado & Borrachinha Antideslizante',
      desc: 'O metal nunca entra em contato com o couro cabeludo da criança. A borrachinha interna segura firme mesmo nos fios mais lisos ou fininhos, sem puxar na hora de retirar.',
      badge: 'Zero Puxões'
    },
    {
      icon: <Feather className="w-6 h-6 text-purple-600" />,
      title: 'Leveza Absoluta & Faixinhas de Seda Pura',
      desc: 'Nossas faixinhas para bebês são feitas de meia de seda que se adapta com suavidade milimétrica, sem apertar a fontanela nem deixar marcas na pele sensível.',
      badge: 'Toque de Nuvem'
    },
    {
      icon: <Smile className="w-6 h-6 text-amber-600" />,
      title: 'Tiaras Anatômicas Sem Dor de Cabeça',
      desc: 'Estruturas flexíveis com acabamento aveludado e ponteiras de silicone macio atrás das orelhas. Sua menina pode brincar e estudar o dia inteiro sem reclamar de aperto.',
      badge: 'Conforto o Dia Todo'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: 'Fitas Nobres com Selagem Térmica',
      desc: 'Utilizamos gorgurão importado de alta densidade e organza cristal. As pontas são seladas termicamente para não desfiarem, garantindo que o laço fique armado por anos.',
      badge: 'Durabilidade Superior'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-white border-y border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Segurança & Carinho em Cada Peça
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display mt-3">
            Por que as mamães confiam nos nossos laços?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Sabemos que crianças não toleram adereços desconfortáveis. Por isso, cada detalhe foi desenvolvido pensando no bem-estar e na sensibilidade das meninas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfaf8] rounded-3xl p-6 border border-rose-100/80 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center border border-rose-100">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 leading-snug mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-100/60 flex items-center gap-1.5 text-xs font-semibold text-rose-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                <span>Testado e aprovado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
