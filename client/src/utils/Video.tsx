import styles from '../styles/pages/about.module.css'
import React from 'react';
// import vid4 from '../assets/Highways24.mp4'
const Video: React.FC = () => {
  return (
    <div>
      <video controls={false} autoPlay={true} className={styles.img} loop={true}>
        <source src="static/media/Highways24.f2f76b9cf322f433597e.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
