import Header from "../components/common/Header";
import styles from "../styles/pages/eventInfo.module.css";
import calIcon from "../assets/images/icons/calIcon.png";
import timeIcon from "../assets/images/icons/timeIcon.png";
import userIcon from "../assets/images/icons/userIcon.png";
import classIcon from "../assets/images/icons/classroomIcon.png";
import eventsData from "../data/eventsData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EventInfo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { department, eventId } = useParams();
  var event: {
    name: string;
    date: string;
    time: string;
    venue: string;
    team: string;
    description: string[];
    rules: string[];
    requirements: string[];
    link: string | null | undefined;
    coordinators: { name: string; contact: string };
  } = {
    name: "",
    date: "",
    time: "",
    venue: "",
    team: "",
    link: null,
    description: [],
    rules: [],
    requirements: [],
    coordinators: { name: "", contact: "" },
  };

  var by;
  eventsData.map((dep) => {
    if (dep.id === department && eventId !== undefined) {
      event = dep.events[parseInt(eventId)];
      by = dep.by;
    }
  });

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>
            {event.name}
          </h1>
          {by && (
            <div className={styles.scrollingText}>
              <p>
                By {eventsData.filter((ele) => ele.id === department)[0].by}
              </p>
              <br />
            </div>
          )}
          <div className={styles.contextContainer}>
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
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={userIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.team}</h3>
              </div>
            </div>
            <h2>Description</h2>
            {event.description.map((des) => (
              <p>{des}</p>
            ))}
            <br />
            <h2>Rules</h2>
            <ul>
              {event.rules.map((rule) => (
                <li>{rule}</li>
              ))}
            </ul>
            <br />
            <h2>Requirements</h2>
            <ul>
              {event.requirements.map((rule) => (
                <li>{rule}</li>
              ))}
            </ul>

            <br />
            <h2>Event Coordinator</h2>
            <p>{`${event.coordinators.name}  ${event.coordinators.contact}`}</p>
            {event.link === null ? (
              <a href="https://forms.gle/jLVFdaH8UxdiQeqaA">
                <button className={styles.getPass}>Get Pass</button>
              </a>
            ) : (
              <a href="https://forms.gle/jCkLCzazxHgxHLZN9">
                <button className={styles.getPass}>Register Now</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
