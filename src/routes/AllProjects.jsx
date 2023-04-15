import { Link } from "react-router-dom";
import { FaPaperPlane, FaGithub } from "react-icons/fa";
import { useState } from "react";
export function AllProjects() {
  const [state, setState] = useState({
    tic: false,
    dysam: false,
    whatssive: false,
    taks: false,
    carrito: false,
    reloj: false,
    calculadora: false,
    contador: false,
    luis: false,
  });

  function handleToggle(name) {
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  }

  return (
    <div className="content_all-projects">
      <h2>Proyectos</h2>
      <div className="content_info">
        <Link onClick={() => handleToggle("tic")}>
          <div className="proyecto">
            <span>Marzo 30, 2023</span>
            <h3>Tik Tac Toe</h3>
            <p>
              Tik tac toe o tres líneas, es el famoso juego en la que hay una
              matríz de 3 x 3 en donde los jugadores deberán colocar "X" y "O"
              en las diferentes posiciones del tablero, hasta que uno de los
              jugadores acerte con una de las muchas combinaciones ganadoras,
              convirtiendose este en el ganador del juego.
            </p>
            <p className={`detalles ${state.tic ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.tic ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.tic ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Portafolio</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
          <Link to="https://tik-tak-toe-tres-lineas.vercel.app/" target="_blank">
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/portafolio-react"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("dysam")}>
          <div className="proyecto">
            <span>Marzo 22, 2023</span>
            <h3>Dysam reportes</h3>
            <p>
              Aplicación con dos módulos, administrador y usuario. El de
              administrador permite la subida de archivos “pdf” y enlazarlo con
              un código generado el cual es enviado al correo de los usuarios.
              El módulo de usuarios permite la consulta de esos archivos
              mediante el código generado.
            </p>
            <p className={`detalles ${state.dysam ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.dysam ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.dysam ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Dysam</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass, Php, SQL</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>En desarrollo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link to="https://app.dysam.com.co/" target="_blank">
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/reportes-react"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("whatssive")}>
          <div className="proyecto">
            <span>Marzo 3, 2023</span>
            <h3>Whatssive</h3>
            <p>
              Una API de Whatsapp que permite el envío masivo de mensajes a
              contactos, grupos o comunidades dentro de WhatsApp.
            </p>
            <p className={`detalles ${state.whatssive ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.whatssive ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.whatssive ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Whatssive</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass, NodeJS, Php, SQL</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>En desarrollo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">

          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("taks")}>
          <div className="proyecto">
            <span>Febrero 26, 2023</span>
            <h3>Task list</h3>
            <p>
              Un pequeño proyecto en donde pongo en practica algunos de los
              conocimientos básicos de react, permitiendo agregar, editar y
              eliminar tareas en una lista.
            </p>
            <p className={`detalles ${state.taks ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.taks ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.taks ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Task list</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link to="https://taks-list-ashen.vercel.app/" target="_blank">
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Taks-List"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("carrito")}>
          <div className="proyecto">
            <span>Febrero 16, 2023</span>
            <h3>Carrito de compras</h3>
            <p>
              Página web con las funcionalidades básicas de un carrito de
              compra. Permite agregar diferentes productos, a su vez suma la
              cantidad de estos y determina cuanto es el precio total.
            </p>
            <p className={`detalles ${state.carrito ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.carrito ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.carrito ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Carrito de compras</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>HTML, Sass, JavaScript</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link
              to="https://e-commerce-gamma-roan.vercel.app/"
              target="_blank"
            >
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/E-Commerce"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("reloj")}>
          <div className="proyecto">
            <span>Enero 13, 2023</span>
            <h3>Reloj</h3>
            <p>Un pequeño reloj digital con su respectivas funcionalidades.</p>
            <p className={`detalles ${state.reloj ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.reloj ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.reloj ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Reloj</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>HTML, Sass, JavaScript</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link
              to="https://reloj-with-java-script.vercel.app/"
              target="_blank"
            >
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Reloj-With-JavaScript"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("calculadora")}>
          <div className="proyecto">
            <span>Enero 16, 2023</span>
            <h3>Calculadora</h3>
            <p>Calculadora funcional con sus operaciones básicas.</p>
            <p className={`detalles ${state.calculadora ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.calculadora ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.calculadora ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Calculadora</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>HTML, Sass, JavaScript</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link
              to="https://calculadora-with-java-script.vercel.app/"
              target="_blank"
            >
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Calculadora-With-JavaScript"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("contador")}>
          <div className="proyecto">
            <span>Enero 6, 2023</span>
            <h3>Contador</h3>
            <p>
              Pequeña aplicación de un contador digital con sus respectivas
              funcionalidades y sonidos.
            </p>
            <p className={`detalles ${state.contador ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.contador ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.contador ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Contador</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>HTML, Sass, JavaScript</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Ninguna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link
              to="https://contador-with-java-script-nskmu7j14-knowingzzaduke.vercel.app/"
              target="_blank"
            >
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Contador-With-JavaScript"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={() => handleToggle("luis")}>
          <div className="proyecto">
            <span>Diciembre 10, 2022</span>
            <h3>Luis Buelvas Coach</h3>
            <p>
              Sitio web encofado a la venta de cursos de superación personal y
              de como alcanzar el exito.
            </p>
            <p className={`detalles ${state.luis ? "detalles_n" : " "}`}>
              <i>Da click para ver más detalles</i>
            </p>
            <div
              className={`content_info-project-n ${
                state.luis ? "content_info-project-d" : ""
              }`}
            >
              <div className={`info_n ${state.luis ? "info_d" : ""}`}>
                <div className="date_info">
                  <h3>Luis Buelvas Coach</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>HTML, Sass, JavaScript</p>
                  </div>
                  <div className="plataform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="observations">
                    <h4>Observaciones</h4>
                    <p>Actualización</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link
              to="https://luis-gabriel-buelvas-conferencista-coach-financiero.vercel.app/"
              target="_blank"
            >
              <FaPaperPlane title="Página web" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
