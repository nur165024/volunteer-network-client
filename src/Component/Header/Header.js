import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header id="headerPart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} className="logo" alt="logo"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav ml-auto" id="menuList">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/donation">Donation</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/event">Event</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-primary" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-dark" to="/admin">Admin</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;