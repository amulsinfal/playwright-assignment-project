
/*
    Assignment 4 : Upload a File
    Task: Write a Playwright script to upload a file using a file input element on a webpage.
*/

const { test, expect } = require('@playwright/test');

test('Test to upload a file using a file input element on a webpage', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.setInputFiles("#file-upload", "test-resources/UploadFile.txt");
    await page.click("#file-submit");
    await expect(page.locator('div[class="example"] h3')).toHaveText('File Uploaded!');
    await page.close();
});