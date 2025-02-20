import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ffj1 from "@/assets/ffj1.jpg";
import ffj2 from "@/assets/ffj2.jpg";
import ffj3 from "@/assets/ffj3.jpg";
import ffj_logo from '@/assets/ffj_logo.jpg'

const Activity_FFJ = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="min-h-[90vh]">
        <div className="w-full h-52 bg-zinc-300"></div>
        <div className="w-full relative top-[-3rem] rounded-t-[3rem] bg-white">
          <div className="w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3">
            <div className="w-20 aspect-square rounded-full border bg-white"><img src={ffj_logo} className='w-20 aspect-square object-contain rounded-full border'></img></div>
            <p className="text-xl font-semibold">FruitFul Jaipur (FFJ) </p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              FruitFul Jaipur (FFJ) is an environmental initiative of Jaipur
              Engineering College & Research Centre (JECRC) established in year
              2017 with a goal to transform Jaipur into a greener, more
              sustainable city through plant and tree plantations. With a vision
              to improve air quality, and create a healthier ecosystem. FFJ
              organizes plantation drives, educational outreach programs, and
              collaborative partnerships with local communities, businesses, and
              institutions. So far, we have planted over (number) trees across
              Jaipur and introduced 60 varieties of trees and plants inside
              JECRC, contributing to a cleaner and healthier environment for
              student welfare. Our goal extends beyond Jaipur, as we aspire to
              expand this movement across India, inspiring people to take
              collective action for a greener future. By volunteering, donating,
              or simply spreading awareness, everyone can contribute to this
              mission and help make our cities more vibrant and eco-friendly.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300 ">
              <img
                src={ffj1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={ffj2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>

            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={ffj3}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Activity_FFJ;
