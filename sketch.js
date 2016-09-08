var blob;
var blobs = [];
var blobs_number = 255;
var circles = [];
var blob_r_min = 10;
var blob_r_max = 25;
var separation = 1;    // The real separation is half this value

function setup() {
  createCanvas(600, 600);
 
  calc_circles(blob_r_min, blob_r_max);
  
  // for (var i = 0; i < blobs_number; i++) {
  //   blobs[i] = new Blob(random(width), random(height), blob_r);
  // }

}

function draw() {
  background(255);
  
    for (var i = 0; i < circles.length; i++) {
    // THESE ARE PLAIN ELLIPSES
    // fill(255, 0, 150, 100);
    // noStroke();
    // ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    
    
    // THESE ARE SHAPES
    
    fill(255, 0, 150, 100);
    noStroke();
    
    push();
    translate(circles[i].x, circles[i].y);
    beginShape();

    for (var a = 0; a < TWO_PI; a += 0.1) {
      var r_ = circles[i].r;
      var x_ = circles[i].r * cos(a);
      var y_ = circles[i].r * sin(a);
      vertex(x_, y_);

    }
    endShape();
    pop();
 
  }

  // for (var i = 0; i < blobs.length; i++) {
  
  // blobs[i].show();
  // blobs[i].update();
  // }
}