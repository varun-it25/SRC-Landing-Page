import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dd_1 from "@/assets/dd_1.jpg";
import dd_2 from "@/assets/dd_2.jpg";
import dd_3 from "@/assets/dd_3.jpg";
import dd_logo from '@/assets/dd_logo.png';
import banner from '@/assets/banner.jpg'

const Activity_DD = () => {
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
                <img src={dd_logo} className='w-20 aspect-square object-contain rounded-full border'></img>
            </div>
            <p className="text-xl font-semibold">Diverse Dialog (DD) </p>
          </div>
          <div className="w-full px-8 mt-[-1rem] mb-6">
            <p className="text-left">
              The initiative, launched by Spiritual Research Cell, last year, is
              designed to foster an enriching, diverse dialogue aimed at the
              holistic development of both faculty and students. This platform
              offers a series of expert talks, bringing in distinguished
              speakers from various fields to share their valuable insights and
              experiences. So far, 11 sessions have been successfully conducted,
              with many more planned for the future. Notable guests who have
              graced these sessions include Sister Shivani, renowned for her
              wisdom on personal growth and spirituality, and Savji Bhai
              Dholakia, a successful entrepreneur known for his inspirational
              journey and many more. These talks not only help broaden
              perspectives but also encourage professional and personal
              development by addressing both academic and life skills. This
              initiative has quickly become a cornerstone of continuous learning
              and development within the institution.
            </p>
          </div>
          <p className="text-2xl font-semibold px-8 mb-4">Snap Shot</p>
          <div className="grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8">
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={dd_1}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
              <img
                src={dd_2}
                alt="Description"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
            </div>
            <div className="w-full aspect-video rounded-xl border bg-zinc-300">
            <img
                src={dd_3}
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

export default Activity_DD;
