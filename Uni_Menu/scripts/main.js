const mysection = document.querySelector('#loader');
mysection.addEventListener("animationend", onanimationend);
mysection.onanimationend = () =>{
    mysection.style.visibility = "hidden";
    triangle.style.display = "block";
};
// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
  triangle.style.opacity = scrollpercent*2;
  document.getElementById("t_wrapper").style.opacity = scrollpercent*1.5;
  
    if(scrollpercent >= 0.6){
      document.getElementById("c_wrapper").style.display =("block");
      
      
    }
    else if(scrollpercent>=  0.2){
      document.getElementById("t_wrapper").style.boxShadow =( "inset -4px -4px 15px lightgreen, inset 4px 4px 15px lightgreen") ;
      
    }
    else{
      document.getElementById("c_wrapper").style.display =("none");
      
      
    }
}
