import './App.css';
import MainNavbar from './components/Navbar';
import Default from './screens/Default';
import Product from './screens/Product';
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={ <Default /> } />
        <Route path="productos" element={ <Product /> } />
      </Routes>
    </div>
  );
  
}

export default App;