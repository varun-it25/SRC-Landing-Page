import { Button } from "./ui/button"
import { LucideArrowRight } from "lucide-react"

const EventSection = () => {
  return (
    <section className="pt-10 sm:pt-12 pb-8 sm:pb-20">
        <p className='text-3xl mb-10 sm:mb-14 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>SRC <span className='font text-blue-600'>Events</span></p>
        <div className="w-full px-8 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-12">
            <div className="w-full relative mb-8 sm:mb-0">
                <img className="w-full rounded-lg aspect-video object-cover border" src={`https://img.freepik.com/premium-photo/man-lotus-pose-which-is-posture-often-associated-with-spiritual-practices-meditation-he-is-kneeling-down-appears-be-state-meditation-deep-contemplation_251319-1078.jpg`} />
                <div className="px-6 text-white py-2 bg-opacity-50 rounded-b-lg absolute bg-black bottom-0 w-full flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm">{`Moon Meditaions`}</p>
                    </div>
                    <Button variant={`outline`} size={`sm`} className="text-black">Register <LucideArrowRight /></Button>
                </div>
            </div>
            <div className="w-full relative mb-8 sm:mb-0">
                <img className="w-full rounded-lg aspect-square object-cover border" src={`https://img.freepik.com/premium-photo/man-lotus-pose-which-is-posture-often-associated-with-spiritual-practices-meditation-he-is-kneeling-down-appears-be-state-meditation-deep-contemplation_251319-1078.jpg`} />
                <div className="px-6 text-white py-2 bg-opacity-50 rounded-b-lg absolute bg-black bottom-0 w-full flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm">{`Moon Meditaions`}</p>
                    </div>
                    <Button variant={`outline`} size={`sm`} className="text-black">Register <LucideArrowRight /></Button>
                </div>
            </div>
            <div className="w-full relative mb-8 sm:mb-0">
                <img className="w-full rounded-lg aspect-video object-cover border" src={`https://img.freepik.com/premium-photo/man-lotus-pose-which-is-posture-often-associated-with-spiritual-practices-meditation-he-is-kneeling-down-appears-be-state-meditation-deep-contemplation_251319-1078.jpg`} />
                <div className="px-6 text-white py-2 bg-opacity-50 rounded-b-lg absolute bg-black bottom-0 w-full flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm">{`Moon Meditaions`}</p>
                    </div>
                    <Button variant={`outline`} size={`sm`} className="text-black">Register <LucideArrowRight /></Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EventSection