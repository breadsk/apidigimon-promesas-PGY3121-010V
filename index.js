import { getDigimons } from "./operaciones/getDigimons.js";
import { crearCards } from "./operaciones.js";





getDigimons()
    .then( digimones => crearCards(digimones))
    .catch( error => console.log(`El error es: ${error}`))

