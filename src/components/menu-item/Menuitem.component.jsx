import React, { Component } from 'react';
const Menuitem=({title})=>{
    return (
        <div className="menu-item">
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