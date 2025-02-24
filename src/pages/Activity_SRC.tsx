import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import counselling_1 from "@/assets/counselling_1.jpg";
import counselling_2 from "@/assets/counselling_2.jpg";
import counselling_3 from "@/assets/counselling_3.jpg";
import banner from "@/assets/banner.jpg";
import new_logo from "@/assets/new_logo.jpg";

const Activity_SRC = () => {
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
                src={new_logo}
                className="w-20 aspect-square rounded-full border bg-white"
              ></img>
            </div>
            <p className="text-xl font-semibold"> Counselling Sessions</p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              Counseling sessions provide a safe and supportive space for
              students to navigate personal, academic, and emotional challenges.
              These sessions encourage open conversations, self-reflection, and
              the development of effective coping strategies, helping students
              manage stress, anxiety, and decision-making with clarity. Through
              one-on-one guidance and group discussions, students gain emotional
              resilience, improved focus, and a balanced mindset. Additionally,
              access to self-help resources and expert advice fosters personal
              growth, confidence, and a positive outlook. By prioritizing mental
              well-being, counseling sessions empower students to overcome
              obstacles and achieve both academic and personal success.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={counselling_1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={counselling_2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={counselling_3}
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

export default Activity_SRC;
