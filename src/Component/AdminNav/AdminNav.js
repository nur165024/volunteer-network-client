import React from 'react';
import logo from '../../../src/images/logo.png';
import listIcon from '../../../src/images/users-alt-1.png';
import plusIcon from '../../../src/images/plus-1.png';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

const AdminNav = () => {
    let { path, url } = useRouteMatch();


    return (
        <div className="col-md-3">
            <div className="adminlogoimg">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
            </div>
            <nav class="nav flex-column">
                <ul id="userLeftMenu"> 
                    <li>
                        <Link className={ url === '/admin-dashboard-register-list' ? 'nav-link active' : 'nav-link' } to="/admin-dashboard-register-list">
                            <img className="icon" src={listIcon} alt=""/>Volunteer Register List
                        </Link>
                    </li>
                    <li>
                        <Link className={url === '/add-event' ? 'nav-link active' : 'nav-link' } to="/add-event">
                            <img className="icon" src={plusIcon} alt=""/>Add Event
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminNav;