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

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
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
      text: 'Next',
      action: tour.next
    }
  ]
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
      text: 'Next',
      action: tour.next
    }
  ]
});

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
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
      // const matchedCandies = [...columnOfFour, ...rowOfFour, ...columnOfThree, ...rowOfThree];

       const matchedCandies = [...columnOfFour];
      if (matchedCandies.length > 0) {
        setHighlightedCandies(matchedCandies); // Highlight the candies
        const step = tour.getById('four');
        if (step) {
          step.show();
        }
      }
    }, 150);
    return () => clearInterval(timeout)
    tour.start();
  }, [board,dispatch , boardSize ]);


  return (
    <div className='flex items-center justify-center h-screen'>
       <h1 className='text-2xl font-bold text-white mb-4'>Score: {score}</h1>
      <Board  className="board" highlightedCandies={highlightedCandies} />
      <button className="button dark start-tour-button" onClick={() => tour.start()}>
        Start Tour
      </button>
    </div>
  )
}

export default App
