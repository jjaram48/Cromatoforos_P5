function calc_circles(blob_r_min_t1, blob_r_min_t2) {

    var blob_r_min_in = blob_r_min_t1;
    var blob_r_max_in = blob_r_min_t2;
    // var overlapping = false;
    var protection = 0;

    while (circles.length < blobs_number) {
        // for (var i = 0; i < 25; i++) {
        var circle = {
            x: random(width),
            y: random(height),
            r: random(blob_r_min_in, blob_r_max_in)
        }

        var overlapping = false;

        for (var j = 0; j < circles.length; j++) {
            var other = circles[j];
            var d = dist(circle.x, circle.y, other.x, other.y);

            if (d < circle.r + other.r + separation) {
                //THEY ARE OVERLAPPING OR EITHER TOO CLOSE!!!
                overlapping = true;
                break;
            }
        }

        if (!overlapping) {
            circles.push(circle);
        }

        protection++;

        if (protection > 10000) {
            println("could not fit them all, only " + circles.length);
            break;
        }

        if (circles.length >= blobs_number) {
            println("They're all in!");
        }
    }
}

function display() {

  for (var i = 0; i < blobs.length; i++) {
    fill(255, 0, 150, 100);
    noStroke();
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    blobs[i].xoff = xoff[i];
    push();
    translate(blobs[i].pos.x, blobs[i].pos.y);
    beginShape();

    for (var a = 0; a < TWO_PI; a += 0.1) {

      //moving effect
      // var offset = map(noise(xoff + yoff), 0, 1, -25, 25);

      var offset = map(noise(blobs[i].xoff, yoff), 0, 1, -radius_difference, radius_difference);
      var r = blobs[i].r + offset;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
      blobs[i].xoff += 0.025;
      // ellipse(x, y, 4, 4);
    }
    endShape();
    pop();
  }
  yoff += 0.01;
}
