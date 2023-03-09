var texto = document.querySelector(".text");
var gw = document.querySelector(".flex_wrapper");
var els = document.getElementsByClassName("elem");
var elems = document.getElementsByClassName("clicktg");
var advise = document.querySelector(".reGame");
var tryy = document.querySelectorAll(".clickcounter");
var counter = document.querySelector(".trys");
var counter2 = document.querySelector(".wellclicked");
var lgh = 0;
var array = [];
var rndm;
var ccont = 0;
var wc = 0;
var cont = 1;

function clicktostart(){
    texto.style.display = "none";
    advise.style.display = "none";
    startgame();
}

function startgame(){
    gw.style.display = "flex";
    for(let i=0; i<tryy.length; i++){
        tryy[i].style.display = "block";
    }
    
    for(let i = 0; i< els.length ; i++){
        var x = Math.floor(Math.random()*2);
        if (x == 0){
            els[i].classList.add("clicktg");
        }
        else{
            els[i].classList.add("nonchosen");
        }
    }
    for(let i = 0; i<elems.length; i++){
        array.push(i+1);
    }
    for(let i = 0; i<elems.length; i++){
        rndm = Math.floor(Math.random()*array.length);
        elems[i].innerHTML = array[rndm];
        array.splice(rndm,1);
    }
    lgh = elems.length;
}
function gclick(that){
    for (let i = 0; i<elems.length ; i++){
        elems[i].style.fontSize = "0"
        elems[i].style.backgroundColor = "whitesmoke"
    }
    console.log("Cont," + cont);
    if (parseInt(that.innerHTML) == cont){
       that.classList.remove("clicktg");
       that.classList.add("nonchosen"); 
       cont++;
       ccont ++;
       wc ++;
    }
    else{
        document.body.classList.add("animatered");
        gw.classList.add("animate2");
        document.body.onanimationend = () =>{
            document.body.classList.remove("animatered");
            gw.classList.remove("animate2");
        } 
        ccont++;
    }
    counter.innerHTML= ("Click counter ="+ ccont);
    counter2.innerHTML=("Guessed counter="+ wc);
    console.log("lgh," + lgh);
    if(lgh == cont-1){
        advise.style.display = "flex";
    }

}
function regame(){
    window.location = window.location;
}