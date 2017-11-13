$(document).ready(function() {
    var myElement = document.getElementById("hello1");
    document.getElementById("demo1").innerHTML = "The text from the hello1 class is " + myElement.innerHTML;

    var x = document.getElementById("hello2");
    document.getElementById("demo2").innerHTML = "The hello2 class says " + x.innerHTML;


    document.getElementById('btn1').onclick = function (event) {
        document.getElementById('box1').style.backgroundColor = "#234";
        document.getElementById('box1').style.width = "100%";
    }


});
