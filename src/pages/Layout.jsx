import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNavigation from "../components/MobileNavigation";

function Layout() {

  // const fetchTrendingData = async()=>{
  //   try {
  //     const response = await axios.get(`trending/all/week`);
  //     console.log("response",response);
  //   }
  //   catch(error){
  //     console.log("error",error);
  //   }
  // }

  // useEffect(() => {
  //   fetchTrendingData();
  // }, [])
  

  return (

    
    <>
      <main id="top" >
        <Header />
        <div className="min-h-[70vh]">
          <Outlet />
        </div>
        <Footer />
        <MobileNavigation />
      </main>
    </>
  )
}

export default Layout;
