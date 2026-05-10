
/*
    Assignment 1: Launch a Browser and Open a Website
    Task: Write a Playwright script to launch a browser, open a website, and take a screenshot.
*/

const { test, expect } = require('@playwright/test');

test('Test to launch a browser, open a website and take a screenshot', async ({ page }) => {
    await page.goto("https://automationexercise.com/contact_us");
    console.log("Navigating to website: " + await page.title())
    await page.screenshot({ path: 'screenshots/screenshot_' + Date.now() + '.png', fullPage: true })
    console.log("Screenshot captured!");
    await page.close();
});