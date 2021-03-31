const tickets = [
    {ticket_id: 1, name: 'Ivan Ivanov', number: '0123', country: 'France', data: '05-05-2021'},
    {ticket_id: 2, name: 'Petr Petrov', number: '2468', country: 'Italy', data: '06-06-2021'}
]

const hotels = [
    {hotel_id: 1, name: 'Ivan Ivanov', hotelName: 'Cheryomushka'},
    {hotel_id: 2, name: 'Petr Petrov', hotelName: 'Yasnoe solnyshko'}
]

const visas = [
    {visa_id: 1, ticketNumber: '0123', hotelName: 'Cheryomushka', lastName: 'Ivanov', dataFrom: '03-05-2021', dataTo: '03-11-2021'},
    {visa_id: 2, ticketNumber: '2468', hotelName: 'Yasnoe solnyshko', lastName: 'Petrov', dataFrom: '01-06-2021', dataTo: '01-12-2021'}
]

function getTicket(name) {
    return new Promise ((resolve, reject) => {
        console.log('start getting ticket');
        setTimeout(() => {
            console.log('finish getting ticket');
            let success = true;
            if (success) {
                let ticket = tickets.find(item => item.name === name);
                resolve(ticket);
            } else {
                reject('error while getting ticket');
            }
        }, 1000)
    })
};

function getHotel(name) {
    return new Promise ((resolve, reject) => {
        console.log('start getting hotel');
        setTimeout(() => {
            console.log('finish getting hotel');
            let success = true;
            if (success) {
                let hotel = hotels.find(item => item.name === name);
                resolve(hotel);
            } else {
                reject('error while getting hotel');
            }
        }, 1000)
    })
};

function getVisa(ticketNumber, hotelName) {
    return new Promise ((resolve, reject) => {
        console.log('start getting visa');
        setTimeout(() => {
            console.log('finish getting visa');
            let success = true;
            if (success) {
                let visa = visas.find(item => (item.ticketNumber === ticketNumber) && (item.hotelName === hotelName));
                resolve(visa);
            } else {
                reject('error while getting visa');
            }
        }, 1000)
    })
};

(async function () {
    let name = 'Petr Petrov';
    try {
        let ticket = getTicket(name);
        let hotel = getHotel(name);
        let visa = getVisa((await ticket).number, (await hotel).hotelName);
        console.log(await visa);
    } catch (err) {
        console.error(err);
    }
})()