import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the Tic Tac Toe app
  await page.goto('file:///Users/saymorechifamba/Documents/MyDocuments/tic_tac_toe/app/index.html');

  // Perform game interactions
  await page.click('.square:nth-child(1)');
  await page.click('.square:nth-child(2)');
  await page.click('.square:nth-child(4)');
  await page.click('.square:nth-child(5)');
  await page.click('.square:nth-child(7)');

  // Verify game outcome
  const statusText = await page.textContent('.status');
  console.log('Game outcome:', statusText);

  // Reset the game
  await page.click('.reset-button');

  // Additional interactions
  await page.click('.square:nth-child(1)');
  await page.click('.square:nth-child(5)');
  await page.click('.square:nth-child(9)');

  // Verify game outcome after resetting
  const resetStatusText = await page.textContent('.status');
  console.log('Reset game outcome:', resetStatusText);

  // Close the browser
  await browser.close();
})();
