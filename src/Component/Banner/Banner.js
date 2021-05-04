import React from 'react';
import bannerImage from '../../../src/images/banner-image.png';
import './Banner.css';

const Banner = () => {
    return (
        <section id="bannerPart">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bannerImage">
                            <img src={bannerImage} alt="banner"/>
                        </div>
                        <div className="bannerText">
                            <h2>I Grow By Helping People in need</h2>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search..."></input>
                                <div class="input-group-append">
                                    <button className="btn btn-primary" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;