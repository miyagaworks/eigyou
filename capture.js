const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 512, height: 512 });
    await page.goto('file://' + process.cwd() + '/icon_render.html');
    await page.screenshot({ path: 'apple-touch-icon.png', clip: { x: 0, y: 0, width: 512, height: 512 } });
    await browser.close();
    console.log('apple-touch-icon.png 作成完了');
})();
