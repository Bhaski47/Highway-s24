import styles from "../styles/pages/eventsection.module.css";
import Header from "../components/common/Header";
import EventItem from "../components/EventItem";
// import departmentsData from "../data/departmentsData";
import { useEffect, useState } from "react";
import eventsData from "../data/eventsData";

const EventSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Highways";
  }, []);

  const [selectedDay, setSelectedDay] = useState(1);

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
                setSelectedDay(1);
              }}
            >
              Day 1
            </div>
            <div
              className={styles.day}
              onClick={() => {
                setSelectedDay(2);
              }}
            >
              Day 2
            </div>
            <div
              className={styles.toggle_overlay}
              style={{
                transform:
                  selectedDay === 1 ? "translateX(0)" : "translateX(105%)",
              }}
            ></div>
          </div>
        </center>
        <div className={styles.departmentGrid}>
          {selectedDay === 1
            ? eventsData
                .filter((ele) => ele.id.startsWith("1"))
                .map((ele) => (
                  <EventItem
                    image={ele.image}
                    name={ele.name}
                    key={ele.id}
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
                id={ele.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default EventSection;
