/*  
var = es una variable global dentro del codigo
let = es una variable local dentro del codigo
const = solo se define una vez el valor de la variable
*/
// let numero1 = 5, numero2 = 6, numero3 = 2;

// let result =  "Hola " + prompt("Dame tu nombre") + " " + prompt("y Tu apellido, por favor")

// alert(result);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Operadores

/* asignacion
 x = y
 adicion
 x += y
 sustraccion
 x -= y
 multiplicacion
 x *= y
 Resto
 x %= y
 Division
 x /= y
 Exponenciacion
 x **= y
 desplazamientos
 x <<= y
 x >>= y
 desplazamiento sin signo
 x >>>= y
 asignacion AND
 x &= y
 Asignacion xOR
 x ^= y
 Asignacion OR
 x |= y
*/

/* let numero1 = 5, numero2 = 6, numero3 = 2;
numero1 = numero2;
numero1 **= 6;
numero1--;
numero1++;
document.write(numero1);

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Mostrar variables en pantalla con back tiks `${variable}` ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let edad = prompt("Ingresa tu edad");

let frase = `Hola <strong>${nombre} ${apellido}</strong>, ¿es cierto que tienes ${edad} años?`;

document.write(frase);*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// valores booleanos y comparaciones ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let numero1 = 5;
let numero2 = 5;

document.write(numero1 == numero2); 
document.write(numero1 != numero2);
document.write(numero1 === numero2);
document.write(numero1 !== numero2);
document.write(numero1 > numero2);
document.write(numero1 >= numero2);
document.write(numero1 < numero2);
 document.write(numero1 <= numero2);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// CONDICIONALES  /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let A = "110";
let B ="110";

if (A > B) {
    document.write("A es mayor que B");
} else if (A < B) {
    document.write("A es menor que B");
} else if (A === B) {
    document.write("A y B son estrictamente iguales");
} else if (A == B) {
    document.write("A y B son iguales");
} else {
    document.write("Alguna de las variables no está definida o es nula")
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////  EJERCICIO 1 HELADO MAS CARO ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let wallet = prompt(" Ingrese el monto que posee");
wallet = parseFloat(wallet);

if (wallet >= 3 && wallet < 5) {
    document.write("Podemos compar 1 papita para compartir<br>");
    document.write(`Vuelto de  ${wallet} que me dio: es ` + (wallet - 3));
    if ((wallet - 3) >= 1) {
        document.write("<br> Nos alcanza para 1 colita");
    } else {
        document.write(" <br> Nos compramos unos caramelitos");
    }
} else if (wallet >= 5 && wallet < 8) {
    document.write("Podemos comprar 3 pinchos y completar con arroz <br>");
    document.write(`Vuelto de  ${wallet} que me dio: es ` + (wallet - 5));
} else if (wallet >= 8 && wallet < 10) {
    document.write("Podemos comprar 2 Hamburgesa con papas <br>");
    document.write(`Vuelto de  ${wallet} que me dio: es ` + (wallet - 8));
} else if (wallet >= 10 && wallet < 15) {
    document.write("comprate el mega compo con presa de pollo de kfc <br>");
    document.write(`Vuelto de  ${wallet} que me dio: es ` + (wallet - 10));
} else if (wallet >= 15 && wallet < 20) {
    document.write("pedimos chaulafan :3 <br> ");
    document.write(`Vuelto de  ${wallet} que me dio: es ` + (wallet - 15));
} else if (wallet >= 20) {
    document.write("Salgamos a comer algo afuera");
    document.write(" Vuleto de 20 " + (wallet - 20));
} else {
    document.write(" No hay platita, comemos arrocito con huevo");
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  ARRAYS  ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//ARRAY NORMAL
let pc0 = [" OzPc", "<br> Intel Core i7", "<br> 16GB ", "<br> 1Tb."];

//ARRAY ASOCIATIVO
let pc2 = {
    nombre: "OzPc",
    procesador: "Intel Core i7",
    ram: "32GB",
    almacenamiento: "1TB"
};

//LLAMADO DE LOS DATOS DEL OBJETO
let nombre = pc2["nombre"];
let procesador = pc2["procesador"];
let ram = pc2["ram"];
let almacenamiento = pc2["almacenamiento"];

frase = `El nombre de equipo: <b>${nombre}</b> <br>
El procesadore: <b>${procesador}</b> <br>
La memoria ram : <b>${ram}</b> <br>
El almacenamiento: <b>${almacenamiento}</b> .`;

document.write(frase);
*/

