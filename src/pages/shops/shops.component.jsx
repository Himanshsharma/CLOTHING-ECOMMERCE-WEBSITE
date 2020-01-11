import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
class Shoppage extends Component {

constructor(){
    super();
    this.state={
        collections:SHOP_DATA
    }
}
    render() { 
        return ( <h1>shop</h1> );
    }
}
 
export default Shoppage;