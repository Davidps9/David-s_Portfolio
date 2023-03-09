Mover mover;
void setup() {
  size(1920, 540);
  mover= new Mover();
  background(255);
}
void draw() {
  

  mover.update();
  mover.checkEdges();
  mover.display();


}
class Mover {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float topspeed;
  Mover() {
    location = new PVector(width/2, height/2);
    velocity = new PVector(0, 0);
    acceleration = new PVector(-0.1, 0.1);
    topspeed = 10;
  }
  void update() {
    velocity.add(acceleration);
    velocity.limit(topspeed);
    location.add(velocity);
    
  }
  void display() {
    fill(255,0);
    rect(0,0,location.x,location.y);
    rect(location.x,location.y,width,height);
    stroke(0);
    fill(175);
    ellipse(location.x, location.y, 32, 32);
  }

  void checkEdges() {
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0) {
      location.x = width;
    }
    if (location.y > height) {
      location.y = 0;
    } else if (location.y < 0) {
      location.y = height;
    }
  }
}
