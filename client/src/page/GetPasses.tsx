import styles from "../styles/pages/getPasses.module.css";
import Header from "../components/common/Header";
import passImage from "../assets/images/pass_image.png";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const GetPasses: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Technoways";
  }, []);

  return (
    <>
      <Header />
      <div className={styles.getPasses}>
        <h1 className={styles.heading}>Buy Your Passes</h1>
        <center>
          <div className={styles.passContainer}>
            <NavLink to={"/buyPass/day1"} style={{ textDecoration: "none" }}>
              <div className={styles.pass}>
                <img src={passImage} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 DAY 1 - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 550</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 550</span>
                </h3>
              </div>
            </NavLink>
            <NavLink to={"/buyPass/combo"} style={{ textDecoration: "none" }}>
              <div className={styles.pass + " " + styles.combo}>
                <img src={passImage} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 COMBO - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 750</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 550</span>
                </h3>
              </div>
            </NavLink>
            <NavLink to={"/buyPass/day2"} style={{ textDecoration: "none" }}>
              <div className={styles.pass}>
                <img src={passImage} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 DAY 2 - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 650</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 550</span>
                </h3>
              </div>
            </NavLink>
          </div>
        </center>
      </div>
    </>
  );
};

export default GetPasses;
