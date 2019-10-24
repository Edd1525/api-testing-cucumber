// const { Given, When, Then } = require('cucumber');
// const { URLSearchParams } = require('url');
// const request = require('request');

// Given('a valid admin user', async () => {

//     //  const body = { a: 1 };

//     // const body = {
//     //     "client_id": "7705702d-e6c1-95b7-6851-8b2a300bf057",
//     //     "client_secret": "322eaf21-4cab-b27f-f13a-67690b565a8b",
//     //     "grant_type":"client_credentials"
//     // }

//     // const responseRequest = request.get({
//     //     url: 'https://dev-id.safefleetcloud.com/connect/token',
//     //     body: {
//     //         "client_id": "7705702d-e6c1-95b7-6851-8b2a300bf057",
//     //         "client_secret": "322eaf21-4cab-b27f-f13a-67690b565a8b",
//     //         "grant_type": "client_credentials"
//     //     }
//     // });

//     // var request = require('request')

//     const url = 'https://dev-ddp.vmaxlive.net:443/v2/accounts/testfleet20/SEON'

//     const postData = {
//     }

//     const options = {
//         method: 'get',
//         headers: {
//             Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMjkwQjVBMjM0NzBFOTcyNDRFNkIwMDkzQTVBMDU1MjdBODhCNzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aWtMV2lOSERwY2tUbXNBazZXZ1ZTZW9pM00ifQ.eyJuYmYiOjE1NzE4NjA4NDUsImV4cCI6MTU3MTg2NDQ0NSwiaXNzIjoiaHR0cHM6Ly9kZXYtaWQuc2FmZWZsZWV0Y2xvdWQuY29tIiwiYXVkIjpbImh0dHBzOi8vZGV2LWlkLnNhZmVmbGVldGNsb3VkLmNvbS9yZXNvdXJjZXMiLCJkZHAtZW5kcG9pbnQtbWFuYWdlciJdLCJjbGllbnRfaWQiOiI3NzA1NzAyZC1lNmMxLTk1YjctNjg1MS04YjJhMzAwYmYwNTciLCJzY29wZSI6WyJkZHAtZW5kcG9pbnQtbWFuYWdlciJdfQ.E08XYKF9tvi4K-jqebUZVsufxryw2IYu5mtwIkp6N450zsVb-j0tZYCFBsLdeAUAZrbkyzqFCTSjGVKvo6sgxqYTQNHQE3NT5XSl5I9VF_XoDpBW5R0Q1QZk4TOVJjA8cP830ULZRd5Ng18t5hu5846Dd7UWzViKG7j9N5iue2MkoxTUChBdkatXyDbYJFWKKpdlBMUW6pWSZeNZ62fpNbWxbipZcRkEhnXpZqv9XBVgrvTjtE09iaa1vOQBTTU0vdo3QJ-k0goWgIutbd1a2evJeEXoLsUU-ldTr2eNp3Lc_etO3eo17WQjLsshcCYVboNk6jA2kcOX7h7sIrt2Rw",
//         },
//         // port: 443,
//         url,
//         body: postData,
//         json: true
//     };

//     const requestT = request(options, function (err, res, body) {
//         if (err) {
//             console.error('error posting json: ', err)
//             throw err
//         }
//         var headers = res.headers
//         var statusCode = res.statusCode
//         console.log('headers: ', headers)
//         console.log('statusCode: ', statusCode)
//         console.log('body: ', body)
//     })

//     console.log('! + > + > + > + > + > + > !  : request', requestT)

//     // const requestT = request(options, function (err, res, body) {
//     //     if (err) {
//     //         console.error('error posting json: ', err)
//     //         throw err
//     //     }
//     //     var headers = res.headers
//     //     var statusCode = res.statusCode
//     //     console.log('headers: ', headers)
//     //     console.log('statusCode: ', statusCode)
//     //     console.log('body: ', body)
//     // })



// });

// Given('a valid integration', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 1;
// });

// Given('a valid vehicle', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 1;
// });

// Given('a valid device', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 1;
// });

// When('the device is associated to the vehicle', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 1;
// });

// Then('the asset collection should be created.', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 1;
// });