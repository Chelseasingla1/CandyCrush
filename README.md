# 🍬 Candy Crush Clone with Shepherd.js 🍬

Welcome to the Candy Crush Clone with Shepherd.js project! This project is a clone of the popular Candy Crush game, enhanced with Shepherd.js for a guided user tour.

## Table of Contents

- [✨ Features](#features)
- [📸 Demo](#demo)
- [⚙️ Installation](#installation)
- [🚀 Usage](#usage)
- [📦 Dependencies](#dependencies)
- [📂 Folder Structure](#folder-structure)
- [🧩 Components](#components)
- [📊 State Management](#state-management)
- [🤝 Contributing](#contributing)

## ✨ Features

- **Candy Matching Game:** A clone of Candy Crush with similar gameplay mechanics.
- **Shepherd.js Integration:** A guided tour to help new users understand the game's features.
- **State Management:** Using Redux for state management.
- **Responsive Design:** Ensures a great user experience on both desktop and mobile devices.
- **Lives System:** Players have a limited number of lives, adding an extra layer of challenge.

## 📸 Demo

Check out the screenshots and video demo of the game in action!

### Video

[Watch the demo video](https://youtu.be/cp04UAQaD-E)

### Screenshots along with 🗺️ Guided Tour

The guided tour is implemented using Shepherd.js. The tour helps new users understand the game's features and how to play. Key steps in the tour include:

![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/8340feb4-9190-4a8d-81c8-0bc2cf90eb75)
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/e95dab9f-6079-4064-86ce-46e3884d9c73)
1. **👋 Welcome:** Introduction to the game.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/17ade3c7-3c2b-4f59-a961-4c2bd1642ca0)
2. **🍬 Four Candies Match:** Highlights a spot where four candies matched.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/b41904c5-0a3c-4b00-a3e3-b7febb4ce3c7)
3. **🍭 Three Candies Match:** Highlights a spot where three candies matched.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/82682bfd-860e-4ffc-ad40-3f8bd90e3c20)
4. **🏆 Scoreboard:** Shows the player's score.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/c7e56d9a-cfd8-41a2-99a0-d89c12406fd8)
5. **❓ Help Button:** Explains the help feature.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/03cdc5b9-70d3-45ab-a894-c4d1151da07a)
6. **❤️ Lives Remaining:** Displays the remaining lives.
![image](https://github.com/Chelseasingla1/CandyCrush/assets/129886894/3847ea7e-ca0e-4705-8a35-f496bcfd115b)

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
## 📦 Dependencies

The project relies on several key dependencies:

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A state management library.
- **React-Redux:** Official React bindings for Redux.
- **Shepherd.js:** A JavaScript library for creating guided tours.
- **react-shepherd:** React wrapper for Shepherd.js.
- **React Icons:** Icons for React projects.
- **Octokit:** GitHub REST API client.

To install these dependencies, run:

```bash
npm install react redux react-redux shepherd.js react-shepherd react-icons @octokit/rest
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

### Starting the Tour

To start the tour, click the "Start Tour" button on the main screen.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit pull requests.


Feel free to reach out if you have any questions or need further assistance. Happy coding! 🍀
