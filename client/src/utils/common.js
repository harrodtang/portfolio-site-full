import Header from "../Portfolio/Header/Header";
import AboutMe from "../Portfolio/AboutMe/AboutMe";
import Projects from "../Portfolio/Projects/Projects";
import ContactForm from "../Portfolio/ContactMe/ContactForm";

export const TOTAL_SCREENS = [
  {
    screen_name: "Header",
    component: Header,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "ContactMe",
    component: ContactForm,
  },
];

export const GET_SCREEN_INDEX = (screenName) => {
  if (!screenName) {
    return -1;
  }

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screenName) {
      return i;
    }
  }

  return -1;
};
