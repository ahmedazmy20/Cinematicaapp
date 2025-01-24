import React from 'react'
import { IoIosClose } from 'react-icons/io'

function VidieoPlay({videoKey , onClose}) {
    
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex items-center justify-center'>
        <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>
            <button onClick={onClose} className='absolute -right-2 -top-6 text-4xl hover:text-white'>
            <IoIosClose />
            </button>
            <iframe src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full rounded" ></iframe>       
         </div>

    </section>
  )
}

export default VidieoPlay