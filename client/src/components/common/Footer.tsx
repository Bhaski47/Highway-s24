import styles from "../../styles/components/common/footer.module.css";
import svce from "../../assets/images/svcelogo.png";
import { NavLink } from "react-router-dom";
import {
  // IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
  IoCall,
  IoLocation,
} from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.foot}></div>
      </div>
      <div className={styles.footer}>
        <div className={styles.svceContainer}>
          <img src={svce} alt="SVCE" className={styles.clgLogo} />
          <h2>A National Level Intercollege Culturals</h2>
          <div>
            <a href="tel:+91 9551449859">
              <IoCall className={styles.footerLogo} />
            </a>
            <NavLink to={"/location"}>
              <IoLocation className={styles.footerLogo} />
            </NavLink>
            {/* <IoLogoFacebook className={styles.footerLogo} /> */}
            <IoLogoInstagram
              className={styles.footerLogo}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/svce_highways/",
                  "_blank"
                );
              }}
            />
            <a href="mailto:highways@svce.ac.in">
              <IoMail className={styles.footerLogo} />
            </a>
          </div>
        </div>
        <div className={styles.menuContactsDiv}>
          <section className={styles.menu}>
            <h2>Menu</h2>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/"}
              >
                Home
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/about"}
              >
                About
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/events"}
              >
                Events
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/getPasses"}
              >
                Get Passes
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/schedule"}
              >
                Schedule
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/sponsors"}
              >
                Sponsors
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to={"/location"}
              >
                Location
              </NavLink>
            </p>
          </section>
          <section className={styles.contacts}>
            <h2>Contact us</h2>
            <br />
            <p>
              <IoMail className={styles.contactLogo} />
              Mail:{" "}
              <a
                href="mailto:highways@svce.ac.in"
                style={{ textDecoration: "none", color: "white" }}
              >
                highways@svce.ac.in
              </a>
            </p>
            <br />
            <p>
              <IoCall className={styles.contactLogo} />
              Number:{" "}
              <a href="tel:+9551449859" style={{ color: "white" }}>
                9551449859
              </a>
            </p>
            <br />
            <p className={styles.addressPara}>
              <IoLocation className={styles.contactLogo} />
              Address: Sri Venkateswara College of Enginnering, Post Bag No.1,
              Pennalur Village Chennai - Bangaluru High Road Sriperumbudur Tk,
              Tamil Nadu 602117
            </p>
            <br />
            <div>
              <NavLink style={{ color: "white" }} to={"/termsandconditions"}>
                Terms and Conditions
              </NavLink>
            </div>
          </section>
        </div>
      </div>
      <center>
        <NavLink className={styles.techteam} to={"/team"}>
          Developed By Tech Team
        </NavLink>
      </center>
    </div>
  );
};

export default Footer;
