import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { useState, useEffect } from "react";
import loadingImage from '../assets/loading.svg';
import loadingImageInvert from '../assets/loading-2.svg';
import SearchResultCard from "./SearchResultCard";
import Sidebar from "./Sidebar/Sidebar";


const SearchPriceResults = (props) => {
    if (!props)
        props = {};

    const [filter, setFilter] = useState('recomended');

    const clickSearchFilter = (value) => {
        if (props.loading === true)
            return;

        if (typeof props.onChanged === 'function')
            props.onChanged(value);

        setFilter(value);
    };

    return (
        <div className="search-result-area">
            <div className="search-filter-wrap grid column-3">
                <div className={filter === 'recomended' ? 'search-filter active' : 'search-filter'} onClick={() => { clickSearchFilter('recomended') }}>
                    <h3>Recomended</h3>
                    {props.loading === true ? (
                        <img src={loadingImageInvert} style={{ animation: 'rotation 2s infinite linear' }} />                        
                    ) : (
                        <>
                            <span className="priceDesktop">{props.recomended.price}</span>
                            <span className="tabDuration">{props.recomended.duration}</span>
                        </>
                    )}
                </div>
                <div className={filter === 'cheapest' ? 'search-filter active' : 'search-filter'} onClick={() => { clickSearchFilter('cheapest') }}>
                    <h3>Cheapest</h3>
                    {props.loading === true ? (
                        <img src={loadingImage} style={{ animation: 'rotation 2s infinite linear' }} />                        
                    ) : (
                        <>
                            <span className="priceDesktop">{props.cheapest.price}</span>
                            <span className="tabDuration">{props.cheapest.duration}</span>
                        </>
                    )}
                </div>
                <div className={filter === 'shortest' ? 'search-filter active' : 'search-filter'} onClick={() => { clickSearchFilter('shortest') }}>
                    <h3>Shortest</h3>
                    {props.loading === true ? (
                        <img src={loadingImage} style={{ animation: 'rotation 2s infinite linear' }} />                        
                    ) : (
                        <>
                            <span className="priceDesktop">{props.shortest.price}</span>
                            <span className="tabDuration">{props.shortest.duration}</span>
                        </>
                    )}
                </div>
            </div>
            <div className="desktopNone">
                <button onClick={(e) => {
                    if (typeof props.onClickedShowFilters === 'function')
                        props.onClickedShowFilters();
                }} className="btn-show-filter">
                    Show filters
                </button>
            </div>
            <div className="search-result-wrap">
                {props.loading === true ? (
                    <>
                        <SearchResultCard></SearchResultCard>
                        <SearchResultCard></SearchResultCard>
                        <SearchResultCard></SearchResultCard>
                    </>
                ) : (
                    <>
                        {props.offers.length ? (
                            <>
                                {props.offers.slice(0, props.offersLimit ? props.offersLimit : 5).map((offer, index) => {
                                    return (
                                        <SearchResultCard key={index} offer={offer}></SearchResultCard>
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                {props.offersExists ? (
                                    <div className="no-offers">
                                        Sorry, there are no flights that match your filter. Our 24/7 airline booking agents can help you locate the flight you’re looking for now. Call Now: <a href="tel:18003051248">(800) 305-1248</a>
                                    </div>
                                ) : (
                                    <div className="no-offers">
                                        Sorry, there are no flights that match your request. Our 24/7 airline booking agents can help you locate the flight you’re looking for now. Call Now: Call Now: <a href="tel:18003051248">(800) 305-1248</a>
                                    </div>
                                )}
                            </>
                        )}
                        <div onScroll={(e) => { console.log(e.target.scrollTop) }}></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchPriceResults;
