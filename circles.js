function calc_circles(blob_r_min_t1, blob_r_min_t2) {

  var blob_r_min_in = blob_r_min_t1;
  var blob_r_max_in = blob_r_min_t2;
  // var overlapping = false;
  var protection = 0;

  // blob = new Blob(0,0,200);

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

    // println(protection);

  }
}

function display(){

    for (var i = 0; i < circles.length; i++) {
    // THESE ARE PLAIN ELLIPSES
    // fill(255, 0, 150, 100);
    // noStroke();
    // ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    
    // THESE ARE SHAPES
    
    fill(255, 0, 150, 100);
    noStroke();
    var xoff = 0;

    push();
    translate(circles[i].x, circles[i].y);
    beginShape();

    for (var a = 0; a < TWO_PI; a += 0.1) {
      
      var offset = map(noise(xoff, yoff), 0, 1, -radius_difference, radius_difference);

      var r_ = circles[i].r + offset;
      var x_ = r_ * cos(a);
      var y_ = r_ * sin(a);

      vertex(x_, y_);

      xoff += 0.05;

    }
    endShape();
    pop();


  }
}
