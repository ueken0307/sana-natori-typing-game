const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function canvasReset(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'pink';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}