var images = ['pal1.png', 'pal3.png', 'pal2.png', 'pal4.png']

var current = 0;
var position = 100;
var doesitgo = true;

function nextImage() {

var image = document.getElementById('image');
current=(current+1)%images.length;

image.src="Gallery/"+ images[current];
image.style.left=position+"px";
console.log(position+"px");
position= position+1;

}

 var rep;

function start(){
 
 if (!doesitgo) return;
rep = setInterval(nextImage, 200);
doesitgo = false;


}
