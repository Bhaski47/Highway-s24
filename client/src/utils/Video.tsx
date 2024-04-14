import styles from '../styles/pages/about.module.css'
import React from 'react';
import vid4 from '../assets/Highways24.mp4'
// import ark1 from '../assets/images/ark1.jpg'
const Video: React.FC = () => {
  return (
    <div>
      <video controls={false} autoPlay={true} className={styles.img} loop={true}>
        <source src={vid4} type="video/mp4" />
      </video>
      {/* <img src={ark1} alt="vid" className={styles.img}/> */}
    </div>
  );
}

export default Video;
