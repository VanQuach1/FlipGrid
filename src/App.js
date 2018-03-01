import React, { Component } from 'react';
import SignUp from './Components/SignUp';
import Confirmation from './Components/Confirmation';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarHeader from './Components/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [{firstName:"", email: "", password: ""}]
    }
  }

  handleChangeValues = event => this.setState({user: event.target.value});

  handleChangeValue = (event) => {
    var user = this.state.user;
    if (event.target.id === "formControlsName"){
      user[0].firstName = event.target.value;
    }else if (event.target.id === "formControlsEmail"){
      user[0].email = event.target.value;
    }else if (event.target.id === "formControlsPassword"){
      user[0].password = event.target.value;
    }
   
    this.setState({user});
};

  render() {
    return (
      <div>
       <NavbarHeader />
        <Router>
          <div className="col-xs-12 col-sm-8 col-md-6 container">
            <Route path="/signup" render={(props) => 
              (<SignUp user={this.state.user[0]} onChangeValue={this.handleChangeValue}  
                {...props} data={null} />)} />
            <Route path="/confirmation" render={(props) => 
              (<Confirmation user={this.state.user[0]} onChangeValue={this.handleChangeValue}  
                {...props} data={null} />)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
