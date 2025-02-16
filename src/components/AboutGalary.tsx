const AboutGalary = () => {
  return (
    <section className='flex-col bg-blue-50 h-fit sm:h-[90vh] justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 py-7 sm:py-12'>
      <div className="grid md:grid-cols-3">
        {/* Learning Centre */}
        <div className="bg-orange-400 p-6 text-center">
          <h2 className="text-2xl font-semibold">Learning Centre</h2>
          <br/>
          <p>
            ‘Training Centre’ comprises of 2 board rooms, 5 training halls of 150 seating
            capacity & a mini auditorium of 450 seating capacity.
          </p>
        </div>

        {/* Image */}
        <div>
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Learning Centre" className="w-full h-56 object-cover" />
        </div>

         {/* Meditation */}
        <div className="bg-teal-400 p-6 text-center">
          <h2 className="text-2xl font-semibold">Meditation</h2>
          <br/>
          <p>
            A large meditation room and a pyramid are located at the campus for experiencing
            deep meditation experience and inner silence.
          </p>
        </div>

        {/* Meditation Image */}
        <div>
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Meditation" className="w-full h-56 object-cover" />
        </div>

        {/* Other Facilities */}
        <div className="bg-cyan-400 p-6 text-center">
          <h2 className="text-2xl font-semibold">Other Facilities</h2>
          <br/>
          <p>
            ‘Training Centre’ comprises of 2 board rooms, 5 training halls of 150 seating.
          </p>
        </div>

        {/* Facilities Image */}
        <div>
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Other Facilities" className="w-full h-56 object-cover" />
        </div>
      </div>
    </section>
    
  )
}

export default AboutGalary

