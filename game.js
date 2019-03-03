var problemList = [
  sampleProblems,
  sampleProblems,
  sampleProblems
];

var Game = function(param){
  this.problems = [];
  this.pCount = 0;
  for(let i=0;i<problemList[param.level].length;++i){
    this.problems.push(new Problem(problemList[param.level][i].text,problemList[param.level][i].hiragana));
  }
  this.syringe = new Image();
  this.syringe.src = 'syringe.png';
  this.natori = new Image();
  this.natori.src = 'natori.png';

  this.isActive = false;
  this.nowTime = 90;
  
  this.score = 0;
  this.keyCount = 0;
  this.missCount = 0;
  this.accuracy = 100.0;

  this.draw = function(){
    canvasReset();
    let p=this.problems[this.pCount];
    
    ctx.drawImage(this.syringe,0,0,1001,101,0,180,1000,100);
    ctx.drawImage(this.natori,0,0,800,800,700,280,200,200);

    ctx.font = '35px JKfont';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black'
    ctx.fillText(this.nowTime,900,50);

    ctx.fillText(this.score,600,50);
    ctx.fillText(this.accuracy.toFixed(1) + '%',700,50);

    ctx.font = '24px JKfont';
    ctx.textAlign = 'left';
    if(this.isActive){  
      ctx.fillStyle = 'black';
      ctx.fillText(p.text,80,220);
      
      ctx.fillStyle = 'gray';
      ctx.fillText(p.getSelectText(),80,260);
      ctx.fillStyle = 'black';
      ctx.fillText(p.getNowText(),80,260); 
    }else{
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      if(this.nowTime > 0){
        ctx.fillText('スペースキーでスタート',500,240);
      }else{
        ctx.fillText('おつかれさな〜',500,240);
      }
    }

    
  }

  this.update = function(){
    if(this.isActive){
      let date = new Date();
      this.nowTime = 90 - Math.floor((date.getTime() - this.startTime) / 1000);

      if(this.nowTime < 1){
        this.isActive = false;
        setTimeout(()=>this.finish(),2000); 
      }
    }
  }
  
  this.finish = function(){
    sm.changeScene('Result',{keyCount: this.keyCount,missCount: this.missCount,accuracy: this.accuracy,score: this.score,level:param.level});
  }

  this.keyPress = function(e){
    if(this.isActive){ 
      let allowList = ['!','?','/','.',',','-','(',')']
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

            playSE(ngSound);
          }
        }
      }
    }else{
      if(e.key == ' '){
        this.isActive = true;
        let date = new Date();
        this.startTime = date.getTime();
      }
    }
  }

  this.click = function(e){
    if(e.target.id == 'canvas'){
      //console.log(e.offsetX + ',' + e.offsetY);
    }
  }

  this.mouseMove = function(e){
    if(e.target.id == 'canvas'){
      //console.log(e.offsetX + ',' + e.offsetY);
    }
  }
};
