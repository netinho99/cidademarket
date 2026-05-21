interface Props {
  search: string;
  setSearch: (v: string) => void;
  setCategory: (v: string) => void;
}

export function Filters({
  search,
  setSearch,
  setCategory,
}: Props) {
  return (
    <div className="filters">
      <input
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setCategory("todos")}>
          Todos
        </button>

        <button onClick={() => setCategory("Tecnologia")}>
          Tecnologia
        </button>

        <button onClick={() => setCategory("Dia a Dia")}>
          Dia a Dia
        </button>

        <button onClick={() => setCategory("Viagem")}>
          Viagem
        </button>
      </div>
    </div>
  );
}
