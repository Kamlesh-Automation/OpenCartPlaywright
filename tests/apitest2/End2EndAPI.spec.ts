///<reference types="node" />
import { test, expect } from "@playwright/test";
import fs from "fs";

//utility function to read json data from file

function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

const BASE_URL = "https://restful-booker.herokuapp.com";

test("create Booking", async ({ request }) => {

    //Step-1 New booking

    const createBookingData = readJson(".\\OpenCartPlaywright\\testdata\\post_request_body.json");
    const response = await request.post(`${BASE_URL}/booking`, { data: createBookingData });
    const responseBody = await response.json();
    const bookingid = responseBody.bookingid;
    console.log("Booking ID:", bookingid);

    //Get Booking https://restful-booker.herokuapp.com/booking/:id

    const getresponse = await request.get(`${BASE_URL}/booking/${bookingid}`);
    expect(getresponse.status()).toBe(200);
    const getresponseBody = await getresponse.json();
    console.log("Booking request before update:", getresponseBody);

    //Create Token: https://restful-booker.herokuapp.com/auth

    const createTokenData = readJson(".\\OpenCartPlaywright\\testdata\\token_request_body.json");
    const createToken = await request.post(`${BASE_URL}/auth`, { data: createTokenData });
    const tokenResponse = await createToken.json();
    const token = tokenResponse.token;
    console.log("Token:", token);

    // Update booking (PUT): https://restful-booker.herokuapp.com/booking/:id

    const putRequest = readJson(".\\OpenCartPlaywright\\testdata\\put_request_body.json");
    const putResponse = await request.put(`${BASE_URL}/booking/${bookingid}`, {
        headers: {
            "Contain-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: putRequest
    });
    const putResponseBody = await putResponse.json();
    expect(putResponse.status()).toBe(200);
    console.log("After Hit Put Request", putResponseBody);

    // Partial Update booking (Patch): https://restful-booker.herokuapp.com/booking/:id

    const patchRequest = readJson(".\\OpenCartPlaywright\\testdata\\patch_request_body.json")
    const patchResponse = await request.patch(`${BASE_URL}/booking/${bookingid}`, {
        headers: {
            "Contain-Type": "application/json",
            "Cookie": `token=${token}`
        }, data: patchRequest
    });
    const patchResponseBody = await patchResponse.json();
    expect(patchResponse.status()).toBe(200);
    console.log("After Patch request", patchResponseBody);

    // Delete Booking: https://restful-booker.herokuapp.com/booking/1

    const deleteResponse = await request.delete(`${BASE_URL}/booking/${bookingid}`,
        {
            headers: { "Cookie": `token=${token}` },
        });

    expect(deleteResponse.status()).toBe(201);
    expect(await deleteResponse.text()).toBe('Created');
})