import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    
    handleSignUp(event) {
        event.preventDefault();
        if (this.props.user.firstName === "" || this.props.user.email === "" 
            || this.props.user.password === ""){
            alert("Please fill in the empty fields!");
        }else{
            this.props.history.push("/confirmation");
        }
    }

    render() {
        return (
        <div className="sign-up-page">
            <h1>
                <b className="font-weight-normal">Let's</b><br/>
                <b>Sign Up</b>
            </h1>
                Use the form below to sign up for this awesome service. 
                You're only a few steps away!
            <form>
                <div className="form-group">
                    <input type="text" placeholder="First Name" value={this.props.user.firstName} 
                    onChange={this.props.onChangeValue} id="formControlsName" className="form-control"/>
                </div>
                <div className="form-group">
                    <input className="form-control" id="formControlsEmail" type="email" placeholder="Email Address"
                    value={this.props.user.email} onChange={this.props.onChangeValue}/>
                </div>
                <div className="form-group">
                    <input className="form-control" id="formControlsPassword" type="password" placeholder="Password"
                    value={this.props.user.password} onChange={this.props.onChangeValue} />
                </div>
                <div>
                    <Button className="flip-grid-button" 
                            onClick={this.handleSignUp}> 
                        Sign Up 
                    </Button>
                </div>
            </form>
        </div>
        );
    }
}

export default SignUp;