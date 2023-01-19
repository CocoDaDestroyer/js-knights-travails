const gameBoard = () =>{
    const startCoords = [1,0];
    const nodeCoord = [];
    const chessTable = document.createElement('table');
    chessTable.setAttribute('class','center');
    for (let i = 0;i<8;i++){
        const tableRow = document.createElement('tr');
        let rowCoord = Math.abs(i-7);
        tableRow.textContent = rowCoord;
        for(let z =0;z<8;z++){
            let tableCell = document.createElement('td');
            let columnCoord = z;
            tableCell.textContent = columnCoord;
            if((i+z)%2 == 0){
                tableCell.setAttribute('class','whiteCell');
                tableRow.appendChild(tableCell);
                nodeCoord.push(rowCoord);
                nodeCoord.push(columnCoord);
                tableCell.dataset.coordArray = nodeCoord;
                nodeCoord.splice(0,2);
            }
            if((i+z)%2 == 1){
                tableCell.setAttribute('class','blackCell');
                tableRow.appendChild(tableCell);
                nodeCoord.push(rowCoord);
                nodeCoord.push(columnCoord);
                tableCell.dataset.coordArray = nodeCoord;
                nodeCoord.splice(0,2);
            }
        }
        chessTable.appendChild(tableRow);
    }
    const cellNodes = chessTable.querySelectorAll("td");
    
    cellNodes.forEach((cellNode)=>{
        if (startCoords.toString() === cellNode.dataset.coordArray) {
            let knightImg = document.createElement("img");
            knightImg.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F962467.png&f=1&nofb=1&ipt=87a41a83ee60776c9c738658fcf5061b375372582e611fe4e527eb8938b4ac2d&ipo=images";
            cellNode.appendChild(knightImg);
        }
    })
    
    document.body.appendChild(chessTable);
}
export {gameBoard};