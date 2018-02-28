import React, { Component } from 'react';
import SignUp from './Components/SignUp';
import Confirmation from './Components/Confirmation';
import { Grid, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [{firstName:"", email: "", password: ""}]
    }
  }

  handleChangeValues = event => this.setState({user: event.target.value});

  handleChangeValue = (event) => {
    if (event.target.id === "formControlsName"){
      this.state.user[0].firstName = event.target.value;
    }else if (event.target.id === "formControlsEmail"){
      this.state.user[0].email = event.target.value;
    }else if (event.target.id === "formControlsPassword"){
      this.state.user[0].password = event.target.value;
    }
   
    this.forceUpdate();
};

  render() {
    return (
      <div>
        <Grid className="fluid">
          <Col xs={12} sm={8} md={6}>
            <Router>
              <div>
                <Route path="/" />
                <Route path="/signup" render={(props) => 
                  (<SignUp user={this.state.user[0]} onChangeValue={this.handleChangeValue}  
                    {...props} data={null} />)} />
                <Route path="/confirmation" render={(props) => 
                  (<Confirmation user={this.state.user[0]} onChangeValue={this.handleChangeValue}  
                    {...props} data={null} />)} />
              </div>
            </Router>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
