import styles from "../styles/pages/buyPass.module.css";
import Header from "../components/common/Header";
import passImage from "../assets/images/pass_image.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BuyPass: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Technoways";
  }, []);

  const { pass } = useParams();
  console.log(pass);

  return (
    <>
      <Header />
      <center>
        <div className={styles.buyPass}>
          <h1 className={styles.heading}>Buy Your Passes</h1>
          <div className={styles.passContainer}>
            <img src={passImage} className={styles.passImage} alt="" />
            <div className={styles.details}>
              <h1 className={styles.highwaysText}>Highways' 24</h1>
              <br />
              <p>Book your tickets here</p>
              <br />
              <h4 className={styles.orginal_price}>
                Orginal Price:{" "}
                <span
                  style={{
                    color: "red",
                    textDecoration: "line-through",
                    fontWeight: "normal",
                  }}
                >
                  ₹900
                </span>
              </h4>
              <br />
              <h4 className={styles.current_price}>
                Current Price:{" "}
                <span
                  style={{
                    color: "yellow",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  ₹750
                </span>
              </h4>
              <br />
              <h5 className={styles.description}>
                About Highways m It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purposoney details
              </h5>
              <br />
              <br />
              <br />
              <div className={styles.buyNow}>Buy Now</div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default BuyPass;
