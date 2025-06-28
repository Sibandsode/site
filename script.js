// var canvas;
// var stage;
// var container;
// var captureContainers;
// var captureIndex;

// function init() {
//   // create a new stage and point it at our canvas:
//   canvas = document.getElementById("testCanvas");
//   stage = new createjs.Stage(canvas);
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   var w = canvas.width;
//   var h = canvas.height;

//   container = new createjs.Container();
//   stage.addChild(container);

//   captureContainers = [];
//   captureIndex = 0;

//   // create a large number of slightly complex vector shapes, and give them random positions and velocities:
// 		for (var i = 0; i < 100; i++) {
// 			var heart = new createjs.Shape();
// 			heart.graphics.beginFill(createjs.Graphics.getHSL(Math.random() * 30 - 45, 100, 50 + Math.random() * 30));
// 			heart.graphics.moveTo(0, -12).curveTo(1, -20, 8, -20).curveTo(16, -20, 16, -10).curveTo(16, 0, 0, 12);
// 			heart.graphics.curveTo(-16, 0, -16, -10).curveTo(-16, -20, -8, -20).curveTo(-1, -20, 0, -12);
// 			heart.y = -100;

// 			container.addChild(heart);
// 		}

//   var text = new createjs.Text("the longer I'm with you\nthe more I love you", "bold 24px Arial", "#312");
//   text.textAlign = "center";
//   text.x = w / 2;
//   text.y = h / 2 - text.getMeasuredLineHeight();
//   stage.addChild(text);

//   for (i = 0; i < 100; i++) {
//     var captureContainer = new createjs.Container();
//     captureContainer.cache(0, 0, w, h);
//     captureContainers.push(captureContainer);
//   }

//   // start the tick and point it at the window so we can do some work before updating the stage:
//   createjs.Ticker.timingMode = createjs.Ticker.RAF;
//   createjs.Ticker.on("tick", tick);
// }

// function tick(event) {
//   var w = canvas.width;
//   var h = canvas.height;
//   var l = container.numChildren;

//   captureIndex = (captureIndex + 1) % captureContainers.length;
//   stage.removeChildAt(0);
//   var captureContainer = captureContainers[captureIndex];
//   stage.addChildAt(captureContainer, 0);
//   captureContainer.addChild(container);

//   // iterate through all the children and move them according to their velocity:
// 		for (var i = 0; i < l; i++) {
// 			var heart = container.getChildAt(i);
// 			if (heart.y < -50) {
// 				heart._x = Math.random() * w;
// 				heart.y = h * (1 + Math.random()) + 50;
// 				heart.perX = (1 + Math.random() * 2) * h;
// 				heart.offX = Math.random() * h;
// 				heart.ampX = heart.perX * 0.1 * (0.15 + Math.random());
// 				heart.velY = -Math.random() * 2 - 1;
// 				heart.scale = Math.random() * 2 + 1;
// 				heart._rotation = Math.random() * 40 - 20;
// 				heart.alpha = Math.random() * 0.75 + 0.05;
// 				heart.compositeOperation = Math.random() < 0.33 ? "lighter" : "source-over";
// 			}
// 			var int = (heart.offX + heart.y) / heart.perX * Math.PI * 2;
// 			heart.y += heart.velY * heart.scaleX / 2;
// 			heart.x = heart._x + Math.cos(int) * heart.ampX;
// 			heart.rotation = heart._rotation + Math.sin(int) * 30;
// 		}

//   captureContainer.updateCache("source-over");

//   // draw the updates to stage:
//   stage.update(event);
// }

// init();

// Your CreateJS code (unchanged)
var canvas;
var stage;
var container;
var captureContainers;
var captureIndex;

