import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="mt-20 pb-8 xl:mt-32 mx-auto w-full  text-center bg-neutral-600 bg-opacity-35  text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your favorite movies?
            <br />
            Start Watch today.
          </h2>
          <a href="#top" onClick={(e)=>{e.preventDefault();
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        }} className="mt-8 xl:mt-12 px-2 py-2 text-2xl  font-medium leading-tight inline-block bg-amber-700 rounded-full shadow-xl  hover:bg-amber-600 hover:scale-110 transition-all   "
            ><FaArrowUp /></a>

          <div className="mt-10">
            <nav className="flex flex-wrap justify-center text-lg font-medium ">
              <div className="px-5 py-2 ">
                <Link className="hover:text-amber-600 transition-all" to={"/tv"}>
                  TV
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link className="hover:text-amber-600 transition-all" to={"/movie"}>
                  Movies
                </Link>
              </div>
            </nav>
            <p className="mt-7 text-base">
              © 2025 <span className="text-amber-300 ">Ahmed Azmy</span> All
              rights reseved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
