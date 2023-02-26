import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./ConfirmBooking.css";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "3px",
  padding: "37px 35px 20px",
  marginBottom: "20px",
  "& > Box > Typography": {
    fontSize: "18px",
    lineHeight: "25px",
  },
  "@media (max-width: 600px)": {},
  [theme.breakpoints.down("md")]: {},
}));
const PassengerCard = () => {
  return (
    <Box className="passenger-area">
      <Box className="container">
        <h1>Passenger Card 2</h1>
      </Box>

      <Box className="person-card">
        <h3></h3>
        <SectionTitle title="Passenger" />
        <CardWrap>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SwitchAccountIcon
              sx={{
                width: "30px",
                height: "30px",
                marginRight: "22px",
              }}
            />
            <Typography
            //   sx={{
            //     fontSize: "18px",
            //     lineHeight: "25px",
            //   }}
            >
              Contact Details
            </Typography>
          </Box>
        </CardWrap>
        <CardWrap>
          <Box>
            <Box>
              <SwitchAccountIcon />
              <Typography>Contact Details</Typography>
            </Box>
            <Box>
              <SwitchAccountIcon />
              <Typography>Contact Details</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <img src="" alt="TicketImg" />
            </Box>
            <Box></Box>
          </Box>
        </CardWrap>
      </Box>
    </Box>

    // <div className="passenger-area">
    //   <h2 className="section-title">Passengers</h2>
    //   <div className="passenger-info card">
    //     <form>
    //       <div className="card-title">
    //         <p className="title-icon"></p>
    //         <div className="title-text">
    //           <h3>Passenger 1</h3>
    //           <p>Use all given names and surnames exactly as per passport/Id</p>
    //         </div>
    //       </div>
    //       <div className="card-body">
    //         <div className="from-group">
    //           <div className="form-control">
    //             <label className="">Given names</label>
    //             <input
    //               type="text"
    //               className=""
    //               placeholder="e.g. Oliver James"
    //             ></input>
    //           </div>
    //           <div className="form-control">
    //             <label className="">Surname(s)</label>
    //             <input
    //               type="text"
    //               name="lastName"
    //               className=""
    //               placeholder="e.g Brown"
    //             ></input>
    //           </div>
    //         </div>
    //         <div className="from-group">
    //           <div className="form-control">
    //             <label className="">Nationality</label>
    //             <input
    //               type="text"
    //               className=""
    //               placeholder="e.g. United Kingdom"
    //             ></input>
    //           </div>
    //           <div className="form-control">
    //             <label className="">Gender</label>
    //             <input
    //               type="text"
    //               name="lastName"
    //               className=""
    //               placeholder="e.g Brown"
    //             ></input>
    //           </div>
    //           <div className="form-control">
    //             <label className="">Date Of birth</label>
    //             <div className="date-input">
    //               <input type="text" className="" placeholder="Month"></input>
    //               <input type="number" className="" placeholder="DD"></input>
    //               <input type="number" className="" placeholder="YYYY"></input>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="from-group">
    //           <div className="form-control">
    //             <label className="">Passport or ID number</label>
    //             <input
    //               type="text"
    //               className=""
    //               placeholder="e.g. United Kingdom"
    //             ></input>
    //           </div>
    //           <div className="form-control">
    //             <label className="">Passport or Id expiry date</label>
    //             <div className="date-input">
    //               <input type="text" className="" placeholder="Month"></input>
    //               <input type="number" className="" placeholder="DD"></input>
    //               <input type="number" className="" placeholder="YYYY"></input>
    //             </div>
    //           </div>
    //           <div className="form-control">
    //             <label className="">No expiry</label>
    //             <input
    //               type="checkbox"
    //               id="vehicle1"
    //               name="vehicle1"
    //               value="Bike"
    //             ></input>
    //           </div>
    //         </div>
    //         <div className="form-control">
    //           <label className="">Cabin Luggage</label>
    //           <input
    //             type="text"
    //             className=""
    //             placeholder="e.g. United Kingdom"
    //           ></input>
    //         </div>
    //         <div className="form-control">
    //           <h4 className="">Checked luggage</h4>
    //           <label className="">Select one option</label>
    //           <input
    //             type="text"
    //             className=""
    //             placeholder="e.g. United Kingdom"
    //           ></input>
    //         </div>
    //         <div className="form-control">
    //           <input
    //             type="text"
    //             className=""
    //             placeholder="e.g. United Kingdom"
    //           ></input>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default PassengerCard;
