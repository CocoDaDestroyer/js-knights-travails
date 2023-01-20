import { knightsTravails } from "./knightMoves";
import { moveAnimation } from "./moveAnimation";
const getPath = () =>{
    const travelSquares = []
    function addSquares(){
        travelSquares.push(this.dataset.coordArray)

    }
    const cellNodes = document.querySelectorAll("td");
    cellNodes.forEach((cellNode)=>{
        cellNode.addEventListener('click',addSquares) 
        cellNode.addEventListener('click',function(){
            if(travelSquares.length==2){
                let arr2 = travelSquares[1].split(',').map(Number)
                let arr1 = travelSquares[0].split(',').map(Number);
                moveAnimation(knightsTravails(arr1,arr2))
            }
        })
    })
}
export {getPath}