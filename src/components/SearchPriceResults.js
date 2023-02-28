import React from 'react';
import loding from '../assets/loading.svg';
import SearchResultCard from './SearchResultCard';

const SearchPriceResults = () => {
    return (
        <div className="search-result-area">
            <div className="container">
                <div className="search-filter-wrap grid column-3">
                    <div className="search-filter active">
                        <h3>Recomended</h3>
                        <span className="priceDesktop">£897.36</span>
                        <span className="tabDuration">14h 55min</span>
                    </div>
                    <div className="search-filter">
                        <h3>Cheapest</h3>
                        <span className="priceDesktop">£897.36</span>
                        <span className="tabDuration">14h 55min</span>
                    </div>
                    <div className="search-filter">
                        <h3>Shortest</h3>
                        <img src={loding} />
                    </div>
                </div>
                <div className="search-result-wrap">
                    <SearchResultCard></SearchResultCard>
                    <SearchResultCard></SearchResultCard>
                </div>
            </div>
        </div>
    );
};

export default SearchPriceResults;