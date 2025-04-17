import anisha from "../assets/avatar-anisha.png";
import ali from "../assets/avatar-ali.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";

const navLink = ["pricing", "product", "aboutUs", "careers", "comunity"];

const aboutUs = [
  {
    id: 1,
    title: "Track company-wide progress",
    discription:
      "See how your day-to-day tasks fit into the wider vision. Go from  tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. ",
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    discription:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    title: "Everything you need in one place",
    discription:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team   productivity solution.",
  },
];

const footerLink = [
  "Home",
  "Pricing",
  "Products",
  "About Us",
  "Careers",
  "Community",
  "Privacy Policy",
];
const testimonialProfiles = [
  {
    name: "Anisha Li",
    testimonial:
      " “Manage has supercharged our team’s workflow. The ability to maintai visibility on larger milestones at all times keeps everyone motivated.",
    profileImg: anisha,
  },
  {
    name: "Ali Bravo",
    testimonial:
      " We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    profileImg: ali,
  },
  {
    name: "Richard Watts",
    testimonial:
      " Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    profileImg: richard,
  },
  // {
  //   name: "Shanai Gough",
  //   testimonial:
  //     "  Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  //   profileImg: shanai,
  // },
];
export { navLink, aboutUs, footerLink, testimonialProfiles };
