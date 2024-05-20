import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Contactos</Link>
            <div className="ml-auto">
                <Link to="/add-contact" className="btn btn-primary">Agregar Contacto</Link>
            </div>
        </nav>
    );
};
