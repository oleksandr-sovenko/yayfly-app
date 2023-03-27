/**
 * 
 */
const getParams = () => {
    let params = window.location.pathname.split('/').filter((e) => { return e });

    params[2] = params[2].split(';');

    for (let i in params[2]) {
        params[2][i] = params[2][i].split(',');
    }

    let data = {
        index: 0,
        type: params[1],
        trips: [],
        cabinClass: params[3],
        adults: parseInt(params[4]),
        children: parseInt(params[5]),
        infants: parseInt(params[6]),
    }

    for (const item of params[2]) {
        if (data.type === 'round-trip')
            data.trips.push({
                origin: item[0],
                destination: item[1],
                dates: [item[2], item[3]],
            })
        else
            data.trips.push({
                origin: item[0],
                destination: item[1],
                date: item[2],
            })
    }

    return data;
};


/**
 * 
 */
const getError = (error) => {
    const messsages = {
        'not_found': 'Oh oh! Something went wrong. Please try again.',
        'offer_no_longer_available': 'Unfortunately, the requested flight offer has expired and is no longer available. We apologize for the inconvenience. Press the link below to restart your flight search.',
        'offer_request_already_booked': 'This flight booking has already been processed and can’t be processed again. For a new flight booking, please go to the flight search page.',
        'expired': 'Unfortunately, the requested flight offer has expired and is no longer available. We apologize for the inconvenience. Press the link below to restart your flight search.',
    }

    if (error.code && messsages[error.code] !== undefined)
        return messsages[error.code];

    if (error.message)
        return error.message;

    return 'Something went wrong ...';
}


/**
 * 
 */
const calcPriceWithMarkup = (value) => {
    let markup = 0,
        result = 0;

    value = parseFloat(value);

    if (isNaN(value))
        value = 0;

    try {
        if (window.flights_engine.settings.duffel.markup) {
            let duffel_markup = parseFloat(window.flights_engine.settings.duffel.markup);

            if (isNaN(duffel_markup))
                duffel_markup = 0;

            markup = value * (duffel_markup / 100);
        }
    } catch(e) {
        console.log(e);
    }

    result = parseFloat(value) + markup;

    // return `${result.toFixed(2)} ${value}`;
    return result.toFixed(2);
};


/**
 * 
 */
const getMinutes = (value) => {
    let h = parseInt(value.replace('PT', '')),
        m = parseInt(value.replace(/.*H/, ''));

    if (isNaN(h))
        h = 0;

    if (/P1DT/.test(value)) {
        if (!h)
            h = 24;
        else
            h = h + 24;
    }

    if (isNaN(m))
        m = 0;

    return (h * 60) + m;
};


/**
 * 
 */
function convertISO8601toHours(duration) {
    const regex = /P(\d+Y)?(\d+M)?(\d+D)?T(\d+H)?(\d+M)?(\d+S)?/;
    const matches = regex.exec(duration);

    const hours = parseInt(matches[4] || 0);
    const minutes = parseInt(matches[5] || 0);

    return hours + (minutes / 60);
}


/**
 * 
 */
const convert2Time = (value) => {
    let hours   = Math.floor(value / 60),
        minutes = value % 60;

    return `${hours}h ${minutes}min`;
};


/**
 * 
 */
const getSettings = () => {
    if (typeof window.flights_engine.settings === 'object')
        return window.flights_engine.settings;
    else
        return {};
}


/**
 * 
 */
const getSeatsData = (offer, seats) => {
    let index = 0,
        seatsData = { passengers: {}, total_amount: 0, count: 0 };

    for (const s of Object.values(seats)) {
        const origin = offer.slices[index].origin.iata_city_code,
              destination = offer.slices[index].destination.iata_city_code;

        for (const p of Object.values(s)) {
            if (p && p.service) {
                const total_amount = parseFloat(p.service.total_amount);

                p.origin = origin;
                p.destination = destination;

                if (isNaN(total_amount))
                    total_amount = 0;

                if (!seatsData.passengers[p.service.passenger_id])
                    seatsData.passengers[p.service.passenger_id] = [];

                seatsData.passengers[p.service.passenger_id].push(p);
                seatsData.total_amount += total_amount;
                seatsData.count++;
            }
        }
        index++;
    }

    return seatsData;
};


/**
 * 
 */
const localStorageJSON = (name) => {
    let json = {};

    try {
        json = JSON.parse(localStorage[name]);
    } catch(e) {
        json = {};
    }

    return json;
};


/**
 * 
 */
const getNormalDuration = (value) => {
    return value.replace('P1DT', '1d ').replace('PT', '').replace('H', 'h ').replace('M', 'min');
};


export { getParams, getMinutes, convert2Time, getSeatsData, localStorageJSON, getSettings, getNormalDuration, convertISO8601toHours, calcPriceWithMarkup, getError }
