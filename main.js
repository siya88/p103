//https://teachablemachine.withgoogle.com/models/4ySPYv3S4/
Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90,

});

camera=document.getElementById("camera");
Webcam.attach("#camera");

//code to click a picture
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    
    })
    }
    console.log(ml5.version)
    //initialising a model
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4ySPYv3S4/model.json",modelloaded)
function modelloaded(){
    console.log("modelisloaded")
}

function check(){
    img=document.getElementById("captured_image")
    //executing a model
    classifier.classify(img,gotresults)
}
function gotresults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%"
    }
}