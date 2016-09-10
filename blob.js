function Blob(x, y, r, xoff) {
  this.pos = createVector(x, y);
  this.r = r;
  this.xoff = 0;
  // this.yoff = yoff;x

  var yoff = 0;

  this.update = function() {
  }

  // this.show = function() {
  //   for (var i = 0; i < blobs.length; i++) {
  //     fill(255, 0, 150, 100);
  //     noStroke();
  //     // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  //
  //     push();
  //     translate(this.pos.x, this.pos.y);
  //     beginShape();
  //     // var xoff = 0;
  //     for (var a = 0; a < TWO_PI; a += 0.1) {
  //
  //       //moving effect
  //       // var offset = map(noise(xoff + yoff), 0, 1, -25, 25);
  //
  //       var offset = map(noise(this.xoff, yoff), 0, 1, -radius_difference, radius_difference);
  //       var r = this.r + offset;
  //       var x = r * cos(a);
  //       var y = r * sin(a);
  //       vertex(x, y);
  //       this.xoff += 0.025;
  //       // ellipse(x, y, 4, 4);
  //     }
  //     endShape();
  //     pop();
  //   }
  //   yoff += 0.01;
  // }
}
