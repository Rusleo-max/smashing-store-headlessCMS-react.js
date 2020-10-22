import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">Smashing Stores</a>
            <button className="btn btn-outline-success my-2 my-sm-0"
                    onClick={() => props.show()}>Cart {props.cart.length}</button>
        </nav>
    );
};

export default Navbar;