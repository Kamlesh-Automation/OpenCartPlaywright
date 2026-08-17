/**
 * Test Case: Add Product to cart
 * 
 * Tags: @master @regression
 * 
 * Steps: 
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search result
 * 5. select product
 * 6. set quantiy
 * 7. Add the product to the cart
 * 8. Verify the success message
 */

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config.ts';
import { HomePage } from '../pages/HomePage'
import { SearchResultPage } from '../pages/SearchResultPage';
import { ProductPage } from '../pages/ProductPage';

//shared instances

let config: TestConfig;
let homePage: HomePage;
let searchResultPage: SearchResultPage;
let productPage: ProductPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    homePage = new HomePage(page);
    searchResultPage = new SearchResultPage(page);
    productPage = new ProductPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('Add to cart Product', async ({ page }) => {

    //Step:2 Enter an existing product name in the search box
    await homePage.enterProductName(config.productName);

    //Step:3 Click the search button
    await homePage.clickOnSearchButton();

    //Step:4 search result page is display
    expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();

    //Step:5 Verify the product exist in the search result
    const productName = config.productName;
    expect(await searchResultPage.isProductExist(productName)).toBeTruthy();

    //Step:6-7-8 select product ->. set quantity -> Add to cart -> Verify confirmation
    if (await searchResultPage.isProductExist(productName)) 
    {
        await searchResultPage.selectProduct(productName);
        await productPage.setQuantiy(config.productQuantity);
        await productPage.addToCart();
    
    //Step:8 Assert success message is visible
    expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
}
})
