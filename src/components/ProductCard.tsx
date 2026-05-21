import { useState } from 'react';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImage] = useState(0);

  const ruaCurta = product.name.split('-')[0].trim();

  return (
    <article className="card-container">
      <div className="image-wrapper">
        <img 
          src={product.images[currentImage]} 
          alt={product.name} 
          className="product-image"
        />
        <div className="badge-bairro">
          📍 Bairro: {product.category}
        </div>
      </div>

      <div className="card-content">
        <div className="digital-address">
          <span className="address-line">Rua: {ruaCurta}</span>
          <span className="address-line">Cidade Market</span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        
        <div className="rating-container">
          <span className="star-icon">★</span>
          <span className="rating-score">{product.rating}</span>
        </div>

        <p className="editorial-reason">"{product.reason}"</p>

        <div className="price-section">
          <h2 className="price-tag">{product.price}</h2>
          <span className="discount-tag">{product.installments}</span>
        </div>

        <a 
          href={product.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-loja-oficial"
        >
          Ver na Loja Oficial
        </a>
      </div>
    </article>
  );
};
