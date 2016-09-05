function Blob(x,y,r) {
	this.pos = createVector(x, y);
	this.r = r;
	this.vel = createVector(mouseX - width/2, mouseY - height/2);
	newvel.div(50);
	newvel.limit(3);
	this.vel.lerp(newvel, 0.2);
	}

	this.eats = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if(d < this.r + other.r) {
			var sum = PI * this.r * this.r + PI *other * other.r;
			this.r sqrt(sum/PI);
			return true;
		} else {
			return false;
		}
	}

	this.constrain = function() {
		blob.pos.x = constrain(blob.pos.x, -width / 4, width / 4);
		blob.pos.y = constrain(blob.pos.y, -height / 4, height / 4);
	}

	this.show = function () {
		// fill(255);
		// ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);

		push();
		translate(this.pos.x, this.pos.y);
		beginShape();
		for (var a = 0; a < TWO_PI; a += 0.1) {
			var x = this.r * cos(a);
			var y = this.r * sin(a);
			vertex(x, y);
		};

	}
}