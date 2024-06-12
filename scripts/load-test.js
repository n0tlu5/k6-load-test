import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10, // number of virtual users
    duration: '30s', // duration of the test
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    },
};

export default function () {
    let res = http.get('http://app:3000');
    check(res, {
        'status was 200': (r) => r.status == 200,
    });
    sleep(1);
}
