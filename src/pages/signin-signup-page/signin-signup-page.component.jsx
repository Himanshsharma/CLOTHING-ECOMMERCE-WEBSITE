import React, { Component } from 'react';
import Signin from '../../components/signin/signin.components';
import './signin-signup-page.style.scss';
import SignUp from '../../components/signup/signup.component';

const SignInSignUp=()=>{
    return(
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}
export default SignInSignUp;

