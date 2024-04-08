const eventsData: {
  id: string;
  by: string;
  events: {
    name: string;
    date: string;
    time: string;
    venue: string;
    team: string;
    description: string[];
    shortDescription: string;
    rules: string[];
    requirements: string[];
    link: string | null | undefined;
    coordinators: { name: string; contact: string };
  }[];
}[] = [
  {
    id: "auto",
    by: "SAE Collegiate club of SVCE, AAE",
    events: [
      {
        name: "PITSTOP",
        link: null,
        date: "16th March",
        time: "10:00AM-12:00PM",
        venue: "AUTOMOTIVE COMPONENTS LABORATORY",
        team: "1-2",
        description: [
          "Pitting, a term from F1 racing, involves cars arriving at designated pitstops to change tires or make repairs",
          "Participants change tires with provided tools.",
          "Times are recorded, with top 3 teams winning.",
        ],
        shortDescription:
          "Thrilling physical competition with strategic challenges",
        rules: [
          "Each team can consist of a maximum of 2 members. One member participation will also be allowed.",
          "Teams should only use the tools provided by the event organisers. Any additional tool usage is prohibited.",
          "The car setup will be stationary, no changes to be done on that.",
          "Innovative techniques are open, but the final deciding authority will be assessing the fairness of the technique.",
          "The decision of the event organisers will be considered FINAL in any circumstances.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Aravind",
          contact: "+91 9342356952",
        },
      },
      {
        name: "Rev It Up!",
        link: null,
        date: "15th March",
        time: "1:00PM - 3:00PM",
        venue: "Components Laboratory(Automobile)",
        team: "1 (Individual event)",
        description: [
          "Participants will use the RC car provided by the organizers to race through a course.",
          "The participant with the fastest time, following all rules, wins.",
        ],
        shortDescription:
          "Exhilarating fast paced miniature racing competition",
        rules: [
          "The race course will be designed with obstacles and turns, participants need to follow the rules strictly.",
          "The event organizers have the authority to change the rules and regulations on the spot to ensure fairness of the event.",
          "Penalties in timing can be given for cutting corners.",
          "The final deciding authority will be the event organizers.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Karthikeyan",
          contact: "+91 93605 60105",
        },
      },
    ],
  },
  {
    id: "bio",
    by: "The Students’ Biotech Forum",
    events: [
      {
        name: "Find It First",
        link: null,
        date: "15th March",
        time: "1:00PM - 3:00PM",
        venue: "Biotech Seminar Hall",
        team: "Minimum of 2 members & Maximum of 3 members per team",
        description: [
          "SEGMENT1:",
          "There will be few pictures containing a collection of tems, each picture pertaining 1 different topics. Questions will be asked in the type of riddles or clues of cropped images to identity one particular item from a picture. A point will be awarded as they identify each item first and the team with maximum points will move on to the next segment.",
          "SEGMENT2:",
          "An audio will be played which depicts clues regarding a particular domain. Participants will have to find the correct answer and the number of relatable clues within 15 secs afer the audio was played.Teams with the lowest points will be eliminated.",
          "SEGMENT3:",
          "Participants will be shown ten random blocks with hidden puzzles(9 pieces ) each pertaining to a particular domain from which they ll have to select one and solve it.",
        ],
        shortDescription: "Where Time Runs Out Faster Than Patience",
        rules: [
          "Use of mobile phones is prohibited.",
          "SEGMENT 1:Each picture will be displayed for 20 sec. 3 pictures per domain. A point will be awarded for identifying the item and another point will be awarded for identifying the correct picture.",
          "SEGMENT 2: The audio track will be played only once.Regarding the number of relatable clues, teams aren' allowed to jot down the words.",
          "SEGMENT 3: Teams get 30 secs to frame the puzzle and 10 secs to figure out the domain.",
          "Throughout the segments teams aren't allowed to help other teams.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "KEERTHANAA SG - ",
          contact: "90876 00333",
        },
      },
      {
        name: "Biomonopoly",
        link: null,
        date: "15th March",
        time: "10:00AM - 1:00PM",
        venue: "Biotech Seminar Hall",
        team: "1",
        description: [
          "This event will consist of several plots where each player rolls a die and lands on a plot with problems statement.",
          "If the player finds the problem statement solvable they buy it and present their solution or they can move to the next plot without buying the problem statement in the next turn .",
          "The player who solves the maximum problem statement in the given time will be announced as the winner",
        ],
        shortDescription:
          "Fun filled monopoly event infused with problem statements.",
        rules: [
          "Initial amount will be provided to each participant at the start and it’ll be used to buy the problem statements.",
          "Participant should solve the problem statement they bought in order to buy the next problem and move on to the next plot.",
          "The participant that solves the maximum problems in 3hrs is deemed the winners.",
          "The participant are required to solve at least 2 problems within the 1st 30 mins in order to stay in the round.",
          "Bonus will be provided each time the participant crosses the Start point.",
          "Participant are not allowed to trade within themselves.",
          "Use of any form of references (use of internet) will lead to elimination of the participant.",
          "Participant are not allowed to help each other.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Varsha G",
          contact: "+91 7603956525",
        },
      },
      {
        name: "Escape Room",
        link: null,
        date: "16th March",
        time: "9:30AM - 12:00PM",
        venue: "Classroom 501,502,503,504 in BLOCK V",
        team: "Minimum of 2 and maximum of 3 members",
        description: [
          "This event contains three rooms which contain various subevents.",
          "1. CONNECTIONS: Different pictures will be presented, and teams have to find the domain or the idea the pictures are trying to convey.",
          "2. BIOARTS: A hint/clue will be provided to one of the teammates. They have to draw the identified clue, and their teammates should find what the drawn object is.",
          "3. VERBAL TIDES: A debate infused with shipwreck, where the final teams will be given characters and they'll have to argue on the particular topic as the character. The one who wins the debate after the 3 rounds will be considered as the winner.",
        ],
        shortDescription:
          "Get ready to solve tricky segments and perceive your inner Sherlock!",
        rules: [
          "The teams are required to solve within the allotted time limits for respective events.",
          "In verbal tides, the members should stay in the given characters until the round ends.",
          "Mouthing and acting out words/clues in BIOARTS will lead to disqualification. A point will be awarded to the team if the member identifies the clue and another point will be awarded as the team identifies the correct answer.",
          "Teams are not allowed to help each other out.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Abineha A",
          contact: "+91 9360676104",
        },
      },
    ],
  },
  {
    id: "chem",
    by: " IIChE, AIChE,ACT student chapter",
    events: [
      {
        name: "The Pansophy's Connundrum",
        link: null,
        date: "15th March",
        time: "12:00PM - 3:00PM",
        venue: "Classroom 511,512,513,514",
        team: "2-3",
        description: [
          "Embark on an exhilarating journey of intellect and wit with 'The ChemEConnundrum,' a riveting three-stage quiz event designed to challenge and entertain enthusiasts of participants. This dynamic competition promises to test your knowledge, strategy, and quick thinking in an electrifying atmosphere of camaraderie and excitement.",
        ],
        shortDescription:
          "The Pansophy's Connundrum is technical quiz of 3 rounds",
        rules: [
          "The team consists of two to three persons.",
          "In round one, players must link the images provided to answer the given question. The shortlisted team will advance to the next round.",
          "In round two, selected individuals are invited to play a game similar to snake and ladder, with half of the blocks filled with technical questions from chemical engineering concepts and the other half packed with enjoyable tasks.",
          "Qualified teams from round 2 advance to phase 3, where the shortlisted players compete in a bidding auction to check the correctness of the suggested statement and change it correctly.",
          "The team with the most earnings at the end is proclaimed the champion.",
          "Use of the internet is prohibited.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Ramapriyan A",
          contact: "+91 7604962798",
        },
      },
      {
        name: "Chem E Pansophy",
        link: null,
        date: "15th March",
        time: "9:30AM - 12:30PM",
        venue: "Classroom 515, 516",
        team: "3",
        description: [
          "The Participants must submit their abstract in the following link - https://forms.gle/c42f3cvj6XWYHDz9A",
          "Students can showcase their research ideas/ works either in the form of a paper or as a poster",
          "Separate evaluations are made for both paper as well as for poster presentations",
        ],
        shortDescription:
          "Event to showcase the research expertise of students",
        rules: [
          "The Participants must submit their abstract in the following link - https://forms.gle/c42f3cvj6XWYHDz9A",
          "TOPICS FOR PAPER AND POSTER PRESENTATION",
          "STOICHIOMETRY",
          "HEAT AND MASS TRANSFER",
          "THERMODYNAMICS AND PROCESS OPTIMIZATION",
          "CHEMICAL REACTION ENGINEERING",
          "PROCESS INSTRUMENTATION DYNAMICS AND CONTROL",
          "CHEMICAL PROCESS DESIGN",
          "ADVANCED SEPARATION TECHNIQUES",
          "WASTE WATER TREATMENT",
          "CARBON CAPTURE AND CARBON SEQUESTRATION",
          "NANOPARTICLES AND NANO FLUIDS",
          "ARTIFICAL INTELLIGENCE IN CHEMICAL ENGINEERING",
          "GASIFICATION",
          "ENERGY STORAGE DEVICES",
          "CLEAN ENERGY CARRIER",
          "E-WASTE",
          "GLOBAL CARBON FOOTPRINT TRENDS",
          "HYDROCARBON PROCESSING",
          "MICROPLASTICS & POLLUTION",
          "SUSTAINABILITY AND CIRCULAR ECONOMY",
          "SAFETY AT PROCESS INDUSTRIES",
          "Notes:Plagiarism is strictly prohibited",
          "Notes:For paper presentation; maximum permissible slides are 10 (excluding intro and closing slide)",
        ],
        requirements: [
          "Participants are required to submit a short abstract of their research work for both paper and poster presentations",
          "Permissible sizes of the poster are :36''*48''",
        ],
        coordinators: {
          name: "Mukundan M",
          contact: "+91 9962437234",
        },
      },
      {
        name: "InnoSolve",
        link: null,
        date: "16th March",
        time: "9:30AM - 12:30PM",
        venue: "Library Seminar Hall",
        team: "1",
        description: [
          "At InnoSolve, participants are given a leadership designation of a specific firm related to their department and are handed with dynamic challenge of solving real-world industrial problems.",
          "With a selection of diverse industrial challenges of a common theme (ex: circular economy/zero defects), participants choose their battleground and unleash their problem-solving prowess. Armed with expertise and creativity, they have a focused three-hour window to decipher, strategize, and ultimately pitch their solutions to a discerning panel of judges.",
        ],
        shortDescription:
          "Coming up with feasible solutions for real world problems and pitching them.",
        rules: [
          "Judges’ call remains final decision",
          "Decorum is expected to be maintained by participants at all costs",
        ],
        requirements: [
          "Laptops preferrable",
          "10 slides of presentation for the given problem  (mandatory)",
          "simulations/ feasibility reports for proof of concept (preferred)",
        ],
        coordinators: {
          name: "Ramapriyan A",
          contact: "+91 7604962797",
        },
      },
    ],
  },
  {
    id: "civil",
    by: "Civil Engineering Association (CEA)",
    events: [
      {
        name: "Bridge Expertise",
        link: null,
        date: "15th March",
        time: "10:30AM - 12:00PM",
        venue: "Survey Lab",
        team: "2",
        description: [
          "Bridge expertise is a technical event that explores the ideas behind bridge modelling and construction also it outlines how the bridge design could be done optimally with given materials",
          "This event comprises designing,construction, and testing of the model.",
        ],
        shortDescription:
          "A model making competition (bridge) requiring problem solving and design skills.",
        rules: [
          "This is a team event.",
          "Participants must strictly adhere to design specifications",
          "Participants should strictly finish the design within the stipulated time",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Rashik Ahmed R,Jai Siddarth A",
          contact: "+91 77080 21495,+91 90921 09220",
        },
      },
      {
        name: "Mudwell mastery",
        link: null,
        date: "15th March",
        time: "1:00PM - 2:30PM",
        venue: "Soil Mechanics Lab",
        team: "2",
        description: [
          "Mud well mastery is a technical event which demands your basics of geotechnical engineering and spontaneous thinking.",
          "This event incorporates brainstorming, modelling, and testing of the model for the specified problem statement",
        ],
        shortDescription:
          "A model making competition (well) requiring problem solving and design skills.",
        rules: [
          "This is a team event.",
          "Participants must strictly adhere to design specifications",
          "Participants should strictly finish the design within the stipulated time",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Priyadarshini R,Rekha R",
          contact: "+91 88381 18680,+91 79040 29457",
        },
      },
      {
        name: "Eco Struct",
        link: null,
        date: "16th March",
        time: "9:30AM - 12:00PM",
        venue: "Cadd Lab",
        team: "2",
        description: [
          "Participants are given a set of specifications for a building project, such as size, location, and purpose.",
          "Their task is to design the building using sustainable principles, such as energy efficiency, use of renewable materials, and water conservation.",
        ],
        shortDescription:
          "Crafting Tomorrow's Infrastructure.",
        rules: [
          " It’s an Individual Event.",
          " The design should be adhered to IS code specifications.",
          " The design should fulfill the theme of the event (Sustainability).",
          " Also design specifications are expected to fulfil the requirements of IS code specifications.",
        ],
        requirements: [
          "Laptop with autocadd software (if available).",
        ],
        coordinators: {
          name: "Raghavendra B,Aravintakshan N G",
          contact: "+91 94439 32131,+91 93848 41071",
        },
      },
    ],
  },
  {
    id: "cse",
    by: "Association of Computer Engineers (ACE)",
    events: [
      {
        name: "VISUAL PAPYRUS",
        link: null,
        date: "16th March",
        time: "9:30AM - 2:00PM",
        venue: "Video Hall for Round 1 & CS Department Lab for Round 2",
        team: "2-3",
        description: [
          "Round1: Prelims Quiz(Online/Offline) – Shortlisting of 15 teams max. from this round. The teams are posed with a set of quiz based on UI/UX domain.",
          "Round2: Tech Company Acquisition Challenge",
          "In this unique event, teams will embark on a journey through the annals of technological history, with the ultimate goal of acquiring two tech companies via a thrilling auction. But here's the twist – as participants navigate the auction floor, they'll be bombarded with real-time historical tech change incidents, ranging from the invention of the light bulb to groundbreaking innovations of today.",
          "Each team will be transported back to pivotal moments in history, where they must adapt their company to thrive in that era. Teams will now craft UI/UX webpages by showcasing how their company would navigate challenges and seize opportunities in that period. In the UI/UX interface, teams must demonstrate strategic foresight, adaptability, and innovation to emerge victorious in this exhilarating competition",
        ],
        shortDescription:
          "Teams must acquire two tech companies through an auction, navigating historical tech changes. They'll create UI/UX webpages to showcase their company's adaptability and innovation in different eras.",

        rules: [
          "Teams are limited to a maximum of 2-3 members.",
          "Investment decisions must be justified during presentation.",
          "Website UI designs must be based on the domain of the companies invested in during the challenge (Domains like E-Commerce, Banking, HealthCare..).",
          "Cheating or unethical behaviour are severely condemned.",
          "Judges' decisions are final.",
        ],
        requirements: [
          "Teams must bring their own laptops or devices for both levels.",
          "Any specific software or tools required for the challenges should be installed on participants' devices prior to the event.",
          "Valid identification and proof of registration are required.",
        ],
        coordinators: {
          name: "Sahana B,Naafiyah Yusra A",
          contact: "+91 78248 82255,+91 93618 87936",
        },
      },
      {
        name: "THRILL QUEST – CHASING THE THRILL OF MYSTERY",
        link: null,
        date: "15th March",
        time: "10:00AM - 3:00PM",
        coordinators: { name: "Sharan Balaji S,Siva Ishwarya B", contact: "+91 94444 31042,+91 70100 51339" },
        venue: "Classrooms of 504,505,506,507 in Block V",
        team: "1",
        description: [
          "Upon arrival, the participants are assigned unique roles, each with their own backstory, motivations, and secrets. As they interact with one another along the course of the game, they must gather clues, analyze evidence, and engage in strategic conversations to uncover the truth behind the murder.",
          "Additionally, participants may encounter unexpected plot twists and red herrings that challenge their investigative skills and keep them on their toes throughout the game.",
          "Furthermore, time pressure and limited resources may add to the intensity of the investigation, requiring participants to prioritize leads and make critical decisions under duress.",
        ],
        shortDescription:
          "Participants are assigned unique roles with backstories, motivations, and secrets. As they interact, they gather clues, analyze evidence, and engage in strategic conversations to uncover the truth behind the murder.",
        rules: [
          "Individual Event.",
          "Cheating or unethical behaviour are severely condemned.",
          "Judges' decisions are final.",
        ],
        requirements: [
          "Valid identification and proof of registration are required.",
        ],
      },
      {
        name: "JOKER CODER",
        coordinators: { name: "Srilekha P,Vishnuvaradhan A", contact: "+91 78128 63379,+91 72992 13502" },
        link: null,
        date: "16th March",
        time: "9:30AM - 2:00PM",
        venue: "Function Hall for Round 1 & CS Department For Round 2",
        team: "2",
        description: [
          "Round 1: Cryptic Decryption Battle",
          "In this thrilling round, each team of two will embark on a journey to decipher seven encrypted words, each employing a unique cryptographic logic. With each word decoded, teams will inch closer to revealing the final answers. It's a race against time and wit as teams must unravel these cryptic puzzles swiftly and accurately to secure their spot in the next round.",
          "Round 2: Code Sprint with a Twist",
          "This is a dynamic coding session, where teams will be provided with three unique coding questions. But here's the twist – participants will swap partners every 5 minutes! While one teammate codes, the other will engage in entertaining tasks. Amidst the lively atmosphere of loud music and camaraderie, teams must overcome hindrances and ensure seamless execution of their code within the time limit.",
        ],
        shortDescription:
          "Attention students! Join our thrilling Cryptic Decryption Battle & Code Sprint with a Twist. Decode puzzles, swap partners, and code under lively music. Unleash your intellect and coding skills today!",
        rules: [
          "Use of any AI tools is not allowed.",
          "Participants are kindly asked to complete tasks without objection, approaching them positively.",
          "Malpractices of any sort are strictly condemned. If found it results in immediate disqualification.",
          "Judge’s decisions are final.",
        ],
        requirements: [
          "Valid identification and proof of registration are required.",
          "Bring pen and laptop.",
        ],
      },
      // {
      //   name: "WORKSHOP ON UI/UX DESIGN",
      //   coordinators: { name: "Vishuvaradhan A", contact: "+91 72992 13502" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Library Seminar Hall",
      //   description: [
      //     "Discover the fusion of creativity and innovation in our workshop on UI/UX Design & Real-Time AI Solutions. Led by industry experts, this workshop offers a concise yet comprehensive exploration of designing captivating user interfaces and harnessing real-time AI for transformative solutions.",
      //     "Participants will delve into UI/UX design principles, learning to craft engaging interfaces that optimize user experience. Simultaneously, they'll explore the power of real-time AI, discovering its potential in creating intelligent systems that adapt seamlessly to user needs.",
      //     "Regardless of being a seasoned designer or a tech enthusiast, this workshop promises invaluable insights and practical knowledge to propel your skills to new heights.",
      //   ],
      //   rules: [
      //     "Respect copyright and intellectual property rights when using workshop materials or resources.",
      //     "Any illegal or unethical behaviour will result in immediate expulsion from the workshop.",
      //   ],
      //   requirements: [
      //     "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
      //     "Valid identification and proof of registration are required.",
      //     "Kindly bring a laptop.",
      //   ],
      // },
      // {
      //   name: "WORKSHOP ON GAME DESIGNING",
      //   coordinators: { name: "Siva Ishwarya B", contact: "+91 70100 51339" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
      //   description: [
      //     "Dive into the exhilarating realm of game design with our immersive workshop. Led by industry experts, this workshop offers a hands-on exploration of the principles and techniques behind creating captivating games.",
      //     "Participants will delve into storytelling, mechanics, level design, artwork, sound, and user interface, gaining practical experience and invaluable insights into the game development process.",
      //     "Regardless of being an aspiring game developer or simply curious about the magic behind your favourite games, this workshop is your ticket to unlocking the secrets of game design.",
      //   ],
      //   rules: [
      //     "Respect copyright and intellectual property rights when using workshop materials or resources.",
      //     "Any unethical behaviour will result in immediate expulsion from the workshop.",
      //   ],
      //   requirements: [
      //     "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
      //     "Valid identification and proof of registration are required.",
      //     "Kindly bring a laptop.",
      //   ],
      // },
      // {
      //   name: "PAPER PRESENTATION",
      //   coordinators: { name: "Naafiyah Yusra A", contact: "+91 93618 87936" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
      //   description: [
      //     "This event serves as a platform for enthusiasts, professionals, and students alike to delve into cutting-edge topics and advancements in various domains of technology. Domains Covered such as Artificial Intelligence, Cybersecurity, Data Science, Machine Learning, Blockchain, Internet of Things (IoT), Cloud Computing.",
      //     "Engaging presentations by experts and scholars in the field, offering insights into the latest trends and developments.",
      //     "Opportunity for participants to showcase their research and projects, fostering networking and collaboration.",
      //     "Interactive Q&A sessions allowing attendees to deepen their understanding and engage directly with presenters.",
      //     "Panel discussions featuring industry leaders, providing valuable perspectives on the future of technology.",
      //     "Networking opportunities for students, professionals, and enthusiasts to connect and exchange ideas.",
      //   ],
      //   rules: [
      //     "Any unethical behaviour will result in immediate expulsion from the event.",
      //     "Participant must adhere to the domain which is given by the panel.",
      //     "Judges’ decision will be final.",
      //   ],
      //   requirements: [
      //     "For Participants:",
      //     "- Valid identification and proof of registration are required.",
      //     "- Kindly bring a laptop.",
      //   ],
      // },
    ],
  },
  {
    id: "ece",
    by: "Electronics and Communication Engineers Association",
    events: [
      {
        name: "SparkQuest",
        link: null,
        date: "15th March",
        time: "12:30PM - 3:00PM",
        venue: "ECE Deparment Lab And Classroom",
        team: "1",
        description: [
          "Participants will engage in a comprehensive treasure hunt featuring diverse clues encompassing areas such as logic gates, digital electronics, communication, signal processing, Arduino, and Programming. The team achieving the best timing within the 3-hour time limit will be declared the winner.",
        ],
        shortDescription: "Unraveling Treasures in the Electronic Maze!",

        rules: [
          "Individual Event.",
          "Each clue in the treasure hunt will be uniquely crafted, drawing from a diverse range of topics including logic gates, digital electronics, communication, signal processing, Arduino, and Programming.",
          "Each clue will help participants to advance to the next level.",
          "Participants are allowed to use standard tools and equipment approved by event organizers.",
          "Usage of Smartphones or any smart devices is strictly prohibited.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Sharad L",
          contact: "+91 8637447247",
        },
      },
      {
        name: "Electro-Craft Challenge",
        link: null,
        date: "15th March",
        time: "10:00AM - 1:00PM",
        venue: "Embedded Systems Laboratory of ECE Department",
        team: "2 to 3",
        description: [
          "Participants will receive cards featuring electric components. Based on the chosen cards, teams of 2 to 3 must create a circuit or product within a 60-minute time frame. The focus is on practical design and efficient problem-solving. Teams will pitch their finalized projects, demonstrating their ability to work collaboratively and think on their feet.",
        ],
        shortDescription: "From Cards to Circuits: The Techfest Challenge",

        rules: [
          "Teams must consist of 2 to 3 participants.",
          "Participants will randomly choose cards featuring electric components from each deck, the chosen components must be used in the circuit or product design.",
          "Basic electronic components and materials necessary for circuit building will be provided. Teams may not bring their own components, they must use the provided materials.",
          "The design phase has a strict time limit of 60 minutes. Teams must complete their circuits or products within this timeframe.",
          "Participants are allowed to use standard tools and equipment but must be approved by event organizers.",
          "Teams will have a brief time slot for pitching their final product or circuit design.",
        ],
        requirements: [
          "Participants should bring their own laptop for programming the controller, with Arduino IDE installed in it.",
          "Participants are allowed to bring standard tools and equipment if required.",
        ],
        coordinators: {
          name: "Umesh Anandh S",
          contact: "+91 9384843066",
        },
      },
      {
        name: "Paper Prism",
        link: null,
        date: "16th March",
        time: "10:00AM - 2:00PM",
        venue: "Classroom Block V 3rd Floor",
        team: "2 to 3",
        description: [
          "Participants will showcase their expertise in ECE domains such as IoT, embedded systems, RF, and more through an engaging paper presentation event",
          "Teams of 2 to 3 participants will present their innovative ideas and research findings in PowerPoint format, delving into the latest advancements and challenges in the field. ",
          "Get ready for a single round of insightful presentations that highlight the cutting-edge developments shaping the future of Electronics and Communication Engineering.",
        ],
        shortDescription: "From Concept To Reality : Ideas in Action",
        rules: [
          "The Participants must submit their abstract in the following link - https://forms.gle/UejCt6nBoEoUGdCY6",
          "A team should consists of 2 to 3 participants.",
          "Participants are required to present their papers in the MS-PowerPoint (PPT) format.",
          "The Teams will get 8-10 minutes to present their paper.",
          "It will be followed by a question and answer session.",
          "Violation of any rule can result in rejection of paper.",
          "The decision of judges will be final.",
          "The Paper should have the details (Name, College name, Phone no. of each participants) of the team members.",
        ],
        requirements: [
          "The Participants must submit their abstract in the following link - https://forms.gle/UejCt6nBoEoUGdCY6",
          "Participants should bring at least one laptop per team to present their PowerPoint presentations during the event.",
        ],
        coordinators: {
          name: "Lok Ranjan P,Aadhithya Narayanan B",
          contact: "+91 6374358867,+91 93455 26682",
        },
      },
    ],
  },
  {
    id: "eee",
    by: "Association Of Electrical And Electronics Engineers",
    events: [
      {
        name: "UKnowHunt",
        link: null,
        date: "15th March",
        time: "12:00PM - 2:00PM",
        venue: "Classrooms Of 521,522,523,524",
        team: "1",
        description: [
          '"UKnowHunt" is a dynamic and thrilling intercollege event hosted by the Electrical and Electronics Engineering (EEE) department in SVCE "Techfest". Teams will navigate through two rounds, showcasing their strategic thinking and electrical engineering knowledge to emerge victorious.',
          "Round 1: Uno Game",
          "In the first round, participants will dive into the fast-paced world of Uno. The winners will earns lifelines that will serve as valuable assets in the second round.",
          "Round 2: Treasure Hunt Quiz",
          'The second round transforms into a technical treasure hunt quiz, where people will explore a series of rooms, each presenting a unique challenge related to electrical and electronics engineering. They progress by successfully completing each technical challenge in a room. The one who successfully finishes all questions first will be crowned the ultimate winner of "UKnowHunt"',
        ],
        shortDescription:
          "UKnowHunt: Where Uno meets technical treasure hunts, igniting strategic prowess and electrical engineering expertise in an exhilarating",
        rules: [
          "Fair Play:",
          "Teams must adhere to the principles of fair play and sportsmanship.",
          "Any form of cheating or misconduct will result in immediate disqualification.",
          "Uno Game Rules:",
          "Standard Uno rules apply.",
          "A designated referee will oversee the Uno game and announce the results.",
          "Treasure Hunt Quiz Rules:",
          "Teams must progress through the quiz in order, completing each room's questions before advancing.",
          "After completing each question, the coordinator will lead you to the next room.",
          "Teams may not proceed to the next room until their answers are verified by event coordinators or volunteers.",
          "Lifeline Usage:",
          "Lifelines earned in the Uno game can only be used in the second round.",
          "Teams must declare their intention to use a lifeline after they see the question.",
          "Time Limits:",
          "Each question will be assigned a time limit based on the difficulty level. If a team cannot solve a question, they will be allocated zero points for the question.",
          "Dispute Resolution:",
          "Event coordinators reserve the right to resolve any disputes or discrepancies in a fair and final manner.",
          "Phone Usage:",
          "Participants are strictly prohibited from using phones or any electronic devices during the treasure hunt quiz.",
          "Phones must be switched off before entering quiz rooms.",
          "Any violation of this rule may result in disqualification at the discretion of the event coordinators.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "Barath S N",
          contact: "+91 7010310429",
        },
      },
      {
        name: "The Twisted Heist",
        link: null,
        date: "16th March",
        time: "10:00AM - 12:00PM",
        venue: "Classroom Of 521,522,523 in Block V",
        team: "3",
        description: [
          "Phase 1: Circuit schematics:",
          "Follow the Electrical Trail: Navigate a tangled web of circuits, tracing electrical pathways and deciphering complex schematics to locate the crucial voltage terminal—to locate the vault.",

          "Phase 2: Takeover:",
          "Take Control: The Task is easy you should just build a circuit but there is a bit of a twist.Let Your Digital Circuit skills flow.",

          "Phase 3: Digital Decipher :",
          "Confront the Final Guardian: As the final five teams reach the end, The vault's digital heart, a formidable circuit, stands between your crew and the treasure. Interface with the vault and input commands or codes to unlock the vault and claim the prize.",
        ],
        shortDescription:
          "Outsmart the system, bend the circuits, and crack the code with your skills to save a heist",
        rules: [
          "Use of mobile phones are strictly prohibited",
          "Teams must progress through phases sequentially.",
          "Only in the last 5 mins the lifelines for next level will be revealed",
          "Basic knowledge of Electrical and electronics are enough ",
        ],
        requirements: [
          "Participants are requested to carry their laptops if possible, Atleast one for each team.",
        ],
        coordinators: {
          name: "Tharun Balaji G",
          contact: " +91 9150827575",
        },
      },
      {
        name: "SDG Innovation Challenge",
        link: null,
        date: "15th March",
        time: "10:30AM - 11:30AM",
        venue: "Drawing Hall",
        team: "3",
        description: [
          "In this dynamic event, participants will collaborate to design and develop innovative models aligned with the United Nations Sustainable Development Goals (SDGs). Rather than just pitching ideas, we're challenging you to bring your models to the table and showcase practical solutions to real-world problems.",
        ],
        shortDescription:
          "A project display event where participants collaborate to showcase tangible solutions aligned with the United Nations Sustainable Development Goals through innovative model development",
        rules: [
          "Participants must present working models or prototypes that align with the Sustainable Development Goals (SDGs).",
          "Teams will be evaluated based on the quality of their short presentation.",
          "Models or prototypes should effectively demonstrate solutions or innovations related to the SDGs.",
          "Presentations should clearly articulate the problem being addressed and the proposed solution.",
          "Teams are encouraged to be creative and innovative in their approach.",
          "Each team must adhere to the specified time limit for their presentation.",
          "Judges' decisions will be final and binding.",
        ],
        requirements: ["Nil"],
        coordinators: {
          name: "Ragul K K",
          contact: "+91 81222 89779",
        },
      },
    ],
  },
  {
    id: "int",
    by: "Association of Information Technologists",
    events: [
      {
        name: "Pixel Palette",
        link: null,
        date: "16th March",
        time: "10:00AM - 1:00PM",
        venue: "Marine Lab",
        team: "2-3",
        description: [
          "Welcome to Pixel Palette a dynamic 3-hour front-end design competition. Participants unveil their creativity as the problem statement is revealed at the event's commencement. The challenge? Craft a captivating UI/UX design that merges aesthetics with functionality. Teams race against time to impress judges and claim victory. Adding a strategic edge, bidding sessions occur at intervals, allowing teams to invest in cue cards for insights and challenges. Design Dash promises a whirlwind of creativity, competition, and strategic decision-making. Are you ready to showcase your design prowess and emerge victorious in this fast-paced design sprint? The clock is ticking, and the canvas awaits your innovative touch!",
        ],
        shortDescription:
          "Fast-paced UI/UX design competition with bidding and strategic challenges",
        rules: [
          "Participants can use any tool to develop a web design preferably figma.",
          "Plagiarism is not allowed.",
          "Team size should not exceed 3.",
          "All the participants are requested to bring Laptops.",
        ],
        requirements: [
          "Laptop",
          "USB to LAN converter if the laptop doesn't have a LAN port",
        ],
        coordinators: {
          name: "Keerthana M",
          contact: "+91 6383941381",
        },
      },
      {
        name: "Haijo",
        link: null,
        date: "15th March",
        time: "12:00PM - 3:00PM",
        venue: "Funtion hall",
        team: "3 members",
        description: [
          "Welcome to Haijo, a riveting event where participants are tested on both technical and non-technical skills across three undisclosed rounds. As the competition unfolds, the team head must make strategic decisions, including the challenging task of removing one member before each new round. This dynamic element adds an unpredictable twist, shaping the team's destiny. Haijo is a high-stakes game requiring adaptability, collaboration, and quick thinking. Success hinges on navigating through diverse challenges and making crucial decisions to advance in this thrilling contest. Are you ready for the suspense and excitement?",
        ],
        shortDescription:
          "Haijo is a dynamic and suspenseful competition where teams must collaborate strategically, facing unpredictable challenges and high-stakes decisions to advance in the thrilling contest.",
        rules: [
          "Team size should be 3.",
          "The type of rounds will be revealed on-spot.",
          "Switching of the removed member after the start of the round leads to disqualification of the entire team.",
          "Persons from different institutions can be a part of the same team. However, one person may not be a part of multiple teams for the same event.",
          "Mobiles are strictly not allowed.",
          "Discussion among participants is not encouraged.",
          "The decision of judges will be final and no arguments or appeal will be entertained.",
        ],
        requirements: ["None"],
        coordinators: {
          name: " Ramanathan SP",
          contact: "+91 7418732846",
        },
      },
      {
        name: "Ctrl+Alt+Debate",
        link: null,
        date: "15th March",
        time: "10:00AM - 1:30PM",
        venue: "Library Seminar Hall",
        team: "1",
        description: [
          "Welcome to 'Ctrl+Alt+Debate,' a cutting-edge parliamentary style debate competition that seamlessly blends oratory excellence with the ever-evolving landscape of technology. Designed to elevate students' public speaking skills, this event goes beyond traditional debate by delving into the forefront of tech headlines and innovations. Participants engage in thought-provoking discussions, navigating the dynamic intersection of technology and society. 'Ctrl+Alt+Debate' not only refines oratory prowess but also offers a unique platform to unravel the complexities of emerging technologies, industry shifts, and future opportunities. Prepare to articulate your perspectives and delve into the tech-driven discourse that shapes our rapidly advancing world. Are you ready to debate the future?",
        ],
        shortDescription:
          "Fusion of parliamentary debate and technology discourse, refining oratory skills amidst evolving tech landscapes.",
        rules: [
          "Decorum must be maintained at all times on the floor.",
          "The judge’s say is final and any opposition will lead to disqualification.",
          "Use of generative AI for preparation is permitted but only during preparation time and not once the debate starts.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "Madhumitha R",
          contact: "+91 9498330139 ",
        },
      },
    ],
  },
  {
    id: "mech",
    by: "Society of Mechanical Engineers",
    events: [
      {
        name: "Render Royale (3d Modelling)",
        link: null,
        date: "09:30AM - 12:00PM",
        time: "TBA",
        venue: "Mechanical Department's Cad Lab",
        team: "2",
        description: [
          "Participants will be presented with intriguing problem statements spanning diverse industries, from architecture and engineering to product design and beyond.",
          "Your mission,should you choose to accept it, is to conceptualize, design, and build a 3D model that addresses the given challenge within the stipulated time frame.",
        ],
        shortDescription: "Innovative Problem-Solving Through Design!",
        rules: ["Students are allowed to use Autocad, Creo, and Fusion."],
        requirements: [
          "If they opt for any other software, they need to bring their own systems",
        ],
        coordinators: {
          name: "Madhava Rajan.J",
          contact: "+91 8939078478",
        },
      },
      {
        name: "InnoVision Expo (Paper Presentation)",
        link: null,
        date: "16th March",
        time: "10:00AM - 1:00PM",
        venue: "Mechanical Cadd lab",
        team: "Individual Participation",
        description: [
          "Welcome to the InnoVision Expo, where the spotlight is on individual participants as they showcase groundbreaking papers in the realm of mechanical engineering.",
          "This event stands as a convergence point for intellectual exploration, sparking profound conversations, and uniting visionaries in the field.",
        ],
        shortDescription: "Innovative Papers Uniting Engineering Minds!",
        rules: [
          "The Participants must submit their abstract in the following link - https://forms.gle/CTLSKzCYNWSJfnMe7",
          "Time Limit Adherence:- Presentations must strictly adhere to the allocated time limit, ensuring a seamless flow of ideas and maximizing audience engagement.",
          "Dynamic Q&A Session: - Each presentation is followed by a Q&A session, creating an interactive dialogue between presenters and the audience.",
          "This format promotes a deeper understanding of the presented concepts.",
          "Comprehensive Evaluation: - Evaluation criteria encompass content richness, ensuring the depth and quality of the presented material.",
          "Clarity of presentation and the overall impact of the ideas shared contribute to thejudging process.",
        ],
        requirements: ["The Participants must submit their abstract in the following link - https://forms.gle/CTLSKzCYNWSJfnMe7",],
        coordinators: {
          name: "Logaranjan G",
          contact: "+91 9025618609",
        },
      },
      {
        name: "MechStix Marvel",
        link: null,
        date: "16th March",
        time: "10:00AM - 1:00PM",
        venue: "Metrology Lab",
        team: "3",
        description: [
          "Embark on an exciting journey where creativity and engineering meet in the PopsiDrone Design Duel! This unique event challenges participants to unleash their imagination as they design and build miniature drones using popsicle sticks as the primary material.",
          "Witness a showcase of innovation as these unconventional drones take to the skies for thrilling aerial displays.",
        ],
        shortDescription: "Crafting Aerial Marvels with Sticks!",
        rules: [
          "Material Constraints:",
          "The primary construction material is limited to popsicle sticks.Additional materials, such as glue, tape, and lightweight propellers, may be provided.",
          "Judging Criteria:",
          "Innovation.",
          "Judges evaluate the creativity and uniqueness of the popsicle stick drone designs."
        ],
        requirements: ["None"],
        coordinators: {
          name: "Saravanan V",
          contact: "+91 8056162938",
        },
      },
    ],
  },
  {
    id: "ieee_club",
    by: "IEEE SVCE Student Branch",
    events: [
      {
        name: "ProjectForge",
        link: null,
        date: "16th March",
        time: "09:30AM - 12:30PM",
        venue: "Software Lab EEE Department",
        team: "1",
        description: [
          "Welcome to the 'ProjectForge' – an immersive mini-project simulation event hosted on an online platform!",
          "Prepare to embark on a journey where your skills in Arduino circuit design and coding will be put to the test in real-time.",
          "An exciting problem statement will be unveiled. Your task? Design an Arduino circuit and write code to tackle the on-the-spot challenge.",
          "It could be anything from creating a smart home automation system to designing a sensor-based project. Get ready to apply your technical and problem-solving skills.",
        ],
        shortDescription:
          "Where Creativity meets Circuitry- Online simulation Challenge based on Arduino.",
        rules: [
          "Participants must take part individually.",
          "Plagiarism is not allowed.",
          "Participants will be rewarded points based on the efficiency of design and accuracy of code.",
          "Indulging in any kind of malpractice will lead to instant de-qualification of the participant.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "Suruthiga",
          contact: "+91 98401 02853",
        },
      },
      {
        name: "PitchForge",
        link: null,
        date: "15th March",
        time: "10:00AM - 1:00PM",
        venue: "Video Hall",
        team: "3",
        description: [
          'Welcome to the exhilarating arena of "PitchForge"! Here, teams embark on a thrilling journey to present groundbreaking solutions for bringing complex technical products to the market.',
          "Amidst the charged atmosphere of this high-stakes competition, participants must showcase their prowess in pitching and delivering compelling solutions within a tight timeframe",
          // "",
          'What sets "PitchForge" apart is its unique twist: a super specialty auction where teams bid for their preferred problem statements.',
          "This surprise element injects an additional layer of excitement and strategy into the event, challenging teams to not only excel in their pitches but also strategically select the challenges they're most equipped to conquer",
          'With an emphasis on interdisciplinary collaboration and real-world applicability, "PitchForge" promises a riveting showdown where innovation, strategy, and problem-solving prowess collide',
          "May the most inventive and adept solutions rise to the challenge and captivate our esteemed panel of judges!",
        ],
        shortDescription:
          "Where innovation converges with strategy in a captivating competition of problem-solving finesse, enhanced by an unforeseen auction element !",
        rules: [
          "Participants will be provided with the description of a highly technical product, and must come up with a pitch to bring that product to market.",
          "The pitch must be holistic and should cover all aspects right from procurement to marketing.",
          "Teams can refer to the internet for a limited period time as determined by the judging panel.",
          "Teams will be judged based on their unique approach, holistic and innovative nature of their pitch.",
          "Determining the winner and dispute resolution is completely undertaken by the judging panel.",
        ],
        requirements: ["Nil"],
        coordinators: {
          name: "Sri Raja Rajeshwari",
          contact: "+91 95661 45443",
        },
      },
    ],
  },
  {
    id: "csi_club",
    by: "CSI - SVCE Student Chapter",

    events: [
      {
        name: "Relay Rush",
        link: null,
        date: "16th March",
        time: "10:00AM - 1:00PM",
        venue: "2nd Floor IT Department Lab",
        team: "3 Members",
        description: [
          '"Code Relay Rush" is a dynamic coding competition where teams solve a chain of related issues.',
          "One participant kicks off, and their solution sets the stage for the next coder. Speed is key – the faster your team solves, the better.",
          "The challenges are interlinked, ensuring a seamless flow.",
          "It's a race against time and bugs. Precision and teamwork matter most. As each hurdle falls, the next coder takes the lead.",
          'The team with the shortest overall time emerges victorious. Simplified coding adrenaline – that\'s "Code Relay Rush" in a nutshell!',
        ],
        shortDescription:
          "The Coding Relay Challenge: Where strategy prowess meets coding excellence!",
        rules: [
          "There should be no communication between the team members.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["laptop , rough sheets, pen"],
        coordinators: { name: "Kavitha", contact: "+91 93456 03091" },
      },
      {
        name: "Prompt Tactics",
        link: null,
        date: "15th March",
        time: "1:00PM - 3:00PM",
        venue: "2nd Floor IT Department Lab",
        team: "1",
        description: [
          "Welcome to the Tech Odyssey - where coding meets creativity in a thrilling three-act saga!",
          "Round 1: Password Hunt - Embark on a digital treasure hunt through 7 levels of password wizardry. Crack the codes in 5 minutes or less to advance.",
          "Round 2: Prompt Craft - Unleash your inner artist as you craft prompts for an AI to replicate an image. It's a duel of creativity and code. The most visually stunning replication earns you a ticket to the grand finale.",
          "Round 3: SQL Showdown - In the final act, dive into the depths of databases and solve SQL riddles with bite-sized queries. It's not just about code; it's about unraveling the mysteries with finesse. Only the SQL maestros will emerge victorious!",
        ],
        shortDescription:
          "A prompt based competition where participants engage in specific challenge to showcase their skills and creativity",
        rules: [
          "Plagiarism is not allowed.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["laptop, rough sheets, pen"],
        coordinators: { name: "Vishal athreya", contact: "+91 93451 82466" },
      },
      {
        name: "Tech Pair",
        link: null,
        date: "15th March",
        venue: "1st Floor in IT Department Lab",
        time: "10:30AM - 12:30PM",
        team: "2",
        description: [
          "Round 1: In this round, two members will be participating, one member as a catcher and the other member as a responser. The timing of the event is 5 minutes where the catcher will be given a technical word and they should help the responser to find out the word with a maximum of three clues.",
          "Round 2: In this round, a poster will be displayed for the participants for nearly 20 seconds. Later on, the participants should recreate the poster that was displayed. The time for recreating the poster would be approximately some 30 to 45 minutes.",
          "Round 3: In this round, a topic will be given to a person ( any one of the two participants). The person should write a content on that given topic.The other participant now should analyze and understand the content written by their team member and should speak on that topic for 3 minutes.",
        ],
        shortDescription:
          "Exclusive paired event designed to tackle a series of challenges together!",
        rules: [
          "Round 1 rules: There should not be any direct communication between the participants.",
          "They should find the word only by giving clues.Participants will be rewarded points based on how many words they find within the given time constraint.",

          "Round 2 rules: The Participants will not be given any extra time while analyzing the poster.",
          "The Participants will be judged based on their accuracy for the poster they recreate within the given time constraint.",

          "Round 3 rules: The Participants will not be given any extra time.",
          "The Participants will be judged based on their understanding and how they explain the content.",
        ],
        requirements: ["laptop, rough sheets, pen"],
        coordinators: { name: "Gowtham S ", contact: "+91 90030 66776" },
      },
    ],
  },
  {
    id: "bgmi",
    by: "STUDENT COUNCIL",
    events: [
      {
        name: "BGMI",
        link: "https://forms.gle/jCkLCzazxHgxHLZN9",
        date: "16th March",
        time: "09:00AM - 12:30PM",
        venue: "SVCE",
        team: "04",
        description: [
          "Team consists of 4 players.",
          "Usage of hacks and gfx tools will disqualify the team.",
          "No ipads or tablets allowed.",
          "Players should strictly follow discipline in all mics",
          "Teammates can be comprised from different colleges",
          "Prize pool upto 6k!",
          "It will increase if more number of registration is recieved",
          "Players are requested to bring their own chargers.If possible a junction box.",
          "It is completely an offline event ",
          "Players should bring their college id cards for verification purposes ",
          "Prizes will be distributed to top 3",
          "BGMI is not included in any passes, and it requires a separate payment.",
        ],
        shortDescription: "Gaming Event",
        rules: [
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["Smart Phone", "Bring Charger if it is required"],
        coordinators: { name: "DHANUSSH R", contact: "7358325745" },
      },
    ],
  },
  {
    id: "marine",
    by: "Association Of Marine Engineering Department",
    events: [
      {
        name: "PAPER PRESENTATION",
        link: null,
        date: "15th March",
        time: "9:30AM - 12:30PM",
        venue: "Classroom, Marine department ,10-207 Marine drawing hall",
        team: "02",
        description: [
          "The Paper Presentation event requires participants to study a topic and write a detailed paper on their findings, analysis, and conclusions. After preparing the paper, participants present it to a jury or panel of judges, who grade it on various factors. Participants usually start by researching their topic and gathering data, literature, and evidence to support their hypotheses. They then format their findings into a paper with an introduction, literature review, methods, results, discussion, and conclusion.",
          "TOPICS FOR PAPER PRESENTATION:",
          "Sustainable Shipbuilding Practices",
          "Recent trends in propulsion",
          "Impact of Digitalization in Marine Industry ",
          "Autonomous Navigation Systems",
          "Marine Pollution Control Strategies",
          "Green fuels in shipping ",
          "Vessel scrapping",
        ],
        shortDescription:
          "Paper presentations are lively and interesting ways to share research, ideas, and project results.",
        rules: [
          "All The Marine Students Should Attend The Events In Proper Marine Uniform Only",
          "This event is exclusively open to marine students.",
          "Maximum of 8 teams will be shortlisted based on their abstracts.",
          "Each team is limited to a maximum of 2 members.",
          "Participants must complete their presentation within 15 minutes.",
          "Teams are required to submit their abstract via email by March 12, 2024 to the mail id: technowaysmarinesvce@gmail.com ",
          "While submitting the abstract, please include your authors name and college details.",
          "The paper should not exceed 10 pages in length.",
          "Presentations must be in PowerPoint format.",
          "No spot registrations are allowed.",
        ],
        requirements: [
          "Marine students should come only in marine uniform",
          "Participants are required to bring their Powerpoint presentatation on a USB drive",
        ],
        coordinators: { name: "HARIHARAN S", contact: "9943498144" },
      },
      {
        name: "WELDING MASTERS",
        link: null,
        date: "15th March",
        time: "1:30PM - 12:15PM",
        venue: "Welding Research Cell, Marine department ",
        team: "1",
        description: [
          'Welding Masters" is an event designed to showcase and celebrate the skills and expertise in welding.',
          "Participants in Welding Masters may compete in challenges that test their welding precision, speed, and creativity.",
          "Overall, Welding Masters events serve as a platform for marine cadets to demonstrate their welding talents.",
        ],
        shortDescription:
          '"Welding Masters" is an event that participants can attend to demonstrate their expertise in welding.',
        rules: [
          "All The Marine Students Should Attend The Events In Proper Marine Uniform Only",
          "Exclusively for marine students.",
          "Individual event",
          "Maximum of 3 members from each college.",
          "Participants must complete the event within the specified time limit.",
          "No spot registrations are allowed.",
        ],
        requirements: [
          "Marine students should come only in marine uniform",

          "Participants are required to bring their own boiler suit and safety shoes",
        ],
        coordinators: { name: "Jeevarathinam", contact: "+91 7339449264" },
      },
      {
        name: "BOND BLEND",
        link: null,
        date: "16th March",
        time: "9:30PM - 11:30PM",
        venue: "Classroom, Marine Department,10-207 in Drawing hall",
        team: "3",
        description: [
          
          'A "Bond Blend" event is a captivating abstract strategy event that challenges participants to achieve a particular type of connection using provided images.',
          "In this event, participants are presented with a set of images, symbols, or shapes arranged in a grid or other configuration.",
          "The objective typically revolves around connecting specific elements in a particular manner, such as forming lines, paths, or networks between related images.",
        ],
        shortDescription:
          "A bond blend event is an interesting abstract strategy event where teams have to use pictures to make a certain kind of link. ",
        rules: [
          "All The Marine Students Should Attend The Events In Proper Marine Uniform Only",
          "Maximum of 18 teams are allowed.",
          "Each team can have a maximum of 3 members.",
          "A college can register a maximum of 2 teams.",
          "Registration will be on a first-come, first-served basis.",
          "No spot registrations are allowed.",
        ],
        requirements: ["Marine students should come only in marine uniform"],
        coordinators: { name: "KANAGAVEL", contact: "+91 6383282466" },
      },
    ],
  },
];

export default eventsData;
