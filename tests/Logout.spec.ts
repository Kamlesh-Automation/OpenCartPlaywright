/**
 * TestCase: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the Application
 * 2) Go to Login page from Home page
 * 3) Login with valid credentails
 * 4) Verify 'My Account' Page
 * 5) Click on logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to HomePage
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { TestConfig } from '../test.config.ts';

//declare shared variables
let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;

//setup before each test
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    //initilize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    //logoutPage = new LogoutPage(page);
})

//optional cleaup after each test
test.afterEach(async ({ page }) => {
    await page.close();
})

test("User logout test @master @regression", async ({ page }) => {
    //step:2 Navigate to Login Page 
    await homePage.clickOnMyAccount();
    await homePage.clickOnLogin();
    
    //step:3 Perform Login using valid credentials
    await loginPage.login(config.email, config.password);
    
    //step:4 verify Login Successful
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy;
    
    //step:5 Click Logout, which return LogoutPage instance
    logoutPage = await myAccountPage.clickLogout();
    
    //step:6 Verify "Continue" button is visible before clicking
    expect(await logoutPage.isContinueButtonVisible()).toBeTruthy();
    
    //step:7 click continue button and verify redirection to homepage
    homePage = await logoutPage.clickContinue();
    expect(await homePage.isHomePageExists()).toBe(true);
});