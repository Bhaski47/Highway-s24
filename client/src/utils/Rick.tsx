import styles from "../styles/utils/rick.module.css";
import ReactGA from "react-ga4";
import React, { useEffect, useState } from "react";
import vid4 from "../assets/rick.mp4";
// import ark1 from '../assets/images/ark1.jpg'
const Rick: React.FC = () => {
  const [change, setChange] = useState<boolean>(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setChange(false);
    }, 2500);
    return () => clearTimeout(time);
  }, []);
  useEffect(() => {
    document.title =change ? "Page Not Found" : "Rick Roll"
  }, [change]);
  useEffect(() => {
    ReactGA.initialize("G-BFYLR90T4L ");
    ReactGA.send({
      hitType: "pageview",
      page: "/rickroll",
      title: "Rick Rolled",
    });
  }, []);
  return (
    <div className={styles.container}>
      {change ? (
        <h1 title="Page Not Found">Page Not Found</h1>
      ) : (
        <video
          controls={true}
          autoPlay={true}
          muted={false}
          className={styles.img}
          loop={true}
        >
          <source src={vid4} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Rick;
