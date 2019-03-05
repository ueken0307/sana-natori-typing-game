var problemList = [
  level1,
  level2,
  level3
];

var Game = function(param){
  this.buttons = [
    {x:20,y:380,width:300,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'タイトルへ戻る',
    onClick:function(){
      sm.changeScene('Select',{isStart:true});
    }},

    {x:330,y:380,width:300,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'やり直す',
    onClick:function(){
      sm.changeScene('Game',{level:param.level});
    }},
  ];

  this.problems = [];
  this.pCount = 0;
  
  //問題のコピー
  let tmpProblem = problemList[param.level].slice();
  //問題のシャッフル
  for(let i=tmpProblem.length-1;i>0;--i){
    let r = Math.floor(Math.random()*(i+1));
    let tmp = tmpProblem[i];
    tmpProblem[i] = tmpProblem[r];
    tmpProblem[r] = tmp; 
  }
  //問題の代入
  for(let i=0;i<tmpProblem.length;++i){
    this.problems.push(new Problem(tmpProblem[i].text,tmpProblem[i].hiragana));
  }

  this.isActive = false;
  this.nowTime = 90;
  
  this.score = 0;
  this.keyCount = 0;
  this.missCount = 0;
  this.accuracy = 100.0;

  this.isMiss = false;

  this.draw = function(){
    canvasReset();
    let p=this.problems[this.pCount];
    
    ctx.drawImage(syringe,0,0,syringe.width,syringe.height,2,120,996,100);
    if(this.isMiss){
      ctx.drawImage(badNatori,0,0,badNatori.width,badNatori.height,650,230,250,250);
    }else{
      ctx.drawImage(normalNatori,0,0,normalNatori.width,normalNatori.height,650,230,250,250);
    }
    
    ctx.font = '40px JKfont';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'black'

    ctx.drawImage(eggplant,0,0,eggplant.width,eggplant.height,150,10,50,50);
    ctx.fillText(this.score,210,50);

    ctx.drawImage(keyboard,0,0,keyboard.width,keyboard.height,450,10,50,50);
    ctx.fillText(this.accuracy.toFixed(1) + '%',510,50);

    ctx.drawImage(clock,0,0,clock.width,clock.height,750,10,50,50);
    ctx.fillText(this.nowTime,810,50);
    
    if(this.isActive){
      ctx.textAlign = 'left';  
      
      ctx.font = '24px JKfont';
      ctx.font = (ctx.measureText(p.text).width > 800)? '18px JKfont':'24px JKfont';
      ctx.fillStyle = 'black';
      ctx.fillText(p.text,80,160);
      
      ctx.font = '24px JKfont';
      ctx.font = (ctx.measureText(p.getSelectText()).width > 800)? '18px JKfont':'24px JKfont';
      ctx.fillStyle = 'gray';
      ctx.fillText(p.getSelectText(),80,200);
      ctx.fillStyle = 'black';
      ctx.fillText(p.getNowText(),80,200); 
    }else{
      ctx.font = '24px JKfont';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      if(this.nowTime > 0){
        ctx.fillText('スペースキーでスタート',500,180);
      }else{
        ctx.fillText('おつかれさなー',500,180);
      }
    }

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
    if(this.isActive){
      let date = new Date();
      this.nowTime = 90 - Math.floor((date.getTime() - this.startTime) / 1000);

      if(this.nowTime < 1){
        this.isActive = false;
        setTimeout(()=>this.finish(),2000); 
        playSERandom(finishSounds);
      }
    }
  }
  
  this.finish = function(){
    sm.changeScene('Result',{keyCount: this.keyCount,missCount: this.missCount,accuracy: this.accuracy,score: this.score,level:param.level});
  }

  this.keyPress = function(e){
    if(this.isActive){ 
      let allowList = ['!','?','/','.',',','-','(',')','~',"'",'"',' ','&'];
      const isAllow = function(key){
        for(let i of allowList){if(i == key){return true;break;}}
        return false;
      }
      
      if((48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90) || (97 <= e.keyCode && e.keyCode <= 122) || isAllow(e.key)){
              
        let p = this.problems[this.pCount];
        this.keyCount++;
        this.accuracy = ((this.keyCount - this.missCount)/this.keyCount)*100;
        
        //選択中の文字列であるかどうか
        let check = function(num){
          for(let i of p.selectList[p.tCount]){
            if(i == num) return true;
          }
          return false;
        }
        
        //選択中の文字列に文字と等しいかどうか
        let tmpList = [];
        for(let i=0;i<p.alphabet[p.tCount].length;++i){
          if(check(i) && p.alphabet[p.tCount][i][p.sCount] == e.key){
            tmpList.push(i);
          }
        }
        
        //該当する選択肢があるならそれを選択して次に進める
        if(tmpList.length != 0){
          p.sCount++;
          p.selectList[p.tCount] = tmpList;
          this.isMiss = false;
          
          playSE(okSound);

          //候補の中で、最後まで当てはまったやつがあるならその文字は終わり
          for(let i of tmpList){
            if(p.sCount == p.alphabet[p.tCount][i].length){
              if(p.tCount+1 < p.alphabet.length){
                p.tCount++;
                p.sCount = 0;
                //1文字終わり
              }else{
                p.sCount = 0;
                //1文字終わり
                
                p.tCount=0;
                this.score+=p.textH.length*100;
                this.pCount++;
                if(this.pCount >= this.problems.length){
                  this.finish();
                }
                //1文終わり
              }
              break;
            }
          }
        }else{
          //もし一つ前の文字がんで'n'許容の場合で、入力文字がnなら
          if(p.tCount>0 && p.alphabet[p.tCount-1][p.selectList[p.tCount-1][0]]=='n' && e.key == 'n'){
            //一つ前のんの選択を'nn'にする
            p.selectList[p.tCount-1] = [];
            for(let i=0;i<p.alphabet[p.tCount-1].length;++i){
              if(p.alphabet[p.tCount-1][i] == 'nn'){
                p.selectList[p.tCount-1].push(i);
                break;
              }
            }
          }else{
            //当てはまりなし
            this.missCount++;
            this.accuracy = ((this.keyCount - this.missCount)/this.keyCount)*100;
            this.isMiss = true;

            playSE(ngSound);
          }
        }
      }
    }else{
      if(e.key == ' '){
        this.isActive = true;
        let date = new Date();
        this.startTime = date.getTime();
        playSERandom(startSounds);
      }
    }
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
};
