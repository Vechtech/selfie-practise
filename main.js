var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {

    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function (event) {

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();

}
//First Part-Speech to text is complete
function speak() {

    var synth = window.speechSynthesis;
    var speakline = "Taking Selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakline);
    synth.speak(utterthis);
    Webcam.attach(camera);
    takesnapshot();
    save();
console.log("say");
}
//second part of text to speech complete
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90

});

function takesnapshot(){

Webcam.snap(function (data_uri){

document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>";

}); 
console.log("click");
}

function save(){

link = document.getElementById("link");
image = document.getElementById("selfie").src;
link.href = image;
link.click();
console.log("save");
}