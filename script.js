import http from 'k6/http';

import * as env from './env.js'

export const options = {
    duration: `${env.TG1_DURATION}`,
    vus: `${env.TG1_VU}`
}

export default function() {
    http.get(`${env.RPi1}`)
    http.get(`${env.RPi2}`) 
    http.get(`${env.RPi3}`) 
}