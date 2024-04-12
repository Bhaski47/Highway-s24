import styles from "../styles/utils/headerslide.module.css";
import { useLocation } from "react-router-dom";
import HeaderSlideContainer from "../components/HeaderSlide";
const HeaderSlide: React.FC = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <>
      {isRoot ? (
        <div className={styles.rootContainer}>
          <HeaderSlideContainer />
        </div>
      ) : (
        <div className={styles.container}>
          <HeaderSlideContainer />
        </div>
      )}
    </>
  );
};

export default HeaderSlide;
