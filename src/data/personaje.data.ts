// Importamos las imágenes de los pokémons que están guardadas en assets
import { pikachu,raichu,clefairy,cleffa } from '../assets'
// Importamos el tipo Pokemon para asegurarnos que nuestros datos tengan la estructura correcta
import type { Pokemon } from '../types'

// Creamos un array con datos de ejemplo (mock data) de pokémons
// Esta es información que podría venir de una base de datos, pero por ahora es hardcodeada
const POKEMON_MOCK:Pokemon[]=[
    {
    id:1,
    nombreBase:"Pikachu", // El nombre normal
    nombreEvo:"Raichu", // Su forma evolucionada
    imgBase:pikachu, // Image normal
    imgEvo:raichu, // Imagen evolucionada
    estado:false, // Al principio no está evolucionado
    },
    {
    id:2,
    nombreBase:"Cleffa",
    nombreEvo:"Clefairy",
    imgBase:cleffa,
    imgEvo:clefairy,
    estado:false,
    }
]
// Exportamos los datos de ejemplo para poder usarlos en otros lados
export default POKEMON_MOCK