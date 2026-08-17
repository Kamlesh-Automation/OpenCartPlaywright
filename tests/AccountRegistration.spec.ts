/** 
 * TestCase: Account Registration Tests 
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to Application URL
 * 2) Go to 'My Account' and click on 'Register'
 * 3) Fill the registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Verify the confirmation message
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestConfig } from '../test.config';
import { RandomDataUtils } from '../utils/randomDataGenerator';

let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {

    //Step:1 Navigate to Application URL
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
})

test.afterEach(async({page})=>{

    await page.waitForTimeout(3000);
    await page.close();
})

test('User Registration test @master @sanity @regression', async () => {

    //Step:2 Go to 'My Account' and click on 'Register'
    
    await homePage.clickOnMyAccount();
    await homePage.clickOnRegister();
    
    //Step:3 Fill the registration details with random data
    
    await registrationPage.enterFirstName(RandomDataUtils.getFirstName());
    await registrationPage.enterLastName(RandomDataUtils.getLastName());
    await registrationPage.enterEmail(RandomDataUtils.getEmail());
    await registrationPage.enterTelephone(RandomDataUtils.getTelephone());
    const password = RandomDataUtils.getPassword();
    await registrationPage.enterPassword(password);
    await registrationPage.enterConfirmPassword(password);
    await registrationPage.checkPrivacyPolicy();
    await registrationPage.clickContinueButton();
    
    //Validate the confirmation message
    const confirmationMessage = await registrationPage.getConfirmationMessage();
    expect(confirmationMessage).toBe('Your Account Has Been Created!');
})