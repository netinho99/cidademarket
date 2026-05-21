import { useMemo, useState } from "react";
import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { Filters } from "./components/Filters";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        category === "todos" || p.category === category;

      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <main className="container">
      <header className="page-header">
        <h1>Cidade Market</h1>
        <p>Curadoria inteligente de ofertas reais</p>
      </header>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ProductGrid products={filtered} />
    </main>
  );
}
