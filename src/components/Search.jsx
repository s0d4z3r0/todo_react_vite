const Search = ({ search, setSearch, width }) => {
  return (
    <div className="search-form">
      <h4 className="fw-bold">Pesquisar:</h4>
      <div className="input-group">
        <label
          className="search input-group-text bg-warning-subtle fw-bold shadow-none border border-0 col-2 justify-content-center"
          htmlFor="search"
        >
          <span>Pesquisar</span>
          <i className="bi bi-search d-none"></i>
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={width <= 500 ? 'Pesquisar...' : "Digite para pesquisar..."}
          className="form-control shadow-none border"
        />
      </div>
    </div>
  );
};

export default Search;
