
/*
    Assignment 2: Automate Login and Verify Dashboard
    Task: Write a Playwright script to automate the login process and verify that a specific 
    element is present on the dashboard after login.
*/

const { test, expect } = require('@playwright/test');

test('Test to login and verify an element is present on the dashboard.', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    console.log("Navigating to website: " + await page.title())
    await page.fill("#username", "tomsmith");
    await page.fill("#password", "SuperSecretPassword!");
    await page.click(".fa.fa-2x.fa-sign-in");
    const logoutBtn = page.locator(".icon-2x.icon-signout");
    await expect(logoutBtn).toBeVisible();
    await page.close();
});