import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 1,
    duration: '10s'
}

export default function() {
    http.get("http://10.0.0.75:8888/demo")
    http.get("http://10.0.0.75:8888/load")
}

export function handleSummary(data) {
    return {
        "./reports/summary-TG1.html": htmlReport(data),
    };
}