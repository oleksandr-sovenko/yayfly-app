import React from "react";
import CtaCard from "../../components/CtaCard";
import PopupModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <div>
      <PopupModal></PopupModal>
      <TopSeachForm></TopSeachForm>
      <CtaCard></CtaCard>
      <ProgressBar></ProgressBar>
      <SearchPriceResults></SearchPriceResults>
    </div>
  );
};

export default Home;
