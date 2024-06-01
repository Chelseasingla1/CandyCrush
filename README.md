# 🍬 Candy Crush Clone with Shepherd.js 🍬

Welcome to the Candy Crush Clone with Shepherd.js project! This project is a clone of the popular Candy Crush game, enhanced with Shepherd.js for a guided user tour.

## Table of Contents

- [✨ Features](#features)
- [⚙️ Installation](#installation)
- [🚀 Usage](#usage)
- [📂 Folder Structure](#folder-structure)
- [🧩 Components](#components)
- [📊 State Management](#state-management)
- [🗺️ Guided Tour](#guided-tour)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

## ✨ Features

- **Candy Matching Game:** A clone of Candy Crush with similar gameplay mechanics.
- **Shepherd.js Integration:** A guided tour to help new users understand the game's features.
- **State Management:** Using Redux for state management.
- **Responsive Design:** Ensures a great user experience on both desktop and mobile devices.
- **Lives System:** Players have a limited number of lives, adding an extra layer of challenge.

## ⚙️ Installation

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/candy-crush-clone.git
cd candy-crush-clone
npm install
```

## 🚀 Usage

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the project for production:

```bash
npm run build
```

## 📂 Folder Structure

The project's folder structure is organized as follows:

```
candy-crush-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── RulesModal.js
│   │   ├── CandyBurstPopup.js
│   │   └── ...
│   ├── store/
│   │   ├── hooks.js
│   │   ├── index.js
│   │   └── ...
│   ├── utils/
│   │   ├── createBoard.js
│   │   ├── moveCheckLogic.js
│   │   ├── formulas.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```

## 🧩 Components

### `Board`

The main game board component that renders the grid of candies.

### `RulesModal`

A modal component that displays the rules of the game.

### `CandyBurstPopup`

A popup component that shows when candies are matched.

## 📊 State Management

The project uses Redux for state management. The main actions and reducers are located in the `store` folder. Key actions include:

- `updateBoard`: Updates the game board.
- `moveBelow`: Moves candies down after matches.
- `updateScore`: Updates the player's score.
- `resetScore`: Resets the score.

## 🗺️ Guided Tour

The guided tour is implemented using Shepherd.js. The tour helps new users understand the game's features and how to play. Key steps in the tour include:

1. **👋 Welcome:** Introduction to the game.
2. **🍬 Four Candies Match:** Highlights a spot where four candies matched.
3. **🍭 Three Candies Match:** Highlights a spot where three candies matched.
4. **🏆 Scoreboard:** Shows the player's score.
5. **❓ Help Button:** Explains the help feature.
6. **❤️ Lives Remaining:** Displays the remaining lives.

### Starting the Tour

To start the tour, click the "Start Tour" button on the main screen.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding! 🍀
