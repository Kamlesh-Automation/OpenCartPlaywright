/*
install AJV
Another json schema validator
*/

import { test, expect, request } from "@playwright/test";
import Ajv from "ajv";

test("Schema validation", async ({ request }) => {
    //step 1: send the request and get the response
    const respose = await request.post('https://mocktarget.apigee.net/json');
    const responseBody = await respose.json();
    console.log(responseBody);

    //step 2: define the schema

    const schema = {

        "type": "object",
        "additionalProperties": false,
        "properties": {
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "type": "string"
            }
        },
        "required": [
            "city",
            "firstName",
            "lastName",
            "state"
        ],
        "title": "Welcome9"
    }

    //step 3: check response against schema

    const ajv =new Ajv();
    const validate = ajv.compile(schema)  //returns a validator function
    const isValid = validate(responseBody)
    expect(isValid).toBeTruthy();
})

test.only("Validation of Json Schema", async({request})=>{

    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const responseBody = await response.json();
    console.log(responseBody);

    const schema={
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "userId": {
                    "type": "integer"
                },
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                }
            },
            "required": [
                "body",
                "id",
                "title",
                "userId"
            ],
            "title": "Welcome9"
        }

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const isValid = validate(responseBody);
        expect(isValid).toBeTruthy();
})