var blob;
var blobs = [];
var blobs_number = 15;
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  // blob = new Blob(0,0,200);

  for (var i = 0; i < blobs_number; i++) {
    blobs[i] = new Blob(random(width), random(height), 50);
  }
}

function draw() {
  background(109, 206, 242);

  // translate(width / 2, height / 2, 2);
  // var newzoom = 128 / blob.r;
  // zoom = lerp(zoom, newzoom, 0.1);
  // scale(zoom);
  // translate(-blob.pos.x, -blob.pos.y);

  // blob.show();
  // blob.update();
  // blob.constrain();

  for (var i = 0; i < blobs.length; i++) {
    // translate(width / 2, height / 2, 2);
    // var newzoom = 128 / blobs[i].r;
    // zoom = lerp(zoom, newzoom, 0.1);
    // scale(zoom);
    // translate(-blobs[i].pos.x, -blobs[i].pos.y);

    blobs[i].show();
    // blobs[i].update();
    // blobs[i].constrain();
    println(i);
  }

}