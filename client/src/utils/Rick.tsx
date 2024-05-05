import styles from "../styles/utils/rick.module.css";
import React, { useEffect, useRef, useState } from "react";
import vid4 from "../assets/rick.mp4";
// import ark1 from '../assets/images/ark1.jpg'
const Rick: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [change, setChange] = useState<boolean>(true);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.play();
    }
  }, []);
  useEffect(() => {
    const time = setTimeout(() => {
      setChange(false);
    }, 2500);
    return () => clearTimeout(time);
  }, []);
  useEffect(() => {
    document.title =change ? "Page Not Found" : "Rick Roll"
  }, [change]);
  return (
    <div className={styles.container}>
      {change ? (
        <h1 title="Page Not Found">Page Not Found</h1>
      ) : (
        <video
          controls={false}
          autoPlay={true}
          ref={videoRef}
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
