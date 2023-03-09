var fondo = document.getElementById('bg');
var texto= document.getElementsByClassName('txt');
var img1= document.getElementById('black');
var img2= document.getElementById('white');
var modoclaro;

function GetHour(){// dependiendo de la hora del dia sale blanco o negro
      fecha = new Date();  
      hora = fecha.getHours(); 

            if(hora >= 8 && hora < 19){ //Entre las 8 de la mañana y las 7 de la tarde será modo claro 
                img2.style.visibility = "hidden";
                fondo.style.backgroundColor =('#FFFFFF');
                for(let i=0; i<texto.length; i++){
                    texto[i].style.color = ('#000000');
                }
                modoclaro = true;
                
                
            }

            else{ //A partir de las 7 de la tarde hasta las 8 de la mañana será modo oscuro
                img1.style.visibility = "hidden";
                fondo.style.backgroundColor = ('#000000');
                for(let i=0; i<texto.length; i++){
                    texto[i].style.color = ('#FFFFFF');
                }
                modoclaro = false;
            }               
} 
                        
function CambiarColor(){

    if(modoclaro){
        img1.style.visibility = "hidden";
        img2.style.visibility = "visible";
        fondo.style.backgroundColor = ('#000000');
        for(let i=0; i<texto.length; i++){
            texto[i].style.color = ('#FFFFFF');
        }
        modoclaro = false;
    }
    else{
        img2.style.visibility = "hidden"
        img1.style.visibility = "visible";
        fondo.style.backgroundColor =('#FFFFFF');
        for(let i=0; i<texto.length; i++){
            texto[i].style.color = ('#000000');
        }
        modoclaro = true;
    }
}      
function Submited(){
    var mail = document.getElementById('femail').value;
    var input = document.getElementById('femail');
    var success = document.querySelector('.exito');
    var buttton = document.getElementById('Buttonn');
    
    buttton.style.display = 'none';
    input.style.display = 'none';
    success.innerHTML= `Success, ${mail} will be notified`;
    success.className += " animated" ;
}