////////////////////////////////////////////////// PRACTICA ///////////////////////////////////////////////

/*
let bebida ={
    nombre: "Cuba Libre",
    precio: "$8 usd",
    descripcion: "Bebida fria a base de ron con el sabor refrescante de la CocaCola y un toque de limon",
    ingredientes: [" 2 Pala ---  hielo <br>", "2 oz --- Ron <br>", "1/4 oz --- Zumo de Limon", "Top --- CocaCola" ]
};

let nombre = bebida["nombre"];
let precio = bebida["precio"];
let descripcion = bebida["descripcion"];
let ingredientes = bebida["ingredientes"];

bebidas = ` <h1>${nombre}</h1> <br>
            <h3>${precio}</h3> <br>
            <p>${descripcion}</p> <br>
            <ul>
            <li>${ingredientes[0]}</li>
            <li>${ingredientes[1]}</li>
            <li>${ingredientes[2]}</li>
            <li>${ingredientes[3]}</li>
            </ul> <br>
            `;

document.write(bebidas);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  BUCLES  ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
// let numero1 = 1;

// //IF - el bulce solo se cumple una vez

// if( numero1 < 10){
//     numero1++;
//     document.write(numero1)
// }

// WHILE - valida y luego ejecuta repite el bucle hasta que sea falsa la condicion

// while(numero1 < 100) {
//     numero1++;
//     document.write(numero1 + "<br>");
//     if( numero1 == 20) {
//         break;
//     }
// }

//DO-WHILE - ejecuta luego valida

// do {
//     document.write(numero1 + "<br>")
//     numero1++;
// } while (numero1 < 10) 

/////////////////////////////////////////////////BUCLE FOR///////////////////////////////////////////////////////////////////////////////

//FOR - ejecuta las veces segun las condiciones (delcaracion let x = valor; inicializacion x < valor; aumento o decremento ++x++ o --x--)

// for (let i = 6; i >= 0; i--) {
//     document.write(i + "<br>");
// }

/*
for (let i = 0; i < 20; i++) {
    if(i == 18){
        continue;
    }else if (i == 18) {
        break;
    }else{
        document.write(i + "<br>");
    }
}
*/


// let frutas = ["papaya ", "fresa ", "banano ", "manzana ", "pitajaya ", "mango "];

/////////////////////////////////////////////////BUCLE FOR IN//////////////////////////////////////////////////////////////////
/*
for (fruta in frutas) {
    document.write(fruta);
}
document.write("<br>")

/////////////////////////////////////////////////BUCLE FOR IN//////////////////////////////////////////////////////////////////
for (fruta of frutas) {
    document.write(fruta);
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

////////////////////////////////////////////////////// PRACTICA /////////////////////////////////////////////////////////////////
let empleados = ["Oscar", "David", "Daniela", "Cristian", "Miguel"];
let locales = ["Quicentro", "El jardin", "San francisco", "Rio centro", "Plaza Las Americas"];
let restaurantes = [locales, empleados];

for (let restaurante in restaurantes) {
    console.log(restaurante)
    while (restaurante < 2) {
        if (restaurante == 0) {
            for (let local of locales) {
                document.write(local + "<br>");
            }
        } else {
            for (let empleado of empleados) {
                document.write(empleado + "<br>");
            }
        }
        ++restaurante;
        break;
    }
}
document.write("FIN");
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  FUNCIONES  ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// CREAR FUNCION
function saludo() {
    respuesta = prompt("hola soy Oscar, ¿que tal tu dia?");
    if (respuesta == "bien") {
        alert("me alegro");
    } else {
        alert("una pena");
    }
}

//INSTANCIAR LA FUNCION
saludo();
*/

