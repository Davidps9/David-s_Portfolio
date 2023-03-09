var rndm;
var cartitas = document.getElementsByClassName('drag');
var ids = ["c0", "c1", "c2","c3"];
var olee = document.querySelector('.game');
var cont = 0;

function dragasion(evento){
    evento.dataTransfer.setData('text', evento.target.id);
 


}
function visibilidad(evento){
    evento.target.style.visibility = ("hidden");
}
function visibilidad2(evento){
    evento.target.style.visibility = ("visible");
}
function dropasion(evento){
    evento.preventDefault();
    var data = evento.dataTransfer.getData('text');
    
    evento.target.appendChild(document.getElementById(data));
    if (evento.target.id.charAt(1) == data.charAt(1)){

        olee.classList.add("animate");
        cont++;   
        olee.addEventListener("animationend", onanimationend);
        olee.onanimationend = () =>{
        olee.classList.remove("animate");
    };
    }
    else{

        olee.classList.add("animate2");     
        olee.addEventListener("animationend", onanimationend);
        olee.onanimationend = () =>{
        olee.classList.remove("animate2");
    };
    }
    if(cont >= cartitas.length){
        olee.classList.add("animate");
        alert("ganaste");
    }
    
}
function dragoverasion(evento){
    evento.preventDefault();
}

function randomid(){


    for(let i = 0; i<cartitas.length; i++){
        rndm  = Math.floor(Math.random()*ids.length);
        cartitas[i].id = ids[rndm];
        ids.splice(rndm, 1);
    }
}
