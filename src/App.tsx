import React, {useEffect, Component, useState} from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks';
import { moveBelow, updateBoard, updateScore, resetScore } from './store';
import { createBoard } from './utils/createBoard';
import Board from './components/Board';
import { checkForRowOfFour, isColumnOfFour, isColumnOfThree, checkForRowOfThree } from './utils/moveCheckLogic';
import { formulaForColumnOfFour,formulaForColumnOfThree, generateInvalidMoves  } from './utils/formulas';
import { useShepherdTour } from "react-shepherd";

import  Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import RulesModal from './components/RulesModal';
import CandyBurstPopup from './components/CandyBurstPopup';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    classes: 'shepherd-element',
  },
  useModalOverlay: true,
};

class ShowImage {
  DisplayImage() {
    var myloc = new Image();
    myloc.useMap = "part3.png";
    var img = document.createElement('img');
    img.setAttribute('src', myloc.useMap);
    img.setAttribute('style', "height:800px;width:1000px;");

    var div = document.createElement('div');
    div.setAttribute('style', "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; background: white; padding: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.5);");
    div.appendChild(img);
    document.body.appendChild(img);
  }
}
window.onload = function() {
  var button = document.createElement('button');
  button.innerText = "Show"; 
  // const className="button dark show-button";
  button.className = "button dark show-button";
  button.onclick = function() {
    var image = new ShowImage();
    image.DisplayImage();
  };
  document.body.appendChild(button);
};
const tour = new Shepherd.Tour(tourOptions);

tour.addStep({
  id: 'welcome',
  text: 'Welcome to the tour!',
  attachTo: {
    element: '.start-tour-button',
    on: 'bottom'
  },
  buttons: [
    {
      text: 'Back',
      action() {
        return tour.back();
      },
      classes: 'shepherd-button',
    },
    {
      text: 'Next',
      action() {
        return tour.next();
      },
      classes: 'shepherd-button',
    },
  ],
  classes: 'shepherd-header',
});
tour.addStep({
  id: 'Four',
  text: 'Four candies burst!',
  attachTo: {
    element: '.highlighted',
    on: 'right'
  },
  buttons: [
    {
      text: 'Back',
      action() {
        return tour.back();
      },
      classes: 'shepherd-button',
    },
    {
      text: 'Next',
      action() {
        return tour.next();
      },
      classes: 'shepherd-button',
    },
  ],
  classes: 'shepherd-header',

});
tour.addStep({
  id: 'Three',
  text: 'Three candies burst!',
  attachTo: {
    element: '.highlighted-three',
    on: 'left'
  },
  buttons: [
    {
      text: 'Back',
      action() {
        return tour.back();
      },
      classes: 'shepherd-button',
    },
    {
      text: 'Next',
      action() {
        return tour.next();
      },
      classes: 'shepherd-button',
    },
  ],
  classes: 'shepherd-header',
});
tour.addStep({
  id: 'Score',
  text: 'here you can see your score!',
  attachTo: {
    element: '.score-button',
    on: 'bottom'
  },
  buttons: [
    {
      text: 'Back',
      action() {
        return tour.back();
      },
      classes: 'shepherd-button',
    },
    {
      text: 'Next',
      action() {
        return tour.next();
      },
      classes: 'shepherd-button',
    },
  ],
  classes: 'shepherd-header',
});
tour.addStep({
  id: 'HowToBurstFour',
  text: 'Here is how to burst four candies!',
  attachTo: {
    element: '.show-button',
    on: 'bottom'
  },
  buttons: [
    {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button',
    }
  ],
  when: {
    show: () => {
      const img = document.createElement('img');
      img.src = 'part3.png';
      img.alt = 'How to burst four candies';
      img.style.width = '100%';
      const shepherdText = document.querySelector('.shepherd-text');
      if (shepherdText) {
        shepherdText.appendChild(img);
      }
    }
  },
  classes: 'shepherd-header',
});

type Board = number[];
type BoardSize = number;

const findPossibleMoves = (board: Board, boardSize: BoardSize) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = checkForRowOfFour(board.map(String), boardSize, generateInvalidMoves(boardSize, true));
    const rowOfThree = checkForRowOfThree(board.map(String), boardSize, generateInvalidMoves(boardSize));
    const columnOfFour = isColumnOfFour(board.map(String), boardSize, formulaForColumnOfFour(boardSize));
    const columnOfThree = isColumnOfThree(board.map(String), boardSize, formulaForColumnOfThree(boardSize));
    if (rowOfFour.length > 0) return rowOfFour;
    if (rowOfThree.length > 0) return rowOfThree;
    if (columnOfFour.length > 0) return columnOfFour;
    if (columnOfThree.length > 0) return columnOfThree;
  }
  return [];
};


function App() {

  const dispatch = useAppDispatch();
  const [highlightedCandies, setHighlightedCandies] = useState<number[]>([]);

  const board = useAppSelector(({candyCrush:{board}}) => board);
  const boardSize = useAppSelector(
    ({candyCrush:{boardSize}}) => boardSize
  );

  const score = useAppSelector(({ candyCrush: {score}}) => score);

  // const tour = useShepherdTour({
  //   steps: steps.map(step => ({ ...step, title: '' })),
  //   tourOptions
  // });

  useEffect(()=>
  {
    dispatch(updateBoard(createBoard(boardSize)))

  }, [boardSize,dispatch]);

  useEffect(() =>
  {
    const timeout = setTimeout(() =>
    {
      const newBoard = [...board];
      const columnOfFour = isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      const columnOfThree = isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize) );
      const rowOfFour =  checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      const rowOfThree =  checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
      const matchedCandiesOfFour = [...columnOfFour, ...rowOfFour];
      const matchedCandiesOfThree = [...columnOfThree, ...rowOfThree];

      if (matchedCandiesOfFour.length > 0) {
        setHighlightedCandies(matchedCandiesOfFour);
        const step = tour.getById('four');
        if (step) {
          step.show();
        }
      } else if (matchedCandiesOfThree.length > 0) {
        setHighlightedCandies(matchedCandiesOfThree);
        const step = tour.getById('three');
        if (step) {
          step.show();
        }
      }
      setTimeout(() => {
        setHighlightedCandies([]);
      }, 10000);
    }, 150);
    return () => clearInterval(timeout)
    tour.start();
  }, [board,dispatch , boardSize ]);

  const canMatch = (board: Board, move: number) => {
    const candyType = board[move];
    const boardSize = Math.sqrt(board.length);
  
    // Check for horizontal match
    if (move % boardSize > 1 && board[move - 1] === candyType && board[move - 2] === candyType) {
      return true;
    }
    if (move % boardSize < boardSize - 2 && board[move + 1] === candyType && board[move + 2] === candyType) {
      return true;
    }
  
    // Check for vertical match
    if (move >= 2 * boardSize && board[move - boardSize] === candyType && board[move - 2 * boardSize] === candyType) {
      return true;
    }
    if (move < board.length - 2 * boardSize && board[move + boardSize] === candyType && board[move + 2 * boardSize] === candyType) {
      return true;
    }
  
    return false;
  };
  const showMove = () => {
    console.log('showMove called');
    const possibleMoves = findPossibleMoves(board.map(Number), boardSize);
    console.log('possibleMoves:', possibleMoves);
    console.log('board:', board);
    const matchingMoves = possibleMoves.filter(move => {
      const match = canMatch(board.map(Number), move);
      console.log('move:', move, 'match:', match);
      return match;
    });
    console.log('matchingMoves:', matchingMoves);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
       <h1 className='button dark score-button'>Score: {score}</h1>
       {/* <img src='public\part1.png' className="image" alt='new'> Part 1</img> */}
      <Board  className="board" highlightedCandies={highlightedCandies} />
      <button className="button dark start-tour-button" onClick={() => tour.start()}>
        Start Tour
      </button>
      <button className="button dark show-move-button" onClick={showMove}>
          Help ?
        </button>
    </div>
  )
}

export default App
