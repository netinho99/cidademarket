import { useState } from "react";
import { Product } from "../types/Product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  function nextImage() {
    setImgIndex((prev) =>
      prev + 1 >= product.images.length ? 0 : prev + 1
    );
  }

  function prevImage() {
    setImgIndex((prev) =>
      prev - 1 < 0 ? product.images.length - 1 : prev - 1
    );
  }

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <span className="badge">{product.category}</span>

        <img
          src={product.images[imgIndex]}
          alt={product.name}
        />

        {product.images.length > 1 && (
          <>
            <button onClick={prevImage} className="image-nav prev">
              ‹
            </button>
            <button onClick={nextImage} className="image-nav next">
              ›
            </button>
          </>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>

        <div className="card-rating">
          ★ {product.rating} / 5
        </div>

        <p className="card-desc">{product.description}</p>

        <ul className="benefits-list">
          {product.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="price">{product.price}</div>

        <button
          className="btn-buy"
          onClick={() => window.open(product.link, "_blank")}
        >
          Ver na Amazon
        </button>

        <div className="editor-note">
          <strong>💡 A Opinião da Equipe:</strong>
          <p>{product.reason}</p>
        </div>
      </div>
    </div>
  );
}
