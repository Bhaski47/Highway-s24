import Header from "../components/common/Header";
import styles from "../styles/pages/eventInfo.module.css";
import calIcon from "../assets/images/icons/calIcon.png";
import timeIcon from "../assets/images/icons/timeIcon.png";
import userIcon from "../assets/images/icons/userIcon.png";
import classIcon from "../assets/images/icons/classroomIcon.png";
import eventsData from "../data/eventsData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/common/Footer";
// import EventItem from "../components/EventItem";

const EventInfo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { eventId } = useParams();

  const event = eventsData.filter((ele) => ele.id === eventId)[0];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <div
            className={styles.department}
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className={styles.blackBackground} />
            <div className={styles.nameDiv}>
              <div className={styles.topBar}><p>HIGHWAYS' 24</p></div>
            </div>
          </div> */}
          <div className={styles.contextContainer}>
            <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>
              {event.name}
            </h1>
            <p></p>
            <div className={styles.details}>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={calIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.date}</h3>
              </div>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={timeIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.time}</h3>
              </div>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={classIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.venue}</h3>
              </div>
              {/* <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={userIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{89}</h3>
              </div> */}
            </div>
            <h2>Description</h2>
            {event.description.map((des) => (
              <>
                <p>• {des}</p>
                <br />
              </>
            ))}
            <h2>Event Coordinator</h2>
            <p>{`${event.coordinators[0].name}  ${event.coordinators[0].contact}`}</p>
            <br />
            {
              event.rules &&
              <div>
                <h2>Rules</h2>
                  {event.rules.map((data,index)=>(
                <ul key={index}>
                  <p>• {data}</p>
                </ul>
                  ))}
              </div>
            }
            <br />
            {
              event.regLink === "On-Spot Registration" ?
              <div
              className={styles.titles}
              style={{ textDecoration: "none" }}
              >
              <div className={styles.titleHighlight}>{event.regLink}</div>
            </div>
            :
            <div
            onClick={()=>{
              window.open(event.regLink,"_blank",'noopener,noreferrer');
            }}
              className={styles.titlesReg}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.titleHighlight}>Register</div>
            </div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventInfo;
