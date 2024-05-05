import styles from '../styles/pages/about.module.css'
import React, { useEffect, useRef } from 'react';
import vid4 from '../assets/Highways24.mp4'
// import ark1 from '../assets/images/ark1.jpg'
const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <video controls={false} autoPlay={true} ref={videoRef} muted={false} className={styles.img} loop={true}>
        <source src={vid4} type="video/mp4" />
      </video>
      {/* <img src={ark1} alt="vid" className={styles.img}/> */}
    </div>
  );
}

export default Video;
