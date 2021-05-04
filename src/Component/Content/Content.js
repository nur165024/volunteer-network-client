import React from 'react';
import './Content.css';
import bodyimage1 from '../../../src/images/childSupport.png';
import bodyimage2 from '../../../src/images/refuseShelter.png';
import bodyimage3 from '../../../src/images/foodCharity.png';
import bodyimage4 from '../../../src/images/clothSwap.png';

const Content = () => {
    return (
        <section id="contentBody">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <a href="#">
                            <div className="card">
                                <img className="image" src={bodyimage1} alt="Card image cap"></img>
                                <div className="card-body body1">
                                    <h5>Child Support</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <div className="card">
                                <img className="image" src={bodyimage2} alt="Card image cap"></img>
                                <div className="card-body body2">
                                    <h5>Child Support</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <div className="card">
                                <img className="image" src={bodyimage3} alt="Card image cap"></img>
                                <div className="card-body body3">
                                    <h5>Child Support</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <div className="card">
                                <img className="image" src={bodyimage4} alt="Card image cap"></img>
                                <div className="card-body body4">
                                    <h5>Child Support</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;