import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import SignInSignUp from './pages/signin-signup-page/signin-signup-page.component';
import Shoppage from './pages/shops/shops.component';
import Header from './components/header/header.component';
import {auth,createUser} from './firebase/firebase.utilites';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentuser:null
    }

  }
  componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
if(userAuth){
  const userRef =await createUser(userAuth);
  userRef.onSnapshot(snapshot=>{
    this.setState({
      currentuser:{id:snapshot.id,
      ...snapshot.data()}
    })
  })
}
this.setState({currentuser:userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div className="App">
    <Header currentuser={this.state.currentuser}/>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={Shoppage} />
    <Route exact path='/signin' component={SignInSignUp} />
    
    </Switch>
    
    </div>
  )};
}

export default App;
