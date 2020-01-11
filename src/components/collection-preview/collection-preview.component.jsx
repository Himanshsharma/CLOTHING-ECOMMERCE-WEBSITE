import React, { Component } from 'react';
import '.\collection-preview.styles.scss';
const CollectionPreview=({title,item})=>{
    return (
        <div className="collection=preview">

            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {
                    item.map(item=>(
                        <div key={item.id}>{item.name}</div>
                    ))
                }

            </div>
            
        </div>
    )
}
export default CollectionPreview;