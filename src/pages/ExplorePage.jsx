import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardForPopular from "../components/CardForPopular";

function ExplorePage() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const api_key = `api_key=eba8b9a7199efdcb0ca1f96879b83c44`;
  // console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/${params.explore}?${api_key}`,
        {
          params: {
            page: pageNo,
          },
        }
      );
      setData((preve) => {
        return [...preve, ...data.results];
      });
      // console.log("ExploreData", data.results);
      setTotalPageNo(data.total_pages);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handelScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((preve) => preve + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData()
  }, [params.explore])
  

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <div className="pt-16 ms-6">
        <div className="container mx-auto ">
          <h3 className="capitalize text-lg lg:text-xl font-semibold my-3"> Popular {params.explore} show </h3>
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-[repeat(auto-fit,230px)] md:gap-6">
            {
              data.map((exploreData, index) => {
                return (
                  <CardForPopular  key={index} data={exploreData} media_type={params.explore} />
                  // <Card  key={index} data={exploreData} media_type={params.explore} />
                )
              })
            } 
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
