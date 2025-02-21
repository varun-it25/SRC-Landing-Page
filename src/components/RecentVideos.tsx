import React from 'react';
import Reel_image from '@/assets/reel_image.png'
import { Play } from 'lucide-react';

const RecentVideos: React.FC = () => {
  function openReel(){
    window.open("https://www.instagram.com/reel/DDTuXVezzQi","_blank");
  }

  return (
    <div className="max-w-6xl mx-auto px-8 mt-[-1rem] pb-20">
      <h2 className="text-3xl text-zinc-700 font-semibold mb-8">Recent Videos</h2>
      <div className='h-32 sm:h-96 w-full rounded-xl grid grid-cols-4 gap-4 sm:gap-8 mb-0 sm:mb-12'>
        <div className='relative w-full h-fit bg-zinc-200 rounded-xl'>
          <img src={Reel_image} className='w-full h-[8rem] sm:h-fit object-cover rounded-xl hover:scale-105' />
          <div className='w-full absolute top-0 bg-white h-full bg-opacity-0 hover:bg-opacity-20 rounded-xl flex justify-center items-center cursor-pointer' onClick={openReel}>
            <div className='aspect-square w-10 sm:w-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 rounded-full flex justify-center items-center pl-[3px] text-white'><Play /></div>
          </div>
        </div>
        <div className='aspect-video col-span-3 w-full rounded-xl bg-zinc-200'>
          <iframe src="https://www.youtube.com/embed/6MfejY_rn8o?si=VkgEu8U70eYd0mgE" title="YouTube video player" frameBorder="0" className='w-full h-full rounded-xl' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default RecentVideos;
