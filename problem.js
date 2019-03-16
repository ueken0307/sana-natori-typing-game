var Problem = function(text,hiragana){
  this.text = text;
  this.textH = hiragana;
  this.alphabet = convert2Alphabet(hiragana);
  this.tCount = 0; //textCount
  this.sCount = 0; //selectCount
  
  this.selectList = [];
  for(let i=0;i<this.alphabet.length;++i){
    let tmpList = [];
    for(let j=0;j<this.alphabet[i].length;++j){
      tmpList.push(j);
    }
    this.selectList.push(tmpList);
  }
  
  this.getNowText = function(){
    let tmpText = '';
    for(let i=0;i<=this.tCount;++i){
      if(i==this.tCount){
        for(let j=0;j<this.sCount;++j){
          tmpText+=this.alphabet[i][this.selectList[i][0]][j];
        }
      }else{
        tmpText+=this.alphabet[i][this.selectList[i][0]];
      }
    }
    return tmpText;
  }
  
  this.getSelectText = function(){
    let tmpText = '';
    for(let i=0;i<this.alphabet.length;++i){
      tmpText+=this.alphabet[i][this.selectList[i][0]];
    }
    return tmpText;
  }
}

function isSmall(c){
  return c == 'ぁ' || c == 'ぃ' || c == 'ぅ' || c == 'ぇ' || c == 'ぉ' ||
  c == 'ゃ' || c == 'ゅ' || c == 'ょ'; 
}

function convert2Alphabet(str){
  let result = [];
  
  for(let i=0;i<str.length;++i){
    let tmp = [];
    let s = str[i]
    let p = function(c){
      for(let j = 0;j<c.length;++j){
        tmp.push(c[j]);
      }
    };
    
    if(i+1<str.length && !isSmall(str[i]) && isSmall(str[i+1])){
      if(table[s+str[i+1]] != undefined){
        p(table[s+str[i+1]]);
      }
      
      for(let j = 0; j < table[s].length; ++j){
        for(let k = 0; k < table[str[i+1]].length; ++k){
          tmp.push(table[s][j] + table[str[i+1]][k]);
        }
      }
      i++;
    }else if(s=='ん'){
      if(i+1<str.length && str[i+1]!='ん' && str[i+1]!='な' && str[i+1]!='に' && str[i+1]!='ぬ' && str[i+1]!='ね' && str[i+1]!='の'){
        tmp.push('n');
      }
      p(table[s]);
    }else{
      p(table[s]);
    }
    result.push(tmp);
  }
  
  for(let i=0;i<result.length;++i){
    if(i+1<str.length && (result[i][0] == 'ltu' || result[i][0] == 'xtu' || result[i][0] == 'ltsu')){
      let initials = [];
      let isInclude = function(c){
        for(let j of initials){if(c == j){return true;}return false;}
      } 
      for(let j=0;j<result[i+1].length;++j){
        if(result[i+1][j].length > 1 && !isInclude(result[i+1][j][0])){
          initials.push(result[i+1][j][0]);
        }
      }
      for(let j of result[i]){
        initials.push(j);
      }
      result[i] = initials;
    }
  }
  
  return result;
}
