import {useState} from 'react';
import '../assets/styles/navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavbar = () => {
    const form = useSelector(state => state.form);
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/login">Forms</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
            </ul>
            <div>Bienvenido {form.formData.username} : {form.formData.email}</div>
            
        </nav>
    )
}
export default MainNavbar