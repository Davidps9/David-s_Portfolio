Mover[] movers= new Mover [20];
int i;
void setup() {
  size(1920, 680);
  for ( i=0; i<movers.length; i++) {
    movers[i]= new Mover();
  }
  background(255);
}
void draw() {
  if (mousePressed) {
    background(255);
  }
  //if (mousePressed) {
  for ( i=0; i<movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
  //}
}
class Mover {
  PVector location;
  PVector velocity;
  PVector acceleration;
  PVector mouse;
  PVector dir;
  float topspeed;
  Mover() {
    location = new PVector(width/2+(10*i), height/2+(10*i));
    velocity = new PVector(0, 0);
    acceleration = new PVector();

    topspeed = 10;
  }
  void update() {
    mouse = new PVector(mouseX+(10*i), mouseY+(10*i));
    dir = PVector.sub(mouse, location);
    dir.normalize();
    dir.mult(0.5);
    acceleration= dir;
    velocity.add(acceleration);
    velocity.limit(topspeed);
    location.add(velocity);
   
  }
  void display() {

    stroke(0);
    fill(location.y*0.05, location.x/location.y, location.x*0.05);
    ellipse(location.x, location.y, 32, 32);
  }

  void checkEdges() {
    if (location.x > width) {
      velocity.x= velocity.x*-1;
    } else if (location.x < 0) {
      velocity.x= velocity.x*-1;
    }
    if (location.y > height) {
      velocity.y= velocity.y*-1;
    } else if (location.y < 0) {
      velocity.y= velocity.y*-1;
    }
  }
}
