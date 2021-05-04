import React from 'react';
import Banner from '../../Component/Header/Header';
import Content from '../../Component/Content/Content';
import Header from '../../Component/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Content></Content>
        </div>
    );
};

export default Home;