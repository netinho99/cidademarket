import { useMemo, useState } from "react";
import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { Filters } from "./components/Filters";
import "./styles/global.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return products.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <main className="app">
      <header className="hero">
        <h1>Cidade Market</h1>
        <p>Curadoria inteligente de ofertas reais</p>
        <span>Decisões baseadas em valor real, não hype.</span>
      </header>

      <Filters search={search} setSearch={setSearch} />

      <ProductGrid products={filtered} />
    </main>
  );
}
