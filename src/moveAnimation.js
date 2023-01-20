const moveAnimation = (arr) => {
    const cellNodes = document.querySelectorAll("td");
    for(let i =0;i<arr.length;i++){
            cellNodes.forEach((cellNode)=>{
                if (arr[i]=== cellNode.dataset.coordArray) {
                    cellNode.textContent = i
                    let knightImg = document.createElement("img");
                    knightImg.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.emojidex.com%2Femoji%2Fseal%2Fwhite_chess_knight.png%3F1422536464&f=1&nofb=1&ipt=c83c791abc87f21ece8ecd49a3fc2eba12864c2ffd18493b5afbdde07ba1f489&ipo=images";
                    cellNode.appendChild(knightImg);
                    console.log('hi')
                }
            })
    }
    
}
export {moveAnimation}