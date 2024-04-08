import Header from "../components/common/Header"
import style from '../styles/pages/schedule.module.css'

const Schedule: React.FC = () => {

  const educationItems: {
    name: string,
    time:string
  }[] = [
    { name: "INAUGURAL",time:"9.00 - 10.00 AM"},
    { name: "WALKIN",time:"9.00 - 10.00 AM"},
    { name: "DANCE",time:"9.00 - 10.00 AM"},
    { name: "MUSIC",time:"9.00 - 10.00 AM"},
    { name: "WALK IN",time:"9.00 - 10.00 AM"},
  ];

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Schedule</h1>
      <div className={style.days}>
        <h1>Day 1</h1>
        <h1>Day 2</h1>
      </div>
      <div className={style.details}>
        <div className={style.edu}>
          {educationItems.map((item, index) => (
            <div
              className={style.eduList}
              key={index}
            >
              <h4>{item.time}</h4>
              <h3>{item.name}</h3>
              {/* <p>{item.time}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Schedule;
