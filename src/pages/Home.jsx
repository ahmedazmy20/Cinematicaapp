import React from "react";
import BannerHome from "../components/BannerHome";
import hero from "../assets/hero-img.png";
import HorizontalScrollCart from "../components/HorizontalScrollCart";
import UseFetch from "../hooks/UseFetch";

// ________________________ All ApiS _________________________
// const mov = {title , backdrop_path , vote_average , overview  }
// api now plaing =   'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// api test  =  https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44
// api popular =   'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// Top Rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// Trending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// UpComming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// Searching = `https://api.themoviedb.org/3/search/collection?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${search}`



// const img = `https://image.tmdb.org/t/p/w200`

function Home() {
  

  const trendingDataUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44';// for trennding Show Slider
  const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";  // for Now Playing  Slider
  const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44"; // for Top Rated Slider
  const populatTVUrl = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44"; // for Popular TV Show Slider
  const onTheAirUrl = "https://api.themoviedb.org/3/tv/on_the_air?api_key=eba8b9a7199efdcb0ca1f96879b83c44"; // for Popular TV Show Slider
  const { data : trendingData } = UseFetch(trendingDataUrl);
  const { data : nowPlayingData } = UseFetch(nowPlayingUrl);
  const { data : topRatedData} = UseFetch(topRatedUrl);
  const { data : populatTVData} = UseFetch(populatTVUrl);
  const { data : onTheAireData} = UseFetch(onTheAirUrl);
  return (
    <>
      <BannerHome />
      <HorizontalScrollCart  data={trendingData} heading={"Trending Show"} trending={true} media_type={"movie"} />
      <HorizontalScrollCart data={nowPlayingData} heading={"Now Playing"}  media_type={"movie"}/>
      <HorizontalScrollCart data={topRatedData} heading={"Top Rated"}  media_type={"movie"} />
      <HorizontalScrollCart data={populatTVData} heading={"Popular TV Show"}  media_type={"tv"} />
      <HorizontalScrollCart data={onTheAireData} heading={"On The Air"}  media_type={"tv"} />
    </>
  );
}

export default Home;
