import {
  DashboardIconSVG,
  DashboardIconInactive,
  homeActiveSVG,
  homeInactiveSVG,
  quizActive,
  quizInactive,
  contactIocnActive,
  contactIocnInactive
} from "../../assets/SVGS";

export const LinkDataBase = [
  {
    iconActive: homeActiveSVG,
    iconInactive: homeInactiveSVG,
    linkName: "Main",
    path: "/",
  },

  {
    iconActive: DashboardIconSVG,
    iconInactive: DashboardIconInactive,
    linkName: "Dashboard",
    path: "/pages/Dashboard",
  },

  {
    iconActive: quizInactive,
    iconInactive: quizActive,
    linkName: "Quiz",
    path: "/pages/AllQuiz",
  },

  {
    iconActive: contactIocnActive,
    iconInactive: contactIocnInactive,
    linkName: "contact",
    path: "/pages/contact",
  },
];
