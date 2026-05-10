
/*
    Assignment 3: Handle Popups and Alerts
    Task: Write a Playwright script to handle popups and alerts on a webpage.
*/

const { test, expect } = require('@playwright/test');

test('Test to to handle Alert popup on website', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am a JS Alert')
        expect(dialog.accept());
    })
    await page.click("button[onclick='jsAlert()']");
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();
});

test('Test to to handle Comfirm Alert popup on website', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('I am a JS Confirm')
        await dialog.accept();
    })
    await page.click("button[onclick='jsConfirm()']");
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    await page.close();
});

test('Test to to handle Prompt Alert popup on website', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('I am a JS prompt')
        expect(dialog.accept("Playwright Scripting"));
    })
    await page.click("button[onclick='jsPrompt()']");
    await expect(page.locator('#result')).toHaveText('You entered: Playwright Scripting');
    await page.close();

});