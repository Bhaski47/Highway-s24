import styles from "../styles/pages/about.module.css";
import Video from "../utils/Video";
const AboutContainer: React.FC = () => {
  return (
    <>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.imgContainer}>
        <Video />
        <div className={styles.aboutInfo}>
          <div>
            <h1>3000 +</h1>
            <h1>Participants</h1>
          </div>
          <div>
            <h1>80 +</h1>
            <h1>Colleges</h1>
          </div>
          <div>
            <h1>20 +</h1>
            <h1>Events</h1>
          </div>
          <div>
            <h1>20000 +</h1>
            <h1>Worth of prizes</h1>
          </div>
        </div>
      </div>
      <p className={styles.aboutHigh}>
        HIGHWAYS, the signature event of SVCE, has been thriving to inspire,
        empower and entertain students in the last few years. This fest embark
        son creativity, innovation and entertainment that brings out energy and
        zeal in the students. It provides a platform for students to unleash
        their potential and unravel their quiescent talent.
        <br />
        <br />
        Students from various backgrounds and cultures get on opportunity to
        interact and appreciate one another. It will bestow students with an
        unforgettable learning experience as HIGHWAYS’24 offers a whole gamut of
        events right from technical to non-technical domains.
      </p>
    </>
  );
};
export default AboutContainer;
