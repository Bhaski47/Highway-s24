import React, { useEffect } from 'react';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import styles from "../styles/components/homecarousel.module.css";
import p1 from "../assets/images/homeslider/1.jpg";
import p2 from "../assets/images/homeslider/2.jpg";
import p3 from "../assets/images/homeslider/3.jpg";
import p4 from "../assets/images/homeslider/4.jpg";
import p5 from "../assets/images/homeslider/5.jpg";
import p6 from "../assets/images/homeslider/6.jpg";
import p7 from "../assets/images/homeslider/7.jpg";
// import p8 from "../assets/images/homeslider/8.jpg";
// import p9 from "../assets/images/homeslider/9.jpg";

const HomeCarousel: React.FC = () => {
  useEffect(() => {
    const splide = new Splide("#homeslider", {
      type: "fade",
      rewind: true,
      autoplay: true,
      arrows:false,
      pagination:false,
      interval: 3000,
      drag:false,
      pauseOnHover:false,
      pauseOnFocus:false,
      padding:0
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className={styles.container} >
      <div id="homeslider" className="splide" >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img src={p1} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p2} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p3} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p4} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p5} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p6} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p7} alt="" className={styles.img} />
            </li>
            {/* <li className="splide__slide">
              <img src={p8} alt="" className={styles.img} />
            </li>
            <li className="splide__slide">
              <img src={p9} alt="" className={styles.img} />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
