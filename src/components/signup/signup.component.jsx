import React, { Component } from 'react';
import Forminput from '../form-input/form-input.component';
import  Custombutton  from "../Custom-buttons/custombutton.component";
import {auth,createUser} from '../../firebase/firebase.utilites';

import './signup.styles.scss';
class SignUp extends Component {
    state = { displayName:'',
email:'',
password:'',
confirmpassword:'', }
    render() { 
        return ( 
            <div className="sign-up">
                <h2 className="title">I Donot have any account</h2>
                <span>Signup with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handlesubmit}>
                    <Forminput
                    type='text'
                    name="displayName">

                    </Forminput>

                </form>

            </div>
         );
    }
}
 
export default SignUp;