lWy=0;
lWx=0;

rWy=0;
rWx=0;

halo="";
peterPan="";

function preload() {
  halo=loadSound('Halo.mp3');
  peterPan=loadSound('PeterPan.mp3')
}

function setup() {
  canvas=createCanvas(600,600);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
   console.log("Posenet is Initialized!");
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results);

    lWx=results[0].pose.leftWrist.x;
    lWy=results[0].pose.leftWrist.y;
    console.log("Left Wrist X= "+lwx+" Left Wrist Y= "+lwy);
    
    rWx=results[0].pose.righttWrist.x;
    rWy=results[0].pose.righttWrist.y;
    console.log("Right Wrist X= "+rwx+" Right Wrist Y= "+rwy);
    
  }
}

function draw() {
  image(video,0,0,600,600);
}