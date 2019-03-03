var overSound = 'assets/se_maoudamashii_system26.mp3';
var decideSound = 'assets/se_maoudamashii_system37.mp3';
var okSound = 'assets/se_maoudamashii_system40.mp3';
var ngSound = 'assets/se_maoudamashii_system39.mp3';

var bgm = new Audio('assets/bgm_maoudamashii_8bit22.mp3');
bgm.loop = true;
bgm.volume = 0.2;

var playSE = function(src){
  let tmp = new Audio(src);
  tmp.play();
}