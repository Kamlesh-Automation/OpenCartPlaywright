import { Page,Locator,expect } from "@playwright/test";

export class LoginPage
{
    private readonly page:Page;
    //locator
    private readonly txtEmailAddress: Locator;
    private readonly textPassword: Locator;
    private readonly btnLogin:Locator;
    private readonly txtErrorMessage:Locator;
    
    //constructor

    constructor(page:Page)
    {
        this.page= page;
        this.txtEmailAddress = this.page.locator('#input-email');
        this.textPassword = this.page.locator('#input-password');
        this.btnLogin = this.page.locator('input[value="Login"]');
        this.txtErrorMessage = this.page.locator('.alert.alert-danger.alert-dismissible');
    }
    //Action method
    /** 
     * Set the email address in the email field
     * @param email - email address to enter
     */

    async setEmail(email:string)
    {
        await this.txtEmailAddress.fill(email);
    }

    async setPassword(pwd:string)
    {
        await this.textPassword.fill(pwd);
    }
    async clickLogin()
    {
        await this.btnLogin.click();
    }

    /**
     * Perform compete login action
     * @param email - email address to enter
     * @param password - password to enter
     */

    async login(email:string, password:string)
    {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async getLoginErrorMessage():Promise<null | string>
    {
        return (this.txtErrorMessage.textContent());
    }
}