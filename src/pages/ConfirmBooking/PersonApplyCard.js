import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CheckIcon from "@mui/icons-material/Check";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputLabel,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { IoIosAirplane } from "react-icons/io";
import airHelp from "../../assets/confirm-booking/air-help.png";
import supportPhotoVector from "../../assets/confirm-booking/supportPhotoVector.png";
import ticketService from "../../assets/confirm-booking/ticket-service-img.svg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
  borderRadius: "5px",
  padding: "35px",
  marginBottom: "30px",
  color: "rgb(0, 3, 23)",
}));

const CardButton = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  color: "rgb(72, 96, 255)",
  border: "2px solid rgb(72, 96, 255);",
  width: "210px",
  // height: "35px",
  lineHeight: "35px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "5px",
  fontWeight: 700,
  marginTop: "35px",
}));

const PersonApplyCard = () => {
  return (
    <Box className="person-card">
      <SectionTitle title="Person Paying" />
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "25px",
          }}
        >
          <AccountBoxIcon
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
            Contact details
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& input": {
              border: "1px solid rgb(209, 212, 227)",
              borderRadius: "3px",
              height: "40px",
              padding: "4px 11px",
            },
          }}
        >
          <Box
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              width: "100%",
              "& div": {
                width: "100%",
              },
            }}
          >
            <Box
            // sx={{
            //   my: { xs: 3, md: 6 },
            //   p: { xs: 2, md: 3 },
            // }}
            >
              <InputLabel
                sx={{
                  fontWeight: 700,
                  color: "rgb(0 3 23)",
                  marginBottom: "4px",
                  fontSize: "14px",
                }}
              >
                E-mail address
              </InputLabel>
              <TextField
                required
                sx={{
                  height: "40px",
                }}
                fullWidth
                placeholder="your@gmail.com"
              />
            </Box>
            <Box>
              <InputLabel
                sx={{
                  fontWeight: 700,
                  color: "rgb(0 3 23)",
                  marginBottom: "4px",
                }}
              >
                UK mobile phone number
              </InputLabel>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "40px" }}
              >
                <Typography
                  sx={{
                    color: "rgba(7, 14, 57, 0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(209, 212, 227)",
                    width: "54px",
                    height: "40px",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "16px",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                  }}
                >
                  +44
                </Typography>
                <TextField
                  sx={{
                    height: "40px",
                  }}
                  fullWidth
                  placeholder="your@gmail.com"
                />
              </Box>
            </Box>
          </Box>
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
            <ManageAccountsIcon
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
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <CheckIcon
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                Protect your flight against airline bankruptcy.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <CheckIcon
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                Receive up to <span sx={{ fontWeight: 700 }}>£500</span> for
                flight delays and cancellations.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <Box
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "25px",
                  fontWeight: 500,
                  color: "rgb(7 14 57 / 50%)",
                }}
              >
                Learn more
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <Box
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              ></Box>
              <CardButton>Add AirHelp + £ 19.50 pp</CardButton>
            </Box>
          </Box>
        </Box>
      </CardWrap>
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "25px",
          }}
        >
          <PhoneIcon
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
            Premium support package
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            "& img": {
              Width: "300px !important",
              maxHeight: "200px",
            },
          }}
        >
          <img src={supportPhotoVector} alt="TicketImg" />
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <CheckIcon
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                Webchat support 7 days a week
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <CheckIcon
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                Priority customer support
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <Box
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "25px",
                  fontWeight: 500,
                  color: "rgb(7 14 57 / 50%)",
                }}
              >
                Learn more
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                marginBottom: "5px",
              }}
            >
              <Box
                sx={{
                  color: "rgb(19 194 155)",
                  fontSize: "14px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              ></Box>
              <CardButton>Add support + £ 8.50 pp</CardButton>
            </Box>
          </Box>
        </Box>
      </CardWrap>
      <CardWrap>
        <Typography sx={{ fontSize: "13px", marginBottom: "6px" }}>
          Do you have a discount code?
        </Typography>
        <form>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& input": {
                border: "1px solid rgb(209, 212, 227)",
                borderRadius: "3px",
                height: "40px",
                padding: "4px 11px",
              },
              "& button": {
                color: "rgb(0, 3, 23)",
                backgroundColor: "rgb(209, 212, 227)",
                border: "none",
                marginLeft: "10px",
                borderRadius: "3px",
                height: "40px",
                outline: "none",
                minWidth: "95px",
                cursor: "pointer",
              },
            }}
          >
            <input className="discount-input" type="text" />
            <button type="submit">Submit</button>
          </Box>
        </form>
      </CardWrap>
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            sx={{
              "& span": {
                fontSize: "12px",
                color: "rgba(7, 14, 57, 0.75)",
                marginLeft: "10px",
              },
            }}
            control={
              <Checkbox
                sx={{ color: "#1890ff" }}
                //
                width="14px"
                height="14px"
                name="saveAddress"
                value="yes"
              />
            }
            label="I accept the Terms and Conditions of Flymble.com and I confirm that the information provided is up to date and accurate."
          />
        </Box>
      </CardWrap>
      <Box sx={{ paddingBottom: "20px" }}>
        <button style={{ marginLeft: "auto" }} className="proceed-btn">
          <span>Proceed to confirmation</span>
          <IoIosAirplane />
        </button>
      </Box>
    </Box>
  );
};

export default PersonApplyCard;
