//validación rut
var rut = document.getElementById("rut").value;
var enviar=document.getElementById("enviar");
var expresion1= /^\d{1,2}\.\d{3}\.\d{3}[-][\dkK]{1}$/gm;

function limpiarrut() {
    var rut1 = document.getElementById("rut");
    rut1.value="";
};
function cambiosrut() {
    var rut = document.getElementById("rut").value;
    if (rut.match(expresion1)){
        console.log(rut)
    }
    else{
    alert("debe ingresar un rut válido de la forma xx.xxx.xxx-x")
    limpiarrut()
    console.log(rut)
    }
};

//validación Nombres
var nombres= document.getElementById("nombres").value;
var expresion2=/^[a-z]{1,30}\s[a-z]{1,30}$/gmi;


function limpiarnombres() {
    var nombres1 = document.getElementById("nombres");
    nombres1.value="";
}; 

function cambiosnombres() {
    var nombres = document.getElementById("nombres").value;
    if (nombres.match(expresion2)){
        console.log(nombres)
    }
    else{
    alert("debe ingresar sus dos nombres ej. Juan Andres")
    limpiarnombres()
    console.log(nombres)
    };
}


//validación apellidos
var apellidos= document.getElementById("apellidos").value;
var expresion2=/^[a-zñ]{1,30}\s[a-zñ]{1,30}$/gmi;


function limpiarapellidos() {
    var apellidos1 = document.getElementById("apellidos");
    apellidos1.value="";
}; 

function cambiosapellidos() {
    var apellidos = document.getElementById("apellidos").value;
    if (apellidos.match(expresion2)){
        console.log(apellidos)
    }
    else{
    alert("debe ingresar sus dos apellidos")
    limpiarapellidos()
    console.log(apellidos)
    };
}
/* enviar.addEventListener('click',function(){
});
 */