(function init(){
  sm = new SceneManager({'Select':Select,'Game':Game,'Result':Result,'About':About,'Licence':Licence},
  'Select',{isStart:false});

  document.addEventListener('keydown',(e)=>sm.keyPress(e));
  document.addEventListener('click',(e)=>sm.click(e));
  document.addEventListener('mousemove',(e)=>sm.mouseMove(e));
  setInterval(main,10);
})();

function main(){
  sm.update();
  sm.draw();
}
