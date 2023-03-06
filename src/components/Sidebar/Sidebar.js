import { Box, Checkbox, Slider, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const FilterTitle = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "normal",
  textAlign: "left",
  marginBottom: "25px",
  fontStyle: "normal",
  fontWeight: "bold",
}));
const FilterPTag = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  fontSize: "12px",
  color: "rgb(29, 29, 29)",
  fontFamily: '"Public Sans", sans-serif',
  marginBottom: "13px",
  "& p": {
    padding: "0 8px",
  },
  "& span": {
    padding: "0",
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {
  const [value, setValue] = useState([0, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box className="stops-filter">
        <FilterTitle>Number of Stops</FilterTitle>
        <Box className="filter-term">
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>Direct</Typography>
          </FilterPTag>
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>1 stop</Typography>
          </FilterPTag>
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>2+ stops</Typography>
          </FilterPTag>
        </Box>
      </Box>
      {/* departure-filter */}
      <Box className="departure-filter">
        <FilterTitle>Departure times</FilterTitle>
        <Box className="filter-term">
          <Box className="filter-term">
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "rgba(7, 14, 57, 0.75)",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "0.5em",
                }}
              >
                Outbound
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(7, 14, 57, 0.5)",
                }}
              >
                0.00 - 24:00
              </Typography>

              <Box className="filter-slider">
                <Box sx={{ width: "100%", marginTop: "14px" }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{
                      color: "rgba(0,0,0,.85)",
                      boxSizing: "border-box",
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "14px",
                      fontVariant: "tabular-nums",
                      lineHeight: 1.5715,
                      listStyle: "none",
                      // fonteature-settings: '"tnum","tnum",'
                      position: "relative",
                      height: "4px",
                      margin: "10px 6px",
                      padding: "4px 0",
                      cursor: "pointer",
                      touchAction: "none",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="filter-term">
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "rgba(7, 14, 57, 0.75)",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "0.5em",
                }}
              >
                Return
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(7, 14, 57, 0.5)",
                }}
              >
                0.00 - 24:00
              </Typography>

              <Box sx={{ width: "100%", marginTop: "14px" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* airlines-filter */}
      <Box className="airlines-filter">
        <FilterTitle>Airlines</FilterTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "rgba(7, 14, 57, 0.5)",
          }}
        >
          <Typography sx={{ marginRight: "20px" }}>Select All</Typography>
          <Typography>Clear All</Typography>
        </Box>
        <Box className="filter-term">
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>Combined airlines</Typography>
          </FilterPTag>
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>Austrian Airlines</Typography>
          </FilterPTag>
          <FilterPTag sx={{}}>
            <Checkbox
              width="6px"
              height="16px"
              name="saveAddress"
              value="yes"
            />
            <Typography>Qatar Airways</Typography>
          </FilterPTag>
        </Box>
      </Box>
      {/* duration-filter */}
      <Box className="duration-filter">
        <FilterTitle>Journey duration</FilterTitle>
        <Box className="filter-term">
          <Box
            sx={{
              color: "rgba(7, 14, 57, 0.5)",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Outbound
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              0.00 - 24:00
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
