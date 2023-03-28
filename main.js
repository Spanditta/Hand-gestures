Webcam.set(
    {
        width:350,
        height:250,
        image_format:'png',
        png_quality:90
    }
);
camera= document.getElementById('pic');
Webcam.attach('#pic');

function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured").innerHTML='<img id="im" src="'+data_uri+'"/>';
    });
}
prediction1='';
prediction2='';

function speak(){
    var apilink=window.speechSynthesis;
    var speak1='your first prediction is '+ prediction1;
    var speak2='your second prediction is '+ prediction2;
    var speakthis= new SpeechSynthesisUtterance(speak1+speak2);
    apilink.speak(speakthis);


}
console.log('ml5version: ', ml5.version);
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CbPVYcXah/model.json',modelLoaded);
function modelLoaded(){
console.log('MODEL LOADED!!!!!!!!')
}

function predict(){
    i1=document.getElementById('im');
mymodel.classify(i1,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);

}
else{
    console.log(results);
document.getElementById('em').innerHTML=results[0].label;
document.getElementById('em2').innerHTML=results[1].label;
prediction1=results[0].label;
prediction2=results[1].label;
speak();
if(results[0].label=='All the Best'){
    document.getElementById('ej').innerHTML='&#128077;&#127995;'
}
if(results[0].label=='Not good'){
    document.getElementById('ej').innerHTML='&#128078;&#127995;'
}
if(results[0].label=='Wonderful'){
    document.getElementById('ej').innerHTML='&#128076;&#127995;'
}

if(results[1].label=='All the Best'){
    document.getElementById('ej2').innerHTML='&#128077;&#127995;'
}
if(results[2].label=='Not Good'){
    document.getElementById('ej2').innerHTML='&#128078;&#127995;'
}
if(results[3].label=='Wonderful'){
    document.getElementById('ej2').innerHTML='&#128076;&#127995;'
}

}
}
