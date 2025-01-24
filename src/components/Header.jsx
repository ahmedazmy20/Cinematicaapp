import React, { useEffect, useState } from "react";
import logo from "../assets/cima.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { navigation } from "../contants/navigation";


function Header() {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  // console.log("location search", removeSpace);

  useEffect(() => {
    if(searchInput){
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="bg-black backdrop-blur-sm  md:bg-neutral-900 h-16 bg-opacity-50  md:bg-opacity-65 fixed top-0 w-full z-40 ">
        <div className="container mx-auto px-3 flex items-center h-full">
          <Link to={"/"}>
            <img className="w-24 md:w-36"   src={logo} alt="Logo" />
          </Link>

          <nav className=" hidden sm:flex  items-center gap-2 ml-5">
            {navigation.map((nav, index) => {
              return (
                <div key={index}>
                  <NavLink
                    key={nav.lable}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2  hover:text-amber-500 duration-200 ${
                        isActive && `text-amber-500`
                      }`
                    }
                  >
                    {nav.lable}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent w-36 md:w-40 h-8  rounded px-4 py-1 outline-none focus:border-amber-500 focus:border-b-[1px]  sm:block"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <button  className=" rounded px-2 py-1  duration-200">
                <IoSearch className="text-xl" />
              </button>
            </form>

            <div className=" cursor-pointer active:scale-50 transition-all">
              <img
                src={userIcon}
                alt="User Icon"
                className="w-9 h-9 object-contain md:h-9 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
