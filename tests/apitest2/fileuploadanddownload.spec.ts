///<reference types="node" />
import{test,expect} from "@playwright/test";
import fs from 'fs';

test.describe.serial("PNG file upload-download", ()=>{

    let uploadFileName = '';

    test("Upload Image/Document File", async({request})=>{

        const response = await request.post("https://api.escuelajs.co/api/v1/files/upload",
                                            {
                                                multipart:{
                                                    file:{
                                                        name:'images.jpg',
                                                        mimeType:'image/jpg',
                                                        buffer: fs.readFileSync('./OpenCartPlaywright/uploads/images.jpg')
                                                    }
                                                }
                                            }
        );

        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.originalname).toBe('images.jpg');
        uploadFileName = responseBody.filename;
        console.log(uploadFileName);
    });

     test("Download Image/Document File", async({request})=>{

        const response = await request.get(`https://api.escuelajs.co/api/v1/files/${uploadFileName}`);

        expect(response.status()).toBe(200);

    })
})