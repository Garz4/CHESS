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

function onclickHandler(e){
  console.log(getMousePos(e));
}

function startOffline(){

}

function startOnline(){

}
