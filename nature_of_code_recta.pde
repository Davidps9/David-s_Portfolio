int x, y;


Walker w;
float prob = 0.10;
float r = random(1);


void setup() {
  size(1920, 540);
  w = new Walker();
  background (255);
}
class Walker {
  void step() {
    float r = random(1);
    if (r<prob) {
    }
    if (r < 0.4) { 
      //A 40% chance of moving to the right!
        x++;
    } else if (r < 0.5) {
      x--;
    } else if (r >0.8) {
      y++;
      
    } else {
      y--;
    }
  }
    void display() {

      stroke (0);
      point(x, y);
    }
    Walker() {
      x=width/2;
      y=height/2;
    }
  }




  void draw() {

    w.step();
    w.display();
  }
