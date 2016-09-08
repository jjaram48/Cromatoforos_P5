function calc_circles () {
   
    // var overlapping = false;
    var protection = 0;
  
  // blob = new Blob(0,0,200);
  
while(circles.length < 255){
  // for (var i = 0; i < 25; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(10, 25)
    }

  var overlapping = false;
  
  for (var j = 0; j < circles.length; j++) {
    var other = circles[j];
    var d = dist(circle.x, circle.y, other.x, other.y);

    if (d < circle.r + other.r) {
      //THEY ARE OVERLAPPING!
      overlapping = true;
      break;
    }
  }

  if (!overlapping) {
    circles.push(circle);
  }
  
  protection++;
  
  if (protection > 10000){
    println("could not fit them all" );
    break;
  }
  
  // println(protection);
  
}

  for (var i = 0; i < circles.length; i++) {
    
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    
  }
}