/////////////////////////////////////////////////// practica /////////////////////////////////////////////////////
/*
function saludar() {
    respuesta = prompt("Hola, ¿que hora es?");
    if (respuesta > 0 || respuesta == 0 && respuesta < 12) {
        alert("Buenos días!");
    } else if (respuesta > 12 || respuesta == 12 && respuesta < 18) {
        alert("Buenas tardes!");
    } else if (respuesta >= 18 && respuesta < 0) {
        alert("¡Es de noche!");
    } else if (respuesta == "no" || respuesta == "NO" || respuesta == "No" || respuesta == "nO") {
        alert("ok, la proxima sera");
    } else {
        alert("Lo siento no entiendo lo que dijiste.");
    }
}
saludar();
*/
/////////////////////////////////////////////////// PARAMENTROS DE LA FUNCION /////////////////////////////////////////////////////
/*
//se crea la funcion
function suma(nombre, num1, num2) {
    let result = (num1 + num2);
    let respuesta = `Aqui esta la suma solicitada ${nombre}, el resultado es: <b>${result}</b>`; 
    document.write(respuesta);
}

//se solicitan los parametros necesarios
let nombre = prompt("Hola, ¿como te llamas?");
let numero1 = prompt("dame el primer numero");
let numero2 = prompt("dame el segundo numero");

//se llama al metodo y se asignan todos sus parametros
suma(nombre,parseFloat(numero1), parseFloat(numero2));
*/
////////////////////////////////////////////// PRACTICA 1 EJERCICIO : HORA Y EDAD ////////////////////////////////////////////////////////////////////
/*
const validarEdad = (edad) => {
    if (edad >= 18) {
        document.write(`Eres mayor de edad, tienes ${edad} años`);
    } else if (edad < 18) {
        document.write(`Tienes ${edad} años. No eres mayor de edad`);
    } else {
        alert("no entiendo, vuelve a repetirme por favor")
    }
}

const validarHora = (hora) => {
    if (hora > 4 && hora < 20) {
        alert("Estamos cerrados o un no abrimos");
    } else if (hora >= 20 && hora > 0) {
        let edad = prompt("Que edad tienes?");
        validarEdad(edad);
        document.write("<br>aun entras gratis ");
    } else if (hora >= 0 && hora < 4) {
        let edad = prompt("Que edad tienes?");
        validarEdad(edad);
        document.write("<br>El cover es de $10 usd");
    }
}
let hora = prompt("Que hora es?");
validarHora(hora);
*/

//////////////////////////////////////////// PRACTICA 2 EJERFCICIO : NOTA Y ASISTENCIA /////////////////////////////////////////////////////////////////
/*
let cantidad = prompt("Cuantos alumnos hay?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if( presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
for (let i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _______Presentes: ${alumnosTotales[alumno][1]} <br>
    _______Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if(30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'> REPROBADO POR ASISTENCIAS</b> <br>";
    }else {
        resultado+= "<br><br>";
    }
    document.write(resultado);
}
*/

