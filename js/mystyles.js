var myElement = document.getElementById("hello1");
document.getElementById("demo1").innerHTML = "The text from the hello1 class is " + myElement.innerHTML;

var x = document.getElementById("hello2");
document.getElementById("demo2").innerHTML = "The hello2 class says " + x.innerHTML;


document.getElementById('btn1').onclick = function(event) {
    document.getElementById('box1').style.backgroundColor = "#234";
    document.getElementById('box1').style.width = "100%";
}


function changeText(id) {
  id.innerHTML = "Shit!!! ";
}

function myFunction() {
  document.getElementById("demo1").innerHTML = "Text changed";
}

function myClick() {
  document.getElementById("demoClick").innerHTML = "Say something";
}


/* START ENLARGE IMAGE */
function bigImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}
function normalImg(x) {
  x.style.height = "50px";
  x.style.width = "50px";
} /* END ENLARGE IMAGE */


/* START MOUSEOVER TEXT COLOR CHANGE */
//document.getElementById('myMouse').onmouseOver = function() {mouseOver()};
//document.getElementById('myMouse').onmouseOut = function() {mouseOut()};
//document.getElementById("demo").addEventListener("mouseover", mouseOver);
//document.getElementById("demo").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("myMouse").style.color = "red";
}
function mouseOut() {
    document.getElementById("myMouse").style.color = "black";
} /* END MOUSEOVER TEXT COLOR CHANGE */


/* START JS-TOP */
document.getElementById('p1').innerHTML = 'This paragraph was changed from "What up doe???" to all of this.';
/* END JS-TOP */

/* START FB-COVER CHANGE */
document.getElementById('fbCover').src = 'img/facebook-cover-3.png';
/* END FB-COVER CHANGE */


/* START HIDE FB-COVER */

/* END HIDE FB-COVER */
