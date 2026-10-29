import {test} from '@playwright/test';


test('demo', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByPlaceholder('First Name').fill("Kumaresan");
    await page.getByPlaceholder('Last Name').fill("Loganathan");
    await page.locator('#userEmail').fill("Kumar.kumaresh89@gmail.com");    
    await page.getByPlaceholder('Mobile Number').fill("8939689729");
    await page.locator('#dateOfBirthInput').clear();
    await page.locator('#dateOfBirthInput').fill("29 Jul 1989");
    await page.locator('#subjectsInput').fill("Maths");
    await page.locator('#subjectsInput').press("Enter")
    await page.locator('#subjectsInput').fill("Accounting");
    await page.locator('#subjectsInput').press("Enter")
    await page.locator('#subjectsInput').fill("Computer Science");
    await page.locator('#subjectsInput').press("Enter")
    await page.locator('//label[text()="Sports"]//preceding-sibling::input').click();
    await page.locator('//label[text()="Music"]//preceding-sibling::input').click();
    await page.locator('#uploadPicture').setInputFiles("C:/Users/Chaarvi/Downloads/Sample Pic.jpg");
    await page.getByPlaceholder('Current Address').fill("Kovur, Chennai-600128");
    await page.locator('#react-select-3-input').click();
    await page.locator('#react-select-3-input').press("ArrowDown");
    await page.locator('#react-select-3-input').press("ArrowDown");
    await page.locator('#react-select-3-input').press("Enter");
    await page.locator('#react-select-4-input').click();
    await page.locator('#react-select-4-input').press("ArrowDown");
    await page.locator('#react-select-4-input').press("ArrowDown");
    await page.locator('#react-select-4-input').press("Enter");
    await page.locator('#submit').click();  
});