////////////////////////////////////////// PRACTICA: CALCULADORA BASICA ///////////////////////////////////////////
/*
const sumar = (num1, num2) => {
    return (num1 + num2);
}
const restar = (num1, num2) => {
    return (num1 - num2);
}
const multiplicar = (num1, num2) => {
    return (num1 * num2);
}
const dividir = (num1, num2) => {
    return (num1 / num2);
}

alert("¿Que operacion desea realizar?");
let op = prompt("sumar=1 ||| restar=2 ||| multiplicar=3 ||| dividir=4 ||| Salir=0");

if (op > 0 && op != 0 && op < 4 ) {
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));
    switch (op) {
        case "1":
            alert(`Suma de los dos números es : ${sumar(num1, num2)} `);
            break;
        case "2":
            alert(`Resta de dos numero es: ${restar(num1, num2)} `);
            break;
        case "3":
            alert(`Multiplicacion de dos numeros es: ${multiplicar(num1, num2)}`);
            break;
        case "4":
            alert(`Dividicion de un numero entre otro es: ${dividir(num1, num2).toFixed()}`);
            break;
        default:
            document.write('Opción no valida');
            break;
    }
} else {
    alert('Opcion invalida, o cancelada.');
}
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// PROGRAMACION ORIENTADA A OBJETOS ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//CREACION DEL OBJETO COMO CLASE
class Animal {
    //SE CREA EL CONSTRUCTOR
    constructor(responable, nombre, especie, edad, color, peso) {
        this.responable = responable;
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.peso = peso;
        this.info = `<b>La mascota del responsable ${responable}:</b> <br> 
        nombre: <b>${this.nombre}</b> <br>
        especie: <b>${this.especie}</b> <br>
        edad: <b>${this.edad}</b> <br>
        color: <b>${this.color}</b> <br>
        peso: <b>${this.peso}</b> <br><br>`;
    }
    //DECLARACION DE LOS METODOS
    verInfo() {
        return document.write(this.info);
    }
    sonido(){
        if(this.especie == "perro") {
            document.write("wowu! , wowu! <br>");
        } else if (this.especie == "gato") {
            document.write("miau miau <br>");
        }else if (this.especie == "pajaro") {
            document.write("Pio Pio <br>");
        }else {
            document.write("aun no conozco la especie <br>");
        }
    }
}

let perro = new Animal("Andre y Oscar", "Rio ", "perro", 4, "blanco", "8.6kg");
let gato = new Animal("Alejandro", "Jupiter ", "gato", 3, "Naranja con Blanco", "6.3kg");
let perro2 = new Animal("Mirian", "Simon", "perro", 2, "Cafe con blanco", "2.4kg");
let pajaro = new Animal("Yolanda", "Paquita", "pajaro", 3, "Verde con cuerro amarillo", "1.6kg");

perro.verInfo();
gato.sonido();
pajaro.sonido();
*/

///////////////////////////////////// HERENCIA extends /////////////////////////////////////////////////////////
/*
class Animal {
    //SE CREA EL CONSTRUCTOR
    constructor(responable, nombre, especie, edad, color, peso) {
        this.responable = responable;
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.peso = peso;
        this.info = `<b>La mascota del responsable ${responable}:</b> <br> 
        nombre: <b>${this.nombre}</b> <br>
        especie: <b>${this.especie}</b> <br>
        edad: <b>${this.edad}</b> <br>
        color: <b>${this.color}</b> <br>
        peso: <b>${this.peso}</b> <br><br>`;
    }
    //DECLARACION DE LOS METODOS
    verInfo() {
        return document.write(this.info);
    }
    sonido(){
        if(this.especie == "perro") {
            document.write("wowu! , wowu! <br>");
        } else if (this.especie == "gato") {
            document.write("miau miau <br>");
        }else if (this.especie == "pajaro") {
            document.write("Pio Pio <br>");
        }else {
            document.write("aun no conozco la especie <br>");
        }
    }
}
class Perro extends Animal {
    constructor(responable, especie, nombre, edad, color, peso, raza ) {
        super(responable, especie, nombre, edad, color, peso);
        this.raza = raza;
    }
    static ladrar(){
        alert("está ladrando");
    }
}

//INSTANCIACION DEL OBJETO EN VARIAS FROMAS
let perro = new Perro("Andre y Oscar", "perro", "Rio ", 4, "blanco", "8.6kg", "Castellano");


//INTANCIACION DEL METODO DEPENDIANDO DE LOS DATOS DE CADA UNO
perro.ladrar();
perro.verInfo();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class Animal {
    //SE CREA EL CONSTRUCTOR
    constructor(responable, nombre, especie, edad, color, peso) {
        this.responable = responable;
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.peso = peso;
        this.info = `<b>La mascota del responsable ${responable}:</b> <br> 
        nombre: <b>${this.nombre}</b> <br>
        especie: <b>${this.especie}</b> <br>
        edad: <b>${this.edad}</b> <br>
        color: <b>${this.color}</b> <br>
        peso: <b>${this.peso}</b> <br><br>`;
    }
    //DECLARACION DE LOS METODOS
    verInfo() {
        return document.write(this.info);
    }
    sonido(){
        if(this.especie == "perro") {
            document.write("wowu! , wowu! <br>");
        } else if (this.especie == "gato") {
            document.write("miau miau <br>");
        }else if (this.especie == "pajaro") {
            document.write("Pio Pio <br>");
        }else {
            document.write("aun no conozco la especie <br>");
        }
    }
}

/////////////////////////////////// GETTERS Y SETTERS //////////////////////////////////////////////////
class Perro extends Animal {
    constructor(responable, nombre, especie, edad, color, peso, raza ) {
        super(responable,  nombre, especie, edad, color, peso);
        this.raza = null;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
    get getRaza(){
        return this.raza;
    }
    static ladrar(){
        alert("está ladrando");
    }
}

const perro = new Perro("André y Oscar", "Rio", "perro", 4, "blanco", "8.6kg");
perro.setRaza = prompt(` Que raza es el ${perro.especie} con nombre ${perro.nombre} ?`);

document.write(perro.verInfo());
document.write(`Raza: <b>${perro.getRaza}</b>`);
*/

