import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/sponsors.module.css";
import productionpartner from "../assets/images/sponsor/productionpartner.webp";
import eventpartner from "../assets/images/sponsor/sponsor1.webp";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
const Sponsors: React.FC = () => {
  const { width, height } = useWindowSize();
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
  ];
  return (
    <>
      <Header />
      <div className={styles.container} id="sponsors">
      <Confetti width={width} height={height} style={{position:"fixed",zIndex:"44"}} recycle={false}/>
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
