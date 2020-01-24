import React, { Component } from 'react';
import './custombuttons.styles.scss';
const Custombutton=({children ,isGoogleSignIn,...otherProps})=>(<button className={`${isGoogleSignIn?'google-sign-in':''} custom-button `} {...otherProps}>{children}</button>
)
export default Custombutton;