const { Given, When, Then } = require('cucumber')
const { URLSearchParams } = require('url')
const uuidv1 = require('uuid/v1');
const faker = require('faker')
const statusCode = require('http-status-codes')
const request = require('request')
const { expect } = require('chai')
let deviceId

Given('a valid admin user', async () => {
    return 1
});

Given('a valid integration', function () {
    const url = 'https://dev-ddp.vmaxlive.net/v2/integrations/testfleet20/VMAXLIVE'

    const postData = {
        params: [
            {
                name: 'fleet',
                value: 'testfleet20'
            },
            {
                name: 'application',
                value: 'VMAXLIVE'
            }
        ]
    }

    const options = {
        method: 'get',
        headers: {
            DDPAuthorization: "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NjAxMTg4MTMsImZsZWV0IjoidGVzdGZsZWV0MjAiLCJ1c2VySWQiOiJjcm9tZXJvIiwiYXBwbGljYXRpb24iOiJWTUFYTElWRSIsInNlcnZlciI6InNlcnZlcjEifQ.AFRoWJ36gIpLTVdwJX2ZsalL7oBUbP_H_Ozgm0wH6oZdEZFs7W_-uLXyufIUldcOpHCaoU4KHj8Oqbsu_t8Dsg"
        },
        url,
        body: postData,
        json: true
    };

    request(options, function (err, response, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }

        expect(response.statusCode).to.equal(statusCode.OK);
        expect(body).to.have.property('data');
        expect(body.errorCode).to.equal(null);
    })
});

Given('a valid vehicle', function () {

    return 1

});

Given('a valid device', function () {
    const number = faker.random.number(10000);

    const url = 'https://dev-ddp.vmaxlive.net:443/devices'

    const postData = {
        "deviceId": `Device${number}`,
        "remoteId": `Device${number}`,
        "source": "SEON"
    }

    vehicleId = postData.deviceId

    const options = {
        headers: {
            DDPAuthorization: "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NjAxMTg4MTMsImZsZWV0IjoidGVzdGZsZWV0MjAiLCJ1c2VySWQiOiJjcm9tZXJvIiwiYXBwbGljYXRpb24iOiJWTUFYTElWRSIsInNlcnZlciI6InNlcnZlcjEifQ.AFRoWJ36gIpLTVdwJX2ZsalL7oBUbP_H_Ozgm0wH6oZdEZFs7W_-uLXyufIUldcOpHCaoU4KHj8Oqbsu_t8Dsg",
        },
        method: 'post',
        body: postData,
        json: true,
        url: url
    };

    const responseBody = {
        "errorCode": "null", "data": "CREATE_DEVICE_SUCCESS"
    }

    request(options, function (err, response, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }

        const responseBody  = { errorCode: null, data: 'CREATE_DEVICE_SUCCESS' }

        expect(response.statusCode).to.equal(statusCode.OK);
        expect(JSON.stringify((body))).to.equal(JSON.stringify(responseBody));
    })
});

When('the device is associated to the vehicle', function () {
    const url = 'https://dev-ddp.vmaxlive.net:443/v2/accounts/testfleet20/SEON'

    const postData = {
    }

    const options = {
        method: 'get',
        headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMjkwQjVBMjM0NzBFOTcyNDRFNkIwMDkzQTVBMDU1MjdBODhCNzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aWtMV2lOSERwY2tUbXNBazZXZ1ZTZW9pM00ifQ.eyJuYmYiOjE1NzIwMzI1MzIsImV4cCI6MTU3MjAzNjEzMiwiaXNzIjoiaHR0cHM6Ly9kZXYtaWQuc2FmZWZsZWV0Y2xvdWQuY29tIiwiYXVkIjpbImh0dHBzOi8vZGV2LWlkLnNhZmVmbGVldGNsb3VkLmNvbS9yZXNvdXJjZXMiLCJkZHAtZW5kcG9pbnQtbWFuYWdlciJdLCJjbGllbnRfaWQiOiI3NzA1NzAyZC1lNmMxLTk1YjctNjg1MS04YjJhMzAwYmYwNTciLCJzY29wZSI6WyJkZHAtZW5kcG9pbnQtbWFuYWdlciJdfQ.M4k_MJpSmElHlfl0UENMvp7M0zJ6WC5wRclG-WNP8MzBjLMo4bMYaqY9AhmRJdk3XaFLe9lcPCXS8pKV1DCSDT5F1HgwLsg58UHKSaxw_Hm4ANPVjno0-G7kwC9gtiKq6jUazO6qDqw70vp2taLLOZ447s-29ua8CkdgIuyGUg_Jdbwjfi7CENW_GvWt3mpDnnPCOkfih8rOgq2oxTQQCMinhCEpyq5Sh1jj9rwZabLrgFaFCNC7cL0n5vv8mM0W9JnsnjbuK8Jtnl1_82V4DSuxQ8EOYa_iGlEz3JqkM6Oz8wfLdNFYIuDwFEOaJhcU36hR0wz4PoMu4dg8S1Kwbw",
        },
        url,
        body: postData,
        json: true
    };

    request(options, function (err, response, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }

        const responseBody = { "errorCode": null, "data": [{ "id": 2847, "name": "seon_account", "active": true }] }

        expect(response.statusCode).to.equal(statusCode.OK)
        expect(JSON.stringify((body))).to.equal(JSON.stringify(responseBody));

    })
});

Then('the asset collection should be created.', function () {
    const url = 'https://dev-ddp.vmaxlive.net:443/v2/assetcollections'
    const name = faker.name.findName();
    const notes = faker.lorem.lines(1)

    const postData = {
        device: {
            accountId: "2847",
            id: vehicleId
        },
        fleetId: "testfleet20",
        name,
        notes,
        uvId: uuidv1()
    }

    const options = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMjkwQjVBMjM0NzBFOTcyNDRFNkIwMDkzQTVBMDU1MjdBODhCNzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aWtMV2lOSERwY2tUbXNBazZXZ1ZTZW9pM00ifQ.eyJuYmYiOjE1NzIwMzI1MzIsImV4cCI6MTU3MjAzNjEzMiwiaXNzIjoiaHR0cHM6Ly9kZXYtaWQuc2FmZWZsZWV0Y2xvdWQuY29tIiwiYXVkIjpbImh0dHBzOi8vZGV2LWlkLnNhZmVmbGVldGNsb3VkLmNvbS9yZXNvdXJjZXMiLCJkZHAtZW5kcG9pbnQtbWFuYWdlciJdLCJjbGllbnRfaWQiOiI3NzA1NzAyZC1lNmMxLTk1YjctNjg1MS04YjJhMzAwYmYwNTciLCJzY29wZSI6WyJkZHAtZW5kcG9pbnQtbWFuYWdlciJdfQ.M4k_MJpSmElHlfl0UENMvp7M0zJ6WC5wRclG-WNP8MzBjLMo4bMYaqY9AhmRJdk3XaFLe9lcPCXS8pKV1DCSDT5F1HgwLsg58UHKSaxw_Hm4ANPVjno0-G7kwC9gtiKq6jUazO6qDqw70vp2taLLOZ447s-29ua8CkdgIuyGUg_Jdbwjfi7CENW_GvWt3mpDnnPCOkfih8rOgq2oxTQQCMinhCEpyq5Sh1jj9rwZabLrgFaFCNC7cL0n5vv8mM0W9JnsnjbuK8Jtnl1_82V4DSuxQ8EOYa_iGlEz3JqkM6Oz8wfLdNFYIuDwFEOaJhcU36hR0wz4PoMu4dg8S1Kwbw"
        },
        method: 'post',
        body: postData,
        json: true,
        url: url
    }

    request(options, function (err, response, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }

        const responseBody = { errorCode: null, data: 'ASSET_COLLECTION_CREATED' }

        expect(response.statusCode).to.equal(statusCode.CREATED)
        expect(JSON.stringify((body))).to.equal(JSON.stringify(responseBody));

    })
});