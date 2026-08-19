# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndTest.Spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests/EndtoEndTest.Spec.ts:30:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - navigation [ref=f7e2]:
    - generic [ref=f7e3]:
      - button "$ Currency " [ref=f7e7] [cursor=pointer]:
        - strong [ref=f7e8]: $
        - text: Currency
        - generic [ref=f7e9]: 
      - list [ref=f7e11]:
        - listitem [ref=f7e12]:
          - link "" [ref=f7e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f7e15]:
          - link " My Account" [ref=f7e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=f7e17]: 
            - text: My Account
        - listitem [ref=f7e19]:
          - link " Wish List (0)" [ref=f7e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=f7e21]: 
            - text: Wish List (0)
        - listitem [ref=f7e22]:
          - link " Shopping Cart" [ref=f7e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=f7e24]: 
            - text: Shopping Cart
        - listitem [ref=f7e25]:
          - link " Checkout" [ref=f7e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=f7e27]: 
            - text: Checkout
  - banner [ref=f7e28]:
    - generic [ref=f7e30]:
      - heading [level=1] [ref=f7e33]:
        - link "Qafox.com" [ref=f7e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=f7e36]:
        - textbox "Search" [ref=f7e37]
        - button "" [ref=f7e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f7e43] [cursor=pointer]:
        - generic [ref=f7e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f7e46]:
    - generic: 
    - list [ref=f7e48]:
      - listitem [ref=f7e49]:
        - link "Desktops" [ref=f7e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=f7e51]:
        - link "Laptops & Notebooks" [ref=f7e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=f7e53]:
        - link "Components" [ref=f7e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=f7e55]:
        - link "Tablets" [ref=f7e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=f7e57]:
        - link "Software" [ref=f7e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=f7e59]:
        - link "Phones & PDAs" [ref=f7e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=f7e61]:
        - link "Cameras" [ref=f7e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=f7e63]:
        - link "MP3 Players" [ref=f7e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=f7e65]:
    - list [ref=f7e66]:
      - listitem [ref=f7e67]:
        - link "" [ref=f7e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - listitem [ref=f7e70]:
        - link "Account" [ref=f7e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=f7e72]:
        - link "Login" [ref=f7e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/login
    - generic [ref=f7e74]:
      - generic [ref=f7e75]: 
      - text: "Warning: No match for E-Mail Address and/or Password."
    - generic [ref=f7e76]:
      - generic [ref=f7e78]:
        - generic [ref=f7e80]:
          - heading "New Customer" [level=2] [ref=f7e81]
          - paragraph [ref=f7e82]:
            - strong [ref=f7e83]: Register Account
          - paragraph [ref=f7e84]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          - link "Continue" [ref=f7e85] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
        - generic [ref=f7e87]:
          - heading "Returning Customer" [level=2] [ref=f7e88]
          - paragraph [ref=f7e89]:
            - strong [ref=f7e90]: I am a returning customer
          - generic [ref=f7e91]:
            - generic [ref=f7e92]:
              - generic [ref=f7e93]: E-Mail Address
              - textbox "E-Mail Address" [ref=f7e94]: Verner5@gmail.com
            - generic [ref=f7e95]:
              - generic [ref=f7e96]: Password
              - textbox "Password" [ref=f7e97]: test123
              - link "Forgotten Password" [ref=f7e98] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
            - button "Login" [ref=f7e99] [cursor=pointer]
      - complementary [ref=f7e100]:
        - generic [ref=f7e101]:
          - link "Login" [ref=f7e102] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=f7e103] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=f7e104] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=f7e105] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=f7e106] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=f7e107] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=f7e108] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=f7e109] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=f7e110] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=f7e111] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=f7e112] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=f7e113] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=f7e114] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=f7e115]:
    - generic [ref=f7e116]:
      - generic [ref=f7e117]:
        - generic [ref=f7e118]:
          - heading "Information" [level=5] [ref=f7e119]
          - list [ref=f7e120]:
            - listitem [ref=f7e121]:
              - link "About Us" [ref=f7e122] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=f7e123]:
              - link "Delivery Information" [ref=f7e124] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=f7e125]:
              - link "Privacy Policy" [ref=f7e126] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=f7e127]:
              - link "Terms & Conditions" [ref=f7e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=f7e129]:
          - heading "Customer Service" [level=5] [ref=f7e130]
          - list [ref=f7e131]:
            - listitem [ref=f7e132]:
              - link "Contact Us" [ref=f7e133] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=f7e134]:
              - link "Returns" [ref=f7e135] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=f7e136]:
              - link "Site Map" [ref=f7e137] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=f7e138]:
          - heading "Extras" [level=5] [ref=f7e139]
          - list [ref=f7e140]:
            - listitem [ref=f7e141]:
              - link "Brands" [ref=f7e142] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=f7e143]:
              - link "Gift Certificates" [ref=f7e144] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=f7e145]:
              - link "Affiliate" [ref=f7e146] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=f7e147]:
              - link "Specials" [ref=f7e148] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=f7e149]:
          - heading "My Account" [level=5] [ref=f7e150]
          - list [ref=f7e151]:
            - listitem [ref=f7e152]:
              - link "My Account" [ref=f7e153] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=f7e154]:
              - link "Order History" [ref=f7e155] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=f7e156]:
              - link "Wish List" [ref=f7e157] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=f7e158]:
              - link "Newsletter" [ref=f7e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=f7e160]
      - paragraph [ref=f7e161]:
        - text: Powered By
        - link "OpenCart" [ref=f7e162] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  19  | import { RandomDataUtils } from '../utils/randomDataGenerator';
  20  | import { TestConfig } from '../test.config';
  21  | import { LogoutPage } from '../pages/LogoutPage';
  22  | import { LoginPage } from '../pages/LoginPage';
  23  | import { MyAccountPage } from '../pages/MyAccountPage';
  24  | import { SearchResultPage } from '../pages/SearchResultPage';
  25  | import { ProductPage } from '../pages/ProductPage';
  26  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  27  | import { CheckoutPage } from '../pages/CheckoutPage';
  28  | 
  29  | // This is the main test block that runs the entire flow
  30  | test('execute end-to-end test flow @end-to-end', async ({ page }) => {
  31  |     const config = new TestConfig();
  32  | 
  33  |     // Navigate to the application's home page
  34  |     await page.goto(config.appUrl);
  35  | 
  36  |     // Step 1: Register a new account and capture the generated email
  37  |     let registeredEmail: string = await performRegistration(page);
  38  |     console.log("✅ Registration is completed!");
  39  | 
  40  |     // Step 2: Logout after successful registration
  41  |     await performLogout(page);
  42  |     console.log("✅ Logout is completed!");
  43  | 
  44  |     // Step 3: Login with the registered email
  45  |     await performLogin(page, registeredEmail);
  46  |     console.log("✅ Login is completed!");
  47  | 
  48  |     // Step 4: Search for a product and add it to the cart
  49  |     await addProductToCart(page);
  50  |     console.log("✅ Product added to cart!");
  51  | 
  52  |     // Step 5: Verify the contents of the shopping cart
  53  |     await verifyShoppingCart(page);
  54  |     console.log("✅ Shopping cart verification completed!");
  55  | 
  56  |     // Step 6: Perform checkout (skipped for demo site)
  57  |     // await performCheckout(page);
  58  | });
  59  | 
  60  | 
  61  | // Function to register a new user account
  62  | async function performRegistration(page: Page): Promise<string> {
  63  |     const homePage = new HomePage(page);
  64  |     await homePage.clickOnMyAccount();       // Click "My Account" link
  65  |     await homePage.clickOnRegister();        // Click "Register" option
  66  | 
  67  |     const registrationPage = new RegistrationPage(page);
  68  | 
  69  |     // Fill in random user details
  70  |     await registrationPage.enterFirstName(RandomDataUtils.getFirstName());
  71  |     await registrationPage.enterLastName(RandomDataUtils.getLastName());
  72  | 
  73  |     let email: string = RandomDataUtils.getEmail();
  74  |     await registrationPage.enterEmail(RandomDataUtils.getEmail());
  75  |     await registrationPage.enterTelephone(RandomDataUtils.getTelephone());
  76  |     const password = RandomDataUtils.getPassword();
  77  |     await registrationPage.enterPassword(password);
  78  |     await registrationPage.enterConfirmPassword(password);
  79  | 
  80  |     await registrationPage.checkPrivacyPolicy();  // Accept the privacy policy
  81  |     await registrationPage.clickContinueButton();     // Submit the registration form
  82  | 
  83  |     // Validate that the registration was successful
  84  |     const confirmationMsg = await registrationPage.getConfirmationMessage();
  85  |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  86  | 
  87  |     return email; // Return the email for later use in login
  88  | }
  89  | 
  90  | 
  91  | // Function to log out the current user
  92  | async function performLogout(page: Page) {
  93  |     const myAccountPage = new MyAccountPage(page);
  94  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  95  | 
  96  |     // Ensure the "Continue" button is visible
  97  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  98  | 
  99  |     // Click "Continue" and verify redirection to HomePage
  100 |     const homePage = await logoutPage.clickContinue();
  101 |     expect(await homePage.isHomePageExists()).toBe(true);
  102 | }
  103 | 
  104 | 
  105 | // Function to log in using the registered email
  106 | async function performLogin(page: Page, email: string) {
  107 |     const config = new TestConfig();
  108 |     await page.goto(config.appUrl);  // Reload home page
  109 | 
  110 |     const homePage = new HomePage(page);
  111 |     await homePage.clickOnMyAccount();
  112 |     await homePage.clickOnLogin();
  113 | 
  114 |     const loginPage = new LoginPage(page);
  115 |     await loginPage.login(email, "test123");  // Use the registered credentials
  116 | 
  117 |     // Verify login by checking My Account page
  118 |     const myAccountPage = new MyAccountPage(page);
> 119 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
      |                                                         ^ Error: expect(received).toBeTruthy()
  120 | }
  121 | 
  122 | 
  123 | // Function to search for a product and add it to cart
  124 | async function addProductToCart(page: Page) {
  125 |     const homePage = new HomePage(page);
  126 | 
  127 |     const config = new TestConfig();
  128 |     const productName: string = config.productName;
  129 |     const productQuantity: string = config.productQuantity;
  130 | 
  131 |     await homePage.enterProductName(productName);
  132 |     await homePage.clickOnSearchButton();  // Click on search button
  133 | 
  134 |     const searchResultsPage = new SearchResultPage(page);
  135 | 
  136 |     // Validate search results page
  137 |     expect(await searchResultsPage.isSearchResultPageExists()).toBeTruthy();
  138 | 
  139 |     // Validate that the desired product exists in the results
  140 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  141 | 
  142 |     // Select product and set quantity
  143 |     const productPage = await searchResultsPage.selectProduct(productName);
  144 |     await productPage?.setQuantiy(productQuantity);
  145 |     await productPage?.addToCart();  // Add product to shopping cart
  146 | 
  147 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  148 | 
  149 |     // Confirm product was added
  150 |     expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  151 | }
  152 | 
  153 | 
  154 | // Function to verify the shopping cart details
  155 | async function verifyShoppingCart(page: Page) {
  156 |     const productPage = new ProductPage(page);
  157 | 
  158 |     // Navigate to shopping cart from product page
  159 |     await productPage.clickItemstoNavigatetoCart();
  160 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickonViewCartButton();
  161 | 
  162 |     console.log("🛒 Navigated to shopping cart!");
  163 | 
  164 |     const config = new TestConfig();
  165 |     
  166 |     // Validate that total price is correct (based on config)
  167 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  168 | }
  169 | 
  170 | 
  171 | // Function to perform checkout (disabled for demo site)
  172 | async function performCheckout(page: Page) {
  173 |     // Checkout feature is not implemented since it's a demo site.
  174 |     // Place your checkout flow logic here if backend is available.
  175 | }
  176 | 
```