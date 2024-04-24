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
    document.title = "Buy Passes | Technoways";
  }, []);

  const { pass } = useParams();
  return (
    <>
      <Header />
      <center>
        <div className={styles.buyPass}>
          <h1 className={styles.heading}>Buy Your Passes</h1>
          <div className={styles.passContainer}>
            <center>
              <img
                src={pass === "day1" ? may_7 : pass === "day2" ? may_8 : combo}
                className={styles.passImage}
                alt=""
              />
            </center>
            <div className={styles.details}>
              {/* <h1 className={styles.highwaysText}>Highways' 24</h1> */}
              <h1 className={styles.highwaysText}>Highways' 24</h1>
              <h1 className={styles.ticketTitle}>Early Bird Ticket</h1>
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
                  {/* {pass === "day1" ? "₹700" : pass === "day2" ? "₹800" : "₹900"} */}
                  ₹999
                </span>
              </h4>
              <br />
              {/* <h4 className={styles.current_price}>
                Current Price:{" "}
                <span
                  style={{
                    color: "yellow",
                    fontWeight: "normal",
                  }}
                >
                  {pass === "day1" ? "₹550" : pass === "day2" ? "₹650" : "₹750"}
                </span>
              </h4> */}
              <h4 className={styles.current_price}>
                SVCE Students:{" "}
                <span
                  style={{
                    color: "yellow",
                    fontWeight: "normal",
                  }}
                >
                  ₹599
                </span>
              </h4>
              <h4 className={styles.current_price}>
                Other College Students:{" "}
                <span
                  style={{
                    color: "yellow",
                    fontWeight: "normal",
                  }}
                >
                  ₹799
                </span>
              </h4>
              <br />
              <h5 className={styles.description}>
                Unlock the full spectrum of cultural delights with the
                Highways'24 combo pass. Take advantage of our special early bird
                offer priced at just 599 for a limited time, granting access to
                both days of the event. Immerse yourself in a rich tapestry of
                activities, including walk-ins, dynamic concerts, uproarious
                stand-up shows, and exhilarating DJ performances. What's more,
                students can enjoy exclusive entry to classic events with the
                Highways'24 combo pass, ensuring a comprehensive cultural
                experience. Don't let this opportunity slip away - secure your
                combo pass now and prepare for two days of unforgettable
                entertainment!
              </h5>
              <br />
              <br />
              <br />
              <form
                method="POST"
                name="customerData"
                // action="http://localhost:3001/ccavRequestHandler"
                action="https://technoways-svce-backend.vercel.app/ccavRequestHandler"
                className={styles.form}
              >
                <h3 className={styles.formTitle}>
                  Fill the details to buy your ticket 🎫
                </h3>
                <br />
                <div
                  style={{ display: "grid", gridTemplateColumns: "auto auto" }}
                >
                  <span>Name:</span>
                  <input
                    type="text"
                    name="billing_name"
                    placeholder="Name"
                    required
                  />
                  <span>Address:</span>
                  <input
                    type="text"
                    name="billing_address"
                    placeholder="Address"
                    required
                  />
                  {/* <br /> */}
                  <span>City:</span>
                  <input
                    type="text"
                    name="billing_city"
                    placeholder="City"
                    required
                  />
                  {/* <br /> */}
                  <span>Pincode:</span>
                  <input
                    type="text"
                    name="billing_zip"
                    placeholder="Pincode"
                    required
                  />
                  {/* <br /> */}
                  <span>Phone No:</span>
                  <input
                    type="text"
                    name="billing_tel"
                    placeholder="Phone No"
                    required
                  />
                  {/* <br /> */}
                  <span>Email ID:</span>
                  <input
                    type="email"
                    name="billing_email"
                    placeholder="Email"
                    required
                  />
                  {/* <br /> */}
                  <span>Year:</span>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year of Study"
                    required
                  />
                  {/* <br /> */}
                  <span>Reg No:</span>
                  <input
                    type="text"
                    name="regNo"
                    placeholder="College Register No"
                    required
                  />
                  {/* <br /> */}
                  <span>College:</span>
                  <input
                    type="text"
                    name="college"
                    placeholder="College"
                    required
                  />
                  {/* <br /> */}
                  <span>Dept:</span>
                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    required
                  />
                  {/* <br /> */}
                  <input type="hidden" name="pass" value={pass} />
                  <input
                    type="hidden"
                    name="billing_state"
                    value="Tamil Nadu"
                  />
                  {/* <br /> */}
                </div>
                <center>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      color: "gray",
                      fontSize: "smaller",
                    }}
                  >
                    Note:
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      color: "gray",
                      fontSize: "smaller",
                    }}
                  >
                    Please provide a valid email address for receiving the
                    tickets.
                  </p>
                  {/* <br /> */}
                  {/* <p style={{fontFamily:"Poppins", color:"gray", fontSize:"smaller"}}>Utilize the SVCE Official Email ID to avail the offer.</p> */}
                  <br />
                  <input
                    type="submit"
                    className={styles.buyNow}
                    value="Proceed to Payment"
                  />
                </center>
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
