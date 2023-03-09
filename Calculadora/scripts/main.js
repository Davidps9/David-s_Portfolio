var ScreenNum = '0';
var operador;
var a;
var equalschecker = false;
function setNum(num){
    if( ScreenNum == 0){
        ScreenNum = num;
    }
    else {
        ScreenNum = '' + ScreenNum + num;
    }
    if(ScreenNum.length >= 11){
        alert( "No te pases crack");
    }

    printNum();
}

function erease(){
    ScreenNum = '';
    printNum();
    equalschecker = false;
}
function Operator(input){

    operador = input;
    a = parseFloat(ScreenNum);
    ScreenNum = 0;
    erease();
}
function equals(){
    
    
    if (equalschecker == false){
        b = parseFloat(ScreenNum);
    switch (operador){
        case '+':
            ScreenNum = a + b;
            break;
        case '-':
            ScreenNum  = a - b;
            break;
        case '*':
            ScreenNum = a * b;
            break;
        case '/':
            ScreenNum =   a / b;
            break;
        }
        printNum();
        equalschecker = true;
    }
    else {
        /*/a = parseFloat(ScreenNum);
        console.log(a)*/
        switch (operador){
            case '+':
                ScreenNum += b;
                break;
            case '-':
                ScreenNum -= b;
                break;
            case '*':
                ScreenNum *= b;
                break;
            case '/':
                ScreenNum /= b;
                break;
        }
        
        printNum();
    }
    

}
function printNum(){
    document.getElementById('screen').innerHTML = (ScreenNum);
}