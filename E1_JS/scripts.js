
alert("Cuidado, mini tula detectada");
function Enseñame_tu_nombre(){
    var n = prompt ("Dame tu nombre de mierda");
    document.getElementsByClassName("res")[0].innerHTML= "Ya que no sabes escribir tu nombre, este es: " + n; 
}
 function Calculame_esta (){
    x = prompt("Dame un numero, pobre");
    y = prompt ("Dame el segundo numero, pobre");
    sim = prompt("Introduce el simbolo de la operación");
    var z;
    switch (sim){
        case '+':
        z = parseInt(x) + parseInt(y);
        break;
        case '-':
        z = x-y;
        break;
        case '*':
        z = x*y;
        break;
        case '/':
        z= x/y;
        break;
        default:
         z = "Eres tonto, mira arcane perra";

    } 

    document.getElementsByClassName("res")[0].innerHTML= "Ya que no sabes calcular, el resultado es: " + z;
    
 }
function Calcula_Media(){
    var end = false;
    var total = 0;
    var cont = 0;
    
    do{
        var note = prompt ("Dame tu nota, -1 para parar y calcular media");
        if (note >=0 ) {
            cont ++;
           total += parseFloat(note);
        }
        else if(note <0){
            
            end = true;
        }
        if (isNaN(note)){
            alert("Eres gilipollas");
        }

    }while(end == false);
    document.getElementsByClassName("res")[0].innerHTML= "Ya que no sabes calcular, tu media es: " + parseFloat(total/cont);
}

