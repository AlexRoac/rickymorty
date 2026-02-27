import './Card.css'

interface Props{
    imagen: string,
    nombre: string,
    estado: string
    tipo: string,
}
function Card({imagen, nombre, estado, tipo}:Props){
    return(
        <div className={`card ${estado?"card-vivo":"card-normal"}`}>
            <div className="card-img">
                <img src={imagen} alt={`Imagen del personaje ${nombre}`}/>
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p>{estado}</p>
                <p>{tipo}</p>
            </div>
        </div>
    )
}

export default Card;