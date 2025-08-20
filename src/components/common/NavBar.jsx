import React from "react";

const NavBar = () => {
    const navData = [
        { name: "Home", id: "#home" },
        { name: "About", id: "#about" },
        { name: "Contact", id: "#contact" },
    ];
    return (
        <nav className="nav container">
            <h1>Meet Bhatiya</h1>
            <ul>
                {navData?.map((curElem) => (
                    <li>{curElem.name}</li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
