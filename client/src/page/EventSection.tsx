import styles from "../styles/pages/eventsection.module.css";
import Header from "../components/common/Header";
import EventItem from "../components/EventItem";
import departmentsData from "../data/departmentsData";
import { useEffect, useState } from "react";
import marine from "../assets/images/departments/Marine.webp";
import bgmi from "../assets/images/departments/BGMI.png";

const EventSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Technoways";
  }, []);

  const [selectedDay, setSelectedDay] = useState(1);

  const day1Event: { image: string; name: string; id: string }[] = [
    { image: marine, id: "1.1", name: "Event Name" },
    { image: marine, id: "1.2", name: "Event Name" },
    { image: marine, id: "1.3", name: "Event Name" },
  ];

  const day2Event: { image: string; name: string; id: string }[] = [
    { image: bgmi, id: "2.1", name: "Event Name" },
    { image: bgmi, id: "2.2", name: "Event Name" },
    { image: bgmi, id: "2.3", name: "Event Name" },
  ];

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
            ? day1Event.map((ele) => (
                <EventItem
                  image={ele.image}
                  name={ele.name}
                  key={ele.id}
                  id={ele.id}
                />
              ))
            : day2Event.map((ele) => (
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
