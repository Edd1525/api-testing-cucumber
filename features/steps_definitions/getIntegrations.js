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

//     const url = 'https://dev-ddp.vmaxlive.net/v2/integrations/testfleet20/VMAXLIVE'

//     const postData = {
//         params: [
//             {
//                 name: 'fleet',
//                 value: 'testfleet20'
//             },
//             {
//                 name: 'application',
//                 value: 'VMAXLIVE'
//             }
//         ]
//     }



//     const options = {
//         method: 'get',
//         headers: {
//             DDPAuthorization: "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NjAxMTg4MTMsImZsZWV0IjoidGVzdGZsZWV0MjAiLCJ1c2VySWQiOiJjcm9tZXJvIiwiYXBwbGljYXRpb24iOiJWTUFYTElWRSIsInNlcnZlciI6InNlcnZlcjEifQ.AFRoWJ36gIpLTVdwJX2ZsalL7oBUbP_H_Ozgm0wH6oZdEZFs7W_-uLXyufIUldcOpHCaoU4KHj8Oqbsu_t8Dsg"
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