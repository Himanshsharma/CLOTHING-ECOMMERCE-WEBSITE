import React, { Component } from 'react';
import{ withRouter } from 'react-router-dom';
import './menuitem.styles.scss';
const Menuitem=({title,imgUrl,size,history,linkUrl,match})=>{
    return (
        <div  className={ `${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} z>
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
export default withRouter(Menuitem);