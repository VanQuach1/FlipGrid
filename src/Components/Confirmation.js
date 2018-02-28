import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class Confirmation extends Component {
    render() {
        return (
        <div className="confirmation-page">
            <h1><b className="font-weight-normal"> Welcome,</b><br/>
                <b>{this.props.user.firstName}!</b>
            </h1>
            You have been registered for this awesome service. <br />
            Please check your email below for instructions.
            <h6>{this.props.user.email}</h6>
           <div className="confirmation-sign-in-button">
                <Button className="flip-grid-button"> Sign In </Button>
            </div>
        </div>
        );
    }
}
  
export default Confirmation;