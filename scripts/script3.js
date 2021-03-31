var images = ['pal1.png', 'pal3.png', 'pal2.png', 'pal4.png']
var backimages = ['pal4.png', 'pal2.png', 'pal3.png', 'pal1.png']

var current = 0;
var position = 10;
var doesitgo = false;
var isspeaking = false;
var goingback = false;


function comeback()
{

 if (goingback) return;
  goingback=true;
  image.src = "Gallery/" + images[current];
  // image.style.left = 10 + "px";
image.src = "Gallery/palall.png";
var current = 0;
clearInterval(rep);

rep = setInterval(nextImage, 200);


}

function nextImage() {


  var image = document.getElementById('image');
  current = (current + 1) % backimages.length;

  image.src = "Gallery/" + backimages[current];
  image.style.left = position + "px";
  console.log(position + "px");
  position = position + 12;
  if (goingback)   position = position - 24;
  if (position <10) position =10;
    doesitgo = false;

}

function palspeak() {

  if (current == 1) {
    current = 2;
  } else {
    current = 1;
  }

  console.log(current);

  var image = document.getElementById('image');
  if (current == 1) {
    image.src = "Gallery/palall.png";
  } else if (current == 2) {
    image.src = "Gallery/palspeak2.png";
  }
  image.style.left = position + "px";
  console.log(position + "px");


}


var rep;

function stop() {
  isspeaking = false;
  doesitgo = false;
  goingback=false;
  var image = document.getElementById('image');
  image.src = "Gallery/palall.png";
  clearInterval(rep);

}


function start() {


  if (doesitgo) return;
  goingback=false;
  doesitgo = true;
  isspeaking = false;
  var current = 0;
  clearInterval(rep);

  rep = setInterval(nextImage, 200);


}

function speak() {
  if (isspeaking) return;
  doesitgo = false;
  isspeaking = (true);
  clearInterval(rep);
  rep = setInterval(palspeak, 200);


}
