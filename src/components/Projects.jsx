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
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Reportes Dysam</h3>
            <p>
              Una aplicación que cuenta con dos módulos, administrador y
              usuario. El módulo de administradord permite la subida de reportes
              en formato pdf con datos específicos y el módulo de usuarios
              permite la consulta de estos mediante un código generado
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Reportes Dysam</h3>
            <p>
              Una aplicación que cuenta con dos módulos, administrador y
              usuario. El módulo de administradord permite la subida de reportes
              en formato pdf con datos específicos y el módulo de usuarios
              permite la consulta de estos mediante un código generado
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Reportes Dysam</h3>
            <p>
              Una aplicación que cuenta con dos módulos, administrador y
              usuario. El módulo de administradord permite la subida de reportes
              en formato pdf con datos específicos y el módulo de usuarios
              permite la consulta de estos mediante un código generado
            </p>
          </div>
        </div>
        <div className="project">
          <div className="date_project">
            <p>Marzo 3, 2023</p>
          </div>
          <div className="project_description">
            <h3>Reportes Dysam</h3>
            <p>
              Una aplicación que cuenta con dos módulos, administrador y
              usuario. El módulo de administradord permite la subida de reportes
              en formato pdf con datos específicos y el módulo de usuarios
              permite la consulta de estos mediante un código generado
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
