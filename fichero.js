// Leer los datos del almacenamiento local
let personasOriginal = localStorage.getItem('personas');
// Si no hay datos, inicializar con un arreglo vacío
personasOriginal = personasOriginal ? JSON.parse(personasOriginal) : [];

// Modificar el arreglo
personasOriginal.push({
    nombre: "Ivan",
    apellido: "Zamorano"
});

// Convertir el arreglo modificado a JSON
const nuevoContenido = JSON.stringify(personasOriginal);

// Escribir los datos en el almacenamiento local
localStorage.setItem('personas', nuevoContenido);

console.log("Datos guardados correctamente en el almacenamiento local");