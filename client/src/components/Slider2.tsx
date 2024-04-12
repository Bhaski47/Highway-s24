import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";
import styles from '../styles/pages/glimpse.module.css'
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useState } from "react";
import baba5 from "../assets/images/glimpse/baba 5.png";
import db from "../assets/images/glimpse/db.png";
import baba1 from "../assets/images/glimpse/baba 1.png";
import andriya from "../assets/images/glimpse/andriya.png";
import baba3 from "../assets/images/glimpse/baba 3.png";
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
    const splide = new Splide("#splide1", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: perPage,
      arrows:false,
      interval: 2000,
      pagination: false,
      direction:'rtl',
      autoScroll:{
        pauseOnHover:false
      }
    });
    splide.mount({AutoScroll});
    return () => {
      splide.destroy();
    };
  }, [perPage]);

  return (
    <>
    <div id="splide1" className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={db} alt="db" className={styles.img} />
          </li>
          <li className="splide__slide">
            <img src={baba1} alt="baba1" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={andriya} alt="andriya" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={baba3} alt="baba3" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={baba5} alt="baba5" className={styles.img}/>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Slider2;
