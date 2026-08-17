import { Page, Locator } from '@playwright/test';
import { ProductPage } from './ProductPage';

export class SearchResultPage {

    private readonly page: Page;
    //Locators
    private readonly searchPageHeader: Locator;
    private readonly searchProduct: Locator;

    //Constructor

    constructor(page: Page) {
        this.page = page;

        //Initialize locator with CSS selecters
        this.searchPageHeader = this.page.locator('#content h1');
        this.searchProduct = this.page.locator('h4>a');
    }

    //Action Methods
    /** 
     * Verify if the search result page exist by checking the header text
     * @returns Prmises<boolean> - true if the search result page exist
     */

    async isSearchResultPageExists(): Promise<boolean> {
        try {
            const headerText = await this.searchPageHeader.textContent();
            return headerText?.includes('Search -') ?? false;
        } catch (error) {
            return false;
        }
    }

    /**
     * Check if a product exists in the search results by its name
     * @param productname - the name of the product to search for
     * @return Promise<boolean> - true if the product exists
     */
    /*async isProductExist(productName: string): Promise<boolean>
    {
       try{
           const count = await this.searchProduct.count();
           for(let i=0 ;i<count;i++)
           {
               const product = this.searchProduct.nth(i);
               const title = await product.textContent();
               if(title === productName)
               {
                   return true;
               }
           }
       }catch(error){
           console.log(`Error checking product existence: ${error}`);
       }
       throw false;
    }
    */
    //approch:2

    async isProductExist(productName: string): Promise<boolean> {
        const products = await this.searchProduct.allTextContents();
        return products.some(product => product.trim() === productName);
    }


    //approch:3
    /**
     * async isProductExist(productName: string): Promise<boolean> {
       return await this.searchProduct.filter({ hasText: productName }).count() > 0;
       }
     */

    /**
     * Select a product from search results by its name
     * @param productName = the nameof the product to select
     * @returns Promis<ProductPage> - productPage instance after selecing the product
     */
    async selectProduct(productName: string): Promise<ProductPage | null> {
        try {
            const count = await this.searchProduct.count();
            for (let i = 0; i < count; i++) {
                const product = this.searchProduct.nth(i);
                const title = await product.textContent();
                if (title === productName) {
                    await product.click();
                    return new ProductPage(this.page);
                }
            }
            console.log(`Product not found: ${productName}`);
        } catch (error) {
            console.log(`Error selecting product: ${error}`);
        }
        return null;
    }
    /* Alternate Method

    async selectProduct(productName: string): Promise<ProductPage | null> {
    const product = this.searchProduct.filter({ hasText: productName }).first();

    if (await product.count() > 0) {
        await product.click();
        return new ProductPage(this.page);
    }

    console.log(`Product not found: ${productName}`);
    return null;
}
    */

    /**
     * Get count of product in search results
     * @returns Promise<number> - number of products found
     */

    async getProductCount(): Promise<number> {
        return await this.searchProduct.count();
    }

}
