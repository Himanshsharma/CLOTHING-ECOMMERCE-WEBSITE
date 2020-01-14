import React, { Component } from 'react';
import './custombuttons.styles.scss';
const Custombutton=({children ,...otherProps})=>(<button className="custom-button" {...otherProps}>{children}</button>
)
export default Custombutton;