import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {setProducts} from "../../../redux/product/productActions";
import { useSelector, useDispatch } from "react-redux";

const FilterableProductTable = ({ products }) => {
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div className="container">
          <h4>PRODUCTS</h4>
          <SearchBar filterText={filterText} 
            inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}/>
          <ProductTable products={products} filterText={filterText}
        inStockOnly={inStockOnly}/>
        </div>
        
      );
}

 export default function App() {
    const product = useSelector((state) => state.products);
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
        <>
        <FilterableProductTable products={product.PRODUCTS} />
       </>
    );
  }