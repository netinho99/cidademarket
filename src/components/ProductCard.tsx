import { useState } from "react";
import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  const next = () =>
    setImgIndex((p) => (p + 1) % product.images.length);

  const prev = () =>
    setImgIndex((p) =>
      p === 0 ? product.images.length - 1 : p - 1
    );

  return (
    <article className="card">
      <div className="imageWrap">
        <span className="badge">{product.category}</span>

        <img src={product.images[imgIndex]} />

        {product.images.length > 1 && (
          <>
            <button onClick={prev} className="nav left">‹</button>
            <button onClick={next} className="nav right">›</button>
          </>
        )}
      </div>

      <div className="content">
        <h3>{product.name}</h3>

        <div className="rating">
          ⭐ {product.rating}/5
        </div>

        <p>{product.description}</p>

        <ul>
          {product.benefits.map((b, i) => (
            <li key={i}>✓ {b}</li>
          ))}
        </ul>

        <div className="price">{product.price}</div>

        <button
          className="btn"
          onClick={() => window.open(product.link, "_blank")}
        >
          Ver na Amazon
        </button>

        <small>{product.reason}</small>
      </div>
    </article>
  );
}
