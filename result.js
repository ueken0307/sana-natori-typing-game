var Result = function(param){
  this.finalScore = (param.score * (param.accuracy/100)).toFixed(0);

  this.buttons = [
    {x:20,y:200,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'タイトルへ',
    onClick:function(){
      sm.changeScene('Select',{});
    }},

    {x:20,y:260,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white',
    label:'もう一度',
    onClick:function(){
      sm.changeScene('Game',{level:param.level});
    }},

    {x:20,y:320,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'DodgerBlue',fColor:'white',bOverColor:'DeepSkyBlue',fOverColor:'white',
    label:'結果をツイート',
    onClick:()=>{
      let url = "https://www.google.com";
      let text = `${param.level} ${this.finalScore} (${param.accuracy.toFixed(1)}％) #test`;
      window.open(`https://twitter.com/share?url=${url}&text=${text}`);
    }}
  ];

  this.draw = function(){
    canvasReset();

    ctx.font = '30px JKfont';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'black';
    ctx.fillText('基本スコア:' + param.score +  ' × 正確さ:' + param.accuracy.toFixed(1) + 
    '%(' + (param.keyCount - param.missCount) + '/' +  param.keyCount + ')' ,10,50);
    ctx.font = '50px JKfont';
    ctx.fillStyle = 'red';
    ctx.fillText(this.finalScore,0,100);
    
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
          i.onClick();
        }
      }
    }
  }

  this.mouseMove = function(e){
    if(e.target.id == 'canvas'){
      for(let i of this.buttons){
        if((i.x <= e.offsetX && e.offsetX <= i.x + i.width) && (i.y <= e.offsetY && e.offsetY <= i.y + i.height)){
          i.mouseOver = 1;
        }else{
          i.mouseOver = 0;
        }
      }
    }
  }
}