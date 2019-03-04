var overSound = {src:'assets/ふん1.mp3',volume:1.0};
var decideSound = {src:'assets/やっぴ～2.mp3',volume:0.7};
var okSound = {src:'assets/se_maoudamashii_system40.mp3',volume:0.6};
var ngSound = {src:'assets/ｳｪｧｯ.mp3',volume:0.8};

var bgm = new Audio('assets/bgm_maoudamashii_8bit22.mp3');
bgm.loop = true;
bgm.volume = 0.1;

var playSE = function(target){
  let tmp = new Audio(target.src);
  tmp.volume = target.volume;
  tmp.play();
}