import library from "@/assets/Library.jpg";
import wisdom from "@/assets/wisdom hall.png";
import meditation from "@/assets/meditation_hall.jpg";

const AboutGalary = () => {
  return (
    <section className="min-h-[90vh]">
        <p className="text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center">SRC <span className="font text-blue-600">Tour</span></p>

        <div className="w-full px-8 sm:px-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 pb-12">
          <div className="space-y-8 sm:space-y-4 flex flex-col">
              <div className="w-full aspect-video text-white bg-orange-400 rounded-xl flex flex-col justify-center items-center space-y-3 p-4">
                <p className="text-2xl font-semibold">Spiritual Library</p>
                <p className="text-sm text-center font-semibold">Bringing closer the self, the supreme, and the society, our Spiritual Library is a sanctuary of wisdom and inspiration, filled with self-help books which offer a peaceful space for reflection and learning.</p>
              </div>
              <div className="w-full aspect-video bg-zinc-200 rounded-xl">
                <img src={library} className="w-full aspect-video object-cover rounded-xl" />
              </div>
          </div>
          
          <div className="space-y-8 sm:space-y-4">
            <div className="w-full aspect-video bg-zinc-200 rounded-xl">
              <img src={meditation} className="w-full aspect-video object-cover rounded-xl" />
            </div>
            <div className="w-full aspect-video text-white bg-blue-500 rounded-xl flex flex-col justify-center items-center space-y-3 p-4">
              <p className="text-2xl font-semibold">Meditation Room</p>
              <p className="text-sm text-center font-semibold">A place of great serenity and self-reflection where students can practice meditation in a peaceful and harmonious environment.</p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-4">
            <div className="w-full aspect-video text-white bg-green-500 rounded-xl flex flex-col justify-center items-center space-y-3 p-4">
              <p className="text-2xl font-semibold">Wisdom Hall</p>
              <p className="text-sm text-center font-semibold">Combining virtue and wit, to ignite the brave leader in a student where teaching become pearls of the ocean of knowledge.</p>
            </div>
            <div className="w-full aspect-video bg-zinc-200 rounded-xl">
              <img src={wisdom} className="w-full aspect-video object-cover rounded-xl" />
            </div>
          </div>


        </div>         
    </section>
  );
};

export default AboutGalary;
