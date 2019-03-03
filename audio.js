var overSound = 'assets/ふん1.mp3';
var decideSound = 'assets/やっぴ～2.mp3';
var okSound = 'assets/se_maoudamashii_system40.mp3';
var ngSound = 'assets/ｳｪｧｯ.mp3';

var bgm = new Audio('assets/bgm_maoudamashii_8bit22.mp3');
bgm.loop = true;
bgm.volume = 0.2;

var playSE = function(src){
  let tmp = new Audio(src);
  tmp.play();
}