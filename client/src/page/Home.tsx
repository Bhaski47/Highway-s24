import React, { useEffect } from "react";
import { Link } from "react-scroll";
import styles from "../styles/pages/home.module.css";
import Header from "../components/common/Header";
import { NavLink } from "react-router-dom";
import About from "./About";
import Footer from "../components/common/Footer";
import Sponsors from "./Sponsors";
import Location from "./Location";
import Glimpse from "./Glimpse";
const Home:React.FC=()=> {
  useEffect(()=>{
    document.title = "Home | Highways";
  },[])
  return (
    <>
      <Header />
      <div className={styles.home} id="home">
        {/* <div style={{ marginTop: "4%" }}></div> */}
        <div className={styles.content}>
          <p className={styles.rev}>NATIONAL LEVEL CULTURAL FEST</p>
          <h1 className={styles.tech}>
            {/* <span>H</span>
            <span>I</span>
            <span>G</span>
            <span>H</span>
            <span>W</span>
            <span>A</span>
            <span>Y</span>
            <span>S</span>
            <span>'</span>
            <span> 2</span>
            <span>4</span> */}
            HIGHWAYS' 24
          </h1>
          <p className={styles.time}>MAY 7 & 8,2024</p>
          <br />
          {/* <div style={{ paddingTop: "8%" }}></div> */}
          {/* <p className={styles.timer}><Timer /></p> */}
          {/* <p><Scroller /></p> */}
        </div>
        {/* <div style={{ height: "8%" }}></div> */}
        <div className={styles.eventInfo}>
          <a
            href="https://forms.gle/jLVFdaH8UxdiQeqaA"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.titleHighlight}>Get Pass</div>
          </a>
          <NavLink
            to={"/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Learn More</div>
          </NavLink>
          {/* <NavLink
            to={"/getPass"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Get Pass</div>
          </NavLink> */}
        </div>
      </div>
      <About/>
      <Glimpse/>
      <Sponsors/>
      <Location/>
      <Footer/>
    </>
  );
}

export default Home;
