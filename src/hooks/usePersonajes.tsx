// Traemos los hooks que necesitamos de React
import { useEffect, useState } from 'react'
// Importamos el tipo Pokemon que definimos en types
import type { Pokemon } from "../types"

// Este es un custom hook que nos ayuda a manejar toda la lógica de los pokémons
const usePokemons=()=>{
   
    // Estado para guardar la lista de pokémons que traemos de la API
    const [pokemons,setPokemon]=useState<Pokemon[]>([])

    // Función asincrónica que trae los pokémons de la API
    // Aquí armamos cada pokémon con su imagen normal, su imagen shiny, nombre y todo eso
    const traerPokemons = async()=>{
      try{
        // Hacemos un fetch a la PokeAPI para traer los primeros 40 pokémons
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
        // Convertimos la respuesta a JSON para poder trabajar con los datos
        const datos = await respuesta.json()
        
        // Mapeamos los resultados para crear un objeto más completo con los datos que necesitamos
        const listadoReal = datos.results.map((p:any, index:number)=>({
          id:index+1, // Le damos un ID basado en el índice + 1
          nombreBase:p.name, // El nombre del pokémon que trae la API
          nombreEvo:"pokemon shiny", // Acá podríamos poner el nombre de la evolución
          // URL de la imagen normal del pokémon desde GitHub
          imgBase: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
          // URL de la imagen shiny (versión especial) del pokémon
          imgEvo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`,
          estado:false // Estado que indica si el pokémon está evolucionado o no
        }))
        // Guardamos la lista completa de pokémons en el estado
        setPokemon(listadoReal)
      }
      catch(error){
        // Si algo sale mal, mostramos el error en la consola
        console.error("Error al traer los datos", error)
      }
    }

    // El useEffect se ejecuta cuando el componente se monta (al cargar)
    // Aquí llamamos a la función que trae los pokémons de la API
    useEffect(()=>{
      traerPokemons()
    },[]) // El array vacío significa que solo se ejecuta una vez
    
    /* Función para cambiar el estado del pokémon (evolucionar o volver a su forma normal)
       Cuando hacemos click, togueamos el estado (true/false) del pokémon seleccionado */
    const evolucionar=(id:number)=>{
      // Recorremos todos los pokémons y si el ID coincide, invertimos su estado
      setPokemon(prev =>prev.map(p=>p.id==id?{...p,estado:!p.estado}:p))
    }

    // Retornamos los datos y funciones que otros componentes necesitan
    return{
      pokemons, // La lista de pokémons
      evolucionar // La función para hacer evolucionar un pokémon
    }
}

// Exportamos el hook para poder usarlo en otros componentes
export default usePokemons