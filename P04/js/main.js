var counter=0;
const cont_span = document.querySelector(".cont");
const b_product = document.querySelector(".cartt");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
var item1 = false, item2 = false, item3 = false;
var itemadded = 0;


function giveItem(){
    counter = window.localStorage.getItem("counter");
    cont_span.innerHTML = counter;
    if((counter != 0) && (counter!= null)){
        cont_span.style.display = "block";
    }
    else{
        cont_span.style.display = "none";
    }
}

function addtocart(item){
    counter ++;
    window.localStorage.setItem("counter", counter);
    cont_span.style.display = "block";
    cont_span.innerHTML = `${window.localStorage.getItem("counter")}`;
    itemadded = item;

    if( itemadded == 1){
        window.localStorage.setItem("item1", true);
    }
    else if(itemadded == 2){
        window.localStorage.setItem("item2", true); 
    }
    else if(itemadded == 3){
        window.localStorage.setItem("item3", true); 
    }
}

function onloadCart(){
    item1 = localStorage.getItem("item1");
    item2 = localStorage.getItem("item2");
    item3 = localStorage.getItem("item3");

    if(item1 && item2 && item3){
        b_product.style.display = "flex";
        p1.style.display="flex";
        p2.style.display="flex";
        p3.style.display="flex";
        alert("a")

    }
    else if (item1 && item2){
        b_product.style.display = "flex";
        p1.style.display="flex";
        p2.style.display="flex";
    }
    else if(item2 && item3){
        b_product.style.display = "flex";
        p3.style.display="flex";
        p2.style.display="flex";
    }
    else if(item1 && item3){
        b_product.style.display = "flex";
        p3.style.display="flex";
        p1.style.display="flex";
    }
    else if(item1){
        b_product.style.display = "flex";
        p1.style.display="flex";

    }
    else if(item2){
        b_product.style.display = "flex";
        p2.style.display="flex";
    }
    else if(item3){
        b_product.style.display = "flex";
        p3.style.display="flex";
    }
    else if(window.localStorage.getItem("item1")){
        p1.style.display="none";
    }
    else if(window.localStorage.getItem("item2")  == false){
        p2.style.display="none";
    }
    else if (window.localStorage.getItem("item3")  == false){
        p3.style.display="none";
    }
    else if(window.localStorage.getItem("counter")==0){
        b_product.style.display = "none";
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        alert("no")
    }
}

function remove(){
    counter = 0;
    window.localStorage.setItem("counter", counter);
    window.localStorage.setItem("item1", false);
    window.localStorage.setItem("item2", false);
    window.localStorage.setItem("item3", false);
    b_product.style.display= "none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    window.localStorage.clear();
    
}
function ubi(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            window.open(`https://maps.google.com/?q= ${position.coords.latitude} ${position.coords.longitude}`);
        });
      }
}