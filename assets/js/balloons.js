function openCurtains() {
  document.querySelector('.curtain.left').classList.add('open');
  document.querySelector('.curtain.right').classList.add('open');
  launchSmileyBalloons();
}

// Smiley balloons (float continuously)
function launchSmileyBalloons() {
  document.getElementById('curtainNext').classList.remove('hidden');
  const container = document.getElementById('smileyBalloons');
  const balloons = [];
  const balloons1 = [];

  for (let i = 0; i < 6; i++) {
    const img = document.createElement('img');
    img.src = "./assets/images/smiley/smiley" + (i+1) + ".png";
    img.style.position = 'absolute';
    img.style.bottom = '-100px';
    img.style.left = (10 + i * 15) + "%";
    img.style.width = "150px";
    img.style.background = "transparent";
    container.appendChild(img);

    balloons.push({ el: img, y: -100 });
  }
  for (let i = 0; i < 6; i++) {
    const img = document.createElement('img');
    img.src = "./assets/images/smiley/smiley" + (i+1) + ".png";
    img.style.position = 'absolute';
    img.style.bottom = '-100px';
    img.style.left = (10 + i * 15) + "%";
    img.style.width = "150px";
    img.style.background = "transparent";
    container.appendChild(img);

    balloons1.push({ el: img, y: -500 });
  }

  function animate() {
    balloons.forEach(b => {
      b.y += 1;
      b.el.style.bottom = b.y + "px";
      if (b.y > window.innerHeight + 200) {
        b.y = -100; // restart from below
      }
    });
    requestAnimationFrame(animate);
  }
  function animate1() {
    balloons1.forEach(b => {
      b.y += 1;
      b.el.style.bottom = b.y + "px";
      if (b.y > window.innerHeight + 200) {
        b.y = -100; // restart from below
      }
    });
    requestAnimationFrame(animate1);
  }
  animate();
  animate1();
}

// Heart balloons (rise once and stop)
function showHeartBalloons() {
  const container = document.getElementById('heartBalloons');
  const letters = ["H","B","D","T","A","N","U"];

  letters.forEach((ltr, i) => {
    const img = document.createElement('img');
    img.src = "./assets/images/BALLOONS/" + ltr + ".png";
    img.style.position = 'absolute';
    img.style.bottom = '-150px';
    img.style.left = (10 + i * 12) + "%";
    img.style.width = "120px";
    container.appendChild(img);

    let y = -150;
    function animate() {
      if (y < 200) {
        y += 2; // rising speed
        img.style.bottom = y + "px";
        requestAnimationFrame(animate);
      }
    }
    animate();
  });
}
