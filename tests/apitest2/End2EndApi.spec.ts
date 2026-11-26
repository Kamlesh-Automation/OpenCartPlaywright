import {test,expect} from "@playwright/test";
import fs from fs;

//utility function to read json data from file

function readJson(filePath:string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'))
}

const BASE_URL= "https://restful-booker.herokuapp.com";

test("create Booking", async({request})=>{

   //Step-1 New booking

   const createBookingData = readJson("testdata/post_request_body.json");
   const response = await request.post(`${BASE_URL}/booking`,{data:createBookingData});
   const responseBody =  await response.json();
   const bookingid = responseBody.booking;


   //Get Booking https://restful-booker.herokuapp.com/booking/:id

   const getresponse = await request.get(`${BASE_URL}/booking/${bookingid}`);
   expect(getresponse.ok()).toBeTruthy();
   const getresponseBody = await getresponse.json();
   console.log("Booking request before update:",getresponseBody);

   //Create Token: https://restful-booker.herokuapp.com/auth

    const createTokenData = readJson("testdata/token_request_body.json");
    const createToken = await request.post(`${BASE_URL}/auth`,{data:createTokenData});






   // Update booking (PUT): https://restful-booker.herokuapp.com/booking/:id

   const createToken = request.post(`${BASE_URL}/booking/${bookingid}`)

})