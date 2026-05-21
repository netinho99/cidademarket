export interface Product {
  name: string;
  description: string;
  benefits: string[];
  price: string;
  installments: string;
  category: "Dia a Dia" | "Tecnologia" | "Viagem";
  rating: number;
  link: string;
  images: string[];
  reason: string;
}
