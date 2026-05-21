import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    name: "Bolsa Térmica Premium",
    description: "Design térmico inteligente para rotina moderna.",
    benefits: [
      "Isolamento térmico avançado",
      "Material impermeável premium",
      "Alta durabilidade"
    ],
    price: "R$ 29,90",
    installments: "ou 2x sem juros",
    category: "Dia a Dia",
    rating: 4.7,
    link: "https://amzn.to/example",
    images: [
      "https://m.media-amazon.com/images/I/51biUti5OVL._AC_SY450_.jpg"
    ],
    reason: "Melhor custo-benefício da categoria."
  }
];
