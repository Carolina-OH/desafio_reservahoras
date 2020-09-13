//validación rut
var rut = document.getElementById("rut").value;
var reservar=document.getElementById("reservar");
var expresion1= /^\d{1,2}\.\d{3}\.\d{3}[-][\dkK]{1}$/gm;

function cambiosrut() {
    var rut = document.getElementById("rut").value;
    if (rut.match(expresion1)){
        console.log(rut)
    }
    else{
    document.getElementById("rut").style.border="1px solid red";
    console.log(rut)
    }
};

//validación Nombres
var nombres= document.getElementById("nombres").value;
var expresion2=/^[a-z]{1,30}\s[a-z]{1,30}$/gmi;

function cambiosnombres() {
    var nombres = document.getElementById("nombres").value;
    if (nombres.match(expresion2)){
        console.log(nombres)
    }
    else{
    document.getElementById("nombres").style.border="1px solid red";
    console.log(nombres)
    };
}


//Validación apellidos
var apellidos= document.getElementById("apellidos").value;
var expresion3=/^[a-zñ]{1,30}\s[a-zñ]{1,30}$/gmi;

function cambiosapellidos() {
    var apellidos = document.getElementById("apellidos").value;
    if (apellidos.match(expresion3)){
        console.log(apellidos)
    }
    else{
    document.getElementById("apellidos").style.border="1px solid red";
    console.log(apellidos)
    };
}


//Validación Edad
var edad=document.getElementById("edad").value
var expresion4=/^\d{1,3}$/gm;
console.log(edad.match(expresion4));

function cambioedad() {
    var edad = document.getElementById("edad").value;
    if (edad.match(expresion4)){
        console.log(edad)
    }
    else{
    document.getElementById("edad").style.border="1px solid red";
    console.log(edad)
    };
}

//Validación E-mail
var email=document.getElementById("email").value
var expresion5=/[a-z 1-9]{1,100}\@[a-z]{1,20}\.[a-z]{2,3}$/gmi;
console.log(email.match(expresion5));

function cambioemail() {
    var email = document.getElementById("email").value;
    if (email.match(expresion5)){
        console.log(email)
    }
    else{
    document.getElementById("email").style.border="1px solid red";    
    console.log(email)
    };
}

//validar fecha
var fecha=document.getElementById("fecha").value
var expresion6=/^\d{1,2}\-\d{1,2}\-\d{4}$/gm
console.log(fecha.match(expresion6));

function cambiofecha() {
    var fecha = document.getElementById("fecha").value;
    if (fecha.match(expresion6)){
        console.log(fecha)
    }
    else{
    document.getElementById("fecha").style.border="1px solid red";
    console.log(fecha)
    };
}


//funciones limpiar
function limpiarrut() {
    var rut1 = document.getElementById("rut");
    rut1.value="";
    document.getElementById("rut").style.border="1px solid gray";
};

function limpiarnombres() {
    var nombres1 = document.getElementById("nombres");
    nombres1.value="";
    document.getElementById("nombres").style.border="1px solid gray";
}; 

function limpiarapellidos() {
    var apellidos1 = document.getElementById("apellidos");
    apellidos1.value="";
    document.getElementById("apellidos").style.border="1px solid gray";
}; 

function limpiaredad() {
    var edad1 = document.getElementById("edad");
    edad1.value="";
    document.getElementById("edad").style.border="1px solid gray";
};

function limpiaremail() {
    var email1 = document.getElementById("email");
    email1.value="";
    document.getElementById("email").style.border="1px solid gray";
};

function limpiarfecha() {
    var fecha1 = document.getElementById("fecha");
    fecha1.value="";
    document.getElementById("fecha").style.border="1px solid gray";
};


//click enviar
reservar.addEventListener('click',function(){
    var rut = document.getElementById("rut").value;
    var nombres= document.getElementById("nombres").value;
    var apellidos= document.getElementById("apellidos").value;
    var edad=document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var fecha=document.getElementById("fecha").value;
    var x=document.getElementById("especialidad").selectedIndex;
    var y=document.getElementById("especialidad").options;
    var hora=document.getElementById("hora").value;
    if  (!rut.match(expresion1)) {
        alert("Debe ingresar un rut de la forma xx.xxx.xxx-x")
        document.getElementById("rut").focus()
    }
    else if  (!nombres.match(expresion2)) {
        alert("Debe ingresar sus dos nombres ej. Juan Andres")
        limpiarnombres()
        document.getElementById("nombres").focus()
    }
    else if  (!apellidos.match(expresion3)) {
        alert("Debe ingresar sus dos apellidos")
        limpiarapellidos()
        document.getElementById("apellidos").focus()
    }
    else if  (!edad.match(expresion4)) {
        alert("Debe ingresar su edad")
        limpiaredad()
        document.getElementById("edad").focus()
    }
    else if  (!email.match(expresion5)) {
        alert("Debe ingresar su email con el formato xxxx@xx.xx")
        limpiaremail()
        document.getElementById("email").focus()
    }
    else if  (!fecha.match(expresion6)) {
        alert("Debe ingresar su fecha con el formato dd-mm-yyyy")
        limpiarfecha()
        document.getElementById("fecha").focus()
    }
        else{
            alert(`Estimado(a) ${nombres} ${apellidos}, su hora para ${y[x].text} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita.
Gracias por preferirnos.
            `) 
            limpiartodo()
           
   }
});
function limpiartodo() {
   
    limpiarrut();
    limpiarnombres();
    limpiaredad();
    limpiarapellidos();
    limpiarfecha();
    limpiaremail();
    document.getElementById("especialidad").selectedIndex="selected";
    document.getElementById("hora").value="--:--"
}


