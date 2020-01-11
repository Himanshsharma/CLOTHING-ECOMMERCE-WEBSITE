import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class Shoppage extends Component {

constructor(){
    super();
    this.state={
        collections:SHOP_DATA
    }
}
    render() { 
        return ( <div></div> );
    }
}
 
export default Shoppage;