import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HorizontalScrollCart = ({ data = [], heading ,trending ,media_type  }) => {
  // console.log("HorizontalScrollCart",data);
  
  const containerRef = useRef();
  
  const handelNext = ()=>{
    containerRef.current.scrollLeft += 300
  }

  const handelPrevious =()=>{
    containerRef.current.scrollLeft -= 300
  }

  return (
    <div className="container  mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2">{heading}</h2>
      <div className="overflow-hidden relative ">
        <div ref={containerRef} className="grid  grid-cols-[repeat(auto-fit,250px)] grid-flow-col overflow-x-scroll noScroll gap-6 py-3 lg:ps-7 relative z-10  scroll-smooth transition-all ">
          {
           Array.isArray(data)&&data.map((data, index) => {
              return (
             
                  <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                
            );
          })}
        </div>

        
          <div className=" absolute  top-0 hidden lg:flex  items-center justify-between w-full h-full   ">
            <button
              onClick={handelPrevious}
              className="bg-white p-1 ml-1 rounded-full text-black z-10 hover:scale-90 " >
              <FaAngleLeft />
            </button>
            <button
              onClick={handelNext}
              className="bg-white p-1 mr-1 rounded-full text-black z-10 hover:scale-90 "
            >
              <FaAngleRight />
            </button>
          </div>

      </div>
    </div>
  );
};

export default HorizontalScrollCart;
