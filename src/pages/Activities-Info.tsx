import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Activities_Info = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
        <Navbar />
        <div className='min-h-[90vh]'>
            <div className='w-full h-52 bg-zinc-300'></div>
            <div className='w-full relative top-[-3rem] rounded-t-[3rem] bg-white'>
                <div className='w-full flex justify-center items-center relative top-[-2rem] flex-col space-y-3'>
                    <div className='w-20 aspect-square rounded-full border bg-white'></div>
                    <p className='text-xl font-semibold'>FDP</p>    
                </div>
                <div className='w-full px-8 mt-[-1rem] mb-6'>
                    <p className='text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam mollitia nesciunt id excepturi, odit magni repellat. Id consectetur nulla ab perspiciatis atque labore veritatis dolorem delectus, minus nemo ducimus recusandae ut! Quasi ad officiis a et commodi, esse aliquam possimus ab architecto iusto necessitatibus fugit distinctio odit blanditiis sequi voluptatibus tempora quo dolorum aperiam. Recusandae pariatur unde suscipit. Porro, sunt ea, laudantium quo earum quas ab sint ad deserunt commodi aliquid blanditiis ullam, culpa eligendi nemo eaque. Dolores fuga aliquam est provident! Sequi accusamus incidunt quisquam voluptatum temporibus excepturi tenetur laboriosam, et illum quo obcaecati, fuga nobis quod sit saepe eius est a numquam, provident rerum ducimus officia consequuntur culpa aspernatur. Deleniti quaerat quae soluta sed? Qui quae corporis, fugiat aliquam non veritatis facilis tempora voluptates natus. Voluptatem harum recusandae iste sapiente ullam quae aliquam, vero explicabo numquam vitae a perferendis dolores ut esse laboriosam dicta natus. Quo, asperiores quam.</p>
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

export default Activities_Info