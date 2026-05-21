import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Criação do "endereço digital" do produto
  const ruaCurta = product.name.split('-')[0].trim(); // Pega apenas a primeira parte do nome

  return (
    <article className="card-container">
      {/* Imagem com sistema simples de Swipe/Navegação */}
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
        {/* Lógica de Cidade Digital */}
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
