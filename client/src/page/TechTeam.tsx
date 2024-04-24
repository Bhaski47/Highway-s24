import { useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/pages/techteam.module.css";
import bhaski from "../assets/images/techteam/bhaski.webp";
import lekha from "../assets/images/techteam/lekha.svg";
import naveen from "../assets/images/techteam/naveen.svg";
import git from "../assets/images/icons/github_.svg";
import web from "../assets/images/icons/globe_.svg";
import insta from "../assets/images/icons/instagram_.svg";
import linkedin from "../assets/images/icons/linkedin_.svg";
import GradientText from "../utils/GradientText";
import ReactGA from "react-ga4";
const TechTeam: React.FC = () => {
  useEffect(() => {
    document.title = "Tech Team | Highways";
    window.scrollTo(0, 0);
  }, []);
  const developerGrad =
    "linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(149,71,0,1) 100%)";
  const designerGrad =
    "linear-gradient(90deg, rgba(115,1,156,1) 0%, rgba(212,0,191,1) 50%, rgba(216,133,255,1) 100%)";
  const details: {
    id: number;
    imgs: string;
    name: string;
    college: string;
    year: string;
    role: string;
    wing: string;
    roleName: string;
    portfolioLink: string;
    githubLink: string;
    instagramLink: string;
    linkedInLink: string;
  }[] = [
    {
      id: 1,
      imgs: bhaski,
      name: "Bhaskar G",
      college: "SVCE",
      year: "III rd YEAR - IT Student",
      role: "Developer",
      portfolioLink: "https://portfolio-bhaskar.vercel.app/",
      linkedInLink: "https://www.linkedin.com/in/bhaskar-g-9808612a0/",
      instagramLink: "https://www.instagram.com/bhaskarg2003/",
      githubLink: "https://github.com/Bhaski47",
      wing: "developer",
      roleName: "techteam",
    },
    {
      id: 2,
      imgs: lekha,
      name: "Lekhashree Rajesh",
      college: "SVCE",
      year: "IV rd YEAR - IT Student",
      role: "Designer",
      portfolioLink: "https://portfolio-bhaskar.vercel.app/",
      linkedInLink: "https://www.linkedin.com/in/lekhashree-rajesh-96565921b/",
      instagramLink: "https://www.instagram.com/lekharajeshh/",
      githubLink: "https://github.com/Bhaski47",
      wing: "designer",
      roleName: "designteam",
    },
    {
      id: 3,
      imgs: naveen,
      name: "Naveen Akash K",
      college: "SVCE",
      year: "III rd YEAR - IT Student",
      role: "Developer",
      portfolioLink: "https://naveenakash-portfolio.vercel.app/",
      linkedInLink: "https://www.linkedin.com/in/naveen-akash/",
      instagramLink: "https://www.instagram.com/__n.a.ve.e.n__/",
      githubLink: "https://github.com/Naveenakash-k",
      wing: "developer",
      roleName: "techteam",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>HIGHWAYS' 24 TECH TEAM ⚡️</h1>
        <div className={styles.cardContainer}>
          {details.map((data) => {
            return data.name === "Bhaskar G" ? (
              <div className={styles.bhcard} key={data.id}>
                <img src={data.imgs} alt={data.name} />
                {/* <h1>{data.name}</h1> */}
                <GradientText
                  text={data.name}
                  gradient={developerGrad}
                  wing={data.wing}
                  roleName={"null"}
                />
                <h3>{data.year}</h3>
                <h3>{data.college}</h3>
                <GradientText
                  text={data.role}
                  gradient={developerGrad}
                  wing={data.wing}
                  roleName={data.roleName}
                />
                <div className={styles.linkContainer}>
                  <a
                    href={data.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Bhaskar Portfolio ",
                        label: "Bhaskar",
                      });
                    }}
                  >
                    <img src={web} alt="~" />
                  </a>
                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Bhaskar Github ",
                        label: "Bhaskar",
                      });
                    }}
                  >
                    <img src={git} alt="~" />
                  </a>
                  <a
                    href={data.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Bhaskar Instagram ",
                        label: "Bhaskar",
                      });
                    }}
                  >
                    <img src={insta} alt="~" />
                  </a>
                  <a
                    href={data.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Bhaskar LinkedIn ",
                        label: "Bhaskar",
                      });
                    }}
                  >
                    <img src={linkedin} alt="~" />
                  </a>
                </div>
              </div>
            ) : data.name === "Naveen Akash K" ? (
              <div className={styles.nascard} key={data.id}>
                <img src={data.imgs} alt={data.name} />
                <GradientText
                  text={data.name}
                  gradient={developerGrad}
                  wing={data.wing}
                  roleName={"null"}
                />
                <h3>{data.year}</h3>
                <h3>{data.college}</h3>
                <GradientText
                  text={data.role}
                  gradient={developerGrad}
                  wing={data.wing}
                  roleName={data.roleName}
                />
                <div className={styles.linkContainer}>
                  <a
                    href={data.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Naveen Portfolio ",
                        label: "Naveen",
                      });
                    }}
                  >
                    <img src={web} alt="~" />
                  </a>
                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Naveen Github ",
                        label: "Naveen",
                      });
                    }}
                  >
                    <img src={git} alt="~" />
                  </a>
                  <a
                    href={data.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Naveen Instagram ",
                        label: "Naveen",
                      });
                    }}
                  >
                    <img src={insta} alt="~" />
                  </a>
                  <a
                    href={data.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Naveen LinkedIn ",
                        label: "Naveen",
                      });
                    }}
                  >
                    <img src={linkedin} alt="~" />
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.lekhacard} key={data.id}>
                <img src={data.imgs} alt={data.name} />
                <GradientText
                  text={data.name}
                  gradient={designerGrad}
                  wing={data.wing}
                  roleName={"null"}
                />
                <h3>{data.year}</h3>
                <h3>{data.college}</h3>
                <GradientText
                  text={data.role}
                  gradient={designerGrad}
                  wing={data.wing}
                  roleName={data.roleName}
                />
                <div className={styles.linkContainer}>
                  <a
                    href={data.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Lekhashree Instagram ",
                        label: "Lekhashree",
                      });
                    }}
                  >
                    <img src={insta} alt="~" />
                  </a>
                  <a
                    href={data.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Button Click",
                        action: "Clicked Lekhashree LinkedIn ",
                        label: "Lekhashree",
                      });
                    }}
                  >
                    <img src={linkedin} alt="~" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default TechTeam;
