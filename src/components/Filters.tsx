import React from 'react';

interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="filters-container">
      <span className="filters-label">📍 Bairros:</span>
      <div className="filters-list">
        <button 
          className={`filter-btn ${selectedCategory === 'Todos' ? 'active' : ''}`}
          onClick={() => onSelectCategory('Todos')}
        >
          Todos
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
