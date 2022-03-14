prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height: 300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nLpaa8vAc/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}
function speak(){
    var Synth=window.speechSynthesis;
    speak_data1="First prediction is "+ prediction_1;
    speak_data_2=" and the second prediction is "+prediction_2;
    var Utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data_2);
    Synth.speak(Utterthis);
    console.log("I am inside speak function");
}
function predict(){
    speak();
}