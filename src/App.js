import './App.css';
import MainNavbar from './components/Navbar';
import { Outlet } from "react-router-dom"

function App() {
  return(
    <div className="App">
      <MainNavbar />
      <Outlet />
    </div>
  );
  
}

export default App;