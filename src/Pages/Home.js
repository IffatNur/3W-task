import React from 'react';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Notice from '../components/Notice';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Notice></Notice>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;