function init() {
  canvas = document.getElementById("testCanvas");
  stage = new createjs.Stage(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var w = canvas.width;
  var h = canvas.height;

  container = new createjs.Container();
  stage.addChild(container);

  captureContainers = [];
  captureIndex = 0;

  for (var i = 0; i < 100; i++) {
    var heart = new createjs.Shape();
    heart.graphics.beginFill(createjs.Graphics.getHSL(Math.random() * 30 - 45, 100, 50 + Math.random() * 30));
    heart.graphics.moveTo(0, -12).curveTo(1, -20, 8, -20).curveTo(16, -20, 16, -10).curveTo(16, 0, 0, 12);
    heart.graphics.curveTo(-16, 0, -16, -10).curveTo(-16, -20, -8, -20).curveTo(-1, -20, 0, -12);
    heart.y = -100;
    container.addChild(heart);
  }

  var text = new createjs.Text("Sending Special wishes\n for a birthday\nthat is just as lovely, happy and sweet\n as you are! \n Happy Birthday Nikhil \n lots of loveee", "bold 24px Arial", "#312");
  text.textAlign = "center";
  text.x = w / 2;
  text.y = h / 2 - text.getMeasuredLineHeight();
  stage.addChild(text);

  for (i = 0; i < 100; i++) {
    var captureContainer = new createjs.Container();
    captureContainer.cache(0, 0, w, h);
    captureContainers.push(captureContainer);
  }

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", tick);
}

function tick(event) {
  var w = canvas.width;
  var h = canvas.height;
  var l = container.numChildren;

  captureIndex = (captureIndex + 1) % captureContainers.length;
  stage.removeChildAt(0);
  var captureContainer = captureContainers[captureIndex];
  stage.addChildAt(captureContainer, 0);
  captureContainer.addChild(container);

  for (var i = 0; i < l; i++) {
    var heart = container.getChildAt(i);
    if (heart.y < -50) {
      heart._x = Math.random() * w;
      heart.y = h * (1 + Math.random()) + 50;
      heart.perX = (1 + Math.random() * 2) * h;
      heart.offX = Math.random() * h;
      heart.ampX = heart.perX * 0.1 * (0.15 + Math.random());
      heart.velY = -Math.random() * 2 - 1;
      heart.scale = Math.random() * 2 + 1;
      heart._rotation = Math.random() * 40 - 20;
      heart.alpha = Math.random() * 0.75 + 0.05;
      heart.compositeOperation = Math.random() < 0.33 ? "lighter" : "source-over";
    }
    var int = (heart.offX + heart.y) / heart.perX * Math.PI * 2;
    heart.y += heart.velY * heart.scaleX / 2;
    heart.x = heart._x + Math.cos(int) * heart.ampX;
    heart.rotation = heart._rotation + Math.sin(int) * 30;
  }

  captureContainer.updateCache("source-over");
  stage.update(event);
}

init();

// Modal Logic
document.addEventListener("DOMContentLoaded", function() {
  var albumBtn = document.getElementById("albumBtn");
  var albumModal = document.getElementById("albumModal");
  var closeModal = document.getElementById("closeModal");

  albumBtn.onclick = function() {
    albumModal.style.display = "block";
  };
  closeModal.onclick = function() {
    albumModal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == albumModal) {
      albumModal.style.display = "none";
    }
  };
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
window.addEventListener('DOMContentLoaded', resizeCanvas);

document.getElementById('clickMeBtn').addEventListener('click', function() {
  const audio = document.getElementById('backgroundAudio');
  audio.pause();  // Stop current audio
  audio.currentTime = 0;  // Reset position
  window.open('video.html', '_blank');  // Open video page
});
document.getElementById('clickMeBtn').addEventListener('click', function() {
  // Just navigate to the video page in the same tab
  window.location.href = 'video.html';
});
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('backgroundAudio');
  const playBtn = document.getElementById('playMusicBtn');
  if (audio && playBtn) {
    audio.play().then(() => {
      playBtn.style.display = 'none';
    }).catch(() => {
      playBtn.style.display = 'block';
    });
    playBtn.addEventListener('click', function() {
      audio.play();
      playBtn.style.display = 'none';
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('backgroundAudio');
  const speakerBtn = document.getElementById('speakerBtn');
  const speakerIcon = document.getElementById('speakerIcon');

  // Initial state: show muted or unmuted icon
  function updateIcon() {
    if (audio.paused || audio.muted) {
      speakerIcon.textContent = '🔈'; // Muted icon
    } else {
      speakerIcon.textContent = '🔊'; // Playing icon
    }
  }

  // Try to play audio on first user interaction (for autoplay policy)
  speakerBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.muted = false;
      audio.play();
    } else {
      audio.pause();
    }
    updateIcon();
  });

  // Update icon if audio is paused/played elsewhere
  audio.addEventListener('play', updateIcon);
  audio.addEventListener('pause', updateIcon);
  audio.addEventListener('volumechange', updateIcon);

  // Set initial icon
  updateIcon();
});
