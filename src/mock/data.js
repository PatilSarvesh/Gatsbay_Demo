import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sarvesh Patil',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1B2H_i-jYH_pcDm1FUFEXmxCbgNOZbPM85hRec9kxOIc/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'ToDo List App',
    info: '',
    info2: '',
    url: 'https://murmuring-basin-84081.herokuapp.com/',
    repo: 'https://github.com/PatilSarvesh/TodoList', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Quiz App',
    info: '',
    info2: '',
    url: 'https://determined-austin-da7f3c.netlify.app/',
    repo: 'https://github.com/PatilSarvesh/quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Drum Kit',
    info: '',
    info2: '',
    url: 'https://patilsarvesh.github.io/Drum_Kit/',
    repo: 'https://github.com/PatilSarvesh/Drum_Kit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'patilsarvesh1999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PatilSarvesh',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sarvesh_goudru',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarvesh-patil-7a29951a3/',
    },
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'facebook',
    //   url: '',
    // },


  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
