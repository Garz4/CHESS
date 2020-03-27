/*
 * Coded by: Garz4 (Uriel García Rivas).
 */
function getMousePos(evt) {
  /* Get the mouse position relative to the canvasBoard ubication. */
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function drawBoardForWhite(){backgroundBoard.setAttribute("style", "background-image: url('img/Board_white.png');");}
function drawBoardForBlack(){backgroundBoard.setAttribute("style", "background-image: url('img/Board_black.png');");}

function onloadHandler(){
  canvasBoard.setAttribute("style", "border:5px solid #67ab23;");
  drawBoardForWhite();
  for(let i = 0; i < 12; i++){
    imgs.push(new Image);
    imgs[i].src = "pieces/"+i+".svg";
    imgs[i].onload = function(){contextBoard.drawImage(imgs[i], i*100, i*100, 100, 100);}
  }
}

function onclickHandler(e){
  console.log(getMousePos(e));
}

function startOffline(){

}

function startOnline(){

}
