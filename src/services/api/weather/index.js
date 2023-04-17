import axios, { getData } from '../../../lib/axios'

export const getWeather = (latitude, longitude) => {
    return axios.get(`/${latitude},${longitude}`).then(getData)
}