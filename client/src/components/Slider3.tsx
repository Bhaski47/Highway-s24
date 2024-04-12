import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";
import styles from '../styles/pages/glimpse.module.css'
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useState } from "react";
import arjundas from "../assets/images/glimpse/baba 2.png";
import db3 from "../assets/images/glimpse/v2.png";
import arjun2 from "../assets/images/glimpse/v1.png";
import andrea2 from "../assets/images/glimpse/v3.png";
import baba2 from "../assets/images/glimpse/db 2.png";
const Slider2: React.FC = () => {
  const [perPage, setPerPage] = useState(5);
  useEffect(() => {
    const updatePerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setPerPage(5);
      } else if (screenWidth >= 768) {
        setPerPage(3);
      } else {
        setPerPage(1);
      }
    };
    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => {
      window.removeEventListener('resize', updatePerPage);
    };
  }, []);
  useEffect(() => {
    const splide = new Splide("#splide2", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: perPage,
      pauseOnHover:false,
      pagination: false,
      arrows:false,
      interval: 2000,
      autoScroll:{
        pauseOnHover:false,
        pauseOnFocus:false
      }
    });
    splide.mount({AutoScroll});
    return () => {
      splide.destroy();
    };
  }, [perPage]);

  return (
    <>
    <div id="splide2" className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={arjundas} alt="v2" className={styles.img} />
          </li>
          <li className="splide__slide">
            <img src={db3} alt="v1" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={arjun2} alt="v3" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={andrea2} alt="db2" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={baba2} alt="baba2" className={styles.img}/>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Slider2;
