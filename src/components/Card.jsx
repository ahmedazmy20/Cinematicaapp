import moment from "moment"; //for transform date
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data , trending , index ,media_type}) => {

    // const apiDate = data?.first_air_date || data?.release_date;
    // const newDate = new Date(apiDate);
    // const options = {year: 'numeric' , month: 'long' , day: 'numeric'}
    // const formattedDate = newDate.toLocaleDateString('en-US', options);

  const imageURL = useSelector((state) => state.movieoData.imageUrl);

  return (
    <Link to={"/"+media_type+"/"+data.id} className="cursor-pointer w-full max-w-[250px] min-w-[250px] h-80 overflow-hidden rounded relative group hover:scale-105 transition-all">
      <img src={imageURL + data?.poster_path} alt="" />
        {
          trending && (
            <div className="  bg-slate-800 bg-opacity-60 group-hover:bg-opacity-100 absolute top-5 px-4 py-1  rounded-r-full">
             <div>
             #{index} Trending
             </div>
            </div>
          )
        }
      <div className="bg-slate-800 bg-opacity-90 absolute bottom-0 w-full p-2 ">
        <h2>{data.title || data.name}</h2>
        <div className="text-sm flex items-center justify-between">
          <p className="text-slate-400">{moment(data?.release_date).format("MMM Do YY")} </p>
          <p className= "text-xs text-white bg-slate-900 px-1 rounded-full flex gap-1 "><span>Rating:</span> <span>{data.vote_average.toFixed(1)}</span></p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
