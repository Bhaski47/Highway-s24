import styles from "../styles/pages/getPasses.module.css";
import Header from "../components/common/Header";
import may_7 from "../assets/images/may_7.png";
import may_8 from "../assets/images/may_8.png";
import combo from "../assets/images/combo.png";
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
                <img src={may_7} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 DAY 1 - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 700</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 550</span>
                </h3>
              </div>
            </NavLink>
            <NavLink to={"/buyPass/day2"} style={{ textDecoration: "none" }}>
              <div className={styles.pass}>
                <img src={may_8} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 DAY 2 - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 800</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 650</span>
                </h3>
              </div>
            </NavLink>
            <NavLink to={"/buyPass/combo"} style={{ textDecoration: "none" }}>
              <div className={styles.pass + " " + styles.combo}>
                <img src={combo} alt="" className={styles.passImage} />
                <h4 className={styles.passTitle}>
                  HIGHWAYS’ 24 COMBO - TICKET
                </h4>
                <p className={styles.original_price}>Original Price : ₹ 900</p>
                <h3 className={styles.current_price}>
                  Current Price : <span style={{ color: "yellow" }}>₹ 750</span>
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
