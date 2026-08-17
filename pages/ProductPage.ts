import { Locator, Page } from '@playwright/test'
import { ShoppingCartPage } from './ShoppingCartPage';

export class ProductPage {

    private readonly page: Page;

    //Locator
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;
    private readonly lnkViewCart: Locator;

    //constructor

    constructor(page: Page) {
        this.page = page;
        this.txtQuantity = page.locator('input[name="quantity"]');
        this.btnAddToCart = page.locator('#button-cart');
        this.cnfMsg = page.locator('.alert.alert-success.alert-dismissible');
        this.btnItems = page.locator('#cart');
        this.lnkViewCart = page.locator('strong:has-text("View Cart")');
    }

    //Action Method

    async setQuantiy(qty: string) {
        await this.txtQuantity.fill('');
        await this.txtQuantity.fill(qty);
    }

    async addToCart() {
        await this.btnAddToCart.click();
    }

    async isConfirmationMessageVisible(): Promise<boolean> {
        try {
            if (this.cnfMsg != null) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            console.log(`Confirmation message not found: ${ error }`); 
            return false;
        }
    }

    async clickItemstoNavigatetoCart() {
        await this.btnItems.click();
    }

    async clickonViewCartButton() {
        await this.lnkViewCart.click();
        return new ShoppingCartPage(this.page);
    }


}