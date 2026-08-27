import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ForgotPassword } from '../pages/ForgotPassword';
import { TestConfig } from '../test.config';


let config:TestConfig;
let homePage:HomePage;
let loginPage:LoginPage;
let forgotPassword:ForgotPassword;

test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl); //Navigate

    //Initialize
     homePage = new HomePage(page);
     loginPage = new LoginPage(page);
     forgotPassword = new ForgotPassword(page);

});

test.afterEach(async({page})=>{

    await page.close();
});

test('forgot password @forgotpassword', async({page})=>{

        await homePage.clickOnMyAccount();
        await homePage.clickOnLogin();
        await loginPage.clickOnForgotLink();
        await forgotPassword.enterEmailForReset(config.email);
        await forgotPassword.clickonContinueBtn();
        const resetMail = await loginPage.resetConfirmationLink();
        expect(resetMail).toBeTruthy();

})