///////////////////////////////////// EJERCICIO PRACTICO : COMPARAR CELULARES //////////////////////////////////
/*
class Celular {
    constructor(color, peso, resolucion, camara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.info = `este equipo es de color:  <b>${this.color}</b> <br>
                    un peso de: <b>${this.peso}</b> <br>
                    con una resolucion en pantalla de: <b>${this.resolucion}</b> <br>
                    resolucion en camara de: <b>${this.camara}</b> <br>
                    memoria RAM del dispositivo: <b>${this.ram}</b> <br><br>`;
    }
    verInfo() {
        document.write(this.info);
    }

    static prender() {
        document.write('Iniciando celular  <br>');
    }
    static reiniciar() {
        document.write('Reiniciando celular <br>');
    }
    static apagar() {
        document.write('Apagando celular <br>');
    }
    static foto() {
        document.write('Tomando foto <br>');
    }
    static video() {
        document.write('Grabando video <br>');
    }

}
const apple = new Celular("Negro", "256 gr", "4K", "32 MP", "16 GB");
const huawei = new Celular("Amarillo", "210 gr", "1008 HD", "16 MP", "18 GB");
const samsung = new Celular("Azul", "190 gr", "4K", "24 MP", "30 GB");

apple.verInfo();
huawei.verInfo();
samsung.verInfo();
// Celular.reiniciar();
// Celular.apagar();
// Celular.foto();
// Celular.video();



//////////////////////////////////// EJERCICIO PRACTICO: TIENDA DE CELULARES /////////////////////////////////
class AltaGama extends Celular {
    constructor(color, peso, resolucion, camara, ram, efecto, seguridad, lentes) {
        super(color, peso, resolucion, camara, ram) //
        this.efecto = efecto;
        this.seguridad = seguridad;
        this.lentes = lentes;
        this.info2 = `este equipo es de color:  <b>${this.color}</b> <br>
        un peso de: <b>${this.peso}</b> <br>
        con una resolucion en pantalla de: <b>${this.resolucion}</b> <br>
        resolucion en camara de: <b>${this.camara}</b> <br>
        memoria RAM del dispositivo: <b>${this.ram}</b> <br>
        tiene un efecto : <b>${this.efecto}</b> <br>
        y su nivel de seguridad es de: <b>${this.seguridad}</b>.<br>
        Cuenta con leste: <b>${this.lentes}</b><br><br>`;
    }
    set setEfecto(efecto){
        this.efecto = efecto;
    }
    get getEfecto(){
        return this.efecto;
    }
    set setSeguridad(seguridad){
        this.seguridad = seguridad;
    }
    get getSeguridad(){
        return this.seguridad;
    }
    set setLentes(lentes){
        this.lentes = lentes;
    }
    get getLentes(){
        return this.lentes;
    }
    verInfo2(){
        document.write(this.info2);
    }
    
}

let onePlus = new AltaGama("Rosa", "290 gr", "UHD - 4K - 8k", "36 MP", "32 GB", "Video Camara lenta", "Reconocimiento Facial y touchId", "4 Lentes traseros y 2 delanteros");
let pixel = new AltaGama("Verde", "300 gr", "UHD - 4K", "36 MP", "32 GB", "Video Camara lenta", "Reconocimiento Facial", "4 Lentes"); 


onePlus.verInfo2();
pixel.verInfo2();
*/


