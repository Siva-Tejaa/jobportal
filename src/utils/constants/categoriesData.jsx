import { IoImage, IoCodeSlash } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { SiTestcafe, SiYoutubegaming } from "react-icons/si";

export const categoriesList = [
  {
    icon: <IoImage fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Design",
  },
  {
    icon: <IoCodeSlash fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Development",
  },
  {
    icon: <MdOutlineSecurity fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Security",
  },
  {
    icon: <GiArchiveResearch fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Research",
  },
  {
    icon: <SiTestcafe fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Testing",
  },
  {
    icon: <SiYoutubegaming fontSize="1.3em" style={{ fill: "#AEB4C1" }} />,
    text: "Gaming",
  },
];
