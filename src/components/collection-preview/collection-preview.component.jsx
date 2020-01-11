import React, { Component } from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../../components/collection-utem/collections-item.component';
const CollectionPreview=({title,items})=>{
    return (
        <div className="collection-preview">

            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
            {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}

            </div>
            
        </div>
    )
}
export default CollectionPreview;