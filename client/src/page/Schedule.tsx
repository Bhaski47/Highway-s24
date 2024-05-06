import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import style from "../styles/pages/schedule.module.css";

const Schedule: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Schedule | Highways";
  });

  const [selectedDay, setSelectedDay] = useState(1);

  const day1: {
    name: string;
    time: string;
  }[] = [
    { name: "Inauguration", time: "9:30 - 10:00 AM" },
    { name: "BGMI", time: "10:00 AM Onwards" },
    { name: "Free Fire", time: "10:00 AM Onwards" },
    { name: "Music Host Performance", time: "10:00 - 10:30 AM" },
    { name: "Battle Of Bands", time: "10:15 - 1:30 AM" },
    { name: "Ship Wreck", time: "10:15 AM - 12:15 PM" },
    { name: "60 Secs To Fame", time: "10:15 AM - 12:15 PM" },
    { name: "Film Fest", time: "10:15 AM - 1:15 PM" },
    { name: "Escape Asylum", time: "10:15 AM - 1:30 PM" },
    { name: "Open Mic", time: "10:30 AM - 12:00 PM" },
    { name: "Entrepreneur Ship Pitching League", time: "11:00 AM - 1:00 PM" },
    { name: "IPL Auction", time: "11:00 AM - 3:00 PM" },
    { name: "Movie Screening", time: "11:00 AM - 3:00 PM" },
    { name: "FIFA Football", time: "11:00 AM - 3:00 PM" },
    { name: "Block And Tackle", time: "12:45 AM - 2:30 PM" },
    { name: "Channel Surfing", time: "12:45 AM - 2:30 PM" },
    { name: "VJ Siddhu Walkin", time: "3:30 - 4:30 PM" },
    { name: "Vaisagh Concert", time: "4:30 PM - 6:00 PM" },
    { name: "Buffer Time", time: "30 Minutes" },
    { name: "Bus Departure", time: "7:00 PM" },
    { name: "", time: "" },
  ];

  const day2: {
    name: string;
    time: string;
  }[] = [
    { name: "INAUGURAL", time: "9.00 - 10.00 AM" },
    { name: "WALKIN", time: "9.00 - 10.00 AM" },
    { name: "DANCE", time: "9.00 - 10.00 AM" },
    { name: "MUSIC", time: "9.00 - 10.00 AM" },
    { name: "WALK IN", time: "9.00 - 10.00 AM" },
    { name: "", time: "" },
  ];

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.heading}>Schedule</h1>
        <center>
          <div className={style.toggle}>
            <div
              className={style.day}
              onClick={() => {
                setSelectedDay(1);
              }}
            >
              Day 1
            </div>
            <div
              className={style.day}
              onClick={() => {
                setSelectedDay(2);
              }}
            >
              Day 2
            </div>
            <div
              className={style.toggle_overlay}
              style={{
                transform:
                  selectedDay === 1 ? "translateX(0)" : "translateX(105%)",
              }}
            ></div>
          </div>
        </center>
        {selectedDay === 1 ? (
          <div className={style.details}>
            {day1.map((item, index) => (
              <div className={style.edu} key={index}>
                <div className={style.align}>
                  <p>{item.time}</p>
                  <p>{item.name}</p>
                  {index !== day1.length - 1 && (
                    <div className={style.line}></div>
                  )}
                </div>
                {index !== day1.length - 1 && <div className={style.dot}></div>}
              </div>
            ))}
          </div>
        ) : (
          <div className={style.details}>
            {day2.map((item, index) => (
              <div className={style.edu} key={index}>
                <div className={style.align}>
                  <p>{item.time}</p>
                  <p>{item.name}</p>
                  {index !== day2.length - 1 && (
                    <div className={style.line}></div>
                  )}
                </div>
                {index !== day2.length - 1 && <div className={style.dot}></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;
