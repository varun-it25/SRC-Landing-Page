import mukesh_sir from "@/assets/mukesh_sir.png"
import arpit_sir from "@/assets/arpit_sir.png"
import chitra_mam from "@/assets/chitra_mam.png"

const TeamSection = () => {
  return (
    <section className="pt-12 pb-12 min-h-[90vh] sm:pb-20 bg-blue-50">
        <p className='text-3xl mb-20 sm:mb-[3.5rem] whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>Our <span className='font text-blue-600'>Leaders</span></p>
        <div className="w-full px-8 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">

            <div className="border w-full h-80 rounded-tl-[3rem] rounded rounded-br-3xl bg-yellow-300 flex flex-col justify-end">
                <div className="relative">
                    <img src={arpit_sir} className="w-52 object-cover ml-4" />
                    <div className="flex px-6 bg-black bg-opacity-20 py-3 rounded-bl rounded-tr absolute bottom-0 flex-col text-white">
                        <p className="text-xl font-semibold">Shri Arpit Agarwal</p>
                        <p className="text-sm">Director, JECRC</p>
                    </div>
                </div>
            </div>

            <div className="border w-full h-80 rounded-tl-[3rem] rounded rounded-br-3xl bg-violet-300 flex flex-col justify-end">
                <div className="relative">
                    <img src={mukesh_sir} className="w-[15rem] object-cover ml-8 mt-4" />
                    <div className="flex px-6 bg-black bg-opacity-20 py-3 rounded-bl rounded-tr absolute bottom-0 flex-col text-white">
                        <p className="text-xl font-semibold">Prof. Mukesh Agarwal</p>
                        <p className="text-sm">Head, SRC</p>
                    </div>
                </div>
            </div>

            <div className="border w-full h-80 rounded-tl-[3rem] rounded rounded-br-3xl bg-red-300 flex flex-col justify-end">
                <div className="relative">
                    <img src={chitra_mam} className="w-[17rem] object-cover ml-4" />
                    <div className="flex px-6 bg-black bg-opacity-20 py-3 rounded-bl rounded-tr absolute bottom-0 flex-col text-white">
                        <p className="text-xl font-semibold">Miss Chitra Khandelwal</p>
                        <p className="text-sm">Counsellor, SRC</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default TeamSection