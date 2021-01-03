const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("Page launch using Puppeteer", () => {
  it("Launch the Thoghtworks", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });
    const pagetitle = await page.title();
    expect(pagetitle).to.equal("Sample PWA");
    await browser.close();
  });
});
