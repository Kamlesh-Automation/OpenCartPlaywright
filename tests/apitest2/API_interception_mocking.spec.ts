//demo.playwright.dev/api-mocking

//demo.playwright.dev/api-mocking/api/v1/fruits

import{test,expect} from "@playwright/test";

test("Mocking API response", async({page})=>{

    //Step 1: Intervept the API URL pattern before navigating
    await page.route("**/api/v1/fruits", async(route)=>{

        const fakeresjson=[
            { name: 'XYZ' , id: 1 },
            { name: 'ABC' , id: 2 }
        ];  
    //Step 2: Fulfil the request with your mock data
    await route.fulfill({
        status:200,
        contentType: 'application/json',
        body: JSON.stringify(fakeresjson)
     })
    })
   
    //Step 3: Go to the page and verify the UI displays the mocked data

    await page.goto("https://demo.playwright.dev/api-mocking");
    await expect(page.getByText('XYZ')).toBeVisible();
    await expect(page.getByText('ABC')).toBeVisible();
})

//Example 2: Modify API response

test("Modify API response", async({page})=>{

    await page.route("**/api/v1/fruits", async(route)=>{

    //Step 1: fetch the actual response from live server
    const response = await route.fetch();
    const json = await response.json();
  
    //Step 2: Append or patch the real data

    json.push({ name : 'XYZ' , id: 100 });
   
    //Step 3: fulfill the route eith modified data
    await route.fulfill({
        response,
        json
    });
    });

    await page.goto("https://demo.playwright.dev/api-mocking");
    await expect(page.getByText('XYZ')).toBeVisible();
});

//Example 3: Blocking Example


test('Block images using network interception', async ({ page }) => {

  // Block all image requests
  await page.route('**/*.{png,jpg,jpeg,gif,svg,webp}', async (route) => {
    console.log(route.request().url());
    await route.abort();
});
    await page.goto('https://demoblaze.com')
});