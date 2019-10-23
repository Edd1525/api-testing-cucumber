const fetch = require('node-fetch');
const buildUrl = require('build-url');
// const baseUrl = 'xxx'
const baseUrl = 'https://dev-id.safefleetcloud.com'

// The last response that we received
let lastResponse;

// The access token to use
let accessToken;

// Perform a GET request to the server
function get(url) {
    const realUrl = buildUrl(baseUrl, {
        path: url
    });

    const headers = {};
    if (accessToken) {
        headers.authorization.value = 'Bearer ' + ''
    }

    lastResponse = fetch(realUrl, { headers: headers })
        .then((res) => {
            let bodyPromise;
            const contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('application/json') >= 0) {
                bodyPromise = res.json();
            } else {
                bodyPromise = res.text();
            }

            return bodyPromise.then((body) => {
                return {
                    status: res.status,
                    headers: res.headers.raw(),
                    body: body
                };
            });
        });

    console.log('! + > + > + > + > + > + > !  : get -> lastResponse', realUrl)

    return lastResponse;
}

// Perform a POST request to the server
async function post(url, body) {
    const realUrl = buildUrl(baseUrl, {
        path: url
    });

    const headers = {};
    if (accessToken) {
        headers.authorization.value = 'Bearer ' + ''
    }

    lastResponse = fetch(realUrl, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then((res) => {
            const contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('application/json') >= 0) {
                bodyPromise = res.json();
            } else {
                bodyPromise = res.text();
            }

            return bodyPromise.then((body) => {
                const response = {
                    status: res.status,
                    headers: res.headers.raw(),
                    body: body
                };
                return response
            });
        })
        .then(json => console.log(json));
    console.log('! + > + > + > + > + > + > !  : post -> lastResponse', lastResponse)

    return lastResponse;
}

// Get the last response that we received
function getLastResponse() {
    return lastResponse;
}

// Authenticate as the given user
function authenticate(user, pass) {
    const realUrl = buildUrl(baseUrl, {
        path: 'api/auth'
    });

    const headers = {
        authorization: 'Basic ' + new Buffer(user + ':' + pass).toString('base64')
    };

    return fetch(realUrl, { headers: headers })
        .then((res) => res.json())
        .then((body) => body['access_token'])
        .then((token) => {
            accessToken = token;
            return token;
        });
}

// Clear the authentication token stored
function clearAuthentication() {
    accessToken = null;
}

module.exports = {
    get: get,
    post: post,
    authenticate: authenticate,
    clearAuthentication: clearAuthentication,
    getLastResponse: getLastResponse
};
