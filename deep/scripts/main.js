var enseñar = false;
var enseñar1 = false;
var enseñar_m = false;
var menu_n;
var nombres= [];
function ensenyar (){
    enseñar = true;
}
function ensenyar1(){
    
    enseñar1= true;
}
function ensenyar_m(){
    enseñar_m = true;
    menu_n = parseInt(prompt("Dime cuantos quieres que haya"));
    for (let i=0; i<menu_n; i++){
        nombres.push(prompt("Dame el nombre del elemento numero " + i));
    }
}
function crear(){
    var web = document.getElementsByClassName ("web")[0];
    document.getElementsByClassName("wrapper")[0].className="escondido_hihi"
    alert ("iuju")
    if (enseñar){
        
        var logo = document.createElement('img');
        logo.src = "https://pbs.twimg.com/profile_images/1188507013233479681/WuNwaQ8R_400x400.jpg";
        logo.className ="imagen";
        web.appendChild(logo);
        

    }
    if (enseñar1){
        
        var a = document.createElement('a');
        var telf = document.createElement('img');
        telf.src="https://mit.zenfs.com/44/2011/09/palm_treo_700p.jpg"
        a.appendChild(telf);
        a.href = '+66666666666';
        web.appendChild(a);
    }
    if (enseñar_m){
        for (let i =0; i<menu_n; i++){
            
            var b = document.createElement('p');
            b.innerHTML = nombres[i];
            b.className = "check";
            web.appendChild(b);
        }
        
        

    }
    
}