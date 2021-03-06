import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionItem from '../../components/collection-utem/collections-item.component';
class Shoppage extends Component {

constructor(){
    super();
    this.state={
        collections:SHOP_DATA
    }
}
    render() { 
        return ( <div className="shop-page">
            {this.state.collections.map(({id, ...otherCollectionProps})=>{
              return( <CollectionPreview key={id} {...otherCollectionProps}  /> )
            })}
        </div> );
    }
}
 
export default Shoppage;