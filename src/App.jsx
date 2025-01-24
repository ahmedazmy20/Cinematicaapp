import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData ,setImageUrl } from "./store/movieoSlice";

      // https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44


function App() {
  const dispatch = useDispatch()

  const fetchTrendindData = async()=>{
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      dispatch(setBannerData(response.data.results))
      // console.log("response",response.data.results)
    } catch (error) {
      console.error("error",error);
    }
  };

  const fetchConfiguration = async()=>{
    try {
      const response = await axios.get("https://api.themoviedb.org/3/configuration?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
      // console.log("Configuration Data",response.data.images.secure_base_url+"original")
      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    } catch (error) {
      console.error("error",error);
    }
  }

  useEffect(() => {
    fetchTrendindData();
    fetchConfiguration();
  }, [])
  


  const router = createBrowserRouter([
    { path: "/", element: <Layout/>, children: [
      { index:true , element: <Home/> },
      { path: ":explore", element: <ExplorePage/> },
      { path: ":explore/:id", element: <DetailsPage/> },
      { path: "search", element: <SearchPage/> },
      { path: "*", element: "Not Found" },
    ]},
  ]);

  

  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
