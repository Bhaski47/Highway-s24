import React, { useEffect } from "react";
// import { Link } from "react-scroll";
import styles from "../styles/pages/home.module.css";
import Header from "../components/common/Header";
import { NavLink } from "react-router-dom";
import About from "./About";
import Footer from "../components/common/Footer";
import Sponsors from "./Sponsors";
import Location from "./Location";
import Glimpse from "./Glimpse";
import CelebrityWalkin from "./CelebrityWalkin";
import HomeCarousel from "../components/HomeCarousel";
const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Highways";
  }, []);
  return (
    <>
      <Header />
      <>
        <HomeCarousel />
        <div className={styles.home} id="home">
          <div className={styles.content}>
            <p className={styles.rev}>NATIONAL LEVEL CULTURAL FEST</p>
            <h1 className={styles.tech}>HIGHWAYS' 24</h1>
            <p className={styles.time}>MAY 7 & 8,2024</p>
            <br />
          </div>
          <div className={styles.eventInfo}>
            <NavLink
              to="/getPasses"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className={styles.titleHighlight}>Get Pass</div>
            </NavLink>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className={styles.title}>Learn More</div>
            </NavLink>
          </div>
        </div>
        <About />
        <Glimpse />
        <CelebrityWalkin />
        <Sponsors />
        <Location />
        <Footer />
      </>
    </>
  );
};

export default Home;
