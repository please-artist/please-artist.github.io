function startSketch() {
  const canvas = document.getElementById('sketchCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = "assets/images/sketch/photo_sketch_imresizer.jpg";
  img.onload = () => {
    const cw = canvas.width;
    const ch = canvas.height;

    let step = 0;
    const interval = setInterval(() => {
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(
        img,
        0, 0, img.width, step,   
        0, 0, cw, (step * ch) / img.height
      );
      step += 5;
      if (step >= img.height) {
        clearInterval(interval);
        document.getElementById('curtainStage').classList.remove('hidden');
        document.getElementById('sketchNext').classList.remove('hidden');
      }
    }, 5);
  };
}


