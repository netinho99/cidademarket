import { useMemo, useState } from "react";
import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { Filters } from "./components/Filters";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      return matchSearch;
    });
  }, [search]);

  return (
    <main className="container">
      <header className="hero">
        <h1>Cidade Market</h1>
        <p>Curadoria inteligente de ofertas reais</p>
        <span>
          Selecionamos produtos com base em valor, utilidade e performance real.
        </span>
      </header>

      <Filters search={search} setSearch={setSearch} />

      <ProductGrid products={filtered} />
    </main>
  );
}
