import styles from '../styles/utils/textborder.module.css';

const TextBorder:React.FC=()=>{
    return(
        <div className={styles.text_container}>
      <h1 className={styles.bordered_text}>Your Text Here</h1>
    </div>
    )
}

export default TextBorder;