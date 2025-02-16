import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Activity_SRC = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
        <Navbar />
        <div className='min-h-[90vh]'>
            <div className='w-full h-52 bg-zinc-300'></div>
            <div className='w-full relative top-[-3rem] rounded-t-[3rem] bg-white'>
                <div className='w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3'>
                    <div className='w-20 aspect-square rounded-full border bg-white'></div>
                    <p className='text-xl font-semibold'> The Spiritual Research Cell (SRC)</p>    
                </div>
                <div className='w-full px-8 mt-[-1rem] mb-6'>
                    <p className='text-left'>
                    The Spiritual Research Cell (SRC), established in 2016, is an initiative dedicated to enhancing student development by offering a space for meditation and self-reflection after academic classes. Through meditation sessions, students are encouraged to connect with their inner selves, reduce stress, and improve focus, fostering emotional well-being and a balanced mindset. SRC also provides access to a collection of motivational books, inspiring students to cultivate a positive attitude, personal growth, and continuous learning. By nurturing both the mind and soul, SRC aims to create a more opportunitic educational experience that empowers students to succeed academically and personally.
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

export default Activity_SRC