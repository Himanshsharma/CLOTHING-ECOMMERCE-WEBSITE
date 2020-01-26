import React, { Component } from 'react';
import './signin.styles.scss';
import Custombutton from '../../components/Custom-buttons/custombutton.component';
import Forminput from '../../components/form-input/form-input.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utilites';
class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async (event)=>{
event.preventDefault()
try{
    await auth.signInWithEmailAndPassword(this.state.email,this.state.password);
    this.setState({email:'',password:''})


}catch(error){
    console.log(error)
}
    }
    handleChange= (event)=>{
        const {value,name}=event.target;

        this.setState({[name]:value})
    }

    render() { 
        return ( <div className='signin'>
<h2>I already have an account</h2>
<span>sign in with your email</span>
<form onSubmit={this.handleSubmit}><Forminput label="EMAIL" type="email" name="email" value={this.state.email } handleChange={this.handleChange} required />

<Forminput label="PASSWORD" type="password" name="password" value={this.state.password } handleChange={this.handleChange} required />
<div className="buttons">
<Custombutton type="submit">SIGNIN</Custombutton>

<Custombutton onClick={signInWithGoogle} isGoogleSignIn>SIGNIN WITH GOOGLE</Custombutton></div></form>
</div>  );
}}
 
export default Signin;