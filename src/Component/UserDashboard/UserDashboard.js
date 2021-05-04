import React from 'react';
import Header from '../Header/Header';
import './UserDashboard.css';
import extraVolunteer from '../../../src/images/extraVolunteer.png';

const UserDashboard = () => {
    return (
        <>
            <Header></Header>
            <section id="userEventList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="media">
                                <img class="mr-3" src={extraVolunteer} alt="Generic placeholder image" />
                                <div class="media-body">
                                    <h5>Media heading</h5>
                                    <h5>date: 5/50/5220</h5>
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="media">
                                <img class="mr-3" src={extraVolunteer} alt="Generic placeholder image" />
                                <div class="media-body">
                                    <h5>Media heading</h5>
                                    <h5>date: 5/50/5220</h5>
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserDashboard;