var Select = function(param){
  this.buttons = [
    {x:20,y:200,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'Lv1：幼少時代お絵描きBBS名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:0});
    }},

    {x:20,y:260,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'Lv2：17歳ばーちゃるな〜す名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:1});
    }},

    {x:20,y:320,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'Lv3：インターネット老人会名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:2});
    }},

    {x:600,y:400,width:50,height:20,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'BGM再生',
    onClick:function(){
      bgm.play();
    }},

    {x:660,y:400,width:50,height:20,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'BGM停止',
    onClick:function(){
      bgm.pause();
    }}
  ];

  this.draw = function(){
    canvasReset();
    
    for(let i of this.buttons){
      ctx.font = i.font;
      ctx.textAlign = i.textAlign;

      ctx.fillStyle = (i.mouseOver == 1)? i.bOverColor: i.bColor;
      ctx.fillRect(i.x,i.y,i.width,i.height);
      ctx.fillStyle = (i.mouseOver == 1)? i.fOverColor: i.fColor;
      ctx.fillText(i.label,i.x+i.width/2,i.y+i.height/2 + 10);
    }
  }

  this.update = function(){

  }

  this.keyPress = function(e){

  }

  this.click = function(e){
    if(e.target.id == 'canvas'){
      for(let i of this.buttons){
        if((i.x <= e.offsetX && e.offsetX <= i.x + i.width) && (i.y <= e.offsetY && e.offsetY <= i.y + i.height)){
          playSE(decideSound);
          i.onClick();
        }
      }
    }
  }

  this.mouseMove = function(e){
    if(e.target.id == 'canvas'){
      for(let i of this.buttons){
        if((i.x <= e.offsetX && e.offsetX <= i.x + i.width) && (i.y <= e.offsetY && e.offsetY <= i.y + i.height)){
          if(i.mouseOver == 0){
            playSE(overSound);
          }
          i.mouseOver = 1;
        }else{
          i.mouseOver = 0;
        }
      }
    }
  }
}