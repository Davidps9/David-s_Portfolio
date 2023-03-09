let n = 0;
let c = 4;
var inpt;
var angle = 137.5;
function setup() {
  inpt = createInput ('');
  inpt.position(20, 40);
  btn = createButton("Enter");
  btn.position(200,40);
  createCanvas(1920, 969);
  background(0);
  angleMode(DEGREES)
}

function draw() {
 btn.mousePressed(SetValue);
  
  let a = n * angle;
  let r = c* sqrt(n);
  let x = cos(a) * r + width / 2;
  let y = sin(a) * r + height / 2;
  fill(n % 256, a % 255, r % 255 );
  circle(x , y, 8 );
  n++;
}

function SetValue(){
  if(isNaN(inpt.value())){
    alert("Introduce a valiable number");
    angle = 137.5;
  }
  else{
    angle = inpt.value();
    background(0);
    n=0;
  }
}