import React, { Component } from 'react';
import './signin.styles.scss';
class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
event.preventDefault()
this.setState({email:'',pasword:''})
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render() { 
        return ( <div className='signin'>
<h2>I already have an account</h2>
<span>sign in with your emai</span>
<form onSubmit={this.handleSubmit}><input type="email" name="email" value={this.state.email } onChange={this.handleChange} required />
<label>EMAIL</label><br></br>
<input type="password" name="password" value={this.state.password } required />
<label>PASSWORD</label><br></br>
<input type="submit" value="form submit"></input>
</form>
</div>  );
}}
 
export default Signin;