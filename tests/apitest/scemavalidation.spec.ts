/*
Prerequisite:
npm install --save-dev playwright ajv

AJV is used for json Schema validation
*/

import { test, expect } from "@playwright/test";
import AJV from 'ajv';

test('validate json schema', async ({ request }) => {

    const response = await request.get('https://mocktarget.apigee.net/json');
    const responseBody = await response.json();
    console.log(responseBody);

    //define the JSON schema
    const schema = {
        type: 'object',
        properties: {
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            city: { type: 'string' },
            state: { type: 'string' }
        },
        required: ['firstName', 'lastName', 'city', 'state'],
        additionalProperties: false,
    };
    const ajv = new AJV();
    const validate = ajv.compile(schema); //ajv.compile (schema) returns a validator function.
    const isvalid = validate(responseBody);  //validate(data) checks if the response matches the schema.
    expect(isvalid).toBeTruthy();
})