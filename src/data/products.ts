import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: "brm-001",
    name: "Bolsa Térmica Marmita Grande - Dois Andares (Preta)",
    description: "Lancheira com isolamento térmico premium e design funcional de dois compartimentos. Ideal para manter sua dieta organizada no trabalho, faculdade ou academia.",
    benefits: [
      "Isolamento térmico de alta performance (quente/frio)",
      "Dois andares independentes para melhor organização",
      "Material Oxford impermeável e resistente",
      "Alça de ombro ajustável e bolsos extras para talheres"
    ],
    price: "R$ 29,00",
    installments: "21% de desconto aplicado",
    category: "Dia a Dia",
    rating: "4.6",
    link: "https://amzn.to/49LgYf4",
    images: [
      "https://m.media-amazon.com/images/I/51biUti5OVL._AC_SY450_.jpg",
      "https://m.media-amazon.com/images/I/71eWc1SYV8L._AC_SY450_.jpg",
      "https://m.media-amazon.com/images/I/71X8D88iVbL._AC_SL1500_.jpg"
    ],
    reason: "Com mais de 2.000 vendas mensais e nota 4.6, é o melhor custo-benefício para quem busca durabilidade e preço baixo."
  }
];
