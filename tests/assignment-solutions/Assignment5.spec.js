
/*
    Assignment 5 : Check for hyperlink Count on a Page
    Task: Write a Playwright script to count the number of hyperlinks on a page.
*/

const { test, expect } = require('@playwright/test');

test('Test to count the number of hyperlinks on a webpage', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    const noOfLinks = await page.locator("a").count();
    console.log("Number of links on page: " + noOfLinks);
    // for (let i = 0; i < noOfLinks; i++) {
    //     let linkText = await page.locator("a").nth(i).textContent();
    //     console.log((i + 1) + " " +linkText);
    // }
    await page.close();
});