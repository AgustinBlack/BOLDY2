export const Contacto = () => {
    return (
        <div class="form" id="formDeContacto">
            <form action="" class="form__inicial">
                <div class="form__contacto">
                    <h1 class="form__contacto__titulo">
                        <span>CONTACTO</span>
                    </h1>
                </div>

                <label for="Nombres" class="form__label">Nombres</label>
                <input type="text" id="Nombres" class="form__input" placeholder="Escriba su Nombre"/>

                <label for="Apellido" class="form__label">Apellido</label>
                <input type="text" class="form__input" id="Apellido" placeholder="Escriba su Apellido"/>

                <label for="Correo" class="form__label">Correo electronico</label>
                <input type="text" class="form__input" id="Correo" placeholder="Escriba su correo electronico"/>

                <label for="Mensaje" class="form__label">Escriba su mensaje</label>
                <textarea id="Mensaje" class="form__mensaje" placeholder="Escriba su mensaje"></textarea>

                <button type="button" class="form__enviar">Enviar consulta</button>
            </form>
        </div>
    )
}