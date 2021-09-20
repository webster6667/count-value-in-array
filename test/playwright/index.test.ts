import { chromium } from '@playwright/test'

test('basic test', async () => {

    const url = `file://${__dirname}/index.html`,
          browser = await chromium.launch({ headless: true }),
          page = await browser.newPage(),
          testText = 'test'

    await page.goto(url);

    await page.fill('input', testText);

    const inputValue = await page.$eval('input', (input: HTMLInputElement) => {
        return input.value
    });

    await browser.close()

    expect(inputValue).toBe(testText);
});

