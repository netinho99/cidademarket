import { Product } from "../types/Product";

export const products: Product[] = [
  {
    name: "Bolsa Térmica Marmita Grande - Dois Andares (Preta)",
    description:
      "Lancheira com isolamento térmico premium e design funcional.",
    benefits: [
      "Isolamento térmico eficiente",
      "Dois compartimentos",
      "Material impermeável",
      "Alça reforçada",
    ],
    price: "R$ 29,00",
    installments: "21% de desconto aplicado",
    category: "Dia a Dia",
    rating: 4.6,
    link: "https://amzn.to/49LgYf4",
    images: [
      "https://m.media-amazon.com/images/I/51biUti5OVL._AC_SY450_.jpg",
      "https://m.media-amazon.com/images/I/71eWc1SYV8L._AC_SY450_.jpg",
    ],
    reason: "Melhor custo-benefício da categoria.",
  },
];
