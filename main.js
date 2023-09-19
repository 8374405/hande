Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureimage'src='"+data_uri+"'>"
    })
}
console.log('ml5 version;',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xokE_zCk1/model.json",modelloaded)
function modelloaded(){
    console.log("modelloaded successfully")
}
function speak(){
    var synth=window.speechSynthesis
    speak_data_1="first predittion is"+predition1
    speak_data_2="seconde predittion is"+predition2
    var utter=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
    synth.speak(utter)
}