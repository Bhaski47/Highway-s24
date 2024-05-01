// import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/celebrity.module.css";
import vaisagh from "../assets/images/walkings/Highways'24_vaisagh1.png";
import dj from "../assets/images/walkings/Highways'24_DJLash.png";
import joke from "../assets/images/walkings/1.png";
const CelebrityWalkin:React.FC=()=>{
    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    //     document.title = "CelebrityWalking | Highways";
    // },[])
    const walkings:{
        id:number,
        img:string,
        name:string
    }[]=[
        {
        id:1,
        img:vaisagh,
        name:"Walk In Day 1"
    },
        {
        id:2,
        img:joke,
        name:"Walk In Day 2"
    },
        {
        id:3,
        img:dj,
        name:"Concert Celebrity"
    },
    //     {
    //     id:4,
    //     img:"?",
    //     name:"Judge 1"
    // },
]
    return(
        <>
        <Header/>
        <div className={styles.container}>
            <h1 className={styles.heading}>Celebrity Walkin</h1>
            <div className={styles.walkingsContainer}>
                {walkings.map((data)=>(
                    <div className={styles.walkin} key={data.id}>
                        {/* <h1 key={data.id}>{data.img}</h1> */}
                        <img src={data.img} className={styles.imgs} alt="?" />
                        <h1>{data.name}</h1>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CelebrityWalkin;