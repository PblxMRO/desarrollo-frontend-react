import Form from 'react-bootstrap/Form';

const SearchBar = ({ filterText, inStockOnly,onFilterTextChange,
  onInStockOnlyChange }) => {
    return (
        <Form>
          <Form.Control type="text" placeholder="Buscar"  value={filterText}  onChange={(e) => onFilterTextChange(e.target.value)} />
          <Form.Check type="checkbox" label="Mostrar solo productos en stock" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        </Form>
      );
};

export default SearchBar;