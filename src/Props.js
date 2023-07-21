const TarjetaDePresentacion = ({imagen,modelo,marca,precio}) => {
    return (
        <div class="card">
            <img src={imagen} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{modelo}</h5>
                <p class="card-text">{marca}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{precio}</li>
            </ul>
            <div class="card-body">
                <button class="botonCard">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default TarjetaDePresentacion