import { test, expect } from '@playwright/test';

test('Click button for approved order 102', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the row with Order ID 102 and Status Approved
    const row = page.locator('tr').
    filter({ has: page.getByText('Laptop', { exact: true })
    }).filter({
        has: page.getByText('$19.99', { exact: true })
    });

    // Verify the matching row exists
    await expect(row).toHaveCount(1);

    // Click the button in that row
    await row.locator('[type="checkbox"]').click();
});

test.only("table", async({page})=>{

    await expect(page.getByRole('heading', {name:/sign up/i})).toBeVisible();
    const checkBox = page.getByRole('checkbox',{name:'SUbscribe'})
    await expect(checkBox).not.toBeChecked();
    await checkBox.check();
    await expect(checkBox).toBeChecked();
    await page.getByRole('button', {name:/Submit/i}).click();
})