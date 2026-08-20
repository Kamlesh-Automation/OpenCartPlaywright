/*
Pre-requisites:
    data:json file
    create token 
1) Create Booking (Post)-->bookingId
2) Update Booking(Put) //required token 
*/

///<reference types='node' />
import { test, expect } from "@playwright/test";
import fs from 'fs';

//utility function returns json file data
function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

test('Partical Update Booking(Patch)', async ({ request }) => {

    //1) Create Booking (Post)-->bookingId

    const requestBody = readJson('testdata/post_request_body.json');
    const createResponse = await request.post('/booking', { data: requestBody });
    console.log("Status:", createResponse.status());
    console.log("Status Text:", createResponse.statusText());
    console.log("Response:", await createResponse.text());

    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();
    const bookingid = responseBody.bookingid; //extract the json request
    console.log(responseBody);
    console.log("Booking Id:", bookingid);

    //2) Partial Update booking (Patch) //require token

    const tokenrequestBody = readJson('testdata/token_request_body.json');
    const tokencreateResponse = await request.post('/auth', { data: tokenrequestBody });

    console.log("Token Request Status:", tokencreateResponse.status());
    console.log("Token Request Status Text:", tokencreateResponse.statusText());
    console.log("Token Request Response:", await tokencreateResponse.text());
    expect(tokencreateResponse.ok()).toBeTruthy();

    const tokenresponseBody = await tokencreateResponse.json();
    const token = tokenresponseBody.token;
    console.log("Token:", token);

    //sending update(Put)

    const patchRequestBody = readJson('testdata/patch_request_body.json');
    const partialupdatedResonse = await request.patch(`/booking/${bookingid}`, 
                            { headers: { "Cookie": `token=${token}` }, 
                            data:  patchRequestBody  });
    expect(partialupdatedResonse.ok()).toBeTruthy();
    console.log("Updated Request Status:", partialupdatedResonse.status());
    console.log("Updated Request Status Text:", partialupdatedResonse.statusText());
    console.log("Updated Request Response:", await partialupdatedResonse.text());

    const updatedResponseBody = await partialupdatedResonse.json();
    console.log(updatedResponseBody);
    console.log("Booking Details updated successfully");


})