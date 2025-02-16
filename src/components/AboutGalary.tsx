import library from "@/assets/Library.jpg";
import wisdom from "@/assets/wisdom hall.png";
import meditation from "@/assets/meditation_hall.jpg";

const AboutGalary = () => {
  return (
    <section className="flex-col bg-blue-50 h-fit sm:h-[90vh] justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 py-7 sm:py-12 mb-10">
      <div className="grid md:grid-cols-3">
        {/* Library */}
        <div className="bg-orange-400 px-2 text-center flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-semibold">Spiritual Library</h2>
          <br />
          <p>
            Bringing closer the self, the supreme, and the society, our
            Spiritual Library is a sanctuary of wisdom and inspiration, filled
            with self-help books which offer a peaceful space for reflection and
            learning.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={meditation}
            alt="Learning Centre"
            className="w-full h-70 object-cover"
          />
        </div>

        {/* Meditation */}
        <div className="bg-teal-400 px-2 text-center flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-semibold">Wisdom Hall</h2>
          <br />
          <p>
            Combining virtue and wit, to ignite the brave leader in a student
            where teaching become pearls of the ocean of knowledge.
          </p>
        </div>

        {/* Meditation Image */}
        <div>
          <img
            src={library}
            alt="Meditation"
            className="w-full h-70 object-cover"
          />
        </div>

        {/* Other Facilities */}
        <div className="bg-cyan-400 px-2 text-center flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-semibold">Meditation Room</h2>
          <br />
          <p>
            A place of great serenity and self-reflection where students can
            practice meditation in a peaceful and harmonious environment.
          </p>
        </div>

        {/* Facilities Image */}
        <div>
          <img
            src={wisdom}
            alt="Other Facilities"
            className="w-full h-70 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGalary;
