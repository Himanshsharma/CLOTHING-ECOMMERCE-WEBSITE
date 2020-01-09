import React, { Component } from 'react';
import './menuitem.styles.scss';
const Menuitem=({title,imgUrl,size})=>{
    return (
        <div  className={ `${size} menu-item`}>
        <div style={{ backgroundImage:`url(${imgUrl})` }} className="back"/>
        <div className="content">
            <h1 className="title"> {title.toUpperCase()}
            <br></br>
                <span className="subtitle">
SHOP NOW
                </span>
            </h1>
        </div>
    </div>

    )
}
export default Menuitem;