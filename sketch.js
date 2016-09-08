var blob;
var blobs = [];
var blobs_number = 40;
var circles = [];
var blob_r_min = 20;
var blob_r_max = 55;
var separation = 15; // The real separation is half this value
var yoff = 0;
var radius_difference = 4;

var mic;

function setup() {
  createCanvas(600, 600);
  
  calc_circles(blob_r_min, blob_r_max);

  // for (var i = 0; i < blobs_number; i++) {
  //   blobs[i] = new Blob(random(width), random(height), blob_r);
  // }

  mic = new p5.AudioIn()
  mic.start();

}

function update() {
  radius_difference = mic.getLevel();
  // ellipse(width / 2, constrain(height - micLevel * height * 5, 0, height), 10, 10);
  // return (micLevel);
}

function draw() {
  background(255);
  update();
  display();

  println(radius_difference);

  yoff += 0.01;

  // for (var i = 0; i < blobs.length; i++) {

  // blobs[i].show();
  // blobs[i].update();
  // }
}