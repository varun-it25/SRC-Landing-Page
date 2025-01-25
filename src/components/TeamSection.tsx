import { memberData } from "@/data/members"

const TeamSection = () => {
  return (
    <section className="pt-12 pb-12 sm:pb-20 bg-blue-50">
        <p className='text-3xl mb-6 sm:mb-12 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>Our <span className='font text-blue-600'>Team</span></p>
        <div className="w-full px-8 sm:px-28 grid grid-cols-1 sm:grid-cols-4 gap-0 sm:gap-12">
            {
                memberData.map(({memberId, name, desination, image }) => {
                    return (
                        <div key={memberId} className="w-full mb-10 h-full flex flex-col justify-center items-center">
                            <img className="w-full rounded-lg aspect-square" src={image} />
                            <div className="px-4 py-2 bg-white rounded mt-[-4.1rem] w-11/12">
                                <p className="font-medium text-sm">{name}</p>
                                <p className="font-medium text-zinc-500 text-sm">{desination}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default TeamSection