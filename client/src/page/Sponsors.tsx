import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/sponsors.module.css";
import productionpartner from "../assets/images/sponsor/productionpartner.webp";
import eventpartner from "../assets/images/sponsor/sponsor1.webp";
import merchandisepartner from "../assets/images/sponsor/PLA-vertical-CMYK-color_dark-@2x.webp";
import travelpartner from "../assets/images/sponsor/nammayatri.webp";
import ConfettiPopper from "../utils/ConfettiPopper";

const Sponsors: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sponsors | Highways";
  }, []);
  const sponsor: {
    id: number;
    name: string;
    img: string;
  }[] = [
    {
      id: 1,
      name: "Production Partner",
      img: productionpartner,
    },
    {
      id: 2,
      name: "Event Partner",
      img: eventpartner,
    },
    {
      id: 3,
      name: "Merchandise Partner",
      img: merchandisepartner,
    },
    {
      id: 4,
      name: "Travel Partner",
      img: travelpartner,
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.container} id="sponsors">
        <ConfettiPopper/>
        <h1 className={styles.heading}>OUR SPONSORS</h1>
        <div className={styles.sponsorContainer}>
          {sponsor.map((data) => (
            <div key={data.id}>
              <h1 title={data.name}>{data.name}</h1>
              <img src={data.img} alt="~" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
