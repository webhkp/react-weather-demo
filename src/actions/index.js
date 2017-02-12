import axios from 'axios';

const API_KEY = '1bad9df8129abfdd93b643b399ed74f4';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}