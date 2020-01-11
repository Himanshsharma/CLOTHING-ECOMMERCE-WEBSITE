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
    render() { 
        return ( <div className='signin'>
<h2>I already have an account</h2>
<span>sign in with your emai</span>
<form><input type="email" name="email" value={this.state.email } required />
<label>EMAIL</label><br></br>
<input type="password" name="password" value={this.state.password } required />
<label>PASSWORD</label><br></br>
<input type="submit" value="form submit"></input>
</form>
</div>  );
}
}
 
export default Signin;