import http from 'k6/http';

import * as env from './env.js'

export const options = {
    duration: `${env.TG1_DURATION}`,
    vus: `${env.TG1_VU}`
}

export default function() {
    http.get(`${env.devEnvironment}`)    
}