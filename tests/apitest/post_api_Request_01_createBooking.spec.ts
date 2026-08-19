/**
 * Test: Create booking
 * Request body: Post
 * Requeest body: static
 */

import { test, expect } from "@playwright/test";

test("Create Post request using static body", async ({ request }) => {

    //request body
    const requestBody = {
        firstname: "Sally",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2013-02-23",
            checkout: "2014-10-23"
        },
        additionalneeds: "Breakfast"
    }

    //send post request

    const response = await request.post("/booking", { data: requestBody });

    const responseBody = await response.json() //Extracted response

    console.log(responseBody);

    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attribute
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");

    //validate booking details
    const booking = responseBody.booking;

    expect(booking).toMatchObject({
        firstname: "Sally",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        additionalneeds: "Breakfast"
    })

    //validate booking dates (nested json)
    expect(booking.bookingdates).toMatchObject({
        checkin:"2013-02-23",
        checkout:"2014-10-23"
    });
})