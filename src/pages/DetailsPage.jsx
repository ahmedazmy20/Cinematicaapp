import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseFetchDetails from "../hooks/UseFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import HorizontalScrollCart from "../components/HorizontalScrollCart";
function DetailsPage() {
  const { id } = useParams();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[id])
  const imageURL = useSelector((state) => state.movieoData.imageUrl);

  const params = useParams();
  // console.log("Params", params);

  const { data } = UseFetchDetails( `https://api.themoviedb.org/3/${params.explore}/${params.id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
  const { data: castData } = UseFetchDetails( `https://api.themoviedb.org/3/${params.explore}/${params.id}/credits?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
  const { data: similarData } = UseFetchDetails( `https://api.themoviedb.org/3/${params.explore}/${params.id}/similar?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
  const { data: recommendationsData } = UseFetchDetails( `https://api.themoviedb.org/3/${params.explore}/${params.id}/recommendations?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
  const { data: videoData } = UseFetchDetails( `https://api.themoviedb.org/3/${params.explore}/${params.id}/videos?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
  const trailer = videoData?.results?.find(video => video.type === "Trailer" && video.site === "YouTube");
  const trailerURL = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null
  
  // console.log("similarData11111" , similarData);
  //  console.log("VidioData ", videoData);
  //  console.log("trailerURL ", trailerURL);



  const duration = (data?.runtime/60)?.toFixed(1)?.split(".")
  const writer = castData?.crew?.filter(el => el?.job === "Director").map(el=>el?.name).join(", ")
  // console.log("Writer", writer);
  
  // console.log("Data", data);   //_____________________
  // console.log("Star Cast", castData); //______________

  return (
    <>
    <div >
       {/* The Panner */}
      <div className="w-full h-[400px]   relative">
       
        <div className="w-full h-full bg-gradient-to-t from-slate-900 to-green-800">
              <img
                src={imageURL + data?.backdrop_path}
                alt="Movie Poster"
                className="h-full w-full object-cover"
              />
        </div>
        
        <div className=" absolute top-0 w-full h-full mt-10   bg-gradient-to-t from-neutral-900 to-transparent  "></div>
      
      </div>

      {/* Under the Panner */}
      <div className="container mx-auto px-3 ">
        <div className="-mt-36 relative">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Movie Poster */}
            <div className="flex-shrink-0">
              <img
                src={imageURL + data?.poster_path}
                alt="Movie Poster"
                className="rounded-lg shadow-lg w-full md:w-80"
              />
            </div>

            {/* Movie Details */}
            <div className="flex flex-col gap-4 mt-20">
              {/* Movie Title */}

              <h1 className="text-4xl font-bold">
                {data?.title || data?.name}
              </h1>


             {/* Duration */}
             <div className="flex items-center gap-2">
               <div>
                  <span className="text-gray-500  font-semibold">
                     Duration :
                  </span>
                  <span> {duration[0]}h_{duration[1]}m </span>
               </div>
               <span className="text-2xl">|</span>
               <div>
                  <span className="text-gray-400   font-bold text-lg">
                  status :
                  </span>
                  <span> {data?.status}</span>
               </div>

               <span className="text-2xl">|</span>
               <div>
                  <span className="text-gray-400   font-bold text-lg">
                  revenue :
                  </span>
                  <span> {data?.revenue}</span>
               </div>

              </div>

              {/* Ratings */}

              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-lg font-semibold">
                  {(data?.vote_average ?? 0).toFixed(1)} 
                </span> 
                <span className="text-gray-400">/ 10</span>
              </div>

             {/* Director */}
             <div className="flex items-center gap-2">
               <div>
               <span className="text-amber-500 text-lg font-semibold">Director: </span> 
               <span className="text-gray-400">{castData?.crew[0]?.name}</span>
               </div> 
               <span className="text-2xl">|</span>
               {/* Writer */}
               <div>
              {writer? <> <span className="text-amber-500 text-lg font-semibold">Writer: </span> 
                <span className="text-gray-400">{writer}</span></> :""}
               </div>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {data?.genres?.map((gener, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {gener?.name}
                    </span>
                  );
                })}
              </div>

              {/* Release Date */}
              <p className="text-gray-400 text-sm">
                Release Date:{" "}
                <span className="text-white">
                  {moment(data?.release_date).format("MMM Do YY")}
                </span>
              </p>

              {/* Overview */}
              <p className="text-gray-300">{data?.overview}</p>

              {/* Buttons */}
              <div className=" mt-4">
                
                <button
                      onClick={() => { if (trailerURL) {window.open(trailerURL, "_blank"); // فتح التريلر في نافذة جديدة
                      } 
                       else {
                        alert("Trailer not available!");
                       }
                      }}
                      className="bg-amber-600 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:scale-105">
                  Watch Now
                </button>
                
              </div>
            </div>
          </div>

           {/* Section: Additional Info */}
           <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">More Information</h2>

            {/* Cast */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Cast :</h3>
              <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2">
                {castData?.cast?.map((starCast, index) => {
                  if(!starCast?.profile_path){
                    return null
                  }
                  return (
                    <div key={index} className="my-2">
                       <div className="  flex flex-col justify-center items-center text-center">
                        
                          <>
                            <img className="w-24 h-24 object-cover rounded-full   " src={imageURL + starCast?.profile_path} alt="cast_img" />
                            <p>{starCast?.name}</p>
                          </>
                        
                       </div> 

                    </div>
                  );
                })}
              </div>
            </div>

            {/* similarData */}

            {/* similarData */}
               {/* 🤝🏻  هيعرضها لو مفيش مش هيرجع حاجه   Similar Data  لو فيه*/}
               {Array.isArray(similarData?.results) && similarData?.results.length > 0 && (<HorizontalScrollCart data={similarData.results} heading={"Similar " + params.explore} media_type={params.explore} />)}
               {/* <HorizontalScrollCart data={Array.isArray(similarData?.results)? similarData.results: []} heading={"similar "+ params.explore} media_type={ params.explore}/>            */}
         
            {/* recommendationsData */}
               {/* {/* 🤝🏻  هيعرضها لو مفيش مش هيرجع حاجه   Recommended Data  لو فيه*/} 
               {/* recommendationsData */}
               {Array.isArray(recommendationsData?.results) && recommendationsData?.results.length > 0 && ( <HorizontalScrollCart data={recommendationsData.results} heading={"Recommendations " + params.explore} media_type={params.explore} />)}
               {/* <HorizontalScrollCart data={Array.isArray(recommendationsData?.results)? recommendationsData.results: []} heading={"Recommendation "+ params.explore} media_type={ params.explore}/>             */}
         
          </div>

          
        </div>

        


        {/* _____________________________ */}
       



      </div>
      

     

      
     
    </div>
    </>
  );
}

export default DetailsPage;
