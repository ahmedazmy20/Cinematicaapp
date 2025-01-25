import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function BannerHome() {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageUrl);
  //   console.log("Banner Home Data", bannerData);

  const [currentImage, setCurrentImage] = useState(0);

const handelNext = () => {
  setCurrentImage((prev) => (prev + 1) % bannerData.length); // يعيد إلى 0 عند الوصول إلى النهاية
};

const handelPrevious = () => {
  setCurrentImage((prev) =>
    prev === 0 ? bannerData.length - 1 : prev - 1 // يعيد إلى آخر صورة عند الرجوع من البداية
  );
};

useEffect(() => {
  const interval = setInterval(() => {
    handelNext(); // يستدعي الانتقال للصورة التالية
  }, 3000);

  return () => clearInterval(interval); // تنظيف عند تفكيك المكون
}, [bannerData.length]); // يعتمد على طول البيانات فقط


  // const [currentImage, setCurrentImage] = useState(0);
  // const handelNext = () => {
  //   if (currentImage < bannerData.length - 1) {
  //     setCurrentImage((prev) => prev + 1);
  //   } else {
  //     setCurrentImage(0); // إعادة إلى الصورة الأولى
  //   }
  // };
  
  // const handelPrevious = () => {
  //   if (currentImage > 0) {
  //     setCurrentImage((prev) => prev - 1);
  //   } else {
  //     setCurrentImage(bannerData.length - 1); // الانتقال إلى الصورة الأخيرة
  //   }
  // };
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handelNext(); // استدعاء الدالة لتتحكم في الانتقال
  //   }, 500);
  
  //   return () => clearInterval(interval); // تنظيف الـ interval
  // }, [bannerData]);


  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          // console.log("data", data);

          return (<>
          <div key={index} className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all "  style={{transform :`translateX(-${currentImage * 100}%)`}} >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              {/* Next & prev Buttom */}
              <div className=" absolute top-0  hidden items-center justify-between w-full h-full px-4 z-10 group-hover:lg:flex">
                <button onClick={handelPrevious} className="bg-white text-2xl p-2 rounded-full text-black hover:scale-90 hover:bg-gradient-to-l from-yellow-600 to-red-600 duration-300">
                  <FaAngleLeft/>
                </button>
                <button onClick={handelNext} className="bg-white text-2xl p-2 rounded-full text-black hover:scale-90 hover:bg-gradient-to-l from-yellow-600 to-red-600 duration-300">
                  <FaAngleRight/>
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent"></div>
            
                <div className="container mx-auto  ">
                <div className=" text-center   px-5 absolute bottom-0  max-w-md z-10">
                  <h2 className="text-2xl lg:text-5xl text-white drop-shadow-2xl font-bold ">
                    {data?.title || data?.name}
                  </h2>
                  <p className=" text-white  line-clamp-4  my-2">
                    {data?.overview}
                  </p>

                  <div className=" flex gap-2 my-4 justify-around">
                    <div>Rating : {Number(data.vote_average).toFixed(1)}+</div>
                    <span>|</span>
                    <div>View : {Number(data.vote_count)}</div>
                  </div>

                 
                </div>
              </div>

              <div>
              <div className="absolute  top-32 right-28    max-w-52 lg:top-24 lg:max-w-72  hidden md:block  "> 
               <img
                  src={imageURL + data?.poster_path}
                  alt=""
                  className="object-cover h-full w-full rounded-3xl "
                />
                </div>
              </div>

            </div>

            
          </>
            
            
          );
        })}
      </div>
    </section>
  );
}

export default BannerHome;
