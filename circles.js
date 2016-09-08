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