
import { IoMdHome } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";



export const navigation = [
    {
      lable: "TV Shows",
      href: "tv",
      icon:<PiTelevisionFill/>
    },
    {
      lable: "Movies",
      href: "movie",
      icon:<BiSolidMoviePlay />
    },
  ];
  export const mobileNavigation=[
    {
      lable: "Home",
      href: "/",
      icon:<IoMdHome />
    },
    ...navigation,
    // {
    //     lable: "search",
    //     href: "/search",
    //     icon:<IoSearch/>
    // }
  ]