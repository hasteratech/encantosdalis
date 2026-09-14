import { Product } from '../types';

// We import the local generated images
import menina1Img from '../assets/images/menina-1.jpg';
import menina2Img from '../assets/images/menina-2.jpg';
import menina3Img from '../assets/images/menina-3.jpg';
import clipsImg from '../assets/images/clips_collection_1789385092497.jpg';
import toalha1Img from '../assets/images/toalha-1.jpeg';
import toalha2Img from '../assets/images/toalha-2.jpeg';
import toalha3Img from '../assets/images/toalha-3.jpeg';
import toalha4Img from '../assets/images/toalha-4.jpeg';

export const WHATSAPP_NUMBER = '5581999804411'; // Clean configurable Brazilian format
export const WHATSAPP_DISPLAY = '(81) 99980-4411';

export const PRODUCTS: Product[] = [
  {
    id: 'laco-boutique-aurora',
    name: 'Tiara com Xuxinhas Coloridas',
    subtitle: 'Tiara forrada com xuxinhas coloridas',
    price: 14.90,
    originalPrice: 18.00,
    rating: 4.9,
    reviewsCount: 142,
    category: 'infantil',
    ageRecommendation: '3 a 12 anos',
    baseType: 'bico_pato',
    baseTypeName: 'Tiara com Xuxinhas Coloridas',
    size: 'Tamanho Único',
    image: menina1Img,
    badge: 'Mais Vendido',
    isBestSeller: true,
    colors: [
      { name: 'Colorido', hex: '#eff8be' },
    ],
    description: 'O clássico modelo Boutique que nunca sai de moda. Estrutura armada que não amassa com facilidade, feito com gorgurão encorpado e toque aveludado.',
    details: [
      'Borrachinha interna antideslizante: segura até em fios finos sem dor',
      'Não desfia e possui selagem térmica das pontas',
      'Ideal para uso diário, passeios e aniversários'
    ]
  },
  {
    id: 'tiara-jardim-perolado',
    name: 'Tiara Flexível Flores & Pérolas',
    subtitle: 'Tiara forrada com xuxinhas cor rosa e com pedrinhas',
    price: 17.90,
    originalPrice: 20.90,
    rating: 5.0,
    reviewsCount: 98,
    category: 'infantil',
    ageRecommendation: '3 a 12 anos',
    baseType: 'tiara',
    baseTypeName: 'Arco flexível anatômico antialérgico',
    size: 'Ajuste padrão confortável',
    image: menina2Img,
    badge: 'Edição Especial',
    isBestSeller: true,
    colors: [
      { name: 'Rosa Bebê com Rosa Escuro', hex: '#FAD2E1' },
    ],
    description: 'Projetada especialmente para dar charme. O arco é flexível, encapado em fita acetinada e com ponteiras de silicone macio.',
    details: [
      'Flores moldadas artesanalmente em organza cristal',
      'Pérolas bordadas à mão com fio invisível reforçado',
      'Ponteiras protetoras atrás das orelhas: zero dor de cabeça',
      'Destaque para daminhas, batizados e festinhas escolares'
    ]
  },
  {
    id: 'caixa-presente-monte-seu-kit',
    name: 'Tiara de Personagem',
    subtitle: 'Tiara infantil com detalhes de personagem',
    price: 17.90,
    originalPrice: 20.90,
    rating: 5.0,
    reviewsCount: 132,
    category: 'infantil',
    ageRecommendation: '3 a 12 anos',
    baseType: 'bico_pato',
    baseTypeName: 'Personalizado',
    size: 'Tamanho Único',
    image: menina3Img,
    badge: 'Novidade',
    isBestSeller: true,
    colors: [
      { name: 'Branco com Detalhe Rosa', hex: '#FCE7F3' },
    ],
    description: 'A opção mais pedida para presentear filhas, afilhadas e sobrinhas. Você escolhe os 4 modelos e nós personalizamos a tag com o nome da menina.',
    details: [
      'Embalagem de presente rígida com visor transparente e cheirinho de bebê',
      'Tag personalizada com o nome da criança caligrafado',
      'Você escolhe as cores e presilhas pelo WhatsApp após o pedido',
      'Acompanha cartãozinho com mensagem dedicada'
    ]
  },
  {
    id: 'toalha-bordada-rosa',
    name: 'Toalha Bordada Amarela com Fita',
    subtitle: 'Toalha infantil com bordado delicado e fita na barra',
    price: 39.90,
    originalPrice: 52.00,
    rating: 4.9,
    reviewsCount: 67,
    category: 'toalhas',
    baseType: 'toalha',
    baseTypeName: 'Toalha de rosto bordada a mão',
    size: '80 x 50 cm',
    image: toalha1Img,
    badge: 'Novo Produto',
    isNew: true,
    colors: [
      { name: 'Amarela Pastel', hex: '#fcfbbe' },
      { name: 'Cor de fita degradê amarela', hex: '#FFFFFF' }
    ],
    description: 'Toalha delicada e macia para banho e uso diário. Bordada artesanalmente com acabamento em fita acetinada na barra. Perfeita para presentes e uso pessoal.',
    details: [
      'Algodão e Poliéster',
      'Bordado artesanal em ponto de cruz',
      'Fita de gorgurão na barra inferior',
      'Macia e absorvente'
    ]
  },
  {
    id: 'toalha-bordada-lavanda',
    name: 'Toalha Bordada Vermelha com Fita',
    subtitle: 'Toalha infantil com bordado delicado e fita na barra',
    price: 39.90,
    originalPrice: 52.00,
    rating: 4.9,
    reviewsCount: 54,
    category: 'toalhas',
    baseType: 'toalha',
    baseTypeName: 'Toalha de rosto bordada a mão',
    size: '80 x 50 cm',
    image: toalha2Img,
    badge: 'Novo Produto',
    isNew: true,
    colors: [
      { name: 'Vermelho', hex: '#FF0000' },
      { name: 'Branco com Detalhe Vermelho', hex: '#FFFFFF' }
    ],
    description: 'Toalha delicada e macia para banho e uso diário. Bordada artesanalmente com acabamento em fita acetinada na barra. Perfeita para presentes e uso pessoal.',
    details: [
      'Algodão e Poliéster',
      'Bordado artesanal em ponto de cruz',
      'Fita de gorgurão na barra inferior',
      'Macia e absorvente, ideal para pele sensível de bebês'
    ]
  },
  {
    id: 'toalha-bordada-azul',
    name: 'Toalha Lilás com Fita',
    subtitle: 'Toalha de rosto com bordado delicado e fita na barra',
    price: 39.90,
    originalPrice: 52.00,
    rating: 5.0,
    reviewsCount: 62,
    category: 'toalhas',
    baseType: 'toalha',
    baseTypeName: 'Toalha de rosto bordada a mão',
    size: '80 x 50 cm',
    image: toalha3Img,
    badge: 'Novo Produto',
    isNew: true,
    colors: [
      { name: 'Lilás', hex: '#f6dbfd' },
    ],
    description: 'Toalha delicada e macia para banho e uso diário. Bordada artesanalmente com acabamento em fita acetinada na barra. Perfeita para presentes e uso pessoal.',
    details: [
      'Algodão 100% de alta qualidade',
      'Bordado artesanal em ponto de cruz',
      'Fita de gorgurão na barra inferior',
      'Macia e absorvente, ideal para pele sensível de bebês'
    ]
  },
  {
    id: 'toalha-bordada-rosa',
    name: 'Toalha Rosa',
    subtitle: 'Toalha infantil com bordado delicado e fita na barra',
    price: 39.90,
    originalPrice: 52.00,
    rating: 5.0,
    reviewsCount: 59,
    category: 'toalhas',
    baseType: 'toalha',
    baseTypeName: 'Toalha de rosto bordada à mão',
    size: '80 x 50 cm',
    image: toalha4Img,
    badge: 'Novo Produto',
    isNew: true,
    colors: [
      { name: 'Rosa', hex: '#fcd5d8' },
    ],
    description: 'Toalha delicada e macia para banho e uso diário. Bordada artesanalmente com acabamento em fita acetinada na barra. Perfeita para presentes e uso pessoal.',
    details: [
      'Algodão 100% de alta qualidade',
      'Bordado artesanal em ponto de cruz',
      'Fita de gorgurão na barra inferior',
      'Macia e absorvente, ideal para pele sensível de bebês'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Camila Mendonça',
    daughter: 'Mãe da Alice (4 anos)',
    city: 'São Paulo, SP',
    comment: 'A Alice sempre tirava todos os laços porque doía ou puxava os fiozinhos dela que são super finos. O bico de pato 100% encapado foi uma revolução, ela passa o dia todo arrumada e nem lembra que está de laço!',
    rating: 5,
    tag: 'Bico Antideslizante'
  },
  {
    id: '2',
    name: 'Mariana Azevedo',
    daughter: 'Mãe da Clara (10 anos)',
    city: 'Curitiba, PR',
    comment: 'Minha filha já tem 10 anos e é difícil achar acessórios que não pareçam de bebê nem de adulta. Os scrunchies de veludo e o kit de presilhas candy foram um sucesso na escola dela!',
    rating: 5,
    tag: 'Estilo até 12 anos'
  },
  {
    id: '3',
    name: 'Beatriz Vasconcelos',
    daughter: 'Mãe da Helena (8 meses)',
    city: 'Belo Horizonte, MG',
    comment: 'As faixinhas de meia de seda são uma nuvem! Não apertam a cabecinha da Helena e o atendimento pelo WhatsApp foi carinhoso e super rápido. Já fiz meu segundo pedido.',
    rating: 5,
    tag: 'Faixinhas Baby'
  }
];

export const FAQS = [
  {
    question: 'Os laços machucam ou puxam os cabelos finos das crianças?',
    answer: 'De jeito nenhum! Nossos bicos de pato são 100% encapados com fita acetinada e possuem uma película emborrachada antideslizante interna. Isso garante que a presilha segure firme até nos fios mais fininhos sem puxar, quebrar ou causar dor.'
  },
  {
    question: 'Como funciona a compra pelo WhatsApp?',
    answer: 'Você pode selecionar os laços diretamente aqui no catálogo, escolher as cores desejadas e clicar em "Pedir pelo WhatsApp" ou na sua "Sacola". O site já prepara a mensagem completa com as fotos, nomes e valores. No WhatsApp você tira dúvidas, confirma o endereço e finaliza via Pix ou Cartão com toda comodidade.'
  },
  {
    question: 'Vocês fazem kits personalizados para o uniforme escolar?',
    answer: 'Sim! Personalizamos parzinhos e laços grandes nas cores exatas do uniforme da escola da sua filha. Basta nos enviar uma foto do uniforme pelo WhatsApp.'
  },
  {
    question: 'Qual é o prazo de envio e formas de pagamento?',
    answer: 'Peças em pronta-entrega são despachadas em até 24 a 48 horas úteis. Aceitamos Pix com confirmação imediata e cartões de crédito em até 3x sem juros. Enviamos para todo o Brasil com código de rastreamento.'
  },
  {
    question: 'Até que idade os laços e tiaras são recomendados?',
    answer: 'Nosso catálogo foi pensado do nascimento até os 12 anos. Temos faixinhas ultra suaves para bebês de 0 a 2 anos, laços boutique e parzinhos para meninas de 3 a 7 anos, e scrunchies, tiaras slim e presilhas estilosas para garotas de 8 a 12 anos.'
  }
];

export const CARE_TIPS = [
  {
    title: 'Guarde no porta-laços',
    desc: 'Mantenha os laços pendurados ou acomodados em gavetas sem empilhar objetos pesados por cima, para preservar a armação das fitas.',
    icon: 'Sparkles'
  },
  {
    title: 'Limpeza suave',
    desc: 'Se sujar, limpe delicadamente com um paninho úmido e sabão neutro infantil. Nunca lave em máquina de lavar ou deixe de molho.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Cuidado com perfumes',
    desc: 'Borrife perfumes ou sprays de cabelo antes de colocar o laço ou a tiara, evitando descoloração ou manchas nos cristais e fitas.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Borracha antideslizante',
    desc: 'Nossa borrachinha interna não perde a aderência. Para higienizar, basta passar um cotonete levemente umedecido.',
    icon: 'Smile'
  }
];
