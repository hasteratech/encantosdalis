import React from 'react';
import { AgeGroup } from '../types';
import { Sparkles, Baby, Smile, Waves, Search } from 'lucide-react';

interface AgeFilterProps {
  selectedCategory: AgeGroup;
  onSelectCategory: (category: AgeGroup) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CATEGORIES: { id: AgeGroup; label: string; icon: React.ReactNode; subtitle: string }[] = [
  {
    id: 'todas',
    label: 'Todos os Acessórios',
    icon: <Sparkles className="w-4 h-4" />,
    subtitle: 'Catálogo completo'
  },
  {
    id: 'bebes',
    label: 'Bebês (0 a 2 anos)',
    icon: <Baby className="w-4 h-4" />,
    subtitle: 'Faixinhas slim macias'
  },
  {
    id: 'infantil',
    label: 'Meninas (3 a 12 anos)',
    icon: <Smile className="w-4 h-4" />,
    subtitle: 'Boutique & Parzinhos'
  },
  {
    id: 'toalhas',
    label: 'Toalhas Bordadas',
    icon: <Waves className="w-4 h-4" />,
    subtitle: 'Com fita e acabamento delicado'
  }
];

export const AgeFilter: React.FC<AgeFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Category Pills and Search Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight font-display">
            Coleções Feitas com Amor
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Escolha por idade ou ocasião para encontrar o acessório perfeito para o cabelo da sua menina
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por cor, modelo ou tipo..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-slate-700 shadow-2xs"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {/* Interactive Category Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-rose-50 border-rose-300 shadow-sm ring-2 ring-rose-400/20'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`p-2 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-rose-500 text-white' : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {cat.icon}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                )}
              </div>
              <div>
                <p
                  className={`text-xs font-bold leading-tight ${
                    isSelected ? 'text-rose-900' : 'text-slate-800'
                  }`}
                >
                  {cat.label}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
