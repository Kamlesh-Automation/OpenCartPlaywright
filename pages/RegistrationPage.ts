import { Page, Locator, expect } from "@playwright/test";
export class RegistrationPage {

    //Step:1 locators using css selectors
    private readonly page: Page;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgSuccess: Locator;

    //Step:2 constructor to initialize locators
    constructor(page: Page) {
        this.page = page;
        //Initialize locators
        this.txtFirstName = page.locator("#input-firstname");
        this.txtLastName = page.locator("#input-lastname");
        this.txtEmail = page.locator("#input-email");
        this.txtTelephone = page.locator("#input-telephone");
        this.txtPassword = page.locator("#input-password");
        this.txtConfirmPassword = page.locator("#input-confirm");
        this.chkPrivacyPolicy = page.locator("input[name='agree']");
        this.btnContinue = page.locator("input[value='Continue']");
        this.msgSuccess = page.locator("h1:has-text('Your Account Has Been Created!')");
    }

    //Step:3 Action methods

    /**
     * Sets the first name in the registration form. 
     * @param firstName 
     */
    async enterFirstName(firstName: string): Promise<void> {
        await this.txtFirstName.fill(firstName);
    }
    
    /**
     * Sets the last name in the registration form. 
     * @param lastName 
     */
    
    async enterLastName(lastName: string): Promise<void> {
        await this.txtLastName.fill(lastName);
    }

    /**
     * Sets the email in the registration form. 
     * @param email 
     */
    async enterEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    /**
     * Sets the telephone in the registration form. 
     * @param telephone 
     */
    async enterTelephone(telephone: string): Promise<void> {
        await this.txtTelephone.fill(telephone);
    }

    /**
     * Sets the password in the registration form. 
     * @param password 
     */
    async enterPassword(password: string): Promise<void> {
        await this.txtPassword.fill(password);
    }

    /**
     * Sets the confirm password in the registration form. 
     * @param confirmPassword 
     */
    async enterConfirmPassword(confirmPassword: string): Promise<void> {
        await this.txtConfirmPassword.fill(confirmPassword);
    }

    /**
     * Checks the privacy policy checkbox. 
     */
    async checkPrivacyPolicy(): Promise<void> {
        await this.chkPrivacyPolicy.check();
    }

    /**
     * Clicks the continue button. 
     */
    async clickContinueButton(): Promise<void> {
        await this.btnContinue.click();
    }

    /**
     * Checks if the success message is displayed. 
     */
    async getConfirmationMessage(): Promise<string> {
        return await this.msgSuccess.textContent() ?? '';
    }

    /**
     * Fills the registration form with provided details and submits it. 
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param telephone 
     * @param password 
     * @param confirmPassword 
     */
    async registerUser(firstName: string, lastName: string, email: string, telephone: string, password: string, confirmPassword: string): Promise<void> {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterTelephone(telephone);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
        await this.checkPrivacyPolicy();
        await this.clickContinueButton();
    }

}