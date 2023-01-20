import "./styles.css"
import { gameBoard } from "./gameboard";
import { reset } from "./reset";
import { getPath } from "./getPath";
const appController = (function(){
    gameBoard();
    getPath();
    reset()
}) ();


