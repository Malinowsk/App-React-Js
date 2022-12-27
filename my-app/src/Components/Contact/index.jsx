import './style.css';

function Contact() {
    return (
        <main>
            <div className="sesion">

                <div className="titulo-sumiso">
                    <h1>Contacto</h1>
                </div>

                <form className="contacto">
                    <div className="contenedor-contacto">
                        <div className="cont-interno">
                            <label>Nombre <strong>(*)</strong></label>
                            <input type="text" placeholder="Nombre" required/>
                        </div>
                        <div className="cont-interno">
                            <label >Apellido <strong>(*)</strong></label>
                            <input type="text" placeholder="Apellido" required/>
                        </div>
                        <div className="cont-interno">
                            <label>Email <strong>(*)</strong></label>
                            <input type="email" placeholder="Email" required/>
                        </div>
                        <div className="cont-interno">
                            <label>Asunto <strong>(*)</strong></label>
                            <input type="text" placeholder="Asunto" required/>
                        </div> 
                    </div>

                    <div className="cont-interno">
                        <label>Mensaje</label>
                        <textarea className="mensaje"></textarea>
                    </div>

                        
                    <div className="cont-externo">
                            <label> <strong>(*)</strong> </label>
                            <input className="checkbox" type="checkbox" required/>
                            <p>Debes leer y aceptar las condiciones legales</p>
                    </div>

                    <button>enviar</button>

                </form>

            </div>
        </main>
    );
}

export default Contact;