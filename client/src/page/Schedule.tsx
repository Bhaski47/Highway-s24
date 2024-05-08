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
    { name: "Inauguration", time: "9:30 - 10:00AM" },
    { name: "BGMI", time: "10:00AM Onwards" },
    { name: "Free Fire", time: "10:00AM Onwards" },
    { name: "Music Host Performance", time: "10:00 - 10:30AM" },
    { name: "Battle Of Bands", time: "10:15 - 1:30AM" },
    { name: "Ship Wreck", time: "10:15AM - 12:15PM" },
    { name: "60 Secs To Fame", time: "10:15AM - 12:15PM" },
    { name: "Film Fest", time: "10:15AM - 1:15PM" },
    { name: "Escape Asylum", time: "10:15AM - 1:30PM" },
    { name: "Open Mic", time: "10:30AM - 12:00PM" },
    { name: "Entrepreneur Ship Pitching League", time: "11:00AM - 1:00PM" },
    { name: "IPL Auction", time: "11:00AM - 3:00PM" },
    { name: "Movie Screening", time: "11:00AM - 3:00PM" },
    { name: "FIFA Football", time: "11:00AM - 3:00PM" },
    { name: "Block And Tackle", time: "12:45AM - 2:30PM" },
    { name: "Channel Surfing", time: "12:45AM - 2:30PM" },
    { name: "VJ Siddhu Walkin", time: "3:30 - 4:30PM" },
    { name: "Vaisagh Concert", time: "4:30PM - 6:00PM" },
    { name: "Buffer Time", time: "30 Minutes" },
    { name: "Bus Departure", time: "7:00PM" },
    { name: "", time: "" },
  ];

  const day2: {
    name: string;
    time: string;
  }[] = [
    { name: "90's Game Fair", time: "9:30AM Onwards" },
    { name: "Laser Tag", time: "9.30AM-2.30PM" },
    { name: "Fifa Football", time: "9.30AM-2.30PM" },
    { name: "Spin-A-Yarn", time: "10.00AM-11.00AM" },
    { name: "Cinemax", time: "10.00AM-2.30PM" },
    { name: "Monopoly Madness", time: "10.15AM ONWARDS" },
    { name: "Jagadish On A Mission", time: "10.15AM-2.30PM" },
    { name: "Solo Adaptune", time: "10:30PM-12:00PM" },
    { name: "IPL Auction", time: "11.00AM-2.30PM" },
    { name: "Standup", time: "2:30PM-3:30PM" },
    { name: "Mirna Walkin", time: "3:30PM-4:30PM" },
    { name: "DJ Night", time: "5:00PM-6:30PM" },
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
