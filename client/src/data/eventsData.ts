import marine from "../assets/images/departments/Marine.webp";
import bgmi from "../assets/images/departments/BGMI.png";
import defaultImg from "../assets/images/events/default.webp";
const eventsData: {
  image: string;
  // day: Number;
  name: string;
  id: string;
  date: string;
  time: string;
  venue: string;
  description: string[];
  coordinators: { name: string; contact: string }[];
}[] = [
  {
    image: bgmi,
    id: "1.1",
    name: "Jagadish on a mission",
    date: "Nil",
    time: "Nil",
    venue: "3rd block",
    coordinators: [{ name: "Nithishkumar B ", contact: "9940509524" }],
    description: [
      "A tricky mini map of SVCE is given as a dot map to each team, so the teams have to find those actual locations  in SVCE map through the given map, then each places contain clues which leads to a ultimate answer",
    ],
  },
  {
    image: bgmi,
    id: "1.2",
    name: "Escape Asylum",
    date: "Nil",
    time: "Nil",
    venue: "3rd Block",
    coordinators: [
      { name: "Maseera Ahmedi M", contact: "" },
      { name: "Shoban", contact: "" },
    ],
    description: [
      "Participants are made to compete with each other in an asylum and solve riddles to escape it",
    ],
  },
  {
    image: bgmi,
    id: "1.3",
    name: "Battle of Bands",
    date: "Nil",
    time: "Nil",
    venue: "Multi Purpose Hall",
    coordinators: [{ name: "Melvin", contact: "9940407331" }],
    description: [
      "The Battle of the Bands is an event hosted by the music club where various bands from different colleges get to perform live music. Each band is evaluated by certain criteria to assess the winners of the event at the end.",
    ],
  },
  {
    image: bgmi,
    id: "1.4",
    name: "Meme Marketing",
    date: "Nil",
    time: "Nil",
    venue: "Online Event",
    coordinators: [
      { name: "Bharathraj . R", contact: "8148582517" },
      { name: "Pradeep Krishnan", contact: "8148582517" },
    ],
    description: [
      "Participants are challenged to harness the power of memes to promote a product, company, political party, or any other entity. ",
      "Each participant can submit up to three memes that effectively convey their message and captivate their audience. Grab the Attention of Target audience with ur originality. Participants can use Editing tools of their choice .",
    ],
  },
  {
    image: bgmi,
    id: "1.5",
    name: "EPL : Entrepreneur Pitching League",
    date: "Nil",
    time: "Nil",
    venue: "Library Seminar Hall / Mph / Block V classrooms",
    coordinators: [
      { name: "Roshan", contact: "9841092274" },
      { name: "Gurunathan", contact: " 9087148428" },
    ],
    description: [
      "Round 1: Startup Trivia",
      "A fun and educational trivia competition focused on startup history, famous entrepreneurs, industry trends,tech innovations.",
      "Participants form teams and compete to answer questions, showcasing their knowledge of the startup ecosystem while enjoying a social and engaging atmosphere.",
      "Round 2 : Pitch Perfect",
      "Participants compete in delivering compelling pitches for fictional or real startup ideas assigned by the organizers. They are judged on their presentation skills, storytelling ability, and effectiveness in conveying the value proposition of their startup.",
      "Organizers will give suprise twists, challenges to make the participants adapt to real time scenarios",
      "Round 3 : Shark Tank Showdown",
      "Inspired by the popular TV show 'Shark Tank,' participants pitch their business ideas to a panel of 'sharks' (judges) who act as potential investors.",
      "The sharks ask probing questions and negotiate deals with the entrepreneurs, offering funding or partnerships based on the strength of the pitches.",
      "Participants simulate the journey of building and managing a startup within a virtual environment.",
      "They make strategic decisions regarding product development, marketing, funding, and business expansion.",
      "participants are evaluated based on their ability to navigate challenges, make informed decisions, and achieve business success. Business model canvas will be awarded brownie points",
    ],
  },
  {
    image: bgmi,
    id: "1.6",
    name: "Monopoly Madness",
    date: "Nil",
    time: "Nil",
    venue: "Drawing hall/ function hall/ video hall",
    coordinators: [
      { name: "Varshini K.K", contact: "88257 55455" },
      { name: "Shruthika", contact: " 63691 83851" },
    ],
    description: [
      "a Monopoly event filled with excitement and competition! With time constraints adding a thrilling twist, participants will need to strategize quickly to build their empires and bankrupt their opponents.",
    ],
  },
  {
    image: bgmi,
    id: "1.7",
    name: "Opinion Buzz",
    date: "Nil",
    time: "Nil",
    venue: "Library Seminar Hall / Mph / Block V classrooms",
    coordinators: [
      { name: "Upillikannan", contact: "8950203767" },
      { name: "Sangeeth", contact: "6369251267" },
    ],
    description: [
      "an interactive event organised by Ecell student volunteers to ignite dynamic discussions on entrepreneurship and other trending topics.",
      "Our main objective is to create an engaging environment for participants to express their opinions, sparking insightful discussions and constructive debates. By conducting this event we intend to get the thought provoking ideas and views of the students from movies to politics, business ideas and many more.",
    ],
  },
  {
    image: bgmi,
    id: "1.8",
    name: "Film fest",
    date: "Nil",
    time: "Nil",
    venue: "Video Hall",
    coordinators: [
      { name: "Arvind S", contact: "7397247490" },
    ],
    description: [
      "An intercollege Shortfilm competition where the qualified ",
      "Shortfilms are shotlisted screened and judged receiving a cash prize and certificates",
    ],
  },
  {
    image: bgmi,
    id: "1.9",
    name: "Spin-a-Yarn",
    date: "Nil",
    time: "Nil",
    venue: "Block 5",
    coordinators: [
      { name: "Arunima", contact: "9840073069"},{ name: "Jhalak", contact: "9444243793"},
    ],
    description: [
      "A theme will be given for the group to work with along with a sentence to start their script with, each team member will say one sentence for the story to follow along.",
      "A sketch of the script will be performed for 3 minutes, the time allocated for the script preparation(based on the starting sentence and theme given) will be 10 minutes.",
      "This process continues until a full-fledged script is formed."
    ],
  },
  {
    image: bgmi,
    id: "1.10",
    name: "Open Mic",
    date: "Nil",
    time: "Nil",
    venue: "Block 5",
    coordinators: [
      { name: "Harikrishnan", contact: "9789380793"},
    ],
    description: [
      "Individual event, Participants will be required to act out/perform material that is either spoken word poetry or a stand-up comedy set for an allocated time of 2-5 minutes.",
    ],
  },
  {
    image: defaultImg,
    id: "2.1",
    name: "Event Name",
    date: "Nil",
    time: "Nil",
    venue: "Classroom",
    coordinators: [{ name: "lsifnv", contact: "lsfinvl" }],
    description: ["sd", "sd"],
  },
  {
    image: defaultImg,
    id: "2.2",
    name: "Event Name",
    date: "Nil",
    time: "Nil",
    venue: "Classroom",
    coordinators: [{ name: "lsifnv", contact: "lsfinvl" }],
    description: ["sd", "sd"],
  },
  {
    image: defaultImg,
    id: "2.3",
    name: "Event Name",
    date: "Nil",
    time: "Nil",
    venue: "Classroom",
    coordinators: [{ name: "lsifnv", contact: "lsfinvl" }],
    description: ["sd", "sd"],
  },
];

export default eventsData;
