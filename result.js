var Result = function(param){
  playSERandom(resultSounds);

  this.finalScore = (param.score * (param.accuracy/100)).toFixed(0);
  this.speed = ((param.keyCount - param.missCount)/90.0).toFixed(1);

  this.buttons = [
    {x:20,y:300,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'タイトルへ',
    onClick:function(){
      sm.changeScene('Select',{isStart:true});
    }},

    {x:20,y:360,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'もう一度',
    onClick:function(){
      sm.changeScene('Game',{level:param.level});
    }},

    {x:20,y:420,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'DodgerBlue',fColor:'white',bOverColor:'DeepSkyBlue',fOverColor:'white', labelOffset:10,
    label:'ツツイのツイ',
    onClick:()=>{
      let url = "https://1st.natorisana.love/";
      let text = `レベル${param.level+1}で${this.finalScore}点獲得！！ (正確率:${param.accuracy.toFixed(1)}％, 速さ:${this.speed}key/s)`;
      window.open(`https://twitter.com/share?url=${url}&text=${text}&hashtags=名取さなのつよつよタイピング`);
    }}
  ];

  this.draw = function(){
    canvasReset();

    ctx.drawImage(normalNatori,0,0,normalNatori.width,normalNatori.height,600,80,400,400);

    ctx.font = '30px JKfont';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'black';
    ctx.fillText('基本スコア : ' + param.score,20,50);
    ctx.fillText('正確さ : ' + param.accuracy.toFixed(1) + 
    '%(' + (param.keyCount - param.missCount) + '/' +  param.keyCount + ')',20,100);
    ctx.fillText('スピード : ' + this.speed + 'key/s',20,150);

    ctx.fillText('最終スコア : ' + param.score + ' × ' + param.accuracy.toFixed(1) + '%',20,200);
    ctx.fillText('=',310,240);
    ctx.font = '50px JKfont';
    ctx.fillStyle = 'red';
    ctx.fillText(  this.finalScore,350,250);
    
    for(let i of this.buttons){
      ctx.font = i.font;
      ctx.textAlign = i.textAlign;

      ctx.fillStyle = (i.mouseOver == 1)? i.bOverColor: i.bColor;
      cornerRadiusRect(i.x,i.y,i.width,i.height);
      ctx.fillStyle = (i.mouseOver == 1)? i.fOverColor: i.fColor;
      ctx.fillText(i.label,i.x+i.width/2,i.y+i.height/2 + i.labelOffset);
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