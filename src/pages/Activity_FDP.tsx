import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import meditation_1 from "@/assets/meditation_1.jpg";
import meditation_2 from "@/assets/meditation_2.jpg";
import meditation_3 from "@/assets/meditation_3.jpg";
import medi_logo from "@/assets/meditation_logo.png";
import banner from "@/assets/banner.jpg";
import girl_home from "@/assets/girl_home.png";

const Activity_FDP = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="min-h-[90vh]">
        <div className="w-full h-52 bg-zinc-300">
          <img
            src={banner}
            className="w-full h-52 bg-zinc-300 object-cover"
          ></img>
        </div>
        <div className="w-full relative top-[-3rem] rounded-t-[3rem] bg-white">
          <div className="w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3">
            <div className="w-20 aspect-square rounded-full border bg-white">
              <img
                src={girl_home}
                className="w-20 aspect-square rounded-full border bg-white"
              ></img>
            </div>
            <p className="text-xl font-semibold">Meditation Classes</p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              The Meditation Classes initiative is designed to foster the mental
              and emotional well-being of participants by harmonizing their
              inner peace with engaging mindfulness practices while deepening
              their self-awareness. By incorporating guided meditation,
              breathing exercises, and relaxation techniques, these sessions
              create a serene environment that enhances focus, reduces stress,
              and promotes overall well-being. This program not only helps
              individuals cultivate mindfulness and emotional balance but also
              empowers them to navigate daily challenges with clarity and
              resilience. Through continuous practice, Meditation Classes aim to
              elevate both personal and professional growth, fostering a more
              centered and harmonious lifestyle.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={meditation_1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={meditation_2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={meditation_3}
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

export default Activity_FDP;
