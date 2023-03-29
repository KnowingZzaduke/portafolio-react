import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export function Header() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      const { state } = await navigator.permissions.query({
        name: "geolocation",
      });
      if (state === "denied") {
        Swal.fire({
          title: "Denegado",
          text: "Se ha denegado el acceso a tu ubicación 😕",
          icon: "warning",
        });
      } else {
        if (navigator.geolocation) {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`
            );
            const data = await response.json();
            setLocation(data);
          } catch (error) {
            console.error(error);
          }
        } else {
          Swal.fire({
            title: "Error",
            text: "Geolocation no es soportado por tu navegador",
            icon: "error",
          });
        }
      }
    };

    getLocation();
  }, []);

  return (
    <div className="content_header">
      <div className="content_data">
        <p>
          <span>{time.toLocaleTimeString()}</span>
          <span>𝆺</span>
          <span>Colombia</span>
          <span>-</span>
          <span>Cartagena</span>
          <div className="content_data-user">
            <span>ϟ</span>
            <span>{location.countryName}</span>
            <span>-</span>
            <span>{location.city}</span>
          </div>
        </p>
      </div>
      <div className="content_description">
        <h2>Sobre mi</h2>
        <p>
          Saludos👋 estimados, mi nombre es Jose Luis Arteta Buelvas, soy un
          desarrollador Junior Front-end autodidacta utilizando las tecnologías
          Html, Css, Sass, JavaScript, React, Github y la herramienta de diseño
          Figma. Me apasiona mucho aprender cosas nuevas cada día que aporten
          gran valor a mi vida y al mundo. Me interesa todo lo relacionado con
          la tecnología y la programación.
        </p>
      </div>
    </div>
  );
}
