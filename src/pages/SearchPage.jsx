import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CardForPopular from '../components/CardForPopular';

function SearchPage() {
  const api_key = `api_key=eba8b9a7199efdcb0ca1f96879b83c44`;
  const location = useLocation()
  const [data,setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?${api_key}`,
        {
          params: {
            query: location.search.slice(3),
            page: page,
          },
        }
      );
      setData((preve) => {
        return [
          ...preve, 
          ...data.results
        ];
      });
      // console.log("SearchData", data.results);
    } catch (error) {
      console.error("error", error);
    }
  };
  // location.search.split('=')[1]

useEffect(() => {
  setPage(1)
  setData([])
  fetchData()
}, [location?.search])

const handelScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setPage((preve) => preve + 1);
  }
};


  useEffect(() => {
    fetchData();
  }, [page]);

 useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);


  // console.log("location now",location.search.slice(3));
  return (
    <div className='pt-16'>
          <div className='container mx-auto ps-4 md:ps-0 '>
            <h3 className="capitalize text-lg lg:text-xl font-semibold my-3"> Search Results </h3>
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-[repeat(auto-fit,230px)] md:gap-6">
            {
              data.map((searchData, index) => {
                return (
                  <CardForPopular  key={index} data={searchData} media_type={searchData.media_type} />
                )
              })
            } 
          </div>
          </div>

    </div>
  )
}

export default SearchPage