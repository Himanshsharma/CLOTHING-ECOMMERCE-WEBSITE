import React, { Component } from 'react';
import './menuitem.styles.scss';
const Menuitem=({title,imgUrl})=>{
    return (
        <div style={{ backgroundImage:`url(${imgUrl})` }} className="menu-item">
        <div className="content">
            <h1 className="title"> {title}
                <span className="subtitle">
shop now
                </span>
            </h1>
        </div>
    </div>

    )
}
export default Menuitem;