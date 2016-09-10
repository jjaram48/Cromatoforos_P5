var blob;
var blobs = [];
var blobs_number = 40;
var circles = [];
var blob_r_min = 20;
var blob_r_max = 55;
var separation = 15; // The real separation is half this value
var yoff = 0;
var radius_difference = 4;

function setup() {
  createCanvas(600, 600);

  calc_circles(blob_r_min, blob_r_max);

  for (var i = 0; i < blobs_number; i++) {
    blobs[i] = new Blob(circles[i].x, circles[i].y, circles[i].r);
  }

}

function draw() {
  background(255);

  // display();
  yoff += 0.01;

  for (var i = 0; i < circles.length; i++) {
  blobs[i].show();
  }
}
