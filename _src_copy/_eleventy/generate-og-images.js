const puppeteer = require("puppeteer");
const glob = require("fast-glob");
const fs = require("fs");
const rimraf = require("rimraf");

async function run() {
  const urls = await glob.sync("_site/writing/*/*/og-image/index.html");

  const createImagesPromise = new Promise((resolve, reject) => {
    urls.forEach(async (url, index) => {
      // Turn on puppeteer and create a page
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();

      // Set the viewport of our headless browser to the size
      // the images
      await page.setViewport({
        width: 600,
        height: 315,
        deviceScaleFactor: 2,
      });

      // Get the content of each HTML og-image
      const fullPath = `${process.cwd()}/${url}`;
      const content = fs.readFileSync(fullPath, "utf8");

      // Set the content in our browser and take an image.
      // Save the image next to our written content
      const imagePath = url.replace("/index.html", ".png");
      await page.setContent(content);
      await page.screenshot({
        path: imagePath,
      });

      // Close the brows
      await browser.close();

      if (index === urls.length - 1) resolve();
    });
  });

  createImagesPromise.then(() => {
    rimraf("_site/writing/*/*/og-image", () => {});
  });
}

run();
