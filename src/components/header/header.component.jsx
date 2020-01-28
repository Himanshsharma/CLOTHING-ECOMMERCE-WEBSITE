import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './header.style.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import{connect} from 'react-redux';

import {auth } from '../../firebase/firebase.utilites';

const Header=({currentuser})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options"><Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
            
            {currentuser? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT </div>:<Link to='/signin' className="option">SIGN-IN</Link>}
        </div></div>
    )}
    const mapStateToProps = state =>({
currentuser:state.user.currentuser;
    })
    export default connect(mapStateToProps)(Header);