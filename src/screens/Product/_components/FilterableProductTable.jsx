import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Container from 'react-bootstrap/Container';
import {setProducts} from "../../../redux/product/productActions";

import { useSelector, useDispatch } from "react-redux";



const FilterableProductTable = ({ products }) => {
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <Container fluid="md">
          <h2>PRODUCTOS</h2>
          <SearchBar filterText={filterText} 
            inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}/>
          <ProductTable products={products} filterText={filterText}
        inStockOnly={inStockOnly}/>
        </Container>
        
      );
}

/* const PRODUCTS = [
    {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
    {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
    {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
    {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
    {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
    {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
  ]; */
  
  export default function App() {
    const product = useSelector((state) => state.products)
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, []);

    return (
        <><FilterableProductTable products={product.PRODUCTS} />
       </>
    );
  }