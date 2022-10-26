function preload() { }

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300)

    poseNet = ml5.poseNet(video, function() { console.log("PoseNet is Intitialised") });
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
}

function take_snapshot() {
    save('Rajveer.png');
}