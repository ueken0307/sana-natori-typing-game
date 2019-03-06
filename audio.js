var overSound = {src:'assets/ふん1.mp3',volume:1.0};
var decideSound = {src:'assets/やっぴ～2.mp3',volume:0.7};
var okSound = {src:'assets/se_maoudamashii_system40.mp3',volume:0.6};
var ngSound = {src:'assets/ｳｪｧｯ.mp3',volume:0.8};

var startSounds = [
  {src:'assets/やっていくぞ.mp3',volume:1.0},
];

var finishSounds = [
  {src:'assets/はい終わった～.mp3',volume:0.6},
  {src:'assets/お疲れさな.mp3',volume:0.8},
  {src:'assets/以上、終わり！.mp3',volume:0.8},
  {src:'assets/まったね.mp3',volume:0.8},
  {src:'assets/終わり！.mp3',volume:0.8}
];

var resultSounds = [
  {src:'assets/うまーい.mp3',volume:0.6},
  {src:'assets/やるね、すごいじゃん.mp3',volume:0.6},
  {src:'assets/褒めてクレメンス.mp3',volume:0.6},
  {src:'assets/まあ良し.mp3',volume:1.0},
  {src:'assets/楽勝だったな.mp3',volume:0.6}
];

var bgm = new Audio('assets/bgm_maoudamashii_8bit22.mp3');
bgm.loop = true;
bgm.volume = 0.05;

var playSE = function(target){
  let tmp = new Audio(target.src);
  tmp.volume = target.volume;
  tmp.play();
}

var playSERandom = function(targets){
  let target = targets[Math.floor(Math.random() * targets.length)];
  let tmp = new Audio(target.src);
  tmp.volume = target.volume;
  tmp.play();
}