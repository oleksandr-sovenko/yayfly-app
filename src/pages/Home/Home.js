import React from "react";
import CtaCard from "../../components/CtaCard";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <div>
      <TopSeachForm></TopSeachForm>
      <CtaCard></CtaCard>
      <ProgressBar></ProgressBar>
      <SearchPriceResults></SearchPriceResults>
    </div>
  );
};

export default Home;
