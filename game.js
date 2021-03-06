var problemList = [
  level1,
  level2,
  level3,
  jpOnly
];

var Game = function(param){
  this.buttons = [
    {x:20,y:420,width:300,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'タイトルへ戻る',
    onClick:function(){
      sm.changeScene('Select',{isStart:true});
    }},

    {x:330,y:420,width:300,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:'white',fColor:'black',bOverColor:'red',fOverColor:'white', labelOffset:10,
    label:'やり直す(Esc)',
    onClick:function(){
      sm.changeScene('Game',{level:param.level});
    }},
    
    {x:20,y:300,width:610,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:bColor = ignorePunctuation? 'red' : 'white',fColor:ignorePunctuation? 'white' : 'black',
    bOverColor:ignorePunctuation? 'white' : 'red',fOverColor:ignorePunctuation? 'black' : 'white', labelOffset:10,
    label:ignorePunctuation? '句読点を無視する(変更するとやり直しになります)' : '句読点を無視しない(変更するとやり直しになります)',
    onClick:function(){
      ignorePunctuation = !ignorePunctuation;
      this.label = ignorePunctuation? '句読点を無視する(変更するとやり直しになります)' : '句読点を無視しない(変更するとやり直しになります)';
      this.bColor = ignorePunctuation? 'red' : 'white';
      this.bOverColor = ignorePunctuation? 'white' : 'red';
      this.fColor = ignorePunctuation? 'white' : 'black';
      this.fOverColor = ignorePunctuation? 'black' : 'white';
      sm.changeScene('Game',{level:param.level});
    }},
    
    {x:20,y:360,width:610,height:50,font:'24px JKfont',textAlign:'center',mouseOver:0,
    bColor:bColor = ignoreSymbol? 'red' : 'white',fColor:ignoreSymbol? 'white' : 'black',
    bOverColor:ignoreSymbol? 'white' : 'red',fOverColor:ignoreSymbol? 'black' : 'white', labelOffset:10,
    label:ignoreSymbol? '記号を無視する(変更するとやり直しになります)' : '記号を無視しない(変更するとやり直しになります)',
    onClick:function(){
      ignoreSymbol = !ignoreSymbol;
      this.label = ignoreSymbol? '記号を無視する(変更するとやり直しになります)' : '記号を無視しない(変更するとやり直しになります)';
      this.bColor = ignoreSymbol? 'red' : 'white';
      this.bOverColor = ignoreSymbol? 'white' : 'red';
      this.fColor = ignoreSymbol? 'white' : 'black';
      this.fOverColor = ignoreSymbol? 'black' : 'white';
      sm.changeScene('Game',{level:param.level});
    }},
  ];

  this.problems = [];
  this.pCount = 0;
  this.symbolList = ['!','！','?','？','(','（',')','）','/','／',,'"','”',"’",'&','＆','【','】'];
  this.punctuationList = ['.','。',',','、'];
  
  //問題のコピー
  let tmpProblem = [];
  for(let i of problemList[param.level]){
    tmpProblem.push({text:i.text,hiragana:i.hiragana});
  }
  //問題のシャッフル
  for(let i=tmpProblem.length-1;i>0;--i){
    let r = Math.floor(Math.random()*(i+1));
    let tmp = tmpProblem[i];
    tmpProblem[i] = tmpProblem[r];
    tmpProblem[r] = tmp;
  }
  //問題の代入
  for(let i=0;i<tmpProblem.length;++i){
    if(ignorePunctuation){
      for(let j of this.punctuationList){
        while(tmpProblem[i].text != tmpProblem[i].text.replace(j,'')){
          tmpProblem[i].text = tmpProblem[i].text.replace(j,''); 
        }
        while(tmpProblem[i].hiragana != tmpProblem[i].hiragana.replace(j,'')){
          tmpProblem[i].hiragana = tmpProblem[i].hiragana.replace(j,''); 
        }
      }
    }
    if(ignoreSymbol){
      for(let j of this.symbolList){
        while(tmpProblem[i].text != tmpProblem[i].text.replace(j,'')){
          tmpProblem[i].text = tmpProblem[i].text.replace(j,''); 
        }
        while(tmpProblem[i].hiragana != tmpProblem[i].hiragana.replace(j,'')){
          tmpProblem[i].hiragana = tmpProblem[i].hiragana.replace(j,''); 
        }
      }
    }
    this.problems.push(new Problem(tmpProblem[i].text,tmpProblem[i].hiragana));
  }

  this.isActive = false;
  this.nowTime = gameSec[param.level];
  
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
      ctx.drawImage(badNatori,0,0,badNatori.width,badNatori.height,700,230,250,250);
    }else{
      ctx.drawImage(normalNatori,0,0,normalNatori.width,normalNatori.height,700,230,250,250);
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

      ctx.font = '18px JKfont';
      ctx.fillStyle = 'gray';
      ctx.fillText(p.textH,80,140);

      ctx.font = '24px JKfont';
      ctx.font = (ctx.measureText(p.text).width > 800)? '18px JKfont':'24px JKfont';
      ctx.fillStyle = 'black';
      ctx.fillText(p.text,80,170);
      
      ctx.font = '24px JKfont';
      ctx.font = (ctx.measureText(p.getSelectText()).width > 800)? '18px JKfont':'24px JKfont';
      ctx.fillStyle = 'gray';
      ctx.fillText(p.getSelectText(),80,205);
      ctx.fillStyle = 'black';
      ctx.fillText(p.getNowText(),80,205);
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
      this.nowTime = gameSec[param.level] - Math.floor((date.getTime() - this.startTime) / 1000);

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
  
  this.ignopreList = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
  'Shift','Enter','Control','Alt','Backspace','Escape','Zenkaku','Hankaku','Tab','Alphanumeric','Meta','Alt','Convert','NonConvert','Hiragana','ContextMenu',
  'Insert','Home','PageUp','Delete','End','PageDown','ArrowUp','ArrowDown','ArrowRight','ArrowLeft','ScrollLock'];

  this.keyPress = function(e){
    if(this.isActive){
      //リトライ
      if(e.key == 'Escape'){
        sm.changeScene('Game',{level:param.level});
      }

      if(this.ignopreList.find(function(element){return element == e.key})==undefined){    
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
