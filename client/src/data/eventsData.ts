// import marine from "../assets/images/departments/Marine.webp";
// import bgmi from "../assets/images/departments/BGMI.png";
import defaultImg from '../assets/images/events/default.webp'
const eventsData: {
  image: string;
  // day: Number;
  name: string;
  id: string;
  date:string;
  time:string;
  venue:string;
  description: string[];
  coordinators: { name: string; contact: string }[];

}[] = [
  { image: defaultImg, id: "1.1", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
  { image: defaultImg, id: "1.2", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
  { image: defaultImg, id: "1.3", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
  { image: defaultImg, id: "2.1", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
  { image: defaultImg, id: "2.2", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
  { image: defaultImg, id: "2.3", name: "Event Name", date:"March 12", time:"10:00AM - 11:00AM", venue:"Classroom", coordinators:[{name:"lsifnv", contact:"lsfinvl"}],description:["sd","sd"] },
];

export default eventsData;