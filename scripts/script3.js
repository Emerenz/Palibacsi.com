var images = ['pal1.png', 'pal3.png', 'pal2.png', 'pal4.png']
var backimages = ['pal4.png', 'pal2.png', 'pal3.png', 'pal1.png']

var current = 0;
var position = 10;
var step=12;
var doesitgo = false;
var isspeaking = false;
var goingback = false;
var firstspeak = true;
var currentspeak = 0;
var wasgoingback = false;
var speakarray = ['palall.png','palspeak2.png'];

function comeback()
{

 if (goingback) return;
  goingback=true;
  image.src = "Gallery/" + images[current];
  // image.style.left = 10 + "px";
image.src = "Gallery/palall.png";
var current = 0;
clearInterval(rep);
firstspeak=true;

rep = setInterval(nextImage, 200);


}

function nextImage() {


  var image = document.getElementById('image');
  current = (current + 1) % backimages.length;

  image.src = "Gallery/" + backimages[current];
  image.style.left = position + "px";
  console.log(position + "px");
  position = position + step;
  if (goingback)   position = position - 2*step;
  if (position <step) position =step;
    doesitgo = false;

}

function palspeak() {
currentspeak = (currentspeak+1)%2;

  console.log(currentspeak);

  var image = document.getElementById('image');
    console.log(position + "px");
image.style.left = position + "px";
image.src = "Gallery/" + speakarray[currentspeak];


}


var rep;

function stop() {
  isspeaking = false;
  doesitgo = false;
  if (goingback) wasgoingback = true;
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
  wasgoingback = false;
  var current = 0;
  clearInterval(rep);
firstspeak=true;
  rep = setInterval(nextImage, 200);


}

function speak() {
  if (isspeaking) return;
  console.log(window.firstspeak);
  console.log("before " + position);
  if(firstspeak && !wasgoingback) {console.log("OK"); position=position-step;console.log("after"+position);}
  else if (firstspeak && wasgoingback) {console.log("OK"); position=position+step;console.log("after"+position);}


  firstspeak=false;
  doesitgo = false;
  isspeaking = (true);
  clearInterval(rep);
  console.log(position);

  console.log(position);
  rep = setInterval(palspeak, 200);



}
