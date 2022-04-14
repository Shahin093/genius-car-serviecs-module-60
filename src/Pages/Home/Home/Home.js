import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Serviecs from '../Seviecs/Serviecs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Serviecs></Serviecs>
            <Experts></Experts>
        </div>
    );
};

export default Home;