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