/////////////////////////////EJERCICIOS PRACTICO : COMPARAR APPs /////////////////////////////////////////////
/*
class App {
    constructor(nombre, descargas, puntuacion, peso) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
        this.info = `<b>${this.nombre}</b> <br><br>
                    No. descargas: <b>${this.descargas}</b> <br>
                    Puntuacion: <b>${this.puntuacion}</b> <br>
                    Peso: <b>${this.peso}</b> <br><br>`
    }
    mostrar() {
        document.write(this.info);
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            if (this.instalada == true) {
                Document.write("ya esta instalada");
            } else {
                document.write("Instalando <br>");
            }
        } else {
            alert("a ocurrido un error al instalar");
        }
    }

    abrir() {
        if (this.iniciada == false) {
            this.iniciada = true;
            if (this.iniciada == true) {
                document.write("ya esta abierta");
            } else {
                document.write("Abriendo <br>");
            }
        } else {
            alert("a ocurrido un error al abrir");
        }
    }

    cerrar() {
        if (this.iniciada == true) {
            this.iniciada = false;
            if (this.iniciada == true) {
                document.write("Cerrando <br>");
            } else {
                document.write("no está iniciado");
            }
        } else {
            alert("algo salio mal al cerrar la aplicacion");
        }
    }

    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            if (this.instalada == true) {
                document.write("Desinstalando<br>");
            } else {
                document.write("La aplicación no ha sido instalada.");
            }
        } else {
            alert("Algo salio mal al desinstalar");
        }
    }

}
// "","",""
const app1 = new App("PedidosYa", "1.525.846 descargas", "4.8 estrellas", "300 MB");
const app2 = new App("Glovo", "825.846 descargas", "3.8 estrellas", "350 MB");
const app3 = new App("Rappi", "1.000.846 descargas", "4.5 estrellas", "400 MB");
const app4 = new App("Delivery", "25.846 descargas", "2.8 estrellas", "600 MB");

app1.mostrar();
app2.mostrar();
app3.mostrar();
app4.mostrar();
*/

///////////////////////////////////////////////// METODOS DE CADENA ///////////////////////////////////////////////////////

// let cadena = "Hola cadena de prueba prueba prueba prueba prueba <br>";
// let numeros = 0123456789;

// resultado = cadena.concat("hola");
// resultado = cadena.startsWith("hola");
// resultado = cadena.endsWith("prueba");
// resultado = cadena.includes("de");
// resultado = cadena.indexOf("pr");
// resultado = cadena.lastIndexOf("prueba");

// resultado = cadena.padStart(100,"00000");
// resultado = cadena.padEnd(100, "0000000");
// resultado = cadena.repeat(5);

// resultado = cadena.split(" ");
// resultado = cadena.substring(5,11);
// resultado = cadena.toLowerCase();
// resultado = cadena.toUpperCase();
// resultado = numeros.toString();
// resultado = cadena.trimEnd();
// resultado = cadena.trimStart();

// resultado = cadena.valueOf();

// document.write(resultado);

///////////////////////////////////////////////// METODOS DE ARRAY ///////////////////////////////////////////////////////

