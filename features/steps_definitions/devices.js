// const request = require('request');

// var url = 'https://dev-ddp.vmaxlive.net:443/devices'

// var postData = {
//     "deviceId": "DeviceId118",
//     "remoteId": "DeviceId118",
//     "source": "SEON"
// }

// var options = {
//     headers: {
//         DDPAuthorization: "xxxx",
//     },
//     method: 'post',
//     body: postData,
//     json: true,
//     url: url
// };

// const requestT = request(options, function (err, res, body) {
//     if (err) {
//         console.error('error posting json: ', err)
//         throw err
//     }
//     var headers = res.headers
//     var statusCode = res.statusCode
//     console.log('headers: ', headers)
//     console.log('statusCode: ', statusCode)
//     console.log('body: ', body)
// })

// console.log('! + > + > + > + > + > + > !  : request', requestT)