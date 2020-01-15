import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './header.style.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';

import {auth } from '../../firebase/firebase.utilites';

const Header=({currentuser})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options"><Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
            <Link to='/signin' className="option">SIGN-IN</Link></div>
        </div>
    )}
    export default Header;