// import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/celebrity.module.css";

const CelebrityWalkin:React.FC=()=>{
    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    //     document.title = "CelebrityWalking | Highways";
    // },[])
    const walkings:{
        id:number,
        img:String,
        name:String
    }[]=[
        {
        id:1,
        img:"?",
        name:"Walk In Day 1"
    },
        {
        id:2,
        img:"?",
        name:"Walk In Day 2"
    },
        {
        id:3,
        img:"?",
        name:"Concert Celebrity"
    },
        {
        id:4,
        img:"?",
        name:"Judge 1"
    },
]
    return(
        <>
        <Header/>
        <div className={styles.container}>
            <h1 className={styles.heading}>Celebrity Walkin</h1>
            <div className={styles.walkingsContainer}>
                {walkings.map((data)=>(
                    <div className={styles.walkin} key={data.id}>
                        <h1 key={data.id}>{data.img}</h1>
                        <p>{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CelebrityWalkin;