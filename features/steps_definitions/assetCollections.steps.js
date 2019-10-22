const { Given, When, Then } = require('cucumber');
const requester = require('./requester');

Given('a valid admin user', async () => {

    const body = {
        "client_id": "7705702d-e6c1-95b7-6851-8b2a300bf057",
        "client_secret": "322eaf21-4cab-b27f-f13a-67690b565a8b",
        "grant_type": "client_credentials"
    }

    console.log('Entre al Given')
    const responseToken = await requester.post('/connect/token', body)
    const responseIntegrations = await requester.get('/v2/integrations', { qs: { fleet: 'testfleet20', application: 'SEON' } })
    console.log('! + > + > + > + > + > + > !  : responseIntegrations', responseIntegrations)

    const deviceBody = {
        "deviceId": "{{deviceId}}",
        "remoteId": "{{deviceId}}",
        "source": "{{source}}"
    }

    // set DDPAuthorization Bearer
    await requester.post('/devices', deviceBody)

    // set DDPAuthorization Bearer
    await requester.get('/v2/accounts/:fleet/:sourceType')

    const bodyAssetCollections = {
        "device": {
            "accountId": "{{accountId}}",
            "id": "{{deviceId}}"
        },
        "fleetId": "{{fleet}}",
        "name": "{{$randomFirstName}}",
        "notes": "{{$randomPhrase}}",
        "uvId": "{{$randomUUID}}"
    }

    await requester.post('/v2/assetcollections', bodyAssetCollections)
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