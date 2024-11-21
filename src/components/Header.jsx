import React from "react";
import logo from "/src/assets/logo.svg";

function Header(){
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} />
            </div>
        </header>
    )
}

export default Header;