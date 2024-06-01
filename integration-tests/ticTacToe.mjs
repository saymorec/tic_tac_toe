import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the Tic Tac Toe app
  await page.goto('https://saymorec.github.io/tic_tac_toe/index.html');

  // Function to get status text
  const getStatusText = async () => await page.textContent('#status');

  // Test for winning scenario
  await page.click('.square:nth-child(1)'); // X
  await page.click('.square:nth-child(2)'); // O
  await page.click('.square:nth-child(4)'); // X
  await page.click('.square:nth-child(5)'); // O
  await page.click('.square:nth-child(7)'); // X - X wins

  // Verify the winning status
  let statusText = await getStatusText();
  console.log('Game outcome (expecting X wins):', statusText);
  if (statusText !== "Player X wins!") {
    console.error('Expected "Player X wins!" but got:', statusText);
  }

  // Reset the game
  await page.click('#resetButton');
  statusText = await getStatusText();
  console.log('Status after reset (expecting Player X\'s turn):', statusText);
  if (statusText !== "Player X's turn") {
    console.error('Expected "Player X\'s turn" but got:', statusText);
  }

  // Test for tie scenario
  await page.click('.square:nth-child(1)'); // X
  await page.click('.square:nth-child(2)'); // O
  await page.click('.square:nth-child(3)'); // X
  await page.click('.square:nth-child(5)'); // O
  await page.click('.square:nth-child(4)'); // X
  await page.click('.square:nth-child(7)'); // O
  await page.click('.square:nth-child(6)'); // X
  await page.click('.square:nth-child(9)'); // O
  await page.click('.square:nth-child(8)'); // X - Tie

  // Verify the tie status
  statusText = await getStatusText();
  console.log('Game outcome (expecting a tie):', statusText);
  if (statusText !== "It's a tie!") {
    console.error('Expected "It\'s a tie!" but got:', statusText);
  }

  // Reset the game again
  await page.click('#resetButton');
  statusText = await getStatusText();
  console.log('Status after second reset (expecting Player X\'s turn):', statusText);
  if (statusText !== "Player X's turn") {
    console.error('Expected "Player X\'s turn" but got:', statusText);
  }

  // Perform some additional interactions to ensure reset works
  await page.click('.square:nth-child(1)'); // X
  await page.click('.square:nth-child(5)'); // O
  await page.click('.square:nth-child(9)'); // X

  // Verify status after additional interactions
  statusText = await getStatusText();
  console.log('Status after additional interactions (expecting Player O\'s turn):', statusText);
  if (statusText !== "Player O's turn") {
    console.error('Expected "Player O\'s turn" but got:', statusText);
  }

  // Close the browser
  await browser.close();
})();
