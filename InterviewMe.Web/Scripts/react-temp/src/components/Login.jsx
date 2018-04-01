import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/login.css';
import * as services from '../services/services'

export default class Login extends Component {

    state = {
        loading: false,
        email: '',
        password: ''
    }

    validate = () => {
        let validation = this.state.email && this.state.password

        if (validation) {
            const loginReq = {
                email: this.state.email,
                password: this.state.password
            }
            return this.credentialsPassed(loginReq);
        }

        alert('Please enter valid credentials')
    }

    credentialsPassed = (loginReq) => {
        this.setState({loading: true})
        //services.logInUser(loginReq).then(response =>{}, err => {})
    }


    render() {
        if(this.state.loading) {
            return <h1>loading indicator</h1>
        }
        return (
            <form onSubmit={this.validate}>
                <label>
                    Email:
                    <input type='email' name='user-email'
                    value={this.state.loginName}
                    onChange={value => this.setState({loginName: value})} />
                </label>

                <label>
                    Password:
                    <input type='password' name='user-password'
                    value={this.state.loginPassword}
                    onChange={value => this.setState({loginPassword: value})} />
                </label>
                <input type='submit' value="Submit" />
            </form>
        )
    }
}