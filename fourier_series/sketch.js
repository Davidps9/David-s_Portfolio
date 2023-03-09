let time =0;
let wave = [];
var n=1;
var inpt ;
var btn ;
function setup() {
  createCanvas(1920, 969);
   inpt = createInput ('');
   btn = createButton ('Enter');
   btnn = createButton ('Randomize function');
}

function draw() {
  strokeWeight(5);
  background(30);
  let radius = 100;
  noFill();
  inpt.position (100,100);
  let x = radius * sin(time);
  let y =  radius * n* cos (time);
  stroke((x/radius) *255 ,(y/radius) *255, x-y + 100);
  translate (width/3, height/2);
  ellipse (0,0, radius * 2);
  btn.size(100, 20);
  btn.position(300,100);
  btn.mousePressed(Set);
  btnn.size(300, 20);
  btnn.position(100,150);
  btnn.mousePressed(rndm);
  wave.unshift(y);
  line(0,0,x, y/n);
  fill (x-y + 100,x +100 ,y +100);
  noStroke();
  ellipse (x,y/n, 8);
  beginShape();
  translate(200, 0);
  stroke(x-y + 100,(x/radius) *255, (y/radius) *255)
  line(x-200, y/n, 0, wave [0]);
  noFill();
  stroke((y/radius) *255, (x/radius) *255 , x-y + 100);
  for(let i = 0; i<wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();
  time += 0.05;
  if(wave.length > 1000){
    wave.pop();
  }

}
function Set(){
  n = inpt.value();
}
function rndm(){
  n = random(1,5);
}