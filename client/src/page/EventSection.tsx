import styles from "../styles/pages/eventsection.module.css";
import Header from "../components/common/Header";
import EventItem from "../components/EventItem";
import departmentsData from "../data/departmentsData";
import { useEffect } from "react";

const EventSection: React.FC = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "Events | Technoways"
  },[])
  return (
    <>
      <Header />
      <div className={styles.event} id="departments">
        <h1 className={styles.heading}>Events</h1>
        <div className={styles.departmentGrid}>
          {departmentsData.map((ele) => (
            <EventItem
              image={ele.img}
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
