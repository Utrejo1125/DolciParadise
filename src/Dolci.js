import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Dolci.css"

function Dolci() {
    return (
        <div>
            <div className='banner'/>
            <div className="navbar">
                <nav>
                    <Link to="/"> Dolci Paradise </Link>
                    <Link to="pastries"> Pastries | Pan </Link>
                    <Link to="cakes"> Cakes | Pasteles </Link>
                    <Link to="beverages"> Beverages | Bebidas </Link>
                    <Link to="extras"> Extras </Link>
                </nav>
            </div>
            <Outlet></Outlet>  {/* This component will render the methods route's component */}
        </div>
    );
}

export default Dolci;