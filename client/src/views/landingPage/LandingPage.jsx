// Style
import styles from "./LandingPage.module.css";

// Hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Actualizamos la ruta para que sea relativa al directorio publico
    document.body.style.backgroundImage = `url('/src/assets/images/fondoFon.jpg')`;
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  const handleHome = () => {
    navigate("/home");
  };
 
  return (
    <div className={styles.container}>
      {/* Actualizamos la ruta para que sea relativa al directorio publico */}
      <img className={styles.image} src="/src/assets/images/logo.png" alt="" />
      <button className={styles.btn} onClick={handleHome}>
        <span className={styles.noselect}> Let's go! </span>
      </button>
    </div>
  );
};

export default LandingPage;
