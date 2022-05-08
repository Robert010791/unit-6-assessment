import { Builder, Capabilities, By } from 'selenium-webdriver';

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get('http://127.0.0.1:5500/public/index.html');
});

afterAll(async () => {
  await driver.quit();
});

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(1000);
});

test('Draw button id is equal to draw', async () => {
  let buttonId = driver.findElement(By.id('draw'));
  expect(buttonId).toMatch('Draw');
  await driver.sleep(1000);
});
