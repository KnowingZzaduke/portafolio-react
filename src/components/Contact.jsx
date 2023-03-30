import GifPhone from "/img/telefono.gif";
import GifMessage from "/img/mensaje.gif";
export function Contact() {
  return (
    <div className="content_contact">
      <div className="content_titulo">
        <h2>Contacto</h2>
      </div>
      <div className="content_all-contact">
        <div className="contact">
          <div className="content_icon">
            <img src={GifPhone} />
          </div>
          <div className="content_info">
            <h3>Télefono</h3>
            <p>(+57) 3135775378</p>
          </div>
        </div>
        <div className="contact">
          <div className="content_icon">
            <img src={GifMessage} />
          </div>
          <div className="content_info">
            <h3>Correo</h3>
            <p>josex.developer@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
