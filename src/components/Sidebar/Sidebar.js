import { Box, Checkbox, Slider, styled, Typography } from "@mui/material";
import React, { Component } from "react";


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


export default class Sidebar extends Component {
    state = {
        departureOutbound: [0, 23],
        departureReturn: [0, 23],
        journeyOutbound: 48,
        journeyReturn: 48,
        airlines: {},
        stops: {},
    };

    constructor(props) {
        super(props);
    }

    // componentDidMount() {

    // }

    // componentWillUnmount() {
    // }

    render() {
        const that = this,
              departureOutbound = that.state.departureOutbound,
              departureReturn = that.state.departureReturn,
              journeyOutbound = that.state.journeyOutbound,
              journeyReturn = that.state.journeyReturn,
              airlines = that.state.airlines,
              stops = that.state.stops;

        const changed = () => {
            if (typeof that.props.onChanged === 'function')
                that.props.onChanged({
                    stops: stops,
                    airlines: airlines,
                    departTime: {
                        outbound: departureOutbound,
                        return: departureReturn,
                    },
                    journeyDur: {
                        outbound: journeyOutbound,
                        return: journeyReturn,
                    },
                });
        }

        const timeUS = (value) => {
            let result;

            result = `${value[0] > 12 ? value[0] - 12 : (value[0] == 0 ? '12' : value[0])}:00 ${value[0] >= 12 ? 'PM' : 'AM'} - ${value[1] > 12 ? value[1] - 12 : (value[1] == 0 ? '12' : value[1])}:00 ${value[1] >= 12 ? 'PM' : 'AM'}`;

            return result;
        }

        const change = (e, v) => {
            let el   = e.target,
                data = {
                    name: '',
                    value: '',
                    checked: '',
                }

            if (el.name === 'stops') {
                let data = stops;
                data[el.value] = el.checked;
                that.setState({ stops: data });
            }

            if (el.name === 'airline') {
                let _airlines = airlines;
                _airlines[el.value] = el.checked;
                that.setState({ airlines: _airlines });
            }

            data.name = el.name;
            data.value = el.value;
            data.checked = el.checked;

            if (
                el.name === 'departure-outbound' ||
                el.name === 'departure-return' ||
                el.name === 'journey-outbound' ||
                el.name === 'journey-return'
            )
                data.value = v;

            changed();
        };   

        return (
            <Box className="sidebar-inner-wrap">
                <Box className="sidebar-filter stops-filter">
                    <FilterTitle>Number of Stops</FilterTitle>
                    <Box className="filter-term">
                        <FilterPTag sx={{}}>
                            <Checkbox width="6px" height="16px" name="stops" value="direct" onChange={change} checked={stops['direct'] === false ? false : true} />
                            <Typography>Direct</Typography>
                        </FilterPTag>
                        <FilterPTag sx={{}}>
                            <Checkbox width="6px" height="16px" name="stops" value="1stop" onChange={change} checked={stops['1stop'] === false ? false : true} />
                            <Typography>1 stop</Typography>
                        </FilterPTag>
                        <FilterPTag sx={{}}>
                            <Checkbox width="6px" height="16px" name="stops" value="2+stops" onChange={change} checked={stops['2+stops'] === false ? false : true} />
                            <Typography>2+ stops</Typography>
                        </FilterPTag>
                    </Box>
                </Box>

                {/* departure-filter */}
                <Box className="sidebar-filter departure-filter" sx={{ marginTop: '30px' }}>
                    <FilterTitle>Departure times</FilterTitle>
                    <Box className="filter-term">
                        <Box className="filter-term">
                            <Box sx={{}}>
                                <Typography sx={{ color: "rgba(7, 14, 57, 0.75)", fontSize: "12px", fontWeight: 600, marginBottom: "0.5em" }}>Outbound</Typography>
                                <Typography sx={{ fontSize: "12px", color: "rgba(7, 14, 57, 0.5)" }}>{timeUS(departureOutbound)}</Typography>

                                <Box className="filter-slider">
                                    <Box sx={{ width: "100%", marginTop: "14px" }}>
                                        <Slider
                                            value={departureOutbound}
                                            onChange={(event, newValue) => {
                                                that.setState({ departureOutbound: newValue });
                                            }}                                         
                                            onChangeCommitted={change}
                                            name="departure-outbound"
                                            valueLabelDisplay="off"
                                            max={23}
                                            sx={{ color: "rgba(0,0,0,.85)", boxSizing: "border-box", fontSize: "14px", fontVariant: "tabular-nums", lineHeight: 1.5715, listStyle: "none", position: "relative", height: "4px", margin: "10px 0px", padding: "4px 0", cursor: "pointer", touchAction: "none", '& .MuiSlider-thumb': { color: "rgba(255, 255, 255)", boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)", border: "4px", borderColor: "rgb(236, 236, 236)", borderStyle: "solid" }}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {that.props.type === 'round-trip' ? (
                            <Box className="filter-term">
                                <Box sx={{}}>
                                    <Typography sx={{ color: "rgba(7, 14, 57, 0.75)", fontSize: "12px", fontWeight: 600, marginBottom: "0.5em" }}>Return</Typography>
                                    <Typography sx={{ fontSize: "12px", color: "rgba(7, 14, 57, 0.5)" }}>{timeUS(departureReturn)}</Typography>

                                    <Box sx={{ width: "100%", marginTop: "14px" }}>
                                        <Slider
                                            value={departureReturn}
                                            onChange={(event, newValue) => {
                                                that.setState({ departureReturn: newValue });
                                            }}                                         
                                            onChangeCommitted={change}
                                            name="departure-return"
                                            valueLabelDisplay="off"
                                            max={23}
                                            sx={{ color: "rgba(0,0,0,.85)", boxSizing: "border-box", fontSize: "14px", fontVariant: "tabular-nums", lineHeight: 1.5715, listStyle: "none", position: "relative", height: "4px", margin: "10px 0px", padding: "4px 0", cursor: "pointer", touchAction: "none", '& .MuiSlider-thumb': { color: "rgba(255, 255, 255)", boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)", border: "4px", borderColor: "rgb(236, 236, 236)", borderStyle: "solid" } }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Box>

                {Object.keys(that.props.airlines).length ? (
                    <Box className="sidebar-filter airlines-filter" sx={{ marginTop: '30px' }}>
                        <FilterTitle>Airlines</FilterTitle>
                        <Box sx={{ display: "flex", alignItems: "center", color: "rgba(7, 14, 57, 0.5)" }}>
                            <Typography onClick={(e) => {
                                Object.keys(that.props.airlines).map((name) => {
                                    let _airlines = airlines;
                                    _airlines[name] = true;
                                    that.setState({ airlines: _airlines }, () => {
                                        changed();
                                    });
                                });
                            }} sx={{ marginRight:'20px', marginBottom:'10px', cursor:'pointer' }}>Select All</Typography>
                            <Typography onClick={(e) => {
                                Object.keys(that.props.airlines).map((name) => {
                                    let _airlines = airlines;
                                    _airlines[name] = false;
                                    that.setState({ airlines: _airlines }, () => {
                                        changed();
                                    });
                                });
                            }} sx={{ marginRight:'20px', marginBottom:'10px', cursor:'pointer' }}>Clear All</Typography>
                        </Box>
                        <Box className="filter-term">
                            {Object.keys(that.props.airlines).map((name, index) => {
                                return (
                                    <FilterPTag key={index} sx={{}}>
                                        <Checkbox
                                            width="6px"
                                            height="16px"
                                            name="airline"
                                            onChange={change}
                                            value={name}
                                            checked={airlines[name] === false ? false : true}
                                        />
                                        <Typography>{that.props.airlines[name]}</Typography>
                                    </FilterPTag>
                                )
                            })}
                        </Box>
                    </Box>
                ) : (
                    <></>
                )}

                {/* duration-filter */}
                <Box className="sidebar-filter duration-filter" sx={{ marginTop: '30px' }}>
                    <FilterTitle>Journey duration</FilterTitle>
                    <Box className="filter-term">
                        <Box sx={{ color: "rgba(7, 14, 57, 0.5)" }}>
                            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>Outbound</Typography>
                            <Typography sx={{ fontSize: "12px" }}>0h - {journeyOutbound}h</Typography>
                        </Box>
                        <Box sx={{ width: "100%", marginTop: "14px" }}>
                            <Slider
                                value={journeyOutbound}
                                onChange={(event, newValue) => {
                                    that.setState({ journeyOutbound: newValue });
                                }}                                         
                                onChangeCommitted={change}
                                name="journey-outbound"
                                valueLabelDisplay="off"
                                max={48}
                                sx={{color: "rgba(0,0,0,.85)", boxSizing: "border-box", fontSize: "14px", fontVariant: "tabular-nums", lineHeight: 1.5715, listStyle: "none", position: "relative", height: "4px", margin: "10px 0px", padding: "4px 0", cursor: "pointer", touchAction: "none", '& .MuiSlider-thumb': { color: "rgba(255, 255, 255)", boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)", border: "4px", borderColor: "rgb(236, 236, 236)", borderStyle: "solid"} }}
                            />
                        </Box>

                        {that.props.type === 'round-trip' ? (
                            <>
                                <Box sx={{ color: "rgba(7, 14, 57, 0.5)" }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>Return</Typography>
                                    <Typography sx={{ fontSize: "12px" }}>0h - {journeyReturn}h</Typography>
                                </Box>
                                <Box sx={{ width: "100%", marginTop: "14px" }}>
                                    <Slider
                                        value={journeyReturn}
                                        onChange={(event, newValue) => {
                                            that.setState({ journeyReturn: newValue });
                                        }}                                         
                                        onChangeCommitted={change}
                                        name="journey-return"
                                        valueLabelDisplay="off"
                                        max={48}
                                        sx={{ color: "rgba(0,0,0,.85)", boxSizing: "border-box", fontSize: "14px", fontVariant: "tabular-nums", lineHeight: 1.5715, position: "relative", height: "4px", margin: "10px 0px", padding: "4px 0", cursor: "pointer", touchAction: "none", '& .MuiSlider-thumb': { color: "rgba(255, 255, 255)", boxShadow: "0px 0px 0px 5px rgb(161 161 161 / 16%)", border: "4px", borderColor: "rgb(236, 236, 236)", borderStyle: "solid" } }}
                                    />
                                </Box>
                            </>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Box>
            </Box>
        );
    }
};

