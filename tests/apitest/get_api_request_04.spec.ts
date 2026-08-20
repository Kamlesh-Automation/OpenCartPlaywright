import { test, expect } from "@playwright/test";


test('Get Booking details by Id-Path param', async ({ request }) => {

    const bookingId = 241;
    //Sending get request alson with path parameter
    const response = await request.get(`/booking/${bookingId}`);

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Get Booking details by Name-query params', async ({ request }) => {

    const firstname = 'Sally';
    const lastname = 'Brown';

    //Sending get request alson with path parameter
    const response = await request.get("/booking/", {
        params:
        {
            firstname,
            lastname
        }
    });

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check resopnse should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
    }
})

test.only('Get Booking details by Dates-query params', async ({ request }) => {

    const checkin = '2020-09-26';
    const checkout = '2024-02-02';

    //Sending get request alson with path parameter
    const response = await request.get("/booking/", {
        params:
        {
            checkin,
            checkout
        }
    });

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check resopnse should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
    }
})