import React from 'react'
import { useAppSelector } from "../store/hooks";
import Tile from './Tile';

interface BoardProps {
    className?: string;
    highlightedCandies: number[];
  }
  
// function Board() {
//     const board = useAppSelector(({candyCrush:{board}}) => board);
//     const boardSize = useAppSelector(
// ({candyCrush: {boardSize}}) => boardSize
//     );
const Board: React.FC<BoardProps> = ({ className , highlightedCandies}) => {
    const board = useAppSelector(({ candyCrush: { board } }) => board);

  return (
    <div className={`${className} grid grid-cols-8 gap-1`}>
      {
        board.map((candy:string, index:number)=>(
            <Tile candy={candy} key={index} candyId={index}  isHighlighted={highlightedCandies.includes(index)}/>
        ))
      }
    </div>
  )
}

export default Board;
