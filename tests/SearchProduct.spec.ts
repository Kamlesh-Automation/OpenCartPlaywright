/**
 * TestCase: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the Application URL
 * 2) Enter the productname in search field
 * 3) Click on search button
 * 4) Veirfy if the product is displayed in the search results
 */

import{test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultPage } from '../pages/SearchResultPage';
import { TestConfig } from '../test.config';

//Declare reusable variables

let config:TestConfig;
let homePage:HomePage;
let searchResultPage:SearchResultPage;

//Playwright hook - runs before each test

test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl); //step:1 Navigate to the application.

    //Initialize page objects
    homePage = new HomePage(page);
    searchResultPage = new SearchResultPage(page);
});

//Playwright hook - runs after each test
test.afterEach(async({page})=>{
    await page.close();
});
test('Product Search test @master @regression',async({page})=>{
    const productName = config.productName;
    //step:2 & 3 Enter Product Name and click on search button
    await homePage.enterProductName(productName);
    await homePage.clickOnSearchButton();

    //Step:4 Verify that the search results page is displayed
    expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();

    //Step:5 Validate if the search product appear in results
    const isProductFound = await searchResultPage.isProductExist(productName);
    expect(isProductFound).toBeTruthy();
});
