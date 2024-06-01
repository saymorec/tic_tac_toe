### Tic Tac Toe Game

This repository contains a simple yet fully functional Tic Tac Toe game built using HTML, CSS, and JavaScript. The game features a responsive design, allowing it to be played seamlessly on both desktop and mobile devices.

#### Features:
- **Responsive Design:** The game board adjusts dynamically to fit various screen sizes, ensuring an optimal gaming experience across devices.
- **Game Logic:** Implemented in JavaScript, the game handles player turns, winning conditions, tie games, and board resets.
- **Clean and Organized Code:** The codebase is well-structured and follows best practices to ensure readability and maintainability.
- **Unit and End-to-End Testing:** Unit tests ensure the reliability of individual functions and components, while end-to-end tests validate the full user flow of the game.
- **Continuous Integration and Deployment:** A Github Action workflow is set up to run tests automatically on every push, ensuring the stability of the application. Successful tests trigger deployment to a Github Pages site, making the game accessible to users worldwide.

#### Technologies Used:
- HTML
- CSS
- JavaScript
- Playwright (for end-to-end testing)
- Vitest (for unit testing)
- Github Actions (for CI/CD)

#### Dependencies:
- **Playwright:** Used for end-to-end testing. Install it using npm:
    ```
    npm install playwright
    ```

- **Vitest:** Used for unit testing. Install it using npm:
    ```
    npm install vitest
    ```

#### Installation Requirements:
- **Node.js:** Ensure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **Node.js Version:** Use Node.js version 20.14.0. You can manage Node.js versions using a version manager like NVM. Include an `.nvmrc` file containing the required Node.js version in your project.
- **Package Manager:** Use either pnpm or yarn to install Node.js packages. Make sure to include the chosen package manager in your project. For example, to use yarn:
    ```
    npm install -g yarn
    ```

#### Installation and Usage:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using your preferred package manager:
    - Using yarn:
        ```
        yarn install
        ```
    - Using pnpm:
        ```
        pnpm install
        ```
4. Open the `index.html` file in your web browser. Alternatively, you may play the game online [here](https://saymorec.github.io/tic_tac_toe/index.html)
5. Play the game and enjoy!
