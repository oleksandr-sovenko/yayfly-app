import CheckIcon from "@mui/icons-material/Check";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography
} from "@mui/material";
import React from "react";
import airHelp from "../../assets/confirm-booking/air-help.png";
import ticketService from "../../assets/confirm-booking/ticket-service-img.svg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "3px",
  padding: "37px 35px 20px",
  marginBottom: "20px",
}));

const PersonApplyCard = () => {
  return (
    <Box className="person-card">
      <h3></h3>
      <SectionTitle title="Person Paying" />
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
            sx={{
              fontSize: "18px",
              lineHeight: "25px",
            }}
          >
            Contact Details
          </Typography>
        </Box>
      </CardWrap>
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "25px",
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
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 700,
              }}
            >
              Ticket service and protection
            </Typography>
          </Box>
          <Box>
            <img
              src={airHelp}
              style={{ width: "100px", height: "25px" }}
              alt="Air Help-img"
              srcset=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            // flexGrow: 1,
          }}
        >
          <img
            style={{
              Width: "300px",
              maxHeight: "300px",
            }}
            src={ticketService}
            alt="TicketImg"
          />
          <Box>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </Box>
        </Box>
      </CardWrap>
    </Box>
  );
};

export default PersonApplyCard;