/*
//Crear en array a manipular
let nombres = ["<br>Oscar", "<br>André", "<br>David", "<br>Morelia", "<br>Victor", "<br>Luis", "<br>Kry"];
document.write(nombres);
// TRANSFORMADORES //
// let resultado = nombres.pop();
// let resultado = nombres.shift();
// let resultado = nombres.push("<br>jairo", "<br>Alicia");
// let resultado = nombres.reverse();
// let resultado = nombres.unshift("Alicia", "<br>Jairo");
// let resultado = nombres.sort();
// let resultado = nombres.splice(0,2,"Carlos","<br>Alejandro");

// ACCESORES //
// todos los metodos de cadena
// let resultado = nombres.join("Elemento: -");
// let resultado = nombres.slice(0,5);

// REPETICION //
// let resultado = nombres.filter(
//     nombres => {
//         if (nombres.length > 6) {
//             document.write("<br>elementos");
//         }
//     });
// let resultado = nombres.forEach(nombres => nombres.length > 10);

document.write("<br><br> Elemento Editado : " + resultado + "<br><br>");
document.write(nombres);

*/


/////////////////////////// OBJETOS MATH - BASICOS ////////////////////////////////////////////////////
// METODOS  //
// let numero = Math.sqrt(25);
// let numero = Math.cbrt(27);
// let numero = Math.max(1,2,3,4,5,6,7,8,9);
// let numero = Math.min(1,2,3,4,5,6,7,8,9);
// let numero = Math.random()*100;
//  numero = Math.round(numero);
// numero = Math.floor(numero+1);
// let numero = Math.fround(9,9999999999999999999999);
// let numero = Math.trunc(9.9);

// PROPIEDADES //
// let numero = Math.PI;
// let numero = Math.SQRT1_2;
// let numero = Math.SQRT2;

// let numero = Math.E;
// let numero = Math.LN2;
// let numero = Math.LN10;
// let numero = Math.LOG2E;
// let numero = Math.LOG10E;

// document.write(numero);

////////////////////////// EJERCICIO PRACTICO : CALCULADORA AVANZADA ///////////////////////////////////////
/*
class Calculadora {
    constructor() {
    }
    sumar(num1, num2) {
        return (num1 + num2);
    }
    restar(num1, num2) {
        return (num1 - num2);
    }
    multiplicar(num1, num2) {
        return (num1 * num2);
    }
    dividir(num1, num2) {
        return (num1 / num2);
    }
    exponenciar(num1, exp) {
        return (num1 ** exp);
    }
    raiz2(num1) {
        return Math.sqrt(num1);
    }
    raiz3(num1) {
        return Math.cbrt(num1);
    }
}

const calculadora = new Calculadora();

alert("Que operacion desear realizar?");
let op = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: exponenciar, 6: raiz2, 7: raiz3");

if (op == 1) {
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));
    resultado = calculadora.sumar(num1, num2);
    alert(`El resultado es ${resultado}`);
}
else if (op == 2) {
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));
    resultado = calculadora.restar(num1, num2);
    alert(`El resultado es ${resultado}`);
}
else if (op == 3) {
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));
    resultado = calculadora.multiplicar(num1, num2);
    alert(`El resultado es ${resultado}`);
}
else if (op == 4) {
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));
    resultado = calculadora.dividir(num1, num2);
    alert(`El resultado es ${resultado}`);
}
else if (op == 5) {
    let num1 = parseFloat(prompt("Numero Base"));
    let exp = parseFloat(prompt("Exponente"));
    resultado = calculadora.exponenciar(num1, exp);
    alert(`El resultado es ${resultado}`);
}
else if (op == 6) {
    let num1 = parseFloat(prompt("Numero"));
    resultado = calculadora.raiz2(num1);
    alert(`El resultado es ${resultado}`);
}
else if (op == 7) {
    let num1 = parseFloat(prompt("Numero"));
    resultado = calculadora.raiz3(num1);
    alert(`El resultado es ${resultado}`);
}
else {
    alert("La opcion no existe");
}
*/
/////////////////// EJERCICIO PRACTICO : CLASES, ASIGNATURAS Y MAESTROS ////////////////////////////////////




////////////////////////// EJERCICIO PRACTICO : MATRICULACION MATERIAS ///////////////////////////////////////
