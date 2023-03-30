import { Link } from "react-router-dom";
import JoseLogo from "/video/jose-logo-black.mp4";
import { useState, useEffect } from "react";
export function AllProjects() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div className="content_all-projects">
      <h2>Proyectos</h2>
      <Link onClick={handleClick}>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link to="/proyectos/reportes-dysam">
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link>
        <div className="proyecto">
          <span>Marzo 22, 2023</span>
          <h3>Whatssive</h3>
          <p>
            Una aplicación que cuenta con dos módulos, administrador y usuario.
            El módulo de administradord permite la subida de reportes en formato
            pdf con datos específicos y el módulo de usuarios permite la
            consulta de estos mediante un código generado
          </p>
        </div>
      </Link>
      <Link>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
      <Link>
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
              click ? "content_info-project-d" : ""
            }`}
          >
            <div className="info_left">
              <video
                src={JoseLogo}
                autoPlay
                loop
                muted
                className={`video_whatssive-n ${
                  click ? "video_whatssive-d" : ""
                }`}
              />
            </div>
            <div className={`info_right-n ${click ? "info_right-d" : ""}`}>
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
    </div>
  );
}
