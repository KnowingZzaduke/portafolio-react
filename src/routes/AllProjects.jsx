import { Link } from "react-router-dom";
import JoseLogo from "/video/jose-logo-black.mp4";
import Whatssive from "/video/Whatssive.mp4";
import Taks from '/video/taks.mp4'
import Carrito from "/video/carrito.mp4";
import Reloj from "/video/reloj.mp4";
import Calculadora from "/video/calculadora-JS.mp4";
import Contador from "/video/contador-JS.mp4";

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

  return (
    <div className="content_all-projects">
      <h2>Proyectos</h2>
      <Link onClick={handlePortafolio}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Portafolio</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
            <div className={`info_right-n ${portafolio ? "info_right-d" : ""}`}>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleDysam}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Dysam reportes</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
                style={{height: "300px"}}
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleWhatssive}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Whatssive</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
            <div className={`info_right-n ${whatssive ? "info_right-d" : ""}`}>
              <div className="date_info">
                <span>Marzo 22, 2023</span>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleTaks}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Taks list</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
                <span>Marzo 22, 2023</span>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleCarrito}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Carrito de compras</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
                <span>Marzo 22, 2023</span>
                <h3>Carrito de compras</h3>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleReloj}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Reloj</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
          </p>
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
                <span>Marzo 22, 2023</span>
                <h3>Reloj</h3>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleCalculadora}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Calculadora</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
          </p>
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
                <span>Marzo 22, 2023</span>
                <h3>Calculadora</h3>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={handleContador}>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Contador</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
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
                <span>Marzo 22, 2023</span>
                <h3>Contador</h3>
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
                <div className="Website">
                  <h4>Dirección web</h4>
                  <p>Dirección web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
