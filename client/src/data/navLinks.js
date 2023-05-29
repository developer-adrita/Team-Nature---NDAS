import { AiOutlineCloudUpload, AiOutlineControl } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import {
  FaDonate,
  FcAbBsInfoSquareout,
  FaHireAHelper,
  FaMars,
} from "react-icons/fa";
import { MdOutlineContacts, MdOutlineLeaderboard, MdOutlinePostAdd, MdOutlineTipsAndUpdates, MdPrivacyTip, MdWorkOutline } from "react-icons/md";
import { GiAwareness, GiGalaxy, GiSunRadiations, GiTalk, GiWildfires } from "react-icons/gi";
import { RiEarthquakeLine } from "react-icons/ri";
import { BsFillInfoSquareFill, BsPatchQuestion, BsTropicalStorm, BsTsunami } from "react-icons/bs";
import { TiNews, TiWeatherPartlySunny } from "react-icons/ti";
import { FcAbout, FcDonate, FcFaq, FcRules } from "react-icons/fc";
import { HiOutlineHome } from "react-icons/hi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Admin Uploads",
        route: "admin-uploads",
        icon: <AiOutlineCloudUpload />,
      },
      {
        name: "Super-Admin Uploads",
        route: "super-admin-uploads",
        icon: <AiOutlineCloudUpload />,
      },
      {
        name: "Controls",
        route: "controls",
        icon: <AiOutlineControl />,
      },
    ],
  },
 
  {
    title: "Track-Disasters",
    links: [
      {
        name: "Weather-Forecast",
        route: "check-forecast",
        icon: <TiWeatherPartlySunny />,
      },
      {
        name: "Earthquake",
        route: "earthquake-detect",
        icon: <RiEarthquakeLine />,
      },
      {
        name: "Wildfire",
        route: "track-wildfire",
        icon: <GiWildfires />,
      },
      // {
      //   name: "Drought",
      //   route: "drought-detect",
      //   icon: <GiSunRadiations />,
      // },
      // // {
      // //   name: "Blizzard",
      // //   route: "blizzard-detect",
      // //   icon: <FaRegSnowflake />,
      // // },
      // {
      //   name: "Storm",
      //   route: "storm-detect",
      //   icon: <BsTropicalStorm />,
      // },
      // {
      //   name: "Flood",
      //   route: "flood-detect",
      //   icon: <BsTsunami />,
      // },
    ],
  },

  {
    title: "Donors",
    links: [
      {
        name: "Donors",
        route: "donors",
        icon: <FaDonate />,
      },
      {
        name: "Donors-Leaderboard",
        route: "donors-leaderboard",
        icon: <MdOutlineLeaderboard />,
      },
    ],
  },

  // {
  //   title: "Explore-Galaxy",
  //   links: [
  //     {
  //       name: "Galaxy-Overview",
  //       route: "galaxy-overview",
  //       icon: <GiGalaxy />,
  //     },
  //     {
  //       name: "Awareness",
  //       route: "galaxy-awareness",
  //       icon: <GiAwareness />,
  //     },
  //   ],
  // },

  // {
  //   title: "Explore-Mars",
  //   links: [
  //     {
  //       name: "Mars-Overview",
  //       route: "mars-overview",
  //       icon: <FaMars />,
  //     },
  //     {
  //       name: "Awareness",
  //       route: "mars-awareness",
  //       icon: <GiAwareness />,
  //     },
  //   ],
  // },

  {
    title: "Support",
    links: [
      {
        name: "Contacts",
        route: "contact",
        icon: <MdOutlineContacts />,
      },
      {
        name: "Help Center",
        route: "help-center",
        icon: <FaHireAHelper />,
      },
      {
        name: "TIPS",
        route: "tips",
        icon: <MdOutlineTipsAndUpdates />,
      },
    ],
  },

  {
    title: "General",
    links: [
      {
        name: "Terms And Conditions",
        route: "terms-conditions",
        icon: <MdPrivacyTip />,
      },
      {
        name: "About Us",
        route: "about-us",
        icon: <BsFillInfoSquareFill />,
      },
      {
        name: "FAQ",
        route: "faq",
        icon: <BsPatchQuestion />,
      },
    ],
  },
];


// {
	// 	title: "Blinded",
	// 	links: [
	// 		{
	// 			name: "Audio Courses",
	// 			route: "audio-courses",
	// 			icon: <FaFileAudio />,
	// 		},
	// 	],
	// },

	// {
	// 	title: "Build-Carrier",
	// 	links: [
	// 		{
	// 			name: "Career Building Courses",
	// 			route: "career-building-courses",
	// 			icon: <MdWorkOutline />,
	// 		},
	// 		{
	// 			name: "Talk To Experts",
	// 			route: "talk-to-expert",
	// 			icon: <GiTalk />,
	// 		},
	// 		{
	// 			name: "Share Your Opinion",
	// 			route: "share-your-opinion",
	// 			icon: <MdOutlinePostAdd />,
	// 		},
	// 	],
	// },