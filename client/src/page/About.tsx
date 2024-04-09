// import { useEffect } from "react";
import styles from "../styles/pages/about.module.css";
import ark1 from "../assets/images/ark1.jpg";
import Header from "../components/common/Header";
import { useEffect } from "react";
const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Highways";
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1
          style={{
            fontFamily: "Bangers",
            textAlign: "center",
            marginBottom: "5%",
            letterSpacing: "0.2vw",
            fontSize:"2vw"
          }}
        >
          About
        </h1>
        <div className={styles.imgContainer}>
          <img src={ark1} alt="ark1" className={styles.img} />
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
