import { Button } from "./ui/button"

const AboutSection = () => {
  return (
    <main className="container mx-auto py-4 sm:py-10 bg-blue-50">
      <p className="text-center font-semibold text-3xl mb-12">Contact<span className="text-blue-600 pl-2">US</span></p>
      <div className="flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-40 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-square rounded-xl border p-6 overflow-hidden shadow-xl">
              <img src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-cheerful-people-singing-png-image_13083494.png" alt="Group yoga class" className="w-full h-full object-cover rounded-xl" />
          </div>
        <div className="w-full font-medium">
          <p className="mb-5">The Spiritual Research Cell (SRC) at Jaipur Engineering College and Research Centre (JECRC) promotes spiritual awareness, mental well-being, and personal growth.</p>
          <p className="mb-5">By combining academic learning with spiritual development, SRC offers activities like meditation, yoga workshops, motivational talks, and discussions on self-awareness, stress management, and life goals.</p>
          <p className="mb-5">Our aim is to help students balance academic pressures with inner peace, fostering leadership, emotional intelligence, and resilience.</p>
          <p className="mb-7">Join us on a journey of holistic development, where intellectual growth meets spiritual enlightenment.</p>
          <Button className="px-8">About US</Button>
        </div>
      </div>
    </main>
  )
}

export default AboutSection