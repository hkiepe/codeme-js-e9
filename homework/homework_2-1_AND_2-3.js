const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 51;
let typeOfRoad = 'city';

function roadSpeed(speed, typeOfRoad = 'city') {

    let logger;

    /* Soultion with if - else

    if (speed<=CITY_SPEED_LIMIT & typeOfRoad == 'city') {
        logger = 'Miasto: jedziesz prawidlowo';
    } else if (speed>CITY_SPEED_LIMIT & typeOfRoad == 'city') {
        logger = 'Miasto: przekroczyles prędkość';
    } else if (speed<=TWO_LANE_EXPRESSWAY_SPEED_LIMIT & typeOfRoad == 'expressway') {
        logger = 'Eska: jedziesz prawidlowo';
    } else if (speed>TWO_LANE_EXPRESSWAY_SPEED_LIMIT & typeOfRoad == 'expressway') {
        logger = 'Eska: przekroczyles prędkość';
    } else if (speed<=HIGHWAY_SPEED_LIMIT & typeOfRoad == 'highway') {
        logger = 'Autostrada: jedziesz prawidlowo';
    } else if (speed>HIGHWAY_SPEED_LIMIT & typeOfRoad == 'highway') {
        logger 'autostrada: przekroczyles prędkość';
    }

    // Or with SWITCH */

    switch(typeOfRoad) {
        case 'city':
            if (speed<=CITY_SPEED_LIMIT) {
                logger = 'Miasto: jedziesz prawidlowo';
            } else if (speed>CITY_SPEED_LIMIT) {
                logger = 'Miasto: przekroczyles prędkość';
            }
        break;
        case 'expressway':
            if (speed<=TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
                logger = 'Eska: jedziesz prawidlowo';
            } else if (speed>TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
                logger = 'Eska: przekroczyles prędkość';
            }
        break;
        case 'highway':
            if (speed<=HIGHWAY_SPEED_LIMIT & typeOfRoad == 'highway') {
                logger = 'Autostrada: jedziesz prawidlowo';
            } else if (speed>HIGHWAY_SPEED_LIMIT & typeOfRoad == 'highway') {
                logger = 'autostrada: przekroczyles prędkość';
            }
        break;
        default:
            logger = 'not in range';
    }

    return logger;
}

console.log(roadSpeed(speed));
