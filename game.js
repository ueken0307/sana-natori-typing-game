var Game = function(param){
  this.problems = [];
  this.pCount = 0;
  for(let i=0;i<param.problems.length;++i){
    this.problems.push(new Problem(param.problems[i].text,param.problems[i].hiragana));
  }

  this.draw = function(){
    canvasReset();
    let p=this.problems[this.pCount];
    
    ctx.font = '48px serif';
    ctx.strokeStyle = 'blue';
    ctx.strokeText(p.text,0,40);
    
    ctx.fillStyle = 'black';
    ctx.strokeText(p.getSelectText(),0,80);
    ctx.fillText(p.getNowText(),0,80);
  }

  this.update = function(){

  }

  this.keyPress = function(e){
    let allowList = ['!','?','/','.',',','-','(',')']
    const isAllow = function(key){
      for(let i of allowList){if(i == key){return true;break;}}
      return false;
    }
    
    if((48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90) || (97 <= e.keyCode && e.keyCode <= 122) || isAllow(e.key)){
      
      ctx.clearRect(0,0,canvas.width,canvas.height);
      
      let p = this.problems[this.pCount];
      
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
        
        ctx.font = '24px serif';
        ctx.fillStyle = 'red';
        ctx.fillText('OK!',0,120);
        console.log('ok!');
        
        //候補の中で、最後まで当てはまったやつがあるならその文字は終わり
        for(let i of tmpList){
          if(p.sCount == p.alphabet[p.tCount][i].length){
            if(p.tCount+1 < p.alphabet.length){
              p.tCount++;
              p.sCount = 0;
              console.log('end!')
            }else{
              p.sCount = 0;
              console.log('end!')
              
              p.tCount=0;
              this.pCount++;
              console.log('nextProblem!!');
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
          ctx.font = "24px serif";
          ctx.fillStyle = 'blue';
          ctx.fillText('NG!',0,120);
          console.log('ng!');
        }
      }
    }
  }

};

var sampleProblems = [
  {text:'待って無理',hiragana:'まってむり'},
  {text:'茶碗蒸し',hiragana:'ちゃわんむし'},
  {text:'名取さなすこすこ',hiragana:'なとりさなすこすこ'},
  {text:'んなに',hiragana:'んなに'},
  {text:'はい',hiragana:'はい'},
  {text:'!?(.,/-)',hiragana:'!?(.,/-)'},
  {text:'1234567890',hiragana:'1234567890'},
  {text:'abcdefghijklmnopqrstuvwxyz',hiragana:'abcdefghijklmnopqrstuvwxyz'},
  {text:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',hiragana:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
];