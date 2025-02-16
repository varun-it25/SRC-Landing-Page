import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Activity_FDP = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
        <Navbar />
        <div className='min-h-[90vh]'>
            <div className='w-full h-52 bg-zinc-300'></div>
            <div className='w-full relative top-[-3rem] rounded-t-[3rem] bg-white'>
                <div className='w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3'>
                    <div className='w-20 aspect-square rounded-full border bg-white'></div>
                    <p className='text-xl font-semibold'>The Faculty Development Program (FDP)</p>    
                </div>
                <div className='w-full px-8 mt-[-1rem] mb-6'>
                    <p className='text-left'>
                    The Faculty Development Program (FDP) is an initiative designed to enhance the professional and personal growth of faculty members by balancing their emotional intelligence with engaging activities while expanding their knowledge across various fields. By integrating interactive sessions, fun exercises, and knowledge-sharing opportunities, FDP provides a positive learning environment that strengthens teaching methodologies, leadership skills, and overall well-being. This program not only helps educators refine their expertise but also empowers them to create a more dynamic and student-centric approach to education. Through continuous learning FDP aims to elevate the academic experience for both faculty and students alike.
                    </p>
                </div>
                <p className='text-2xl font-semibold px-8 mb-4'>Snap Shot</p>
                <div className='grid px-8 grid-cols-1 sm:grid-cols-3 w-full gap-8'>
                    <div className='w-full aspect-video rounded-xl border bg-zinc-300'></div>
                    <div className='w-full aspect-video rounded-xl border bg-zinc-300'></div>
                    <div className='w-full aspect-video rounded-xl border bg-zinc-300'></div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Activity_FDP