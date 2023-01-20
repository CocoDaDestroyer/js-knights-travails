const gameBoard = () =>{
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
    
    document.body.appendChild(chessTable);
}
export {gameBoard};