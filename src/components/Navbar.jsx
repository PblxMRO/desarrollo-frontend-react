import {useState} from 'react';
import '../assets/styles/navbar.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <Navbar expand="lg">
         <Container>
            <div className="nav_logo">DESARROLLO FRONTEND CON REACT</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/">Inicio</Link>
                <Link to="productos">Práctica 1</Link>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            </Container>
        </Navbar>
    )
}
export default MainNavbar