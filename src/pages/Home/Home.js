import { Grid } from "@mui/material";
import React from "react";
import CtaCard from "../../components/CtaCard";
import ThankYouModal from "../../components/Modal/ThankYouModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <div>
      <ThankYouModal />
      {/* <PopupModal></PopupModal> */}
      <TopSeachForm></TopSeachForm>
      <Grid container spacing={2} className="container">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <CtaCard></CtaCard>
          <ProgressBar></ProgressBar>
          <SearchPriceResults></SearchPriceResults>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
