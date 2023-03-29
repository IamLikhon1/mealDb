import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-Container'>
            <h2>The Meal DB &copy;</h2>
            <div>
                <a href="#home">HOME</a>
                <a href="#contact us">CONTACT US</a>
                <a href="#about">ABOUT</a>
                <a href="#login">LOGIN</a>
            </div>
        </div>
    );
};

export default Header;