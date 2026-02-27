// Este es el tipo Pokemon que define la estructura que debe tener cada pokémon
// Es como un molde que todos nuestros pokémons deben seguir
export type Pokemon ={
    id:number; // El identificador único del pokémon
    nombreBase:string; // El nombre normal del pokémon
    nombreEvo:string; // El nombre de su evolución
    imgBase:string; // La URL de la imagen normal
    imgEvo:string; // La URL de la imagen evolucionada (shiny)
    estado:boolean; // Si está evolucionado (true) o no (false)
 }
