var overSound = 'se_maoudamashii_system26.mp3';
var decideSound = 'se_maoudamashii_system37.mp3';
var okSound = 'se_maoudamashii_system40.mp3';
var ngSound = 'se_maoudamashii_system39.mp3';

var bgm = new Audio('bgm_maoudamashii_8bit22.mp3');
bgm.loop = true;
bgm.volume = 0.2;

var playSE = function(src){
  let tmp = new Audio(src);
  tmp.play();
}