import { useState, useMemo } from 'react';
import { products } from './data/products';
import { ProductGrid } from './components/ProductGrid';
import { Filters } from './components/Filters';
import './styles/global.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(() => {
    const cats = products.map(p => p.category);
    return Array.from(new Set(cats));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app-container">
      <header className="glass-header">
        <div className="header-content">
          <h1 className="brand-logo">Cidade Market</h1>
          <div className="global-search">
            <input 
              type="text" 
              placeholder="Buscar na cidade..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h2>Decisões inteligentes de compra.</h2>
            <p>Navegue pelos bairros da nossa cidade digital e descubra produtos com curadoria premium.</p>
          </div>
        </section>

        <Filters 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="empty-state">
            <p>Nenhum produto encontrado neste endereço urbano.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
