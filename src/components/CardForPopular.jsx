import moment from "moment"; //for transform date
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardForPopular = ({ data , index ,media_type }) => {

   
  const imageURL = useSelector((state) => state.movieoData.imageUrl);
  const mediaType = data?.media_type ?? media_type

  if(!data?.poster_path){
    return null
  }
 

  return (
    <Link key={index} to={"/"+mediaType+"/"+data.id} className="cursor-pointer w-full max-w-[160px] min-w-[160px]  sm:max-w-[230px] sm:min-w-[230px] block  min-h-48 md:min-h-80 overflow-hidden rounded relative group hover:scale-105 transition-all ">
      <img src={imageURL + data?.poster_path }  alt="movie_img" />
      <div className= " bg-slate-800 bg-opacity-75 absolute bottom-0 top-[150%] group-hover:top-0  transition-all w-full  ">
        <div className=" flex justify-center items-center flex-col gap-y-20 h-full">
        <h2 className=" ms-5 text-white text-lg font-bold">{data.title || data.name}</h2>
         <div className="flex items-center justify-evenly w-full ">
        <p className="text-slate-200">{moment(data?.release_date).format("MMM Do YY")} </p>
        <p className= "text-xs text-white  px-1 rounded-full flex gap-1 "><span>Rating:</span> <span>{(data.vote_average ?? 0).toFixed(1) }</span></p>
         </div>
         </div>
      </div>
    </Link>
  );
};

export default CardForPopular;
