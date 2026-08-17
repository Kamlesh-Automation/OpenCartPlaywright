# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Add to cart Product
- Location: tests/AddToCart.spec.ts:43:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Add Product to cart
  3  |  * 
  4  |  * Tags: @master @regression
  5  |  * 
  6  |  * Steps: 
  7  |  * 1. Navigate to application URL
  8  |  * 2. Enter an existing product name in the search box
  9  |  * 3. Click the search button
  10 |  * 4. Verify the product appears in the search result
  11 |  * 5. select product
  12 |  * 6. set quantiy
  13 |  * 7. Add the product to the cart
  14 |  * 8. Verify the success message
  15 |  */
  16 | 
  17 | import { test, expect } from '@playwright/test';
  18 | import { TestConfig } from '../test.config.ts';
  19 | import { HomePage } from '../pages/HomePage'
  20 | import { SearchResultPage } from '../pages/SearchResultPage';
  21 | import { ProductPage } from '../pages/ProductPage';
  22 | 
  23 | //shared instances
  24 | 
  25 | let config: TestConfig;
  26 | let homePage: HomePage;
  27 | let searchResultPage: SearchResultPage;
  28 | let productPage: ProductPage;
  29 | 
  30 | test.beforeEach(async ({ page }) => {
  31 |     config = new TestConfig();
  32 |     await page.goto(config.appUrl);
  33 | 
  34 |     homePage = new HomePage(page);
  35 |     searchResultPage = new SearchResultPage(page);
  36 |     productPage = new ProductPage(page);
  37 | });
  38 | 
  39 | test.afterEach(async ({ page }) => {
  40 |     await page.close();
  41 | });
  42 | 
  43 | test('Add to cart Product', async ({ page }) => {
  44 | 
  45 |     //Step:2 Enter an existing product name in the search box
  46 |     await homePage.enterProductName(config.productName);
  47 | 
  48 |     //Step:3 Click the search button
  49 |     await homePage.clickOnSearchButton();
  50 | 
  51 |     //Step:4 search result page is display
  52 |     expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();
  53 | 
  54 |     //Step:5 Verify the product exist in the search result
  55 |     const productName = config.productName;
  56 |     expect(await searchResultPage.isProductExist(productName)).toBeTruthy();
  57 | 
  58 |     //Step:6-7-8 select product ->. set quantity -> Add to cart -> Verify confirmation
  59 |     if (await searchResultPage.isProductExist(productName)) 
  60 |     {
  61 |         await searchResultPage.selectProduct(productName);
  62 |         await productPage.setQuantiy(config.productQuantity);
  63 |         await productPage.addToCart();
  64 |     
  65 |     //Step:8 Assert success message is visible
> 66 |     expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
     |                                                              ^ Error: expect(received).toBeTruthy()
  67 | }
  68 | })
  69 | 
```