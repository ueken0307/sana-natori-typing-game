var SceneManager = function(sceneClasses,firstParam){
  this.sceneClasses = sceneClasses;
  this.scene = new sceneClasses[0](firstParam);
  
  this.changeScene = function(target,param){
    this.scene = new sceneClasses[0](param);
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
}

var sm;
