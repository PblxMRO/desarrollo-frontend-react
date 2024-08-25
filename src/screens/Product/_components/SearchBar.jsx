
const SearchBar = ({ filterText, inStockOnly,onFilterTextChange,
  onInStockOnlyChange }) => {
    return (
        <form className="searchForm">
          <input type="text" className="wide" placeholder="Buscar"  value={filterText}  onChange={(e) => onFilterTextChange(e.target.value)} />
          <label>
          <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />  Mostrar solo productos en stock</label>
        </form>
      );
};

export default SearchBar;