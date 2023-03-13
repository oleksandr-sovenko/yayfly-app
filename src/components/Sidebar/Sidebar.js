import { Box, Checkbox, Slider, styled, Typography } from "@mui/material";
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

const minDistance = 10;

const Sidebar = (props) => {
    if (!props)
        props = {};

    const [outboundValue, setOutboundValue] = useState([20, 80]);
    const [returnValue, setReturnValue] = useState([20, 80]);

    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeOutbound = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setOutboundValue([Math.min(newValue[0], outboundValue[1] - minDistance), outboundValue[1]]);
        } else {
            setOutboundValue([outboundValue[0], Math.max(newValue[1], outboundValue[0] + minDistance)]);
        }
    };

    const handleChangeReturn = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setReturnValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setReturnValue([clamped - minDistance, clamped]);
            }
        } else {
            setReturnValue(newValue);
        }

        console.log(newValue);
    };

    const changedNumberOfStops = (e) => {
        console.log(e);
    }

    const changedAirline = (e) => {
        console.log(e);
    }    

    return (
        <Box className="sidebar-inner-wrap">
            <Box className="sidebar-filter stops-filter">
                <FilterTitle>Number of Stops</FilterTitle>
                <Box className="filter-term">
                    <FilterPTag sx={{}}>
                        <Checkbox
                            width="6px"
                            height="16px"
                            value="yes"
                            onChange={changedNumberOfStops}
                        />
                        <Typography>Direct</Typography>
                    </FilterPTag>
                    <FilterPTag sx={{}}>
                        <Checkbox
                            width="6px"
                            height="16px"
                            value="yes"
                            onChange={changedNumberOfStops}
                        />
                        <Typography>1 stop</Typography>
                    </FilterPTag>
                    <FilterPTag sx={{}}>
                        <Checkbox
                            width="6px"
                            height="16px"
                            value="yes"
                            onChange={changedNumberOfStops}
                        />
                        <Typography>2+ stops</Typography>
                    </FilterPTag>
                </Box>
            </Box>

            {/* departure-filter */}
            <Box className="sidebar-filter departure-filter">
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
                            >Outbound</Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "rgba(7, 14, 57, 0.5)",
                                }}
                            >0.00 - 24:00</Typography>

                            <Box className="filter-slider">
                                <Box sx={{ width: "100%", marginTop: "14px" }}>
                                    <Slider
                                        getAriaLabel={() => "Temperature range"}
                                        value={outboundValue}
                                        onChange={handleChangeOutbound}
                                        valueLabelDisplay="auto"
                                        sx={{
                                            color: "rgba(0,0,0,.85)",
                                            boxSizing: "border-box",
                                            color: "rgba(0, 0, 0, 0.85)",
                                            fontSize: "14px",
                                            fontVariant: "tabular-nums",
                                            lineHeight: 1.5715,
                                            listStyle: "none",
                                            position: "relative",
                                            height: "4px",
                                            margin: "10px 0px",
                                            padding: "4px 0",
                                            cursor: "pointer",
                                            touchAction: "none",
                                            '& .MuiSlider-thumb': {
                                                color: "rgba(255, 255, 255)",
                                                boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)",
                                                border: "4px",
                                                borderColor: "rgb(236, 236, 236)",
                                                borderStyle: "solid"
                                            },
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
                                }}>Return</Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "rgba(7, 14, 57, 0.5)",
                                }}
                            >0.00 - 24:00</Typography>

                            <Box sx={{ width: "100%", marginTop: "14px" }}>
                                <Slider
                                    getAriaLabel={() => "Temperature range"}
                                    value={returnValue}
                                    onChange={handleChangeReturn}
                                    valueLabelDisplay="auto"
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
                                        margin: "10px 0px",
                                        padding: "4px 0",
                                        cursor: "pointer",
                                        touchAction: "none",
                                        '& .MuiSlider-thumb': {
                                            color: "rgba(255, 255, 255)",
                                            boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)",
                                            border: "4px",
                                            borderColor: "rgb(236, 236, 236)",
                                            borderStyle: "solid"
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* airlines-filter */}
            {Object.keys(props.airlines).length ? (
                <Box className="sidebar-filter airlines-filter">
                    <FilterTitle>Airlines</FilterTitle>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "rgba(7, 14, 57, 0.5)",
                        }}
                    >
                        <Typography sx={{ marginRight: "20px", marginBottom:"10px" }}>Select All</Typography>
                        <Typography sx={{ marginRight: "20px", marginBottom:"10px" }}>Clear All</Typography>
                    </Box>
                    <Box className="filter-term">
                        {Object.keys(props.airlines).map((name, index) => {
                            return (
                                <FilterPTag key={index} sx={{}}>
                                    <Checkbox
                                        width="6px"
                                        height="16px"
                                        name={name}
                                        onChange={changedAirline}
                                        value="yes"
                                    />
                                    <Typography>{props.airlines[name]}</Typography>
                                </FilterPTag>
                            )
                        })}
                    </Box>
                </Box>
            ) : (
                <></>
            )}

            {/* duration-filter */}
            <Box className="sidebar-filter duration-filter">
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
                        >Outbound</Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                            }}
                        >0.00 - 24:00</Typography>
                    </Box>
                    <Box sx={{ width: "100%", marginTop: "14px" }}>
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={returnValue}
                            onChange={handleChangeReturn}
                            valueLabelDisplay="auto"
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
                                margin: "10px 0px",
                                padding: "4px 0",
                                cursor: "pointer",
                                touchAction: "none",
                                '& .MuiSlider-thumb': {
                                    color: "rgba(255, 255, 255)",
                                    boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)",
                                    border: "4px",
                                    borderColor: "rgb(236, 236, 236)",
                                    borderStyle: "solid"
                                },
                            }}
                        />
                    </Box>


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
                        >Return</Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                            }}
                        >0.00 - 24:00</Typography>
                    </Box>
                    <Box sx={{ width: "100%", marginTop: "14px" }}>
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={returnValue}
                            onChange={handleChangeReturn}
                            valueLabelDisplay="auto"
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
                                margin: "10px 0px",
                                padding: "4px 0",
                                cursor: "pointer",
                                touchAction: "none",
                                '& .MuiSlider-thumb': {
                                    color: "rgba(255, 255, 255)",
                                    boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)",
                                    border: "4px",
                                    borderColor: "rgb(236, 236, 236)",
                                    borderStyle: "solid"
                                },
                            }}
                        />
                    </Box>                    
                </Box>
            </Box>
        </Box>
    );
};


export default Sidebar;
