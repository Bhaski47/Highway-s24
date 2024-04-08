import Header from "../components/common/Header";
import styles from "../styles/pages/sponsors.module.css";

const Sponsors:React.FC=()=>{
    return(
        <>
        <Header/>
        <div className={styles.container}>
            <h1>OUR SPONSORS</h1>
            <div className={styles.sponsorContainer}>
                <h1>COMING SOON !</h1>
            </div>
        </div>
        </>
    )
}

export default Sponsors;