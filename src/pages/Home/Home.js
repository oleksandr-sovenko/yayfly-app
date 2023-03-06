import { Box, Typography } from "@mui/material";
import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CtaCard from "../../components/CtaCard";
import PopupModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <>
      <PopupModal></PopupModal>
      <Box 
        sx={{
          display:{md:"none", xs:"flex"},
          background:"white",
          borderBottom:"2px solid rgb(204, 206, 219)",
          padding:"30px 15px",
          alignItems:"center",
          justifyContent:"space-between",
          marginBottom:"25px"
        }}
      >
        <Box>
          <Box 
            sx={{
              display:"flex",
              alignItems:"center",
              marginBottom:"10px",
              "& svg":{
                marginLeft:"10px",
                marginRight:"10px",
              }
            }}
          >
            <Typography
              sx={{
                fontSize:"16px",
                lineHeight:"normal",
                fontWeight:"700",
                color:"rgb(0, 3, 23)",
                fontFamily:"'Public Sans', sans-serif",
              }}
            >
              London
            </Typography>
            <BsArrowRight ></BsArrowRight>
            <Typography
              sx={{
                fontSize:"16px",
                lineHeight:"normal",
                fontWeight:"700",
                color:"rgb(0, 3, 23)",
                fontFamily:"'Public Sans', sans-serif"
              }}
            >
              Bangkok 
            </Typography>
          </Box>
            <Typography 
            sx={{
              color:"rgba(7, 14, 57, 0.5)",
              fontFamily:"'Public Sans', sans-serif",
              fontWeight:"400",
              fontSize:"14px",
              lineHeight:"16px",
              marginBottom:"4px"
            }}
            >Fri May 5 - Fri May 19</Typography>
            <Typography 
              component={"span"} 
              className="nrPassengers"
              sx={{
                color:"rgba(7, 14, 57, 0.5)",
                fontFamily:"'Public Sans', sans-serif",
                fontWeight:"400",
                fontSize:"14px",
                lineHeight:"16px"
              }}
            >1 adult, Economy</Typography>
        </Box>
        <Typography
          sx={{
            display:"inline-block",
            "& a":{
              textDecoration:"none",
              color:"#12172a"
            },
            "& a svg":{
              fontSize:"24px",
              display:"block",
              marginBottom:"5px"
            },
          }}
        >
          <Link>
            <FaPencilAlt></FaPencilAlt>
            Edit 
          </Link>
        </Typography>
      </Box>
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

    </>
  );
};

export default Home;
