const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("Feature Performance Metrics of WebSite", () => {
  it("Test Performance Metrics", async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://rmkanda.github.io/sample-pwa/", {
      waitUntil: "networkidle0",
    });

    const metrics = await page.metrics();
    console.log("Performance Metrics : ", metrics);
    expect(metrics.JSHeapTotalSize).lessThan(12 * 1000 * 1000);
    await browser.close();
  });
});
