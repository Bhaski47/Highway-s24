import styles from "../styles/components/evenitem.module.css";
// import arrow from "../assets/images/icons/arrow.png";
// import logo from "../assets/images/techLogo.png";
import { Link } from "react-router-dom";
const EventItem: React.FC<{
  image: string;
  name: string;
  id: string;
}> = (props) => {
  return (
    <Link to={`/events/${props.id}`} style={{ textDecoration: "none" }}>
      <div
        className={styles.department}
        style={{ backgroundImage: `url(${props.image})` }}
      >
      <div className={styles.blackBackground}/>
        <div className={styles.nameDiv}>
          <div className={styles.topBar}>
            <p>HIGHWAYS' 24</p>
            {/* <div className={styles.logoContainer} style={{textAlign:'end'}}>
                <img src={logo} alt="Tech Fest" className={styles.logo} />
            </div> */}
          </div>
          <p className={styles.title}>{props.name}</p>
          <p className={styles.know}>Know More</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
