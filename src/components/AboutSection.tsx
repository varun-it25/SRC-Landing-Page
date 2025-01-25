const About = () => {
  return (
    <section className='flex-col bg-blue-50 justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 py-7 sm:py-12'>
      <p className='text-4xl block sm:hidden whitespace-nowrap sm:whitespace-normal sm:text-5xl font-medium text-blue-500 mb-8'>About <span className='font text-zinc-600'>SRC</span></p>
      
      <div className='w-full mb-6 sm:mb-0'>
        <div className='w-full h-72 sm:h-96 flex justify-center'>
          <img src={`https://media.licdn.com/dms/image/v2/D4E22AQFpjweghorc_w/feedshare-shrink_800/B4EZOwk8zgHsAg-/0/1733834362605?e=2147483647&v=beta&t=vZt-iL97H3y6K7IVjNJC-em4gG2yEsDJjtPXD4pNwuU`} className='h-full mr-[1.4rem] sm:mr-0 whitespace-nowrap object-cover rounded-lg' />
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-start pr-[1.4rem] sm:pr-0 pl-0 sm:pl-6'>
        <p className='text-3xl sm:block hidden whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 mb-6'>About <span className='font text-blue-600'>SRC</span></p>
        <p className='text-zinc-500 text-sm mb-4'>The Spiritual Research Cell (SRC) at Jaipur Engineering College and Research Centre (JECRC) is dedicated to promoting spiritual awareness, mental well-being, and personal growth among our students and faculty.</p>
        <p className='text-zinc-500 text-sm mb-4'>By seamlessly integrating academic learning with spiritual development, SRC offers a diverse range of activities. These include meditation sessions, yoga workshops, inspirational talks, and thought-provoking discussions on self-awareness, stress management, and life goals.</p>
        <p className='text-zinc-500 text-sm mb-7'>Our mission is to empower students to balance academic pressures with inner peace, fostering essential qualities such as leadership, emotional intelligence, and resilience.</p>
      </div>
    </section>
  )
}

export default About