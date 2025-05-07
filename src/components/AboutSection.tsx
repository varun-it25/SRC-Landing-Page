import about_src from "@/assets/about_src.jpg"

const About = () => {
  return (
    <section className='flex-col bg-blue-50 h-fit sm:h-[90vh] justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 py-7 sm:py-12'>
      <p className='text-4xl block sm:hidden whitespace-nowrap sm:whitespace-normal sm:text-5xl font-medium text-blue-500 mb-8'>About <span className='font text-zinc-600'>SRC</span></p>
      
      <div className='w-full mb-6 sm:mb-0'>
        <div className='w-full h-72 sm:h-96 flex justify-center'>
          <img src={about_src} className='h-full mr-[1.4rem] sm:mr-0 whitespace-nowrap object-cover rounded-lg' />
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-start pr-[1.4rem] sm:pr-0 pl-0 sm:pl-6'>
        <p className='text-3xl sm:block hidden whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 mb-6'>About <span className='font text-blue-600'>SRC</span></p>
        <p className='text-zinc-500 text-s mb-4 text-justify'>Spiritual Research Cell is India’s first Rajyoga Thought Laboratory, dedicated to exploring human consciousness and unlocking inner potential through meditation, self-discovery, and spiritual research.</p>
        <p className='text-zinc-500 text-s mb-4 text-justify'>We believe true well-being arises from harmony between mind, body, and soul. Our mission is to foster personal transformation and societal harmony by combining scientific inquiry with spiritual wisdom.
        </p>
        <p className='text-zinc-500 text-s mb-4 text-justify'>Our vision is a world where spirituality empowers individuals to lead purposeful, values-driven lives. We offer a nurturing space for learning, growth, and research into the spiritual dimensions of life—especially inspiring youth to embrace timeless values.
        </p>
        <p className='text-zinc-500 text-s mb-4 text-justify'>Join us on a journey of inner peace, empowerment, and holistic development. Together, let’s make spirituality the foundation of a better world.</p>
        {/* <p className='text-zinc-500 text-s mb-4 text-justify'>Join us on this transformative journey and experience inner peace, empowerment, and holistic development. Together, let’s build a future where spirituality is a guiding force for a better world.</p> */}
        
      </div>
    </section>
  )
}

export default About