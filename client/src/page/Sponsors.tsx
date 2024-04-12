import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/sponsors.module.css";

const Sponsors:React.FC=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
        document.title = "Sponsors | Highways";
    },[])
    return(
        <>
        <Header/>
        <div className={styles.container} id="sponsors">
            <h1 className={styles.heading}>OUR SPONSORS</h1>
            <div className={styles.sponsorContainer}>
                <h1>COMING SOON !</h1>
            </div>
        </div>
        </>
    )
}

export default Sponsors;