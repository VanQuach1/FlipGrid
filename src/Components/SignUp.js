import React, { Component } from 'react';
import '../App.css';
import { Button, ButtonToolbar, Overlay, Popover  } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            showError : false,
            showEmailError: false,
            showPasswordError: false,
            target: null
        }
    }
    
    handleHide(event){
        event.preventDefault();
        this.setState({showNameError: false});
        this.setState({showEmailError: false});
        this.setState({showPasswordError: false});
    }

    handleSignUp(event) {
        event.preventDefault();
        if (this.props.user.firstName === ""){
            console.log(this.state);
            this.setState({showNameError: true});
        }
        else if(this.props.user.email === ""){
            this.setState({showEmailError: true});
        }
        else if(this.props.user.password === ""){
            this.setState({showPasswordError: true});
        }else{
            this.props.history.push("/confirmation");
        }
    }

    render() {
        const popoverClick = (
            <Popover
                className="popover-style"
                id="popover-basic"
                placement="right"
                positionLeft={200}
                positionTop={0}
                onMouseOver={this.handleHide}
                title="Field required!">
                Please fill in the empty field(s) to continue.
            </Popover>
              
          );
        return (
        <div className="sign-up-page">
            <h1>
                <b className="font-weight-normal">Let's</b><br/>
                <b>Sign Up</b>
            </h1>
                Use the form below to sign up for this awesome service. 
                You're only a few steps away!
            <form>
                <ButtonToolbar className="form-group">
                    <input type="text" placeholder="First Name" value={this.props.user.firstName} 
                    onChange={this.props.onChangeValue} id="formControlsName" className="form-control"/>
                    <Overlay
                        show={this.state.showNameError}
                        target={this.state.target}
                        container={this}
                        containerPadding={20}>
                        {popoverClick}
                    </Overlay>
                </ButtonToolbar>
                <ButtonToolbar className="form-group">
                    <input className="form-control" id="formControlsEmail" type="email" placeholder="Email Address"
                    value={this.props.user.email} onChange={this.props.onChangeValue}/>
                    <Overlay
                        show={this.state.showEmailError}
                        target={this.state.target}
                        placement="bottom"
                        container={this}
                        containerPadding={20}>
                        {popoverClick}
                    </Overlay>
                </ButtonToolbar>
                <ButtonToolbar className="form-group">
                    <input className="form-control" id="formControlsPassword" type="password" placeholder="Password"
                    value={this.props.user.password} onChange={this.props.onChangeValue} />
                    <Overlay
                        show={this.state.showPasswordError}
                        target={this.state.target}
                        placement="bottom"
                        container={this}
                        containerPadding={20}>
                       {popoverClick}
                    </Overlay>
                </ButtonToolbar>
                <div>
                    <Button className="flip-grid-button" type="submit" onClick={this.handleSignUp}> 
                        Sign Up 
                    </Button>
                </div>
            </form>
        </div>
        );
    }
}

export default SignUp;