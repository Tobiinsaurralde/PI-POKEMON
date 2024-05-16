// Style
import styles from "./LandingPage.module.css";

// Hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Importar imágenes
import fondoFon from "../../assets/fondoFon.jpg";
import logo from "../../assets/logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Usar la imagen importada
    document.body.style.backgroundImage = `url(${fondoFon})`;
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      {/* Usar la imagen importada */}
      <img className={styles.image} src={logo} alt="Logo" />
      <button className={styles.btn} onClick={handleHome}>
        <span className={styles.noselect}> Let's go! </span>
      </button>
    </div>
  );
};

export default LandingPage;
