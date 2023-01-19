import { knightsTravails } from "./knightMoves";
const getPath = () =>{
    const travelSquares = []
    const chessTable = document.querySelector('Table')
    const squares = chessTable.querySelectorAll("td")
    squares.forEach((square)=>{
        square.addEventListener('click',function(square){
            travelSquares.push(square.dataset.coordArray)
        }) 
    })

    while(travelSquares.length>1){
        squares.removeEventListener('click',function(square){
            getCoords(square)
        })
        knightsTravails(travelSquares[0],travelSquares[1])
        travelSquares.length = 0;
    }

}
export {getPath}