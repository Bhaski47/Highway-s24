import styles from "../styles/pages/eventsection.module.css";
import Header from "../components/common/Header";
import EventItem from "../components/EventItem";
// import departmentsData from "../data/departmentsData";
import { useEffect } from "react";
import eventsData from "../data/eventsData";
import ReactGA from "react-ga4";
import { useNavigate, useParams } from "react-router-dom";

const EventSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Highways";
  }, []);

  const { selectedDay } = useParams();
  const navigate = useNavigate();

  // const [selectedDay, setSelectedDay] = useState(1);

  return (
    <>
      <Header />
      <div className={styles.event} id="departments">
        <h1 className={styles.heading}>Events</h1>

        <center>
          <div className={styles.toggle}>
            <div
              className={styles.day}
              onClick={() => {
                ReactGA.event({
                  category: "Button Click",
                  action: "Clicked on Day1 page",
                  label: "Day1",
                });
                navigate("/events/1");
              }}
            >
              Day 1
            </div>
            <div
              className={styles.day}
              onClick={() => {
                ReactGA.event({
                  category: "Button Click",
                  action: "Clicked on Day2 page",
                  label: "Day2",
                });
                navigate("/events/2");
              }}
            >
              Day 2
            </div>
            <div
              className={styles.toggle_overlay}
              style={{
                transform:
                  selectedDay === "1" ? "translateX(0)" : "translateX(105%)",
              }}
            ></div>
          </div>
        </center>
        <div className={styles.departmentGrid}>
          {selectedDay === "1"
            ? eventsData
                .filter((ele) => ele.id.startsWith("1"))
                .map((ele) => (
                  <EventItem
                    image={ele.image}
                    name={ele.name}
                    key={ele.id}
                    selectedDay={selectedDay}
                    id={ele.id}
                  />
                ))
            : eventsData
                .filter((ele) => ele.id.startsWith("2"))
                .map((ele) => (
                  <EventItem
                    image={ele.image}
                    name={ele.name}
                    key={ele.id}
                    selectedDay={selectedDay!}
                    id={ele.id}
                  />
                ))}
        </div>
      </div>
    </>
  );
};

export default EventSection;
