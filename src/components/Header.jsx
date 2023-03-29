import { useEffect, useState } from "react"

export function Header() {
  const [time, setTime] = useState(new Date())
    const [location, setLocation] = useState({})
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

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
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div className="content_header">
      <p>
        <span>{time.toLocaleTimeString()}</span>
        <span>-</span>
        <span>{location.countryName}</span>
        <span>{location.city}</span>
        <span>.</span>
        <span>Pais</span>
        <span>Ciudad</span>
      </p>
    </div>
  )
}
