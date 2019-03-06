var About = function(param){
  this.buttons = [
    {x:750,y:420,width:200,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
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
    ctx.fillText('About',10,40);
    ctx.font = '20px JKfont';
    ctx.fillText('このゲームは名取さな氏の生放送,動画,ツイートなどを問題にしたタイピングゲームです。',20,70);
    ctx.fillText('名取さな1周年記念サイト用のゲームとして作成しました。',20,100);
    ctx.fillText('このゲームは同人ゲームであり、名取さな氏との直接な関係はありません。もちろん非公式です。',20,130);

    ctx.font = '40px JKfont';
    ctx.fillText('How to play',10,180);
    ctx.font = '20px JKfont';
    ctx.fillText('画面上に表示される文章を時間内にどれだけ入力できるかに挑戦します。',20,210);
    ctx.fillText('難易度は3段階で、難易度が上がるごとに1つの文章の文字数が増えます。',20,240);
    ctx.fillText('画面上に表示されている入力方法以外でも入力できます(例:「きゃ」は kya kixya kilya のいずれも可)',20,270);
    ctx.fillText('スコアは (最後まで入力した文章のひらがなでの文字数 × 100) × 正確率 で算出されます。',20,300);

    ctx.font = '40px JKfont';
    ctx.fillText('Contact',10,350);
    ctx.font = '20px JKfont';
    ctx.fillText('何かあれば、寝落ち(@zuho_cpp)まで連絡お願いします。',20,380);
    
    ctx.font = '40px JKfont';
    ctx.fillText('Special Thanks',10,430);
    ctx.font = '20px JKfont';
    ctx.fillText('テストプレイ:冬海せんせえ(@JustM0nik4)',20,460);
    
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
