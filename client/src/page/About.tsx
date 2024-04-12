import styles from "../styles/pages/about.module.css";
import Header from "../components/common/Header";
import { useEffect } from "react";
import HeaderSlide from "../utils/HeaderSlide";

import { useLocation } from "react-router-dom";
import AboutContainer from "../components/AboutContainer";
const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Highways";
  }, []);
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <>
      <Header />
      <HeaderSlide />
      {isRoot ? (
        <div className={styles.mobContainer} id="about">
          <AboutContainer />
        </div>
      ) : (
        <div className={styles.container} id="about">
          <AboutContainer />
        </div>
      )}
    </>
  );
};

export default About;
