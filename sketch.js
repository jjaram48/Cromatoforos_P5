var blob;
var blobs = [];
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  blob = new Blob(0,0,200);
}

function draw() {
  background(109, 206, 242);

  translate(width/2, height/2, 2);
  var newzoom = 128 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  blob.show();
  blob.update();
  blob.constrain();
}