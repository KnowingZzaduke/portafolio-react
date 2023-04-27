import Typed from "typed.js";
import { useRef, useEffect } from "react";
export function Header() {
  const name = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: [
        "<p>Saludo a todos👋, soy</p>",
        "<p>José Luis Arteta Buelvas</p>",
      ],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="content_header">
      <div className="content_description">
        <h1 className="info" ref={name}></h1>
        <p>
          Soy un desarrollador front-end autodidacta. Manejo tecnologías
          como <b>HTML</b>, <b>CSS</b>, <b>SASS</b>, <b>JAVASCRIPT</b>,{" "}
          <b>REACT</b>, <b>GIT</b>, <b>GITHUB</b> y la herramienta de diseño{" "}
          <b>FIGMA</b>. Sigo en constante aprendizaje con el objetivo de mostrar
          los mejores estándares de calidad requeridos en el campo ya que me
          apasiona todo lo relacionado con la tecnología y todo lo que puede
          aportar en la evolución de la humanidad en el bien.
        </p>
      </div>
    </div>
  );
}
