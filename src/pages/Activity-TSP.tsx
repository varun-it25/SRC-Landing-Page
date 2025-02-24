import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import tsp_1 from "@/assets/tsp_1.jpg";
import tsp_2 from "@/assets/tsp_2.jpg";
import tsp_3 from "@/assets/tsp_3.jpg";
import logo from '@/assets/new_logo.jpg'
import banner from '@/assets/banner.jpg'

const Activity_TSP = () => {
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
                src={logo}
                className="w-20 aspect-square rounded-full border bg-white"
              ></img>
            </div>
            <p className="text-xl font-semibold">
              Techno Spiritual Projects (TSP){" "}
            </p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              Techno Spiritual Projects also known as (TSP) is an innovative
              initiative of Spiritual Research Cell (SRC) that provides students
              with a platform to enhance their technical skills through hands-on
              project development. By working on the technologies such as
              embedded systems and other fields, students gain practical
              experience, problem-solving abilities, and a deeper understanding
              of real-world applications. This initiative bridges the gap
              between theoretical learning and practical implementation,
              encouraging innovation and technical excellence. Through
              mentorship, teamwork, and research-driven projects. Techno
              Spiritual Projects empowers students to explore new thinngs in
              technology while fostering a spirit of creativity and growth.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={tsp_1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={tsp_2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={tsp_3}
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

export default Activity_TSP;
