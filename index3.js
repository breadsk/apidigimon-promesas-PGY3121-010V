

// let frutas = ["manzana","pera","limon"];

// frutas.map((fruta , indice)=> {
//     console.log(`La fruta es: ${fruta} con id: ${indice + 1}`);
// })

// console.log(frutas);

//frutas.shift();//Borra el primer elemento
//frutas.pop();//Borra el ultimo

// console.log(frutas);


// let usuarios = [{
//     nombre: "nicolas",
//     apellido: "caceres",
//     edad: 40,
//     correo: "nic.caceresl@profesor.duoc.cl",
//     activo: true
// }];

let nombre = "";
let apellido = "";

let datos = [];

let usuario = {};

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", (e)=> {
    e.preventDefault();
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;

    usuario = {
        nombre,
        apellido
    }

    datos.push(usuario);


    console.log(datos);

})

