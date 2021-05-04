import React from 'react';
import logo from '../../../src/images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header id="headerPart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="#">
                                <img src={logo} className="logo" alt="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav ml-auto" id="menuList">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Donation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Event</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-primary" href="#">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-dark" href="#">Admin</a>
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