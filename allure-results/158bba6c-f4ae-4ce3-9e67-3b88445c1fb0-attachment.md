# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User Login test
- Location: tests/Login.spec.ts:39:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /** 
  2  |  * TestCase: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to Application URL
  8  |  * 2) Navigate to Login page vai Homepage
  9  |  * 3) Enter valid credentails and login
  10 |  * 4) Verify successful logn by checking 'My account' page presence
  11 |  */
  12 | 
  13 | import { test, expect } from "@playwright/test";
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from "../pages/LoginPage";
  16 | import { MyAccountPage } from "../pages/MyAccountPage";
  17 | import { TestConfig } from "../test.config";
  18 | 
  19 | let config: TestConfig;
  20 | let homePage: HomePage;
  21 | let loginPage: LoginPage;
  22 | let myAccountPage: MyAccountPage;
  23 | 
  24 | test.beforeEach(async ({ page }) => {
  25 | 
  26 |     config = new TestConfig(); //Load config (URL,credentails)
  27 |     await page.goto(config.appUrl); //Navigate URL
  28 | 
  29 |     //Initializa page objects
  30 |     homePage = new HomePage(page);
  31 |     loginPage = new LoginPage(page);
  32 |     myAccountPage = new MyAccountPage(page);
  33 | });
  34 | 
  35 | test.afterEach(async ({ page }) => {
  36 |     await page.close();
  37 | })
  38 | 
  39 | test('User Login test', async () => {
  40 | 
  41 |     //Navigate to Login page vai Homepage
  42 |     await homePage.clickOnMyAccount();
  43 |     await homePage.clickOnLogin();
  44 |     
  45 |     //Enter Valid credentails and login
  46 |     await loginPage.login(config.email,config.password);
  47 | 
  48 |     //Verify successful logn by checking 'My account' page presence
  49 |     const isLoggedIn = await myAccountPage.isMyAccountPageExists();
> 50 |     expect(isLoggedIn).toBeTruthy();
     |                        ^ Error: expect(received).toBeTruthy()
  51 | })
  52 | 
  53 | 
```