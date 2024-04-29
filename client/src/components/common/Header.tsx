import styles from "../../styles/components/common/header.module.css";
import svceLogo from "../../assets/images/svcelogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header:React.FC=()=> {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${styles.navMobile} ${
          isNavOpen ? styles.open : styles.hide
        }`}
      >
        <IoClose
          className={styles.close}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
        <nav>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/events/1"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPasses"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/schedule"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Location
          </NavLink>
        </nav>
      </div>
      <div className={styles.container}>
        <section>
          <NavLink to="/">
          <img src={svceLogo} alt="Highways 24" className={styles.logo} />
          </NavLink>
        </section>
        <IoMenu
          className={styles.menu}
          onClick={() => {
            setIsNavOpen(true);
          }}
        />
        <nav className={styles.navDesktop}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/events/1"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPasses"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/schedule"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Location
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
