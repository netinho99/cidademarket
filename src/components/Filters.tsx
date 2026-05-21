interface Props {
  search: string;
  setSearch: (v: string) => void;
}

export function Filters({ search, setSearch }: Props) {
  return (
    <div className="filters">
      <div className="searchBox">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar produtos premium..."
        />
      </div>
    </div>
  );
}
