var blob;
var blobs = [];
var blobs_number = 15;
var zoom = 1;
var circles = [];

function setup() {
  createCanvas(600, 600);
  
    // var overlapping = false;
    var protection = 0;
  
  // blob = new Blob(0,0,200);
  
while(circles.length < 255){
  // for (var i = 0; i < 25; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: 25
    }

  var overlapping = false;
  
  for (var j = 0; j < circles.length; j++) {
    var other = circles[j];
    var d = dist(circle.x, circle.y, other.x, other.y);

    if (d < circle.r + other.r) {
      //THEY ARE OVERLAPPING!
      overlapping = true;
      break;
    }
  }

  if (!overlapping) {
    circles.push(circle);
  }
  
  protection++;
  
  if (protection > 10000){
    println("could not fit them all" );
    break;
  }
  
  // println(protection);
  
}

  for (var i = 0; i < circles.length; i++) {
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
  // for (var i = 0; i < blobs_number; i++) {
  //   blobs[i] = new Blob(random(width), random(height), 50);
  // }

  // println(circles.length);
}

function draw() {
  // background(255);

  // translate(width / 2, height / 2, 2);
  // var newzoom = 128 / blob.r;
  // zoom = lerp(zoom, newzoom, 0.1);
  // scale(zoom);
  // translate(-blob.pos.x, -blob.pos.y);

  // blob.show();
  // blob.update();
  // blob.constrain();



  // for (var i = 0; i < blobs.length; i++) {
  // translate(width / 2, height / 2, 2);
  // var newzoom = 128 / blobs[i].r;
  // zoom = lerp(zoom, newzoom, 0.1);
  // scale(zoom);
  // translate(-blobs[i].pos.x, -blobs[i].pos.y);

  // blobs[i].show();
  // blobs[i].update();
  // blobs[i].constrain();
  // println(i);
  // }
}