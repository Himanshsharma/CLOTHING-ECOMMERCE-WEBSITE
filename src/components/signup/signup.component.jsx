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
handlesubmit=async event =>{
    event.preventDefault();
    const {displayName,email,password,confirmpassword}=this.state;
    if(password != confirmpassword){
        alert('password donot match confirm password');
        return;
    }
    try{
const {user} = await auth.createUserWithEmailAndPassword(email,password);
await createUser(user,{displayName});
this.setState({
    displayName:'',
email:'',
password:'',
confirmpassword:'',
})
    }
        catch(error){
console.log(error)
        }
    
        }
    render() { 
        const {displayName,email,password,confirmpassword}=this.state;
        return ( 
            <div className="sign-up">
                <h2 className="title">I Donot have any account</h2>
                <span>Signup with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handlesubmit}>
                    <Forminput
                    type='text'
                    name="displayName"
                    value={displayName}
                    onChange={this.handlechange}
                    label='display name'
                    required
                    >

                    </Forminput>
                    <Forminput
                    type='email'
                    name="email"
                    value={email}
                    onChange={this.handlechange}
                    label='Email'
                    required
                    >

                    </Forminput>
                    <Forminput
                    type='password'
                    name="password"
                    value={password}
                    onChange={this.handlechange}
                    label='Password'
                    required
                    >

                    </Forminput>
                    <Forminput
                    type='password'
                    name="confirmPassword"
                    value={confirmpassword}
                    onChange={this.handlechange}
                    label='Confirm Password'
                    required
                    >

                    </Forminput>
                    <Custombutton type="submit">SIGN UP</Custombutton>

                </form>

            </div>
         );
    }
}
 
export default SignUp;