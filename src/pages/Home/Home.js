import React from 'react';
import CtaCard from '../../components/CtaCard';
import ProgressBar from '../../components/ProgressBar';
import SearchPriceResults from '../../components/SearchPriceResults';
import TopSeachForm from '../../components/TopSeachForm';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopSeachForm></TopSeachForm>
            <CtaCard></CtaCard>
            <ProgressBar></ProgressBar>
            <SearchPriceResults></SearchPriceResults>
            <Footer></Footer>
        </div>
    );
};

export default Home;