import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import uba_1 from "@/assets/uba_1.jpg";
import uba_2 from "@/assets/uba_2.jpg";
import uba_3 from "@/assets/uba_3.jpg";
import uba_logo from "@/assets/uba_logo.png";
import banner from '@/assets/banner.jpg'

const Activity_UBA = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="min-h-[90vh]">
        <div className="w-full h-52 bg-zinc-300">
        <img src = {banner} className =  'w-full h-52 bg-zinc-300 object-cover'></img>
        </div>
        <div className="w-full relative top-[-3rem] rounded-t-[3rem] bg-white">
          <div className="w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3">
            <div className="w-20 aspect-square rounded-full border bg-white">
              <img
                src={uba_logo}
                className="w-20 aspect-square rounded-full border bg-white"
              ></img>
            </div>
            <p className="text-xl font-semibold">Unnat Bharat Abhiyan (UBA) </p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              Unnat Bharat Abhiyan (UBA) is a transformative initiative by
              Jaipur Engineering College & Research Centre (JECRC), established
              in 2019 with the mission to uplift village communities by
              addressing key challenges such as water impurity, lack of schools,
              and limited educational opportunities, etc. So far, UBA has
              reached out to 5+ villages, helping them secure government funding
              for essential development projects. By improving access to clean
              water and enhancing educational infrastructure, we strive to
              create self-sustaining village ecosystems. Through active
              collaboration with communities, government bodies, and volunteers,
              UBA works towards long-term solutions that empower rural India.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={uba_1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={uba_2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={uba_3}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Activity_UBA;
