(function init(){
  sm = new SceneManager([Game],{problems:sampleProblems});

  document.addEventListener('keydown',(e)=>sm.keyPress(e));
  document.addEventListener('click',(e)=>sm.click(e));
  setInterval(main,10);
})();

function main(){
  sm.update();
  sm.draw();
}
