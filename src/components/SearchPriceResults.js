import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import loadingImage from '../assets/loading.svg';
import loadingImageInvert from '../assets/loading-2.svg';
import SearchResultCard from "./SearchResultCard";
import Sidebar from "./Sidebar/Sidebar";


const SearchPriceResults = (props) => {
    if (!props)
        props = {};

    const [open, setOpen] = React.useState(false),
          [filter, setFilter] = React.useState('recomended');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickSearchFilter = (value) => {
        if (props.loading === true)
            return;

        if (typeof props.changed === 'function')
            props.changed(value);

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
                <button onClick={handleClickOpen} className="btn-show-filter">
                    Show filters
                </button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="mobile-modal-filter"
                sx={{ backgroundColor: "rgb(238, 239, 245)" }}
            >
                <DialogContent>
                    <Box sx={{ display: "flex", alignItems: "center", padding: "15px 0px 35px" }}>
                        <button className="mobile-filter-btn">Reset</button>
                        <button onClick={handleClose} className="mobile-filter-btn">Cancel</button>
                        <button className="mobile-filter-btn apply-btn">Apply</button>
                    </Box>
                    <Sidebar />
                </DialogContent>
            </Dialog>

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
                                {props.offers.map((offer, index) => {
                                    return (
                                        <SearchResultCard key={index} offer={offer}></SearchResultCard>
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                {props.offersExists ? (
                                    <div className="no-offers">
                                        Sorry, there are no flights that match your filters
                                    </div>
                                ) : (
                                    <div className="no-offers">
                                        Sorry, there are no flights that match your request
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchPriceResults;
