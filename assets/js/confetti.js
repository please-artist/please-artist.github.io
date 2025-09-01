function startConfetti(){
  const canvas=document.getElementById('confetti');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  const conf=[];
  for(let i=0;i<200;i++){
    conf.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*6+2,
      d:Math.random()*2
    });
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="gold";
    ctx.beginPath();
    for(let i=0;i<conf.length;i++){
      let c=conf[i];
      ctx.moveTo(c.x,c.y);
      ctx.arc(c.x,c.y,c.r,0,Math.PI*2,true);
    }
    ctx.fill();
    update();
  }
  function update(){
    for(let i=0;i<conf.length;i++){
      let c=conf[i];
      c.y+=c.d;
      if(c.y>canvas.height){
        c.y=0; c.x=Math.random()*canvas.width;
      }
    }
  }
  setInterval(draw,30);
}
