import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";
import styles from '../styles/pages/glimpse.module.css'
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useState } from "react";
import arjundas from "../assets/images/glimpse/arjun das.png";
import db3 from "../assets/images/glimpse/db3.png";
import arjun2 from "../assets/images/glimpse/arjun 2.png";
import andrea2 from "../assets/images/glimpse/andrea 2.png";
import baba2 from "../assets/images/glimpse/baba 4.png";
const Slider1: React.FC = () => {
  const [perPage, setPerPage] = useState(5);
  useEffect(() => {
    const updatePerPage = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth)
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
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: perPage,
      arrows:false,
      pagination: false,
      interval: 2000,
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
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={arjundas} alt="arjundas" className={styles.img} />
          </li>
          <li className="splide__slide">
            <img src={db3} alt="db3" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={arjun2} alt="arjun2" className={styles.img}/>
          </li>
          <li className="splide__slide">
            <img src={andrea2} alt="andrea2" className={styles.img}/>
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

export default Slider1;
