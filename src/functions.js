const getParams = () => {
    let params = window.location.pathname.split('/').filter((e) => { return e });

    params[2] = params[2].split(';');

    for (let i in params[2]) {
        params[2][i] = params[2][i].split(',');
    }

    let data = {
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
                departure: item[0],
                arrival: item[1],
                dates: [item[2], item[3]],
            })
        else
            data.trips.push({
                departure: item[0],
                arrival: item[1],
                date: [item[2]],
            })
    }

    return data;
};

export { getParams }
