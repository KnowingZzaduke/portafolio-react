import { Link } from "react-router-dom";
export function Projects() {
  return (
    <div className="content_projects">
      <div className="content_titulo">
        <h2>Últimos proyectos</h2>
      </div>
      <div className="projects">
        <div className="project">
          <div className="date_project">
            <p>Abril 15, 2023</p>
          </div>
          <div className="project_description">
            <h3>Tik Tac Toe</h3>
            <p>
              Tik tac toe o tres líneas, es el famoso juego en la que hay una
              matríz de 3 x 3 en donde los jugadores deberán colocar "X" y "O"
              en las diferentes posiciones del tablero, hasta que uno de los
              jugadores acerte con una de las muchas combinaciones ganadoras,
              convirtiendose este en el ganador del juego.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 23, 2023</p>
          </div>
          <div className="project_description">
            <h3>Reportes Dysam</h3>
            <p>
              Aplicación con dos módulos, administrador y usuario. El de
              administrador permite la subida de archivos “pdf” y enlazarlo con
              un código generado el cual es enviado al correo de los usuarios.
              El módulo de usuarios permite la consulta de esos archivos
              mediante el código generado.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Taks list</h3>
            <p>
              Un pequeño proyecto en donde pongo en practica algunos de los
              conocimientos básicos de react, permitiendo agregar, editar y eliminar
              tareas en una lista.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Whatssive</h3>
            <p>
              Una API de Whatsapp que permite el envío masivo de mensajes a
              contactos, grupos o comunidades dentro de WhatsApp.
            </p>
          </div>
        </div>
      </div>
      <div className="content_see-all">
        <Link to="/proyectos">
          <button>Mostrar todos los proyectos</button>
        </Link>
      </div>
    </div>
  );
}
