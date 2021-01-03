const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("Page launch using Puppeteer", () => {
  it("Test Resolution ", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1600,
      height: 900,
    });

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });
    const pagetitle = await page.title();
    expect(pagetitle).to.equal("Sample PWA");

    await browser.close();
  });

  it("Test Resolution check for IPhone ", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X"]);

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });
    const pagetitle = await page.title();
    expect(pagetitle).to.equal("Sample PWA");

    await browser.close();
  });

  it.only("Test Resolution check for IPhone Landscape", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices["iPhone X landscape"]);

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });
    const pagetitle = await page.title();
    expect(pagetitle).to.equal("Sample PWA");

    await browser.close();
  });
});
