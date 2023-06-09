import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export function Data() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    const getLocation = async () => {
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
      } else if (localStorage.getItem("permisoUbicacionn") === "denegado") {
        Swal.fire({
          title: "Alerta",
          text: "Permiso denegado",
          icon: "warning",
        });
      }
    };

    getLocation();
  }, []);

  return (
    <div className="content_data">
      <span>
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
      </span>
    </div>
  );
}
