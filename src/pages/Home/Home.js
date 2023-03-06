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
          <Box 
            sx={{ 
              gridColumn:{md:"span 3", xs:"span 12"},
              paddingRight: {md:"30px",xs:"0px"},
              display:{md:"block",xs:"none"} 
            }}>
            <Sidebar />
          </Box>
          <Box sx={{
            gridColumn:{md:"span 9", xs:"span 12"}
          }}>
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
