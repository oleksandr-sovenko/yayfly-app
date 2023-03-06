import { Grid } from "@mui/material";
import React from "react";
import CtaCard from "../../components/CtaCard";
import WlcModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSeachForm from "../../components/TopSeachForm";
const Home = () => {
  return (
    <>
      <WlcModal></WlcModal>
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
    </>
  );
};

export default Home;
