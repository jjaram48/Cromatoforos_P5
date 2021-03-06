function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;

  var yoff = 0;

  this.update = function() {
  }

  this.show = function() {
    fill(255, 0, 150, 100);
    noStroke();
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);

    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    var xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.1) {

      //moving effect
      // var offset = map(noise(xoff + yoff), 0, 1, -25, 25);

      var offset = map(noise(xoff, yoff), 0, 1, -25, 25);
      var r = this.r + offset;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
      xoff += 0.025;
      // ellipse(x, y, 4, 4);
    }
    endShape();
    pop();

    yoff += 0.01;
  }
}