
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(900, 170);

    canvas = createCanvas(550, 500);
    canvas.position(150, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#969A97');
    document.getElementById("text_size").innerHTML = "Width and height of the text is = " + difference + "px";
    textSize(difference);
    fill('#fcbab6');
    text('Colour', 50, 400);
}