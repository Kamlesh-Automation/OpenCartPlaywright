import { Page, expect, Locator } from "@playwright/test";

export class HomePage {

    //locators
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator("span:has-text('My Account')");
        this.lnkRegister = page.locator("a:has-text('Register')");
        this.lnkLogin = page.locator("a:has-text('Login')");
        this.txtSearchbox = page.locator("input[placeholder='Search']");
        this.btnSearch = page.locator("#search button[type='button']");
    }

    //Action methods

    //check if HomePage is loaded
    async isHomePageExists() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;

        //await expect(this.lnkMyAccount).toBeVisible();
    }

    async clickOnMyAccount() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.error(`Error occurred while clicking on My Account link:", ${error}`);
            throw error;
        }
    }

    async clickOnRegister() {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.error(`Error occurred while clicking on Register link:", ${error}`);
            throw error;
        }
    }
    async clickOnLogin() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error(`Error occurred while clicking on Login link:", ${error}`);
            throw error;
        }
    }

    async enterProductName(productName: string) {
        try {
            await this.txtSearchbox.fill(productName);
        } catch (error) {
            console.error(`Error occurred while entering product name in search box:", ${error}`);
            throw error;
        }
    }

    async clickOnSearchButton() {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.error(`Error occurred while clicking on Search button:", ${error}`);
            throw error;
        }
    }
}
