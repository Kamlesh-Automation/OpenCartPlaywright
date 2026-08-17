# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User Login test
- Location: tests/Login.spec.ts:39:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input-password')

```

# Test source

```ts
  1  | import { Page,Locator,expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage
  4  | {
  5  |     private readonly page:Page;
  6  |     //locator
  7  |     private readonly txtEmailAddress: Locator;
  8  |     private readonly textPassword: Locator;
  9  |     private readonly btnLogin:Locator;
  10 |     private readonly txtErrorMessage:Locator;
  11 |     
  12 |     //constructor
  13 | 
  14 |     constructor(page:Page)
  15 |     {
  16 |         this.page= page;
  17 |         this.txtEmailAddress = this.page.locator('#input-email');
  18 |         this.textPassword = this.page.locator('input-password');
  19 |         this.btnLogin = this.page.locator('input[value="Login"]');
  20 |         this.txtErrorMessage = this.page.locator('.alert.alert-danger.alert-dismissible');
  21 |     }
  22 |     //Action method
  23 |     /** 
  24 |      * Set the email address in the email field
  25 |      * @param email - email address to enter
  26 |      */
  27 | 
  28 |     async setEmail(email:string)
  29 |     {
  30 |         await this.txtEmailAddress.fill(email);
  31 |     }
  32 | 
  33 |     async setPassword(pwd:string)
  34 |     {
> 35 |         await this.textPassword.fill(pwd);
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  36 |     }
  37 |     async clickLogin()
  38 |     {
  39 |         await this.btnLogin.click();
  40 |     }
  41 | 
  42 |     /**
  43 |      * Perform compete login action
  44 |      * @param email - email address to enter
  45 |      * @param password - password to enter
  46 |      */
  47 | 
  48 |     async login(email:string, password:string)
  49 |     {
  50 |         await this.setEmail(email);
  51 |         await this.setPassword(password);
  52 |         await this.clickLogin();
  53 |     }
  54 | 
  55 |     async getLoginErrorMessage():Promise<null | string>
  56 |     {
  57 |         return (this.txtErrorMessage.textContent());
  58 |     }
  59 | }
```