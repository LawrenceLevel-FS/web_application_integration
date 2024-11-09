const { Browser, Builder, By, Key, until } = require("selenium-webdriver");
require("dotenv").config();

describe("Email site tests", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });

  afterAll(async () => {
    await driver.close();
  });

  const setDelay = async () => {
    await driver.sleep(500);
  };

  it("User wants to  open homepage - and check the title is 'Home' ", async () => {
    await driver.get(process.env.URL);
    await driver.getTitle().then((title) => {
      expect(title).toEqual("Home");
    });
    await setDelay();
  });

  it('Opens Contacts pages and check to see if title is "Contact', async () => {
    await driver.get(driver.getCurrentUrl());
    const element = await driver.findElement(By.id("contactLink"));

    await element.click();
    await driver.getTitle().then((title) => {
      expect(title).toEqual("Contact Us");
    });
    await setDelay();
  });

  it("Test Email input and Email response", async () => {
    await driver.get(driver.getCurrentUrl());

    let inputElement = await driver.findElement(By.id("formInput"));
    let btnElement = await driver.findElement(By.id("formSubmit"));

    await inputElement.sendKeys(process.env.EMAIL, Key.TAB);
    await btnElement.click();
    const isDisplayed = await driver.findElement(By.id("formMessage"))
      .IS_DISPLAYED;

    if (isDisplayed) {
      expect(driver.getPageSource().contains(process.env.EMAIL));
    }

    await setDelay();
  });
});
