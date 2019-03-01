var SceneManager = function(scenes){
  this.scenes = scenes;
  this.scene = 0;
  this.changeScene = function(target){
    this.scene = target;
  }
  this.draw = function(){
    this.scenes[this.scene].draw();
  }
  this.update = function(){
    this.scenes[this.scene].update();
  }

  this.keyPress = function(e){
    this.scenes[this.scene].keyPress(e);
  }
}