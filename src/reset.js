const reset = () =>{
    const resetBtn = document.querySelector('.clear-board-button')
    resetBtn.addEventListener('click',function(){
        window.location.reload();
    })
}
export {reset}