import styles from "../styles/pages/buyPass.module.css";
import Header from "../components/common/Header";
import may_7 from "../assets/images/may_7.png";
import may_8 from "../assets/images/may_8.png";
import combo from "../assets/images/combo.png";
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
            <img
              src={pass === "day1" ? may_7 : pass === "day2" ? may_8 : combo}
              className={styles.passImage}
              alt=""
            />
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
                  {pass === "day1" ? "₹700" : pass === "day2" ? "₹800" : "₹900"}
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
                  {pass === "day1" ? "₹550" : pass === "day2" ? "₹650" : "₹750"}
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
              <form
                method="POST"
                name="customerData"
                // action="http://localhost:3001/ccavRequestHandler"
                action="https://technoways-svce-backend.vercel.app/ccavRequestHandler"
                className={styles.eventFormContainer}
              >
                <input
                  type="text"
                  name="billing_name"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="billing_address"
                  placeholder="Address"
                  required
                />
                <input
                  type="text"
                  name="billing_city"
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  name="billing_zip"
                  placeholder="Pincode"
                  required
                />
                <input
                  type="text"
                  name="billing_tel"
                  placeholder="Phone No"
                  required
                />
                <input
                  type="email"
                  name="billing_email"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year of Study"
                  required
                />
                <input
                  type="text"
                  name="regNo"
                  placeholder="College Register No"
                  required
                />
                <input
                  type="text"
                  name="college"
                  placeholder="College"
                  required
                />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  required
                />
                <input type="hidden" name="pass" value={pass} />
                <input type="hidden" name="billing_state" value="Tamil Nadu" />
                <input
                  type="submit"
                  className={styles.buyNow}
                  value="Buy Now"
                />
              </form>
              {/* <div className={styles.buyNow}>Buy Now</div> */}
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default BuyPass;
