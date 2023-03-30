import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useEffect, useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
export function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ruta, setRuta] = useState(true)
  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);
  
  useEffect(() => {
    if(ruta === true){
      navigate("/informacion")
      setRuta(false)
    }else{
      navigate("/proyectos");
    }
  }, []);

  return (
    <div className="content_all-page">
      {loading ? (
        <div className="content_loading">
          <RingLoader
            size={100}
            color={"#123abc"}
            loading={loading}
            css={{
              display: "flex",
              borderColor: "red",
              width: "100%",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <h1>Cargando</h1>
        </div>
      ) : (
        <div className="content_components">
          <Navbar />
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}
