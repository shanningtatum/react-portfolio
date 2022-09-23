import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    name: "Shopper Mapper",
    live: "https://shopper-mapper.netlify.app/",
    github: "https://github.com/shopper-mapper-cohort42/project-04",
    img: "./assets/project4-desktop-mobile.png",
    desc: "This was a group project based on a client design: A map app using the MapQuest API that looks for the most average shop results for the user based on their location. Users input their location and enter what shops they're looking for. The app will render results and the user can also get directions to their destination based on their transportation method and adjust the search radius.",
    tool: {
      tool1: "HTML",
      tool2: "CSS",
      tool3: "JavaScript",
      tool4: "React JS",
      tool5: "API",
    },
  },
  {
    name: "Bill Splitter",
    live: "https://shannontao-project3-production.netlify.app/",
    github: "https://github.com/shanningtatum/shannontao-project3",
    img: "./assets/guberEats.png",
    desc: "A bill splitter for a popular food delivery service app made using React. Users can enter the name of the people they will be splitting the bill with, their orders and price, additional fees, and the bill will be split accordingly. No more having to manually calculate how much someone owes you!",
    tool: {
      tool1: "HTML",
      tool2: "CSS",
      tool3: "JavaScript",
      tool4: "React JS",
      tool5: "Firebase",
    },
  },
  {
    name: "Perplexity Digital Scoreboard",
    live: "https://peg-leaderboard.netlify.app/",
    github: "https://github.com/shanningtatum/scoreboard",
    img: "./assets/peg-leaderboard.png",
    desc: "I created a way for employees to enter the stats of recent escape room games. It calculates the pass rates in real time and displays the most recent stats using Google's Firebase to store the data.",
    tool: {
      tool1: "HTML",
      tool2: "SASS",
      tool3: "JavaScript",
      tool4: "jQuery",
      tool5: "Firebase",
    },
  },
  {
    name: "Pokemon Matching Game",
    live: "https://pokemonmemorygame.netlify.app/",
    github: "https://github.com/huddle3-2/shannon-taimoor-project2",
    img: "./assets/project2mobile.png",
    desc: "A game that requires users to match Pokemon based on the images. This was a pair programming project completed at Juno College's Web Development Bootcamp using the PokeAPI to fetch the images. Users can select the difficulty level and try to match 'em all!",
    tool: {
      tool1: "HTML",
      tool2: "SASS",
      tool3: "JavaScript",
      tool4: "API",
    },
  },
  {
    name: "Pokemon Quiz",
    live: "https://shanningtatum.github.io/pokemon-quiz/",
    github: "https://github.com/shanningtatum/pokemon-quiz",
    img: "./assets/pokeQuiz-mobileDesktop.png",
    desc: "A project completed in my Intro to Javascript course with Juno College that uses PokeAPI to render the data. It tracks users progress and displays a message depending on how many correct answers they got.",
    tool: {
      tool1: "HTML",
      tool2: "CSS",
      tool3: "JavaScript",
      tool4: "jQuery",
      tool5: "API",
    },
  },
  {
    name: "Multi-Page Website",
    live: "https://shannontaoproject1.netlify.app/",
    github: "https://github.com/shanningtatum/shannonTao-project1",
    img: "./assets/project1desktop.png",
    desc: "A multi-page website created based on a client design that is responsive and accessible to users who use a screen-reader. ",
    tool: {
      tool1: "HTML",
      tool2: "SASS",
      tool3: "JavaScript",
    },
  },
  {
    name: "Point of Sale System",
    live: "https://shannontao-pointofsale.netlify.app/",
    github: "https://github.com/shanningtatum/pointOfSale",
    img: "./assets/pos-tablet.png",
    desc: "A simple point of sale system for a restaurant. Users can add items to a cart, increase or decrease the quantity, and apply a discount to the purchase.",
    tool: {
      tool1: "HTML",
      tool2: "SASS",
      tool3: "JavaScript",
      tool4: "jQuery",
    },
  },
  {
    name: "Perplexity Escape Games Website Mock-Up",
    live: "https://shanningtatum.github.io/perplexity/",
    github: "https://github.com/shanningtatum/perplexity",
    img: "./assets/perplexityMobile.png",
    desc: "A mock-up website created for Perplexity Escape Games.",
    tool: {
      tool1: "HTML",
      tool2: "CSS",
      tool3: "JavaScript",
      tool4: "jQuery",
    },
  },
];

const toolkit = [
  {
    img: <i className="devicon-html5-plain devicon"></i>,
    tool: "HTML5",
  },
  {
    img: <i className="devicon-css3-plain devicon"></i>,
    tool: "CSS3",
  },
  {
    img: <i className="devicon-javascript-plain devicon"></i>,
    tool: "JavaScript",
  },
  {
    img: <i className="devicon-jquery-plain-wordmark devicon"></i>,
    tool: "jQuery",
  },
  {
    img: <i className="devicon-sass-original devicon"></i>,
    tool: "Sass",
  },
  {
    img: <i className="devicon-react-original devicon"></i>,
    tool: "React",
  },
  {
    img: <i className="devicon-git-plain devicon"></i>,
    tool: "Git",
  },
  {
    img: <i className="devicon-github-original devicon"></i>,
    tool: "GitHub",
  },
  {
    img: <i className="devicon-firebase-plain devicon"></i>,
    tool: "Firebase",
  },
  {
    img: <FontAwesomeIcon icon={faUniversalAccess} className="devicon" />,
    tool: "Accessibility",
  },
  {
    img: <i className="devicon-photoshop-plain devicon"></i>,
    tool: "Photoshop",
  },
  {
    img: <i className="devicon-figma-plain devicon"></i>,
    tool: "Figma",
  },
];

export { projects, toolkit };
