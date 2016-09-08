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
  // background(255);

  // for (var i = 0; i < blobs.length; i++) {
  
  // blobs[i].show();
  // blobs[i].update();
  // }
}