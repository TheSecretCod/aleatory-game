let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


/* Automatizar el código con una fusión y pueda usar cualquier etiqueta del HTML*/
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Excelente, adivinaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} ༼  ͡° ͜ʖ ͡° ༽`)
        document.getElementById('reiniciar').removeAttribute('disabled');

        //EL USUARIO NO ACERTÓ
    } else { 
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', "Casi, el número es menor ( ಠ ͜ʖಠ)")    
        } else {
            asignarTextoElemento('p', "Casi, el número es mayor ( ͡◉ ͜ʖ ͡◉)")
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   //si ya se jugó todo los números
   if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
   } else {
        //si el número está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }  else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
     }    
   
    
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} (UwU)`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    /*Limpiar cajar, indicar mensaje invertalo de números,
    generar el número aleatorio, deshabilitar el botón de nuevo juego*/
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();