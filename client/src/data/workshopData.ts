const workshopData: {
  id: Number;
  dept: String;
  name: String;
  duration: String;
  shrtDesc: String;
  desc: String[];
  link: String,
  venue: String;
  req: String[];
  day: String;
  maxPeople: Number | String | null;
  rules: String[] | null;
  coord: String[];
  ph: String | null;
}[] = [
  {
    id: 0,
    link:"https://forms.gle/ZsRJrV2nfdwM8eCK7",
    dept: "Information Technology",
    name: "Digital Detective: Cyber Forensics and IoT Workshop",
    duration: "10:00AM - 1:00PM",
    shrtDesc:
      "Explore cyber forensics and IoT, tracing digital footprints and uncovering vulnerabilities in this hands-on workshop.",
    desc: [
      "Join us for an immersive workshop where participants will delve into the intricate world of cyber forensics intersecting with the Internet of Things (IoT). Throughout this dynamic event, attendees will gain a comprehensive understanding of cutting-edge techniques and tools essential for investigating cyber incidents within IoT networks. From tracing digital footprints to uncovering hidden vulnerabilities, participants will learn how to navigate complex digital landscapes effectively. Through hands-on activities and expert-led sessions, attendees will leave equipped with the skills and knowledge needed to tackle real-world cyber challenges confidently. Don't miss this opportunity to expand your expertise and become a proficient investigator in the realm of cyber forensics and IoT.",
    ],
    venue: "IT Department, PG LAB",
    req: ["Participants should bring their notepad and pen"],
    maxPeople: null,
    day: "15th March",
    rules: ["Nil"],
    coord: ["Rashmika R S"],
    ph: "+91 88256 01866",
  },
  {
    id: 1,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScuJvK1xogjeics-3i10gbBreK04GpOTwjFT1ypcM-M0hqctg/viewform?usp=sf_link",
    dept: "Association of Computer Engineers (ACE)",
    name: "A Mixed Reality AR & VR Experience",
    duration: "10:00AM - 03:00PM",
    shrtDesc:
      "AR & VR Workshop with Unreal Engine Experience hands-on learning, build practical skills, and network with industry professionals in this immersive exploration of AR and VR technology. Perfect for students, professionals, and enthusiasts eager to dive into the future of digital experiences.",
    desc: [
      "Unleash Your Creativity: AR & VR Workshop with Unreal Engine",
      " Dive into the world of Augmented Reality (AR) and Virtual Reality (VR) in our dynamic workshop led by a certified Unreal Engine instructor.",
      "What You'll Experience:",
      "Hands-on learning with expert guidance.",
      "Build practical skills through interactive sessions.",
      "Create your own AR and VR projects.",
      "Stay ahead with cutting-edge Unreal Engine technology.",
      "Network with industry professionals and enthusiasts.",
    ],
    venue: "CS Department Laboratory",
    req: [
      "Participants are advised to bring notebooks or writing utensils(pen, pencil..)for note-taking.",
      "Valid identification and proof of registration are required.",
      "Kindly bring laptop.",
    ],
    maxPeople: "50-60",
    day: "15th March",
    rules: [
      "Respect copyright and intellectual property rights when using workshop materials or resources.",
      "Any illegal or unethical behaviour ",
    ],
    coord: ["Manoj Kumar S", "Logesh Kumar A"],
    ph: "+91 82209 69058,+91 63805 84312",
  },
  {
    id: 2,
    link: "https://forms.gle/xCqmWKQSQMP3WEGE6",
    dept: "SAE Collegiate club of SVCE, AAE",
    name: "Basics of Automotive tuning",
    duration: "9:30AM - 12:30PM",
    shrtDesc:
      "Covers all the basics regarding automotive tuning and engine mapping.",
    desc: [
      "The workshop covers all the basics of automotive tuning.",
      "The reason for tuning and the merits and demerits will also be discussed.",
      " Participants can ask their doubts at the end of the session.",
    ],
    venue: "Component Laboratory(Automobile)",
    req: [
      "Need to be an automotive enthusiast or a person pursuing automotive related career",
    ],
    maxPeople: 30,
    day: "15th March",
    rules: ["Nil"],
    coord: ["Abinandan"],
    ph: "+91 94433 04280",
  },
  {
    id: 3,
    link:"https://forms.gle/CYzwd5Wcarw2af8R7",
    dept: "Indian Institute of Chemical Engineers",
    name: "Basics Of Process Flow Sheeting using DWSIM",
    duration: "12:30PM - 2:00PM",
    shrtDesc:
      "Introduction to building process flow diagrams of various manufacturing processes.",
    desc: [
      "General awareness about process modelling and construction of process flow diagrams are given using softwares like Dwsim from experts.",
    ],
    venue: "Block V 515,516",
    req: ["laptops with dwsim installed"],
    maxPeople: 100,
    day: "16th March",
    rules: [""],
    coord: ["Siddharth RR"],
    ph: "+91 85086 66551",
  },
  {
    id: 4,
    link:"https://forms.gle/5dY2i4z6CFzbcDfF8",
    dept: "Robotics And Artificial Intelligence Club",
    name: "ChipConnect:Embedded Systems",
    duration: "9:30AM - 2:00PM",
    shrtDesc:
      "Explore The World Of Embedded Systems In This Engaging Workshop",
    desc: [
      "What You'll Experience:",
      "Dive deep into The fundamentals of Embedded Systems.",
      "Learn About Integrated Circuits and their applications.",
      "Gain pratical insights into microcontrollers and their functionalities.",
      "Explore firmware programming techniques for real-world applications.",
      "Engage in interactive sessions and guided exercises.",
      "Develop a embedded projects under expert guidance.",
      "Stay updated with the latest trends and advancements in Embedded Systems Technology.",
      "Network with fellow enthusiasts and industry professionals.",
    ],
    venue: "Embedded Systems Laboratory in ECE Department",
    req: ["Nill"],
    maxPeople: null,
    day: "16th March",
    rules: [""],
    coord: ["V Kiran Yadav"],
    ph: "+91 73391 20852",
  },

  {
    id: 5,
    link:"https://forms.gle/vgxS63rMhiXU7u5D6",
    dept: "Mechanical Engineering",
    name: "Industrial Robotics Programming and Operation",
    duration: "12:30PM - 03:00PM",
    shrtDesc:
      "Join our workshop on Industrial Robotics Programming and Operation for hands-on experience with cutting-edge automation technologies.",
    desc: [
      "Participants limited to 20 ( First Come First Serve Basis )",
      "Join our workshop on Industrial Robotics Programming and Operation for hands-on experience with cutting-edge automation technologies.",
      "Learn to program and operate industrial robots, enhancing manufacturing precision and productivity.",
      "Our comprehensive session covers programming, operational procedures, and smart manufacturing applications.",
      "Acquire the skills required for today's sophisticated robotics landscape. Advance your career with expert-led insights in just one intensive session.",
    ],
    venue: "PG Cad Lab Mechanical Department",
    req: ["Nil"],
    maxPeople: null,
    day: "16th March",
    rules: ["Nil"],
    // coord: ["Dr. M. Mohandass","Mr. A. Ranjith Raj","Dr. A. Saravanan"],
    // ph: "TBA",
    coord: ["Dr. M Mohandass"],
    ph: "Sabarish Kumar A.S  -  +91 6369 212 503",
  },

  {
    id: 6,
    link:"https://forms.gle/WMLqis2j4MkrvFTA7",
    dept: "Marine Engineering",
    name: "Robotic Wire Arc Additive Manufacturing",
    duration: "12:30PM - 2:00PM",
    shrtDesc:
      "The aim of introducing concepts and techniques of Robotic Wire Arc Additive Manufacturing is to provide a comprehensive understanding of this innovative technology. This includes explaining how the process works, the materials used, and the applications where this technology can be beneficial.",
    desc: [
      "In a workshop, participants would explore Robotic Wire Arc Additive Manufacturing (WAAM) from design to manufacturing.",
      "They would learn about the process, including using wire feedstock to create parts layer by layer.",
      "The workshop would also cover the benefits of WAAM, such as cost-effectiveness and efficiency in producing moderate-sized components.",
      "Participants would learn to maximize WAAM's potential, including its integration with other systems for in-process problem detection and repair.",
    ],
    venue: "Welding Research Cell, Marine Department",
    req: ["Participants should bring their notepad and pen","All The Marine Students Should Attend The Workshop In Proper Marine Uniform Only"],
    maxPeople: null,
    day: "16th March",
    rules: ["All The Marine Students Should Attend The Workshop In Proper Marine Uniform Only",],
    coord: ["Naveenkumar"],
    ph: "+91 6381886850",
  },
  {
    id: 7,
    link:"https://forms.gle/YZcEAW9ePxQNAzBh7",
    dept: "Civil Engineering",
    name: "Concrete 3D Printing: The future of construction industry",
    duration: "10:00AM -11:30AM",
    shrtDesc:
      "Insights into Concrete 3D Printing",
    desc: [
      "Engage and learn from Resource Persons from TVASTA MANUFACTURING SOLUTIONS PRIVATE LIMITED (The company which had completed India’s first 3D-printed house & bus shelter)",
    ],
    venue: "Biotech Seminar Hall",
    req: ["Nil"],
    maxPeople: null,
    day: "16th March",
    rules: ["Nil",],
    coord: ["KALAIVANNAN R"],
    ph: "+91 9597874677",
  },
];

export default workshopData;
