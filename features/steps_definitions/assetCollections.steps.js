const { Given, When, Then } = require('cucumber');
const { URLSearchParams } = require('url');
const request = require('request');

Given('a valid admin user', async () => {

    //  const body = { a: 1 };

    // const body = {
    //     "client_id": "7705702d-e6c1-95b7-6851-8b2a300bf057",
    //     "client_secret": "322eaf21-4cab-b27f-f13a-67690b565a8b",
    //     "grant_type":"client_credentials"
    // }

    // const responseRequest = request.get({
    //     url: 'https://dev-id.safefleetcloud.com/connect/token',
    //     body: {
    //         "client_id": "7705702d-e6c1-95b7-6851-8b2a300bf057",
    //         "client_secret": "322eaf21-4cab-b27f-f13a-67690b565a8b",
    //         "grant_type": "client_credentials"
    //     }
    // });

    // var request = require('request')

    var url = 'https://dev-ddp.vmaxlive.net:443/v2/assetcollections'

    var postData = {
        device: {
            accountId: "2847",
            id: "DeviceId697"
        },
        fleetId: "testfleet20",
        name: "Hellen",
        notes: "Use the redundant JBOD pixel, then you can synthesize the multi-byte matrix!",
        uvId: "735f4f3b-4051-460e-bc3a-1fbc95fba7d0"
    }

    var options = {
        headers: {
            Authorization: "Bearer xxxx"
        },
        method: 'post',
        body: postData,
        json: true,
        url: url
    };

    const requestT = request(options, function (err, res, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }
        var headers = res.headers
        var statusCode = res.statusCode
        console.log('headers: ', headers)
        console.log('statusCode: ', statusCode)
        console.log('body: ', body)
    })

    console.log('! + > + > + > + > + > + > !  : request', requestT)

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



});

Given('a valid integration', function () {
    // Write code here that turns the phrase above into concrete actions
    return 1;
});

Given('a valid vehicle', function () {
    // Write code here that turns the phrase above into concrete actions
    return 1;
});

Given('a valid device', function () {
    // Write code here that turns the phrase above into concrete actions
    return 1;
});

When('the device is associated to the vehicle', function () {
    // Write code here that turns the phrase above into concrete actions
    return 1;
});

Then('the asset collection should be created.', function () {
    // Write code here that turns the phrase above into concrete actions
    return 1;
});