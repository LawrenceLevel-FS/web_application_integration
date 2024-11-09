const { Browser, Builder, By, Key, until } = require("selenium-webdriver");
require("dotenv").config();

describe("Google chrome tests", () => {
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

  it("As a user I want to open Google.com ", async () => {
    await driver.get(process.env.URL);
    await driver.getTitle().then((title) => {
      expect(title).toEqual("Google");
    });
  });

  it("As a user I want to search selenium in Google", async () => {
    await driver.get(driver.getCurrentUrl());
    let element = await driver.findElement(By.name("q"));

    await element.sendKeys("Selenium", Key.TAB);
    await setDelay();
    await element.submit();

    // const error = await driver.findElement(By.id("error")).getText())
    // expect(error).toEqual("Error")

    await driver.wait(until.titleContains("Selenium - Google Search"), 4000);
    await driver.getTitle().then((title) => {
      expect(title).toEqual("Selenium - Google Search");
    });
    await setDelay();
  });

  it("Current page content should have selenium contained on the page", async () => {
    await driver.get(driver.getCurrentUrl());

    const isDisplayed = await driver.findElement(By.css("H3")).IS_DISPLAYED;
    if (isDisplayed) {
      expect(driver.getPageSource().contains("Selenium"));
    }
    await setDelay();
  });
});
