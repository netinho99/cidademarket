import React from 'react';
import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
