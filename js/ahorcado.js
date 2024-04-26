//Definir el arreglo de palabras
const palabras=["DUELO","ESCARAPELA","CALIFORNIA","TURNO","ESCOGER","CALCULADORA","FAMOSO","IGUAL","CEBOLLA","CERCADO","MANOS","TIGRE","TABERNA"]

const btn = document.querySelector('#jugar');
const imagen = document.querySelector('#imagen');

//Escuchar Eventos
btn.addEventListener("click",comenzar);

// btn.addEventListener("click",hola());

//Cuando tenemos un funcion con los parentesis =>   hola()
//Al momento de cargar la información, lee la funcion obligatoriamente
// Pero si solo se llama a la funcion sin el uso de los paretecis   =>  hola
// Al ejectuar el codigo no lo llmará hasta que el usuario haga el llamado

function id(str) {
    return document.getElementById(str);
}

//VARAIBLES GLOBALES

let palabraElegida;
let cant_error=0;
let cant_aciertos=0;

function comenzar(){
    imagen.src='src/img0.png';
    //Al momento de iniciar el juego, el boton quede deshabilitado
    btn.disabled=true;
    //Inicializamos las variables globales en CERO
    cant_error=0;
    cant_aciertos=0;

    //Idetificamos la cantidad de palabras en el array
    const Npalabras = palabras.length;

    const valorInferior = 0;
    const amplitud = Npalabras - valorInferior;
    //Muestra un datos entre el CERO y el UNO al usar el => Math.random
    //FLOOR redondea al inferior
    const Naleatorio = Math.floor(Math.random() * amplitud) + valorInferior;
    
    //Palabra elegida
    palabraElegida = palabras[Naleatorio];

    //Cantidad de letras que tiene la PALABRA ELEGIDA
    var CantPalabraElegida = palabraElegida.length;

    //
    const parrafo = id('word_to_find');
    parrafo.innerHTML='';

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled=false;   
    }
    document.querySelector('#resultado').innerHTML="";

    for (let i = 0; i < CantPalabraElegida; i++) {
        //Crea elemenot SPAN
        const span = document.createElement('span');
        //Agrega el elemnto span la cantidad de letras que tiene la palabra
        parrafo.appendChild(span);
    }
    console.log(palabraElegida);
    // salida = console.log(palabraElegida+" tiene "+CantPalabraElegida+" letras")
    // return salida;
}

const btn_letras = document.querySelectorAll('#letras button')


for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click',clickTeclas);
}


function clickTeclas(event) {
    //Regresa un Array
    const spans = document.querySelectorAll('#word_to_find span');

    const button = event.target; //Que botton fue llamada
    button.disabled=true;
    
    const letra = button.innerHTML; //Le  tiene el botton llamado
    console.log("elegida "+palabraElegida+" : "+letra);

    let acerto = false;

    for (let i = 0; i < palabraElegida.length; i++) {
        if (letra==palabraElegida[i]) {
            // la variable i corresponde a la misma posicion de la letra
            spans[i].innerHTML=letra;
            cant_aciertos++;
            acerto=true;
        }
    }

    if(acerto==false){
            cant_error++;
            const el_nombre_imagen = `src/img${cant_error}.png`;
            const imagen = id('imagen');
            imagen.src =el_nombre_imagen;

    }

    if(cant_error==7){
        id('resultado').innerHTML="FIN DEL JUEGO: La palabra era: "+palabraElegida;
        game_over();
    }else if(cant_aciertos==palabraElegida.length){
        id('resultado').innerHTML="¡GANASTE FELICIDADES!";
        game_over();


    }
    
    console.log("La letra "+letra+" en la palabra : "+palabraElegida+" ¿Existe? "+ acerto);
    
}


function game_over(){
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled=true;   
    }
    btn.disabled=false;

}

game_over();