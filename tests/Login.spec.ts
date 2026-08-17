/** 
 * TestCase: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to Application URL
 * 2) Navigate to Login page vai Homepage
 * 3) Enter valid credentails and login
 * 4) Verify successful logn by checking 'My account' page presence
 */

import { test, expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;

test.beforeEach(async ({ page }) => {

    config = new TestConfig(); //Load config (URL,credentails)
    await page.goto(config.appUrl); //Navigate URL

    //Initializa page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
})

test('User Login test @master @sanity @regression', async () => {

    //Navigate to Login page vai Homepage
    await homePage.clickOnMyAccount();
    await homePage.clickOnLogin();
    
    //Enter Valid credentails and login
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //Verify successful login by checking 'My account' page presence
    const isLoggedIn = await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})

