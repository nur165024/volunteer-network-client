import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../../src/images/logo.png';

const Login = () => {
    return (
        <section id="loginPage">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="logoimg">
                            <Link to="/">
                                <img className="logo" src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="loginForm">
                            <h3>Login With</h3>
                            <div class="form-group text-center">
                                <Link className="btn btn-block btn-dark" to='/'>Continue with Google</Link>
                                <p>Don't have an account? <Link to="/register">Create an accout</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;