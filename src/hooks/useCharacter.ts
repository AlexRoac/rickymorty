import { useState, useEffect } from "react"
import type { Character } from "../types"
const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const traerCharacter = async () => {
        try {
            const respuesta = await fetch('https://rickandmortyapi.com/api/character')
            const datos = await respuesta.json()

            const lista = datos.results.map((p:any)=> ({
                id: p.id,
                nombre: p.name,
                estado: p.status,
                tipo: p.species,
                imagen: p.image
            }))
            setCharacters(lista)
        }catch (error) {
            console.error("Hubo error al traer los datos", error)
        }
    }
    useEffect(()=>{
        traerCharacter()
    },[])
    return {
        characters
    }
}
export default useCharacters