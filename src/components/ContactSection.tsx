import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Youtube, Instagram, Linkedin, Mail, MapPin, Phone, SendHorizonal } from "lucide-react"
import { Textarea } from "./ui/textarea"

const AboutSection = () => {
  return (
    <section className="pt-10 h-fit sm:h-[90vh] sm:pt-20 pb-8 sm:pb-12">
        <div className="w-full px-4 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-12">

          <div className="w-full border relative flex flex-col justify-between items-center bg-blue-600 rounded-lg">
            <div className="text-white text-lg p-6 sm:p-8 w-full">
              <p className="text-[1.7rem] sm:text-3xl font-semibold pb-12 whitespace-nowrap">Contact Information</p>
              
              <div className="flex space-x-3 items-center pb-6">
                <Phone size={20} />
                <p>+91 9982682431</p>
              </div>
              <div className="flex space-x-4 items-center pb-6">
                <Mail size={20} />
                <p>src@jecrc.ac.in</p>
              </div>
              <div className="flex space-x-4 items-center pb-5">
                <MapPin size={20} />
                <p>Jaipur Engineering College and Research Centre, Jaipur</p>
              </div>
            </div>

            <div className="px-6 pb-6 flex items-center w-full space-x-4">
              
              <a href= "https://www.instagram.com/spiritual_research_cell?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 cursor-pointer">
                <Instagram size={20} />
              </div>
              </a>

              <a href="https://youtube.com/@spiritualresearchcelljecrc?si=pEAX_OMQrxd6u7wO">
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 cursor-pointer">
                <Youtube size={18} />
              </div>
              </a>

              <a href="https://www.linkedin.com/in/spiritual-research-cell-jecrc/">
              <div className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 cursor-pointer">
                <Linkedin size={18} />
              </div>
              </a>

            </div>
          </div>
          <div className="w-full px-2 sm:px-0 pt-8 sm:pt-5 py-2">
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
            <Button className="bg-red-600"><SendHorizonal /> Send Message</Button>
          </div>

        </div>
    </section>
  )
}

export default AboutSection