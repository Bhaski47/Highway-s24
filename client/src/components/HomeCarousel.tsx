import React, { useEffect } from 'react';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import styles from "../styles/components/homecarousel.module.css";
import p1 from "../assets/images/homeslider/1.webp";
import p2 from "../assets/images/homeslider/2.webp";
import p3 from "../assets/images/homeslider/3.webp";
import p4 from "../assets/images/homeslider/4.webp";
import p5 from "../assets/images/homeslider/5.webp";
import p6 from "../assets/images/homeslider/6.webp";
import p7 from "../assets/images/homeslider/7.webp";

const HomeCarousel: React.FC = () => {
  useEffect(() => {
    const splide = new Splide("#homeslider", {
      type: "fade",
      rewind: true,
      autoplay: true,
      arrows: false,
      pagination: false,
      interval: 3000,
      drag: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      padding: 0
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div id="homeslider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {[p1, p2, p3, p4, p5, p6, p7].map((image, index) => (
              <li className="splide__slide" key={index}>
                <img src={image} alt={`slide-${index}`} className={styles.img} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
