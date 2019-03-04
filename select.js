var Select = function(param){
  this.buttons = [
    {x:20,y:260,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'Lv1：幼少時代お絵描きBBS名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:0});
    }},

    {x:20,y:320,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'Lv2：17歳ばーちゃるなーす名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:1});
    }},

    {x:20,y:380,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'Lv3：インターネット老人会名取さな',
    onClick:function(){
      sm.changeScene('Game',{level:2});
    }},

    {x:20,y:440,width:70,height:30,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:5,
    label:'BGM再生',
    onClick:function(){
      bgm.play();
    }},

    {x:110,y:440,width:70,height:30,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:5,
    label:'BGM停止',
    onClick:function(){
      bgm.pause();
    }},

    {x:200,y:440,width:70,height:30,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:5,
    label:'アバウト',
    onClick:function(){
      sm.changeScene('About',{});
    }},

    {x:290,y:440,width:70,height:30,font:'14px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:5,
    label:'ライセンス',
    onClick:function(){
      sm.changeScene('Licence',{});
    }}
  ];

  this.isStart = param.isStart;
  this.startButton = {
  x:20,y:320,width:500,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
  bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
  label:'げーむすたーと',
  onClick:()=>{
    bgm.play();
    this.isStart = true;
  }};

  this.draw = function(){
    canvasReset();

    ctx.drawImage(natori,0,0,natori.width,natori.height,600,80,400,400);

    ctx.font = '60px JKfont';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
    ctx.fillText('名取さなの',10,60);
    ctx.fillText('つよつよ',100,120);
    ctx.fillText('タイピング',200,180);

    if(this.isStart){
      ctx.font = '30px JKfont';
      ctx.fillText('なんいど',20,240);

      for(let i of this.buttons){
        ctx.font = i.font;
        ctx.textAlign = i.textAlign;
  
        ctx.fillStyle = (i.mouseOver == 1)? i.bOverColor: i.bColor;
        cornerRadiusRect(i.x,i.y,i.width,i.height);
        ctx.fillStyle = (i.mouseOver == 1)? i.fOverColor: i.fColor;
        ctx.fillText(i.label,i.x+i.width/2,i.y+i.height/2 + i.labelOffset);
      }
    }else{
      let tmp = this.startButton;
      ctx.font = tmp.font;
      ctx.textAlign = tmp.textAlign;

      ctx.fillStyle = (tmp.mouseOver == 1)? tmp.bOverColor: tmp.bColor;
      cornerRadiusRect(tmp.x,tmp.y,tmp.width,tmp.height);
      ctx.fillStyle = (tmp.mouseOver == 1)? tmp.fOverColor: tmp.fColor;
      ctx.fillText(tmp.label,tmp.x+tmp.width/2,tmp.y+tmp.height/2 + tmp.labelOffset);
    }
  }

  this.update = function(){

  }

  this.keyPress = function(e){

  }

  this.click = function(e){
    if(e.target.id == 'canvas'){
      if(this.isStart){
        for(let i of this.buttons){
          if((i.x <= e.offsetX && e.offsetX <= i.x + i.width) && (i.y <= e.offsetY && e.offsetY <= i.y + i.height)){
            playSE(decideSound);
            i.onClick();
          }
        }
      }else{
        let tmp = this.startButton;
        if((tmp.x <= e.offsetX && e.offsetX <= tmp.x + tmp.width) && (tmp.y <= e.offsetY && e.offsetY <= tmp.y + tmp.height)){
          playSE(decideSound);
          tmp.onClick();
        }
      }
    }
  }

  this.mouseMove = function(e){
    if(e.target.id == 'canvas'){
      if(this.isStart){
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
      }else{
        let tmp=this.startButton;
        if((tmp.x <= e.offsetX && e.offsetX <= tmp.x + tmp.width) && (tmp.y <= e.offsetY && e.offsetY <= tmp.y + tmp.height)){
          tmp.mouseOver = 1;
        }else{
          tmp.mouseOver = 0;
        }
      }
      
    }
  }
}