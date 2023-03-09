const flock = [];
let AlignSlider, CohesionSlider, SeparationSlider;

function setup() {
  createCanvas(1920, 969);
  AlignSlider = createSlider(0 , 5 , 1 , 0.1);
  CohesionSlider = createSlider(0 , 5 , 1 , 0.1);
  SeparationSlider = createSlider(0 , 5 , 1 , 0.1);
  for(let i = 0; i<100; i++){
    flock.push(new Boid());
  }
  
}

function draw() {
  background(0);
  AlignSlider.position(10, 10);
  CohesionSlider.position(160, 10);
  SeparationSlider.position(310, 10);
  for(let boid of flock){
    boid.edges();
    boid.align(flock);
    boid.cohesion(flock);
    boid.separation(flock);
    boid.flocks(flock);
    boid.update();
    boid.show();
  }
}
