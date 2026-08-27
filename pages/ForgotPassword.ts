import { Locator, Page } from "playwright/test";

export class ForgotPassword
{
    //Locator
    private readonly page:Page;
    private readonly txtEmail:Locator;
    private readonly continueBtn:Locator;

    //constructor

    constructor(page:Page)
    {
        this.page=page;
        this.txtEmail = this.page.locator("#input-email");
        this.continueBtn = this.page.locator("[value='Continue']");
    }

    async enterEmailForReset(email:string)
    {
        await this.txtEmail.fill(email);
    }

    async clickonContinueBtn()
    {
        await this.continueBtn.click();
    }
}