import { Box } from "@mui/material";
import React from "react";
import CtaCard from "../../components/CtaCard";
import PopupModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <div>
      <PopupModal></PopupModal>
      <TopSeachForm></TopSeachForm>
      <Box className="container">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box gridColumn="span 3" sx={{ background: "#ddd" }}>
            <Sidebar />
          </Box>
          <Box gridColumn="span 9">
            <CtaCard></CtaCard>
            <ProgressBar></ProgressBar>
            <SearchPriceResults></SearchPriceResults>
          </Box>
        </Box>
      </Box>

    </div>
  );
};

export default Home;
