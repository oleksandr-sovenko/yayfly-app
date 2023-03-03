import { Button } from "@mui/material";
import React from "react";
import CtaCard from "../../components/CtaCard";
import InformModal from "../../components/Modal/InformModal";
import PopupModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <InformModal open={open} onClose={handleClose} />
      <PopupModal></PopupModal>
      <TopSeachForm></TopSeachForm>
      <CtaCard></CtaCard>
      <ProgressBar></ProgressBar>
      <SearchPriceResults></SearchPriceResults>
    </div>
  );
};

export default Home;
