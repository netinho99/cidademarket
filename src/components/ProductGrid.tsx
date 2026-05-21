import { Product } from "../types/Product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  return (
    <div className="products-grid">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}
