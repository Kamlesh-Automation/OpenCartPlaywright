/*
1) creata new booking
2) getbooking
3) update booking
4) delete booking
*/

import { de } from "@faker-js/faker";
import { test, expect } from "@playwright/test";
import fs from 'fs';

function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

test('delete the booking', async ({ request }) => {

    const requestBody = readJson('testdata/post_request_body.json');

    //create booking
    const createBookingResponse = await request.post("/booking", { data: requestBody });
    const createBookingResponseBody = await createBookingResponse.json();
    expect(createBookingResponse.ok()).toBeTruthy();
    console.log(createBookingResponseBody);
    const bookingid = createBookingResponseBody.bookingid; //extract the booking id from response
    console.log("Booking Id:", bookingid);
    console.log("Booking created successfully..");

    //get booking

    const GetBookingResponse = await request.get(`/booking/${bookingid}`);
    expect(GetBookingResponse.ok()).toBeTruthy();
    const GetBookingResponseBody = await GetBookingResponse.json();
    console.log("Booking details is..");
    console.log(GetBookingResponseBody);

    //create token
    const tokenrequestBody = readJson('testdata/token_request_body.json');
    const tokenResponse = await request.post("/auth", { data: tokenrequestBody });
    expect(tokenResponse.ok()).toBeTruthy();
    const tokenResponseBody = await tokenResponse.json();
    const token = tokenResponseBody.token;
    console.log("Token Id:", tokenResponseBody);

    //update booking

    const UpdaterequestBody = await readJson('testdata/put_request_body.json');
    const UpdateResponse = await request.put(`/booking/${bookingid}`, {
        headers: { "Cookie": `token=${token}` },
        data: UpdaterequestBody
    });
    expect(UpdateResponse.ok()).toBeTruthy();

    const UpdateResponseBody = await UpdateResponse.json();
    console.log("Booking updated successfully..");
    console.log(UpdateResponseBody);

    //delete the booking

    const deleteResponse = await request.delete(`/booking/${bookingid}`, 
        {
            headers: { "Cookie": `token=${token}` },
        });

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe('Created');
    expect(await deleteResponse.text()).toBe('Created');
    
    console.log("Booking delete successfully..");
    

})