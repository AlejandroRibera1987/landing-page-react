import React from "react";

const Header = () => {
    return (
        <header>
            <a href="/">
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <nav>
                <li><a href="#">Features</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sing In</a></li>
            </nav>
        </header>
    );
};

export default Header;