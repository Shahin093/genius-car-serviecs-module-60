import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Serviecs from '../Seviecs/Serviecs';

const Home = () => {
    return (
        <div>
            <PageTitle title="home"></PageTitle>
            <Banner></Banner>
            <Serviecs></Serviecs>
            <Experts></Experts>
        </div>
    );
};

export default Home;