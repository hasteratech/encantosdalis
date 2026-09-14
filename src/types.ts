export type AgeGroup = 'todas' | 'bebes' | 'infantil' | 'toalhas';

export interface ProductColor {
  name: string;
  hex: string;
}

export type BaseType = 'bico_pato' | 'tiara' | 'faixinha_seda' | 'scrunchie' | 'xuxinha' | 'presilha';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: AgeGroup;
  ageRecommendation: string;
  baseType: BaseType;
  baseTypeName: string;
  size: string; // e.g. "8 cm (Tamanho M)"
  image: string;
  badge?: string;
  colors: ProductColor[];
  description: string;
  details: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
  customName?: string; // Optional personalization like "Nome da Criança"
}

export interface KitOption {
  id: string;
  name: string;
  size: 'P' | 'M' | 'G';
  price: number;
  image: string;
  colorName: string;
}
