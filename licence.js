var Licence = function(param){
  this.buttons = [
    {x:400,y:420,width:200,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'タイトルへ戻る',
    onClick:function(){
      sm.changeScene('Select',{isStart:true});
    }}
  ];

  this.draw = function(){
    canvasReset();

    ctx.textAlign = 'left';
    ctx.fillStyle = 'black';

    ctx.font = '40px JKfont';
    ctx.fillText('お借りしたもの',10,40);
    ctx.fillText('音声',20,100);
    ctx.font = '20px JKfont';
    ctx.fillText('SE,BGM : 魔王魂 様',30,130);
    ctx.fillText('Voice : 名取さな (@sana_natori) 様',30,160);

    ctx.font = '40px JKfont';
    ctx.fillText('Picture',20,210);
    ctx.font = '20px JKfont';
    ctx.fillText('ICON : ICOOON MONO (TopeconHeroes) 様',30,240);

    ctx.font = '40px JKfont';
    ctx.fillText('Font (JKゴシックL)',20,290);
    ctx.font = '20px JKfont';
    ctx.fillText('仮名文字 : かわいいフォントと素材の箱（JK FONTS）様',30,320);
    ctx.fillText('仮名文字以外 : M+ FONTS PROJECT 様',30,350);
    
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
