import React from 'react';
import logo from '../../img/logo.png';
import store from '../../img/store-icon.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" className="img-fluid" />
            </div>
            <div className="manu">
                <a href="#">Home</a>
                <a href="#">Order Review</a>
                <a href="#">Manage</a>
            </div>
            <div className="search">
                <input type="text"/>
                <button>Search</button>
                <img src={store} alt="" className="w-100"/>
                <spen className="top-counter">0</spen>
            </div>
        </div>
    );
};

export default Header;