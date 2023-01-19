import "./styles.css"
import { gameBoard } from "./gameboard";
import { knightsTravails } from "./knightMoves";
import { getPath } from "./getPath";
const appController = (function(){
    gameBoard();
    getPath();
}) ();


