import styles from '../styles/pages/glimpse.module.css'
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import Slider3 from "../components/Slider3";
const Glimpse: React.FC = () => {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.heading}>Glimpse</h1>
        <Slider1/>
        <Slider2/>
        <Slider3/>
    </div>
  );
};

export default Glimpse;
