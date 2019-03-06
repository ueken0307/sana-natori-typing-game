const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function canvasReset(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'pink';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function cornerRadiusRect(x,y,width,height){
  let sp = [{x:x + width/2,y:y},{x:x,y:y + height/2},{x:x + width/2,y:y + height},{x:x + width,y:y + height/2}];
  let co = [{x:x,y:y},{x:x,y:y + height},{x:x + width,y:y + height},{x:x + width,y:y}];
  ctx.beginPath();
  ctx.moveTo(sp[0].x,sp[0].y);
  for(let i=0;i<sp.length;++i){
    ctx.arcTo(co[i].x,co[i].y,sp[(i+1)%sp.length].x,sp[(i+1)%sp.length].y,height/2);
  }
  ctx.fill();
}