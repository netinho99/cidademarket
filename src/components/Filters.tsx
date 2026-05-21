interface Props {
  search: string;
  setSearch: (v: string) => void;
  setCategory: (v: string) => void;
}

export function Filters({ search, setSearch }: Props) {
  return (
    <div className="filters">
      <input
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="buttons">
        <button>Todos</button>
        <button>Tecnologia</button>
        <button>Dia a Dia</button>
        <button>Viagem</button>
      </div>
    </div>
  );
}
