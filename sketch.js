var blob;
var blobs = [];
var blobs_number = 40;
var circles = [];
var blob_r_min = 20;
var blob_r_max = 55;
var separation = 15; // The real separation is half this value
var xoff = [];       // DEFINES DIFFERENT XOFFSETS FOR EACH BLOB
var yoff = 0;
var radius_difference = 5;

function setup() {
  createCanvas(600, 600);

  calc_circles(blob_r_min, blob_r_max);  // CALCULATES THE X AND Y ACCORDING TO EACH R

  for (var i = 0; i < blobs_number; i++) {
    xoff[i] = random(-10,10);
    blobs[i] = new Blob(circles[i].x, circles[i].y, circles[i].r, xoff[i]);
  }
}

function draw() {
  background(255);
  display();

}
