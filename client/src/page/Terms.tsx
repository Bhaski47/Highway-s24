import Header from "../components/common/Header";
import styles from "../styles/pages/terms.module.css";
import { useEffect } from "react";

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Technoways";
  }, []);
  return (
    <>
      <Header />
      <div className={styles.aboutPage} id="about">
        <div className={styles.space}></div>
        <div className={styles.container}>
          <div className={styles.about}>
            <h1 className={styles.title}>Terms and Conditions</h1>
            <p>
              By accessing this website, we assume you accept these terms and
              conditions. Follow all of the terms and conditions stated on this
              page. These Terms and Conditions, Privacy Statement, Disclaimer
              Notice, and all Agreements use the following terminology: The
              terms 'participant,' 'you,' and 'your' refer to you, the person
              who logs on to this website and agrees to the organization's terms
              and conditions. 'The organization,' 'Ourselves,' 'We,'
              'Ourselves,' and 'Us' refer to the student council of svce that is
              hosting Technoways. All terms refer to the offer, acceptance, and
              consideration of payment required to begin the process of our
              assistance to the participant in the most appropriate manner for
              the express purpose of meeting the participant's needs in respect
              of the organization's provision. It also includes information on
              lodging and conditions.
            </p>
            <br />
            <br />
            <p>
              TERMS AND CONDITIONS AT COLLEGE: Participants must wear valid
              college ID cards at all times in the campus and while boarding the
              bus. Valid college ID cards must be presented to the event
              organizers and faculty members whenever requested to do so.
              Participants must board only the bus that is allotted to them,
              hence reporting to the boarding point on-time is essential.
              Accommodation will NOT be provided to the participating students.
              Participants are expected to conduct themselves in a professional
              manner, any form of disruptive or inappropriate behavior may
              result in immediate disqualification and removal of the
              participant from the premises. Participants are responsible for
              their own materials and equipment required for the event unless
              stated otherwise. Any provided materials must be used responsibly
              and any damages must be reported immediately to the concerned
              event organizers. Participants must adhere to the event schedule
              and be present at the event premise at the specified times, hence,
              timely reporting to the event venue is mandatory to ensure
              participation. Unwanted loitering of participants in the campus is
              strictly prohibited. The event organizers reserve the right to
              make changes to the schedule, format, or any other aspect of the
              event, the information of which will be conveyed to the
              participants. Participants may be photographed or recorded during
              the event for promotional and archival purposes. SVCE Student Council is not responsible for any injuries
              or accidents except those occurring during events/workshops. In events, the decisions made by the event organizers are final. By participating
              in the event, participants agree to abide by these terms and
              conditions. 
              <br />
              <br />
              TICKETING: A confirmation of the purchase of tickets either in
              digital or printed form must be presented upon arrival at the
              event venue along with a valid college ID card. . Ticket purchases
              are not-transferable and non-refundable. Participants must provide
              a valid college ID at the registration desk for verification.
              Transfer of ticket to another person due to the inability to
              attend is prohibited.
            </p>
            <br />
            <br />
            <h1>
              TERMS OF SERVICE
            </h1>
            <br />
            <br />
            <p>
              You may not create frames around our Webpages that alter the
              visual presentation or appearance of our Website without prior
              approval and written permission. 
              <br /><br />
              PRIVACY POLICY: Measures will be taken
              to collect and protect personal data. By signing up,
              users agree to receive newsletters through email.
              <br /><br /> INTELLECTUAL PROPERTY: Trademarks, copyrights, and usage of content are
              protected.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
