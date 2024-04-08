import ae from "../assets/images/departments/auto.webp";
import bt from "../assets/images/departments/biotech.webp";
import ce from "../assets/images/departments/chemical.webp";
import civil from "../assets/images/departments/civil.webp";
import cs from "../assets/images/departments/cs.webp";
import ece from "../assets/images/departments/ece.webp";
import eee from "../assets/images/departments/eee.webp";
import it from "../assets/images/departments/IT.webp";
import me from "../assets/images/departments/mech.webp";
import club from "../assets/images/departments/csi.webp";
import ieee from "../assets/images/departments/ieee.webp";
import bgmi from "../assets/images/departments/BGMI.webp";
import marine from "../assets/images/departments/Marine.webp";
// import workshops from "../assets/images/departments/IT.webp";
// import pros from "../assets/images/proshow.webp";

const departmentsData: {
  id: string;
  name: string;
  img: string;
}[] = [
  { id: "auto", name: "Automobile Engineering", img: ae },
  { id: "bio", name: "BioTechnology", img: bt },
  { id: "chem", name: "Chemical Engineering", img: ce },
  { id: "civil", name: "Civil Engineering", img: civil },
  { id: "cse", name: "Computer Science", img: cs },
  { id: "csi_club", name: "CSI Student Chapter", img: club },
  { id: "ece", name: "Electronics & Communication Engineering", img: ece },
  { id: "eee", name: "Electrical & Electronics Engineering", img: eee },
  { id: "ieee_club", name: "IEEE SVCE Student Branch", img: ieee },
  { id: "int", name: "Information Technology", img: it },
  { id: "marine", name: "Marine Engineering", img: marine },
  { id: "mech", name: "Mechanical Engineering", img: me },
  { id: "bgmi", name: "Hyperstrike : BGMI showdown", img: bgmi },
  // { id: "workshops", name: "Workshops", img: workshops },
  // { id: "proshows", name: "Proshows", img: pros },
];

export default departmentsData;
