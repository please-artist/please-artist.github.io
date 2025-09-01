const intro = document.getElementById('intro');
const sketchStage = document.getElementById('sketchStage');
const curtainStage = document.getElementById('curtainStage');
const balloonStage = document.getElementById('balloonStage');
const cakeStage = document.getElementById('cakeStage');
const slideshowStage = document.getElementById('slideshowStage');
const finalStage = document.getElementById('finalStage');
const bgMusic = document.getElementById('bgMusic');

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('startBtn').classList.add('hidden');
  intro.classList.add('hidden');
  sketchStage.classList.remove('hidden');
  bgMusic.play();
  startSketch();
});

document.getElementById('sketchNext').addEventListener('click', () => {
  document.getElementById('sketchNext').classList.add('hidden');
  sketchStage.classList.add('hidden');
  curtainStage.classList.remove('hidden');
  openCurtains();
});

document.getElementById('curtainNext').addEventListener('click', () => {
  document.getElementById('curtainNext').classList.add('hidden');
  document.getElementById('balloonNext').classList.remove('hidden');
  curtainStage.classList.add('hidden');
  balloonStage.classList.remove('hidden');
  showHeartBalloons();
});

document.getElementById('balloonNext').addEventListener('click', () => {
  document.getElementById('balloonNext').classList.add('hidden');
  document.getElementById('cakeNext').classList.remove('hidden');
  balloonStage.classList.add('hidden');
  cakeStage.classList.remove('hidden');
});

document.getElementById('cakeNext').addEventListener('click', () => {
  document.getElementById('cakeNext').classList.add('hidden');
  document.getElementById('slideshowNext').classList.remove('hidden');
  cakeStage.classList.add('hidden');
  slideshowStage.classList.remove('hidden');
  startSlideshow();
});

document.getElementById('slideshowNext').addEventListener('click', () => {
  document.getElementById('slideshowNext').classList.add('hidden');
  slideshowStage.classList.add('hidden');
  finalStage.classList.remove('hidden');
  startConfetti();
});
