(function init(){
  sm = new SceneManager([Game],{problems:sampleProblems});

  document.addEventListener('keydown',(e)=>sm.keyPress(e));
  setInterval(main,10);
})();

function main(){
  sm.update();
  sm.draw();
}
