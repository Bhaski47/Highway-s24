import styles from "../styles/pages/about.module.css";
import Header from "../components/common/Header";
import { useEffect } from "react";
import HeaderSlide from "../utils/HeaderSlide";
import Video from "../utils/Video";
const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Highways";
  }, []);
  return (
    <>
      <Header />
      <HeaderSlide />
      <div className={styles.container} id="about">
        <h1 className={styles.heading}>About</h1>
        <div className={styles.imgContainer}>
          <Video/>
          <div className={styles.aboutInfo}>
            <div>
              <h1>5000 +</h1>
              <h1>Participants</h1>
            </div>
            <div>
              <h1>80 +</h1>
              <h1>College</h1>
            </div>
            <div>
              <h1>20 +</h1>
              <h1>Events</h1>
            </div>
            <div>
              <h1>500000 +</h1>
              <h1>Price Worth</h1>
            </div>
          </div>
        </div>
        <p className={styles.aboutHigh}>
          HIGHWAYS 24’, an annual national-level cultural fest that hosts a
          plethora of events integrated with fun-filled entertainment, is lined
          up with enchanting performances concatenating with celebrity walk-ins.
          It’s set to take the stage on the 7th, and 8th of May 2024.
          <br />
          <br />
          With over 50+ events ready to bedazzle the entrants, a footfall to
          fuel a storm of around 50,000 HIGHWAYS 23’ is set alight with a prize
          pool of one lakh rupees. A festive season weaving an intermesh induces
          a carnival upshot to the neophytes.
        </p>
      </div>
    </>
  );
};

export default About;
