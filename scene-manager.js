var SceneManager = function(sceneClasses,firstScene,firstParam){
  this.sceneClasses = sceneClasses;
  this.scene = new sceneClasses[firstScene](firstParam);
  
  this.changeScene = function(target,param){
    this.scene = new sceneClasses[target](param);
  }
  this.draw = function(){
    this.scene.draw();
  }
  this.update = function(){
    this.scene.update();
  }

  this.keyPress = function(e){
    this.scene.keyPress(e);
  }

  this.click = function(e){
    this.scene.click(e);
  }

  this.mouseMove = function(e){
    this.scene.mouseMove(e);
  }
}

var sm;
