//Style
import styles from "./LandingPage.module.css";

//Hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


  //! Obtener la función de navegación
const LandingPage = () => {
  const navigate = useNavigate();

  //! Efecto secundario para cambiar el fondo del body
  useEffect(() => {
    document.body.style.backgroundImage = `url('/src/assets/images/fondoFon.jpg')`;
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

    //! Manejar la navegación a la página de inicio
  const handleHome = () => {
    navigate("/home");
  };


  //! Renderizar el componente
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/src/assets/images/logo.png" alt="" />
      <button className={styles.btn} onClick={handleHome}>
        <span className={styles.noselect}>Gotta catch 'em all!</span>
      </button>
    </div>
  );
};

export default LandingPage;