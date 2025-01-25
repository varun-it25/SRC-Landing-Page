import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, SendHorizonal } from "lucide-react"
import { Textarea } from "./ui/textarea"

const AboutSection = () => {
  return (
    <section className="pt-10 sm:pt-12 pb-8 sm:pb-20">
        <p className='text-3xl mb-10 sm:mb-14 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-blue-600 text-center'>Contact <span className='font text-zinc-600'>Us</span></p>
        <div className="w-full px-4 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-12">

          <div className="w-full border relative flex flex-col justify-between items-center bg-red-600 rounded-lg">
            <div className="text-white text-lg p-8 w-full">
              <p className="text-[1.7rem] sm:text-3xl font-semibold pb-12 whitespace-nowrap">Contact Information</p>
              
              <div className="flex space-x-3 items-center pb-6">
                <Phone size={20} />
                <p>+91 9257307752</p>
              </div>
              <div className="flex space-x-4 items-center pb-6">
                <Mail size={20} />
                <p>src@jecrc.ac.in</p>
              </div>
              <div className="flex space-x-4 items-center pb-5">
                <MapPin size={20} />
                <p>Near Bh-1, JECRC</p>
              </div>
            </div>

            <div className="px-6 pb-6 flex items-center w-full space-x-4">
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-red-500 hover:bg-white text-white hover:text-red-500 cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-red-500 hover:bg-white text-white hover:text-red-500 cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-red-500 hover:bg-white text-white hover:text-red-500 cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          <div className="w-full px-2 sm:px-0 pt-8 sm:pt-0 py-2">
            <p className="mb-4 font-semibold text-xl">Any Query? Write your message here!</p>
            <div className="space-y-2 mb-4">
              <p className="font-semibold text-zinc-600 text-xs">Name</p>
              <Input placeholder="Write your name here" />
            </div>
            <div className="space-y-2 mb-4">
              <p className="font-semibold text-zinc-600 text-xs">Email</p>
              <Input placeholder="Write your email here" />
            </div>
            <div className="space-y-2 mb-5">
              <p className="font-semibold text-zinc-600 text-xs">Message</p>
              <Textarea rows={4} placeholder="Write your message here" />
            </div>
            <Button className="bg-blue-600"><SendHorizonal /> Send Message</Button>
          </div>
        </div>
    </section>
  )
}

export default AboutSection