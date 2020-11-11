import React, { Component } from "react";
import LoginComponent from "./LoginComponent";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: "",
            error: "",
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onLoginClick(e) {
        e.preventDefault();
        const { username, password } = this.state;
        if (username != "a" && password != "123") {
            this.setState({
                error: "Username or Password are incorrect. Please try again",
            });
        } else {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <LoginComponent
                username={username}
                password={password}
                onUsernameChange={this.onUsernameChange}
                onPasswordChange={this.onPasswordChange}
                onLoginClick={this.onLoginClick}
                error={error}
            />
        );
    }
}

export default LoginContainer;
