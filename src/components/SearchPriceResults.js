import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import loding from "../assets/loading.svg";
import SearchResultCard from "./SearchResultCard";
import Sidebar from "./Sidebar/Sidebar";
const SearchPriceResults = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="search-result-area">
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
        sx={{
          backgroundColor: "rgb(238, 239, 245)",
        }}
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              // -webkit-box-align: center,
              alignItems: "center",
              padding: "15px 0px 35px",
            }}
          >
            <button className="mobile-filter-btn">Reset</button>
            <button onClick={handleClose} className="mobile-filter-btn">
              Cancel
            </button>
            <button className="mobile-filter-btn apply-btn">Apply</button>
          </Box>
          <Sidebar />
        </DialogContent>
      </Dialog>

      <div className="search-result-wrap">
        <SearchResultCard></SearchResultCard>
        <SearchResultCard></SearchResultCard>
      </div>
    </div>
  );
};

export default SearchPriceResults;
