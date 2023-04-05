import { Link } from "react-router-dom";
import JoseLogo from "/video/jose-logo-black.mp4";
import Whatssive from "/video/Whatssive.mp4";
import Taks from "/video/taks.mp4";
import Carrito from "/video/carrito.mp4";
import Reloj from "/video/reloj.mp4";
import Calculadora from "/video/calculadora-JS.mp4";
import Contador from "/video/contador-JS.mp4";
import Luis from "/video/Lb.mp4";
import { FaPaperPlane, FaGithub } from "react-icons/fa";

import Dysam from "/img/Dysam.jpg";
import { useState } from "react";
export function AllProjects() {
  const [portafolio, setPortafolio] = useState(false);
  const [dysam, setDysam] = useState(false);
  const [whatssive, setWhatssive] = useState(false);
  const [taks, setTaks] = useState(false);
  const [carrito, setCarrito] = useState(false);
  const [reloj, setReloj] = useState(false);
  const [calculadora, setCalculadora] = useState(false);
  const [contador, setContador] = useState(false);
  const [luis, setLuis] = useState(false);
  function handlePortafolio() {
    setPortafolio(!portafolio);
  }
  function handleDysam() {
    setDysam(!dysam);
  }
  function handleWhatssive() {
    setWhatssive(!whatssive);
  }
  function handleTaks() {
    setTaks(!taks);
  }
  function handleCarrito() {
    setCarrito(!carrito);
  }
  function handleReloj() {
    setReloj(!reloj);
  }
  function handleCalculadora() {
    setCalculadora(!calculadora);
  }
  function handleContador() {
    setContador(!contador);
  }
  function handleLuis() {
    setLuis(!luis);
  }

  return (
    <div className="content_all-projects">
      <h2>Proyectos</h2>
      <div className="content_info">
        <Link onClick={handlePortafolio}>
          <div className="proyecto">
            <span>Marzo 30, 2023</span>
            <h3>Portafolio</h3>
            <p>
              Página web personal enfocada a mostrar los proyectos desarrollados
              por mi persona con el objetivo de mostrar mis conocimientos y
              habilidades como desarrollador a través de proyectos.
            </p>
            <div
              className={`content_info-project-n ${
                portafolio ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={JoseLogo}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    portafolio ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div
                className={`info_right-n ${portafolio ? "info_right-d" : ""}`}
              >
                <div className="date_info">
                  <span>Marzo 22, 2023</span>
                  <h3>Portafolio</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
        <Link onClick={handleDysam}>
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
            <div
              className={`content_info-project-n ${
                dysam ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <img
                  src={Dysam}
                  className={`video_whatssive-n ${
                    dysam ? "video_whatssive-d" : ""
                  }`}
                  style={{ height: "300px" }}
                />
              </div>
              <div className={`info_right-n ${dysam ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>Marzo 22, 2023</span>
                  <h3>Reportes Dysam</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div>
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
        <Link onClick={handleWhatssive}>
          <div className="proyecto">
            <span>Marzo 3, 2023</span>
            <h3>Whatssive</h3>
            <p>
              Una API de Whatsapp que permite el envío masivo de mensajes a
              contactos, grupos o comunidades dentro de WhatsApp.
            </p>
            <div
              className={`content_info-project-n ${
                whatssive ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Whatssive}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    whatssive ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div
                className={`info_right-n ${whatssive ? "info_right-d" : ""}`}
              >
                <div className="date_info">
                  <span>Marzo 3, 2023</span>
                  <h3>Whatssive</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                  <div className="website">
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
            <Link>
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Whatssive-with-react"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={handleTaks}>
          <div className="proyecto">
            <span>Febrero 26, 2023</span>
            <h3>Taks list</h3>
            <p>
              Un pequeño proyecto en donde pongo en practica algunos de los
              conocimientos básicos de react, permitiendo agregar y eliminar
              tareas en una lista.
            </p>
            <div
              className={`content_info-project-n ${
                taks ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Taks}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    taks ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div className={`info_right-n ${taks ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>Febrero 26, 2023</span>
                  <h3>Taks List</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>React, Sass</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="content_links">
          <h3>Links</h3>
          <div className="links">
            <Link to="https://taks-list-react.vercel.app/">
              <FaPaperPlane title="Página web" />
            </Link>
            <Link
              to="https://github.com/KnowingZzaduke/Taks-list-react"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_info">
        <Link onClick={handleCarrito}>
          <div className="proyecto">
            <span>Febrero 16, 2023</span>
            <h3>Carrito de compras</h3>
            <p>
              Página web con las funcionalidades básicas de un carrito de
              compra. Permite agregar diferentes productos, a su vez suma la
              cantidad de estos y determina cuanto es el precio total.
            </p>
            <div
              className={`content_info-project-n ${
                carrito ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Carrito}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    carrito ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div className={`info_right-n ${carrito ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>Febrero 16, 2023</span>
                  <h3>Carrito de compras</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>Html, Sass y JavaScript</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
        <Link onClick={handleReloj}>
          <div className="proyecto">
            <span>Enero 13, 2023</span>
            <h3>Reloj</h3>
            <p>Un pequeño reloj digital con su respectivas funcionalidades.</p>
            <div
              className={`content_info-project-n ${
                reloj ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Reloj}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    reloj ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div className={`info_right-n ${reloj ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>Enero 13, 2023</span>
                  <h3>Reloj</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>Html, Sass y JavaScript</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
        <Link onClick={handleCalculadora}>
          <div className="proyecto">
            <span>Enero 16, 2023</span>
            <h3>Calculadora</h3>
            <p>Calculadora funcional con sus operaciones básicas.</p>
            <div
              className={`content_info-project-n ${
                calculadora ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Calculadora}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    calculadora ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div
                className={`info_right-n ${calculadora ? "info_right-d" : ""}`}
              >
                <div className="date_info">
                  <span>Enero 16, 2023</span>
                  <h3>Calculadora</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>Html, Sass y JavaScript</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
        <Link onClick={handleContador}>
          <div className="proyecto">
            <span>Enero 6, 2023</span>
            <h3>Contador</h3>
            <p>
              Pequeña aplicación de un contador digital con sus respectivas
              funcionalidades y sonidos.
            </p>
            <div
              className={`content_info-project-n ${
                contador ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Contador}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    contador ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div className={`info_right-n ${contador ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>enero 6, 2023</span>
                  <h3>Contador</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>Html, Sass y JavaScript</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
        <Link onClick={handleLuis}>
          <div className="proyecto">
            <span>Diciembre 10, 2022</span>
            <h3>Luis Buelvas Coach</h3>
            <p>
              Sitio web encofado a la venta de cursos de superación personal y
              de como alcanzar el exito.
            </p>
            <div
              className={`content_info-project-n ${
                luis ? "content_info-project-d" : ""
              }`}
            >
              <div className="info_left">
                <video
                  src={Luis}
                  autoPlay
                  loop
                  muted
                  className={`video_whatssive-n ${
                    luis ? "video_whatssive-d" : ""
                  }`}
                />
              </div>
              <div className={`info_right-n ${luis ? "info_right-d" : ""}`}>
                <div className="date_info">
                  <span>Diciembre 10, 2022</span>
                  <h3>Luis Buelvas Coach</h3>
                </div>
                <div className="info">
                  <div className="stack">
                    <h4>Stack</h4>
                    <p>Html, Sass y JavaScript</p>
                  </div>
                  <div className="platform">
                    <h4>Plataforma</h4>
                    <p>Web</p>
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
            <Link
              to="https://github.com/KnowingZzaduke/Luis-Gabriel"
              target="_blank"
            >
              <FaGithub title="Repositorio" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
