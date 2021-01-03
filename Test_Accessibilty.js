const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("Test Accessibilty of WebSite", () => {
  it("Test Accessibilty ", async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });

    const snapshot = await page.accessibility.snapshot();
    console.log("Accessibility Tree : ", snapshot);
    expect(snapshot.children[0].role).to.be.equal("heading");
    expect(snapshot.children[0].name).to.be.equal("Hello!");
    await browser.close();
  });
});
