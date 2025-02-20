import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Youtube, Instagram, Linkedin, Mail, MapPin, Phone, SendHorizonal } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"

const AboutSection = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isEmpty, setEmpty] = useState<boolean>(true)

  useEffect(() => {
    function check() {
      const res: boolean = (name.trim() !== "") && (email.trim() !== "") && (message.trim() !== "")
      setEmpty(!res)
    }
    check()
  }, [name, email, message])

  function submitHandler(e: React.FormEvent){
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  function reDirect(url: string) {
    window.open(url, "_blank")
  }

  return (
    <section className="pt-10 h-fit sm:h-[90vh] sm:pt-20 pb-8 sm:pb-12">
      <div className="w-full px-4 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-12">

        <div className="w-full border relative flex flex-col justify-between items-center bg-blue-600 rounded-xl">
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
              <p className="text-base">JECRC Foundation, Jaipur</p>
            </div>
          </div>

          <div className="px-6 pb-6 flex items-center w-full space-x-4">
            <button className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500" onClick={() => reDirect("https://www.instagram.com/spiritual_research_cell/")}>
              <Instagram size={20} />
            </button>

            <button className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500" onClick={() => reDirect("https://www.youtube.com/@spiritualresearchcelljecrc")}>
              <Youtube size={20} />
            </button>

            <button className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500" onClick={() => reDirect("https://www.linkedin.com/in/spiritual-research-cell-jecrc/")}>
              <Linkedin size={20} />
            </button>

            <button className="w-[2.4rem] shadow-md h-[2.4rem] flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500" onClick={() => reDirect("https://www.google.com/maps/place/JECRC+Foundation/@26.7819785,75.8199375,623m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396dc9763e6030f1:0x4137675e5cf54360!8m2!3d26.7819785!4d75.8225124!16s%2Fg%2F1tf7w3jk?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D")}>
              <MapPin size={20} />
            </button>

          </div>
        </div>

        <form className="w-full py-[4px] rounded-xl" onSubmit={submitHandler}>
          <p className="font-semibold text-xl mb-4">Write your query :</p>
          <div className="space-y-2 mb-4">
            <p className="font-semibold text-zinc-600 text-xs">Name</p>
            <Input value={name} placeholder="Your name here" type={`text`} onChange={e => setName(e.target.value)} />
          </div>
          <div className="space-y-2 mb-4">
            <p className="font-semibold text-zinc-600 text-xs">Email</p>
            <Input value={email} placeholder="Your email here" type="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2 mb-4">
            <p className="font-semibold text-zinc-600 text-xs">Message</p>
            <Textarea value={message} rows={4} placeholder="Your message here" onChange={e => setMessage(e.target.value)} />
          </div>
          <Button className="bg-zinc-800" disabled={isEmpty} type="submit"><SendHorizonal /> Send Message</Button>
        </form>

      </div>
    </section>
  )
}

export default AboutSection;