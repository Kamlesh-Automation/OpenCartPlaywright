///<reference types="node" />
import{test,expect} from "@playwright/test";
import fs from 'fs';

test.describe.serial("File upload and download", ()=>{

    let uploadFile = '';

    test("Upload File", async({request})=>{

        const response = await request.post(
                'https://api.escuelajs.co/api/v1/files/upload',
                {
                    multipart: {
                        file: {
                                name:'Test1.txt',
                                mimeType: 'text/plain',
                                buffer: fs.readFileSync('./OpenCartPlaywright/uploads/Test1.txt'),
                        }
                    }
                })
                expect(response.status()).toBe(201);
                const responseBody = await response.json();
                expect(responseBody.originalname).toBe('Test1.txt');
                uploadFile = responseBody.filename;
                console.log("Uploaded Text File:",uploadFile);
    })

     test("Download File", async({request})=>{

        const response = await request.get(
                `https://api.escuelajs.co/api/v1/files/${uploadFile}`);
                expect(response.status()).toBe(200);
                const filecontent = await response.text();
                expect(filecontent).toContain('india');
               
    